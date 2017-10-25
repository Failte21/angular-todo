// import config from "./config"
// import todoRoute from "./routes/todoRoute"
let express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    todoRoute = require('./routes/todoRoute')

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, {useMongoClient: true});

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, x-access-token, accept-language');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//
//     next();
// });

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

todoRoute(app)

app.listen(port, () => {
    console.log('hypertube list RESTful API server started on: ' + port);
});
