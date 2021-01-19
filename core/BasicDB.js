const CONNECTOR = require('../core/DBConnector');

var promise = new Promise(function(resolve, reject) {
    CONNECTOR.then(function (connector) {
        var testDB = connector.db('test');
        resolve(testDB);
        // connector.close();
    });
});

module.exports = promise;

