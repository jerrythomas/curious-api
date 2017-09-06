#!/bin/bash
# set -e

#sudo apt-get update -qq
#sudo apt-get install -qq libaio1
echo "Setting up oracle instant client and sdk"
curl https://raw.githubusercontent.com/CollinEstes/docker-node-oracle/master/oracle/linux/instantclient-basic-linux.x64-12.1.0.2.0.zip | python -c "import zipfile,sys,StringIO;zipfile.ZipFile(StringIO.StringIO(sys.stdin.read())).extractall(sys.argv[1] if len(sys.argv) == 2 else '.')" ./
curl https://raw.githubusercontent.com/CollinEstes/docker-node-oracle/master/oracle/linux/instantclient-sdk-linux.x64-12.1.0.2.0.zip | python -c "import zipfile,sys,StringIO;zipfile.ZipFile(StringIO.StringIO(sys.stdin.read())).extractall(sys.argv[1] if len(sys.argv) == 2 else '.')" ./

# Workaround the env problem.
sudo mkdir -p /opt/oracle
sudo ln -s instantclient_12_1 /opt/oracle/instantclient
pushd .
cd instantclient_12_1
for file in *.so.*; do
    ln -s $file ${file/.so.*/.so};
done

export OCI_HOME=`pwd`
export OCI_LIB_DIR=$OCI_HOME
export OCI_INCLUDE_DIR=$OCI_HOME/sdk/include
export OCI_VERSION=12 # Integer. Optional, defaults to '11'
export NLS_LANG=.UTF8 # Optional, but required to support international characters
export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:$OCI_LIB_DIR"

popd

echo "OCI home is : $OCI_HOME"