# BitFaucet

Bitfaucet is a service which provides testnet coins for testing/development purposes.


## Installation

Install node.js on your computer.
You can install it from [nodejs.org/download](http://nodejs.org/download)

Install mongodb on your computer.
You can install it from [mongodb.org/downloads](https://www.mongodb.org/downloads)

Make sure both are running.

You can install dependencies with the command:
'npm install'

## Cloning
You can clone the repository from GitHub as well. Once you find the repository
run the command:
'git clone https://github.com/FabricLabs/faucet.git'


## Setup Local Bitcoin Node
[Follow the steps here](https://github.com/FabricLabs/fabric/blob/master/QUICKSTART.md#setup-local-bitcoin-node) to run a local bitcoin node and client 

## Run the app
1. Open your terminal and find the directory where this faucet was cloned.
2. Run the command:
    -`npm run debug` # to run a live copy
    or 
    -`npm run build` # to build a to the assets directory and
    -`serve -s build` # to run the build
3. Navigate to `localhost:3000` to view the faucet
