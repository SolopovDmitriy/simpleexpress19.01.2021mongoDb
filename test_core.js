
const DB = require('./core/BasicDB');

DB.then(function (db) {
    var Teachers = db.collection('teachers');
    Teachers.find({}).toArray(function (err, result) {
        if(err) throw err;
        result.forEach(x => console.log(x.name + " " + x.age));
    });
})








// const CONNECTOR = require('./core/DBConnector');
//
// CONNECTOR.then(function (connector) {
//     var testDB = connector.db('test');
//     var Teachers = testDB.collection('teachers');
//     Teachers.find({}).toArray(function (err, result) {
//         if(err) throw err;
//         result.forEach(x => console.log(x.name + " " + x.age));
//         connector.close();
//     });
// });

// CONNECTOR.then(
//     connector => console.log(connector),
//     error => console.log(error)
// );