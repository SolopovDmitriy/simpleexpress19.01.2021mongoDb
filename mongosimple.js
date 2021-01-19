const connectionString = "mongodb://admin:passw0rd@localhost:27017";

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const colors = require('colors');

MongoClient.connect(connectionString,
        {useUnifiedTopology:true},
        function (err, connector) {
                    // console.log(typeof err); // object
                    // console.log("err = " + err);
                    // if(err!=null){
                    //     console.log(err);
                    // }

                    if(err) throw err;
                    console.log(colors.green("Connection created"));


                    var testDB = connector.db('test');
                    // testDB.createCollection('products', function (err, result) {
                    //     if(err) throw err;
                    //     console.dir(result);
                    //     connector.close();
                    // });

                    // testDB.createCollection('teachers', function (err, result) {
                    //     if(err) throw err;
                    //     console.dir(result);
                    //     console.log(result.s.topology._eventsCount); // 35
                    //     console.log(typeof result.s.topology);
                    //     connector.close();
                    // });


                    // testDB.listCollections().toArray(function (err, arr) {
                    //     if(err) throw err;
                    //     // console.log(arr);
                    //     arr.forEach(x => console.log(x.name));
                    //     // arr.forEach(function (x) {
                    //     //     console.log(x.name);
                    //     // })
                    //    connector.close();
                    // })

                    /*testDB.collection('products').rename('orders', function (err, result) {
                        if(result){
                            console.log(colors.blue('Коллекция переименована'));
                        }
                        connector.close();
                    })*/


                   //  testDB.collection('test_teachers').rename('teachers',
                   //      function (err, result) {
                   //          if(err) throw err;
                   //          if(result){
                   //             console.log(colors.blue('Коллекция переименована'));
                   //          }
                   //          connector.close();
                   // })

                    // Teachers = testDB.collection('teachers');
                    //
                    // var teacher1 = {
                    //     name : "Anna",
                    //     age : 25
                    // }

                    // Teachers.insertOne(teacher1, function (err, result) {
                    //     connector.close();
                    // });

                     // Teachers.insertOne(teacher1,  (err, result) => connector.close());

                        // // find All teachers
                        // Teachers.find({}).toArray(function (err, result) {
                        //     if(err) throw err;
                        //     result.forEach(x => console.log(x.name + " " + x.age));
                        //     connector.close();
                        // });

                        // find teachers by name
                        // Teachers.find({name:"Anna"}).toArray(function (err, result) {
                        //     if(err) throw err;
                        //     result.forEach(x => console.log(x.name + " " + x.age));
                        //     connector.close();
                        // });


                        // // find teachers by name
                        // Teachers.findOne({name:"Anna"}, function (err, result) {
                        //     if(err) throw err;
                        //     console.log(result.name + " " + result.age);
                        //     connector.close();
                        // });


                    // // find one teacher by name
                    // Teachers.findOne({name:"Anna"},  (err, result) => {
                    //     console.log(result.name + " " + result.age);
                    //     connector.close();
                    // });


                    // // find teachers by age
                    // Teachers.find({age:40}).toArray(function (err, result) {
                    //     if(err) throw err;
                    //     result.forEach(x => console.log(x.name + " " + x.age));
                    //     connector.close();
                    // });


                    // find teachers by age and name
                    // Teachers.find({age:40, name: "Alex"}).toArray(function (err, result) {
                    //     if(err) throw err;
                    //     result.forEach(x => console.log(x.name + " " + x.age));
                    //     connector.close();
                    // });

                    //js: -1, in Sql: DESC -- по убыванию
                    //js: 1,  in Sql: ASC -- по возрастанию
                    /* var nameSort = {name: -1};
                     Peoples.find({}).sort(nameSort).toArray(function (err, result) {
                         if(err) throw err;
                         console.log(result);
                         connector.close();
                     });*/


                        // // find and sort All teachers by name
                        // Teachers.find({}).sort({name:1}).toArray(function (err, result) {
                        //     if(err) throw err;
                        //     result.forEach(x => console.log(x.name + " " + x.age));
                        //     connector.close();
                        // });


                    // find and sort All teachers by name and age
                    // Teachers.find({}).sort({name:1, age:-1}).toArray(function (err, result) {
                    //     if(err) throw err;
                    //     result.forEach(x => console.log(x.name + " " + x.age));
                    //     connector.close();
                    // });



                        // // delete one teacher by name
                        // Teachers.deleteOne({name:"Anna"},  (err, result) => {
                        //     console.log(result);
                        //     connector.close();
                        // });



                    // // delete many teacher by name
                    // Teachers.deleteMany({name:"Anna"},  (err, result) => {
                    //     console.log(result);
                    //     connector.close();
                    // });









                    /*testDB.collection('orders').drop(function (err, result) {
                        if(err) throw err;
                        console.log(colors.blue('Коллекция удалена'));
                        connector.close();
                    });*/


                   //  testDB.collection('teachers2').drop(function (err, result) {
                   //     if(err) throw err;
                   //     console.log(colors.blue('Коллекция удалена'));
                   //     connector.close();
                   // });


                    /*var Peoples = testDB.createCollection('peoples', function (err, result) {
                        var vasjaP = {
                            name:'Вася',
                            email:'vasja@com.u',
                            password:'123455'
                        }
                        Peoples = testDB.collection('peoples');
                        Peoples.insertOne(vasjaP, function (err, result) {
                            if(err) throw err;
                            if(result) console.log(colors.red("Вася добавлен"));
                            connector.close();
                        });
                    });*/
            // var Peoples = testDB.collection('peoples');
            /*Peoples.insertOne({
                name:'Дункан МакКлауд'
            }, function (err, result) {
                if(err) throw err;
                if(result) console.log(colors.red("Вася добавлен"));
                connector.close();
            });*/
            /*Peoples.find({}).toArray(function (err, result) {
                if(err) throw err;
                console.dir(result);
                connector.close();
            });*/

            /*Peoples.find({name:'Дункан МакКлауд'}).toArray(function (err, result) {
                if(err) throw err;
                console.log(result);
                connector.close();
            });*/
            /*Peoples.findOne({name:'Дункан МакКлауд'}, function (err, result) {
                if(err) throw err;
                console.log(result);
                connector.close();
            });*/
            //-1 DESC
            //1 ASC
           /* var nameSort = {name: -1};
            Peoples.find({}).sort(nameSort).toArray(function (err, result) {
                if(err) throw err;
                console.log(result);
                connector.close();
            });*/

            /*Peoples.deleteOne({name:'Дункан МакКлауд'}, function (err, result) {
                if(err) throw err;
                if(result.deletedCount == 1){
                    console.log(colors.red('Дункан МакКлауд мертв'))
                }
                connector.close();
            });*/

            // var _idDunkan = '6005d669d55e5c206cb56e69';
            //
            // var queryWhat = {_id:ObjectId(_idDunkan)};

            /*Peoples.updateOne(queryWhat, {
                $set:{
                    name:"Дункан МакКлауд мл",
                    age:1500,
                    gender:'male'
                }
            }, function (err, result) {
                if(err) throw err;
                console.log("Строка была обновлена");

                connector.close();
            });*/

            // Peoples.findOne(queryWhat, function (err, result) {
            //     if(err) throw err;
            //     console.log(result);
            //     connector.close();
            // });
});