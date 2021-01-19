'user strict';

const CONFIG = require('../config');
const MongoClient = require('mongodb').MongoClient;


// const connectionString = "mongodb://admin:passw0rd@localhost:27017";
const connectionString = `mongodb://${CONFIG.DB.LOGIN}:${CONFIG.DB.PASSWORD}@${CONFIG.DB.HOST}:${CONFIG.DB.PORT}`;

var promise = new Promise(function(resolve, reject) {
    MongoClient.connect(connectionString,
        {useUnifiedTopology:true},
        function (err, connector) {
            if(err) throw err;
            resolve(connector);
        });
});

module.exports = promise;





//
//const connectionString  = "mongodb://" + CONFIG.DB.LOGIN + ":" + CONFIG.DB.PASSWORD +
//     "@" + CONFIG.DB.HOST + ":" + CONFIG.DB.PORT;
















// var a = "ok";
// var x = "hello";
//
//
// module.exports = [a, x];
//
//
//
// function f(z) {
//     console.log(z);
// }
//
// var b1 = 10;
//
// f(b1);