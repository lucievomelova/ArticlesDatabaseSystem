const commentsDB = new PouchDB("http://localhost:5984/comments/");


commentsDB.bulkDocs(comments).then(result => {
    console.log("comments");
}).catch(error => {
    console.error(error);
});