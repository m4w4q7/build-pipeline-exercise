var express = require("express");
var app = express();
var add = require("./add.js");

app.get('/add', function(req, res) {
    
    if (isFinite(req.query.a) && isFinite(req.query.b)) {
        var a = parseInt(req.query.a, 10);
        var b = parseInt(req.query.b, 10);
        res.send(add(a, b).toString());
    } else {
        res.send('NaN');
    }
    console.log(add);
});

app.listen(process.env.PORT, function() {
    console.log('Server started in the port: ', process.env.PORT);
});