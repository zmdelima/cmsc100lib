'use strict';

const mysql = require('mysql');
const conn = mysql.createConnection({
    'host'      :'localhost',
    'database'  :'amazon',
    'user'      :'amazon',
    'password'  :'password'
});

conn.connect();

exports.find = (req, res) => {
    conn.query("SELECT * FROM product", (err,result) => {
        if(err) return res.send(err);
        return res.send(result);
    });
};

exports.findOne = (req, res) => {
    conn.query("SELECT * FROM product WHERE id = ?",[req.params.id], (err,result) => {
        if(err) return res.send(err);
        if(result.length == 0) return res.status(404).send({});
        return res.send(result[0]);
    });
};
