const peopleDB = new PouchDB("http://localhost:5984/people/");


peopleDB.bulkDocs(people).then(result => {
    console.log("people");
}).catch(error => {
    console.error(error);
});