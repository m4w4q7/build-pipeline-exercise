var express = require("express");
var app = express();

app.get('/add', function(req, res) {
    
    if (isFinite(req.query.a) && isFinite(req.query.b)) {
        var a = parseInt(req.query.a);
        var b = parseInt(req.query.b);
        res.send((a + b).toString());
    } else {
        res.send('NaN');
    }
    console.log(req.query);
});

app.listen(process.env.PORT, function() {
    console.log('Server started in the port: ', process.env.PORT);
});