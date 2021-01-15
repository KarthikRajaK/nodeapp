var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 5000;

// enable CORS without external module
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// request handlers
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' });
});

// request handlers
app.get('/api/person', (req, res) => {
    res.status(200).json({ success: true, status: 200, data: { name: "karthikraja", mail: "karthikraja1994@hotmail.com" } });
});

app.listen(port, () => {
    console.log('Server started on: ' + port);
});