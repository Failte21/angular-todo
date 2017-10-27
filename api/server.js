let express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    todoRoute = require('./routes/todoRoute'),
    countRoutes = require('./routes/countRoutes')

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

todoRoute(app)
countRoutes(app)

app.listen(port, () => {
    console.log('Angular todo list RESTful API server started on: ' + port);
});
