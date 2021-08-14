import {join} from 'path';
import {promises as fs} from 'fs';
import {exec} from 'child_process';
import fetch from 'isomorphic-fetch';
import eq from 'fast-deep-equal';

(async () => {
  console.info("🕛\t[get-pob-data][start]");
  console.info("1️⃣\t[get-pob-data][Get data]");
  await getData();
  console.info("2️⃣\t[get-pob-data][Generate json]");
  await luaToJson();
})();

function getUrl (obj: {tree: {path: string; url: string; type: 'tree' | 'blob'}[]}, path: string, type: 'tree' | 'blob') {
  const treeItem = obj.tree.find(({path: p, type: t}) => p === path && t === type);
  return treeItem!.url;
}

function cmpVersions (a: string, b: string) {
  let diff;
  const regExStrip0 = /(\.0+)+$/;
  const segmentsA = a.replace(regExStrip0, '').split('.');
  const segmentsB = b.replace(regExStrip0, '').split('.');
  const l = Math.min(segmentsA.length, segmentsB.length);
  for (let i = 0; i < l; i++) {
    diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
    if (diff) {
      return diff;
    }
  }
  return segmentsA.length - segmentsB.length;
}

async function getData () {
  const headers = {'Accept': 'application/vnd.github.v3+json'}
  const repo = await (await fetch('https://api.github.com/repos/PathOfBuildingCommunity/PathOfBuilding/branches/master', {headers})).json();
  const root = await (await fetch(`https://api.github.com/repos/PathOfBuildingCommunity/PathOfBuilding/git/trees/${repo.commit.sha}`, {headers})).json();
  const src = await (await fetch(getUrl(root, 'src', 'tree'), {headers})).json();
  const treeData = await (await fetch(getUrl(src, 'TreeData', 'tree'), {headers})).json();
  const version = treeData.tree.filter(({type}: any) => type === 'tree').map(({path}: any) => path.replace('_', '.')).filter((i: string) => !isNaN(Number(i))).sort(cmpVersions).reverse()[0].replace('.', '_');
  const versionDir = await (await fetch(getUrl(treeData, version, 'tree'), {headers})).json();
  const {content} = await (await fetch(getUrl(versionDir, 'tree.lua', 'blob'), {headers})).json();
  const data = Buffer.from(content, 'base64').toString();
  await fs.writeFile(join(__dirname, 'data.lua'), data);
  await fs.writeFile(join(__dirname, '..', '..', 'data', 'meta.json'), JSON.stringify({version: version.replace('_', '.'), runAt: (new Date()).toISOString()}));
}

async function luaToJson () {
  return new Promise<void>((resolve, reject) => {
    const oldPath = join(__dirname, '..', '..', 'data', 'data.json');
    const newPath = join(__dirname, '..', '..', 'data', 'new-data.json');
    exec(`lua ${join(__dirname, 'script.lua')} > ${newPath}`, async (err) => {
      if (err) {
        console.error('🚨\t[get-pob-data][error]', err);
        reject(err);
        return;
      }
      try {
        const oldData = JSON.parse(await fs.readFile(oldPath, 'utf-8'));
        const newData = JSON.parse(await fs.readFile(newPath, 'utf-8'));
        if (!eq(oldData, newData)) {
          await fs.rename(newData, oldData);
        }
      } finally {
        try {
          await fs.unlink(newPath);
        } catch {/* Do nothing */}
      }
      console.info('✅\t[get-pob-data][end]');
      resolve();
    });
  })
}
