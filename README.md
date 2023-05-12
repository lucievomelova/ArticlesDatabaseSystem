# Articles Database System

## Installation

### On Windows:
- install wsl
- run `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`
- ensure that file `~/.bashsrc` contains the following at the bottom:
```sh
export NVM_DIR="/home/yourusername/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
- install node:  `nvm install node`
- -install `pouchdb` using `npm`:
```sh
npm install pouchdb
npm install -g pouchdb-server
npm install pouchdb-find
```

## Usage
1. Start `pouchdb` server:
```
pouchdb-server start
```

2. Open index page of **Articles Database System**

3. Navigate through the app using links

### PouchDB inspection
1. Open http://localhost:5984/_utils/#/_all_dbs
2. There you can inspect used databases
*Note that some databases might not be created yet if you didn't use them in the provided application*
