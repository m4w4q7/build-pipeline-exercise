// Ezek jó helyen vannak itt? Zártak a modulok?
var express = require("express")();
var add = require("./add.js");

module.exports = {
    
    configure: function() {
        express
            .get('/add', function(req, res) {
                res.send(JSON.stringify(add(req.query)));
            })
        return this;
    },
    
    start: function() {
        express.listen(process.env.PORT, function() {
            console.log('Server started in the port: ', process.env.PORT);
        })
        return this;
    },
    
    getExpressServer: function() {
        return express;
    }
};