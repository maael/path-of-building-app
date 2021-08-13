#!/bin/bash
BASEDIR=$(dirname "$0")
echo "Running: $BASEDIR/$1/index.ts"
ts-node "$BASEDIR/$1/index.ts" ${@:2}
