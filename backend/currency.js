const request = require('request');


var express = require('express');
var api = express.Router();

api.post('/convertir', (req, res) => {

    var params = req.body;
    var headers = {
        "apikey": "Wjj6Y7gvdTNCYoLwdvGaO9WPcvF3RHNc"
    };
    var to = params.to;
    var from = params.from;
    var amount = params.amount;
    request({
        method: "GET",
        url: `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`,
        headers: headers,
    }, async(error, response, body) => {
        body = JSON.parse(body);
        console.log(body);

        return res.status(200).send({
            status: "success",
            message: "Lista de currency",
            data: body.result,
        });
    });

});

module.exports = api;