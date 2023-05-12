# Articles Database System

## Installation

### On Windows:
- install wsl
- now run the followin commands in wsl:
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
- clone this repository
- start `pouchdb` server:
```
pouchdb-server start
```

- open index page of **Articles Database System**
- navigate through the app using links

### PouchDB inspection
- open http://localhost:5984/_utils/#/_all_dbs
- there you can inspect used databases
*Note that some databases might not be created yet if you didn't use them in the provided application*
