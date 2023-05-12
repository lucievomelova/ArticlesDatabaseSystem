const officesDB = new PouchDB("http://localhost:5984/offices/");


officesDB.bulkDocs(offices).then(result => {
    console.log("offices");
}).catch(error => {
    console.error(error);
});