const express = require('express');
const db = require('./models');


const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send("everything is good");
});




app.get('/cars', function (req, res) {
    db.cars.findAll().then(function (cars) {
        res.json(cars);
    });

});



app.get('/cars/:id', function (req, res) {
    db.cars.findOne({
        where: { id: parseInt(req.params.id) }
    }).then(function (car) {
        res.json(car);
    })
})

app.post('/cars', function (req, res) {
    db.cars.create({
        make: req.body.make,
        model: req.body.model,
        year: parseInt(req.body.year),
        type: req.body.type
    }).then(function (data) {
        console.log(data);
        res.json(data);
    })

});






// app.put('cars/:id', function (req, res) {
//     db.cars.update({
//         make: req.body.cars,
//         model: req.body.model,
//         year: parseInt(req.body.year),
//         type: req.body.type

//     }, {
//             where: { id: parseInt(req.params.id) }
//         }).then(function (data) {
//             res.json(data);
//         });

// });

app.put('/cars/:id', function (req, res) {
    db.cars.update({
        make: req.body.make,
        model: req.body.model,
        year: parseInt(req.body.year),
        type: req.body.type
    }, {
            where: { id: parseInt(req.params.id) }
        }).then(function (data) {
            res.json(data);
        });
});




// app.delete('/cars/:id', function (req, res) {
//     db.cars.destory({
//         where: { id: parseInt(req.params.id) }
//     }).then(function (data) {
//             res.json(data);
//         });
// });

app.delete('/cars/:id', function (req, res) {
    db.cars.destroy({
        where: { id: parseInt(req.params.id) }
    }).then(function (data) {
        res.json(data);
    });
})





/// Make your model
/// Run the migrations
/// Create one record route
/// Read aone record route
/// Read all record route
/// Update one record
/// delete one record


app.listen(3000, function () {

    console.log('give me a break!!!')
})