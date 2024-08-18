#!/bin/bash
cd ../
node stream/fake-upload-to-http-csv.js
if [ $? -ne 0 ]; then
  echo "Erro ao executar o script Node.js!"
  exit 1
fi

echo "Done"