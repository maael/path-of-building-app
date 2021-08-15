import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import rawData from './data/data.json';
import rawMeta from './data/meta.json';
import {PathOfBuilding, Meta} from './types';

const data = rawData as unknown as PathOfBuilding;
const meta = rawMeta as unknown as Meta;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{meta.version}</Text>
      {data.classes.map((c) => (
        <View style={{margin: 5, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Text key={c.name} style={{fontWeight: 'bold'}}>{c.name}</Text>
          {c.ascendancies.map((a) => (
            <Text key={a.id}>{a.name}</Text>
          ))}
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
