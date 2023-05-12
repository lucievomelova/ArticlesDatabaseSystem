const articleDB = new PouchDB("http://localhost:5984/articles/");


articleDB.bulkDocs(articles).then(result => {
    console.log("articles");
}).catch(error => {
    console.error(error);
});