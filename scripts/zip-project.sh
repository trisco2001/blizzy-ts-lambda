#!/bin/bash
mkdir -p build

rm -f ./build/output.zip
cd dist
zip -r ../build/output.zip .
