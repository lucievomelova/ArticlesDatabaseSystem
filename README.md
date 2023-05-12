# Articles Database System
Simple database system for Articles using PouchDB. Handles Articles, Comments, People (Authors and Readers) and Branch Offices.

## Contents
`\pouchDbArticles` contains a simple app using this database system. There are also diagrams and a presentation about how the system works.

## Installation
- clone this repository (or download the contents)


### On Windows:
- install wsl
- locate this repository in wsl 
- now run the following commands in wsl:
- run `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`
- ensure that file `~/.bashsrc` contains the following at the bottom:
```sh
export NVM_DIR="/home/yourusername/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
- install node:  `nvm install node`
- restart wsl and again locate this repository in wsl
- 
- -install `pouchdb` using `npm`:
```sh
npm install pouchdb --save
npm install -g pouchdb-server
npm install pouchdb-find
```

### On Linux:
```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
nvm install node
npm install pouchdb --save
npm install -g pouchdb-server
npm install pouchdb-find
```

## Usage
- start `pouchdb` server:
```
pouchdb-server start
```

- open index page of **Articles Database System** *(pouchDbArticles/index.html)*
- navigate through the app using links

### PouchDB inspection
- open http://localhost:5984/_utils/#/_all_dbs
- there you can inspect used databases
(*Note that some databases might not be created yet if you didn't use them in the provided application*)
