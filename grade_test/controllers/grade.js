'use strict';

const mysql = require('mysql');
const conn = mysql.createConnection({
    'host'      :'localhost',
    'database'  :'grades',
    'user'      :'webapi',
    'password'  :'pwdwebapi'
});
conn.connect();

exports.findOneStudent = (req, res) => {
    conn.query("SELECT * FROM grade where studentNumber=?",
    [
        req.body.studentNumber
    ], 
    (err, rows, result) => {
        if(err) return res.send(err);
        if(rows.length==0) return res.status(404).send(result);
        return res.send(result);
    });
}

exports.getAll = (req, res) => {
    conn.query("SELECT * FROM grade", (err, result) => {
        if(err) return res.send(err);
        return res.send(result);
    });
}

exports.create = (req, res) => {
    conn.query("INSERT TO grade(year,semester,studentNumber,courseCode,sectionName,units,grade) VALUES (?,?,?,?,?,?,?)",
    [
        req.body.year,
        req.body.semester,
        req.body.studentNumber,
        req.body.courseCode,
        req.body.sectionName,
        req.body.units,
        req.body.grade
    ],
    (err, rows, result) => {
        if(err) return res.send(err);
        if(rows.length==0) return res.status(400).send(result);
        return res.send(rows[0]);
    });
}

exports.findOne = (req, res) => {
    conn.query("SELECT * FROM grade where id=?",
    [
        req.params.id
    ], 
    (err, rows, result) => {
    if(err) return res.send(err);
    if(rows.length==0) return res.status(400).send(result);
    return res.send(result);
    });
}

exports.update = (req, res) => {
    conn.query("UPDATE grade SET year=?,semester=?,studentNumber=?,courseCode=?,sectionName=?,units=?,grade=? WHERE id=?", 
    [
        req.body.year,
        req.body.semester,
        req.body.studentNumber,
        req.body.courseCode,
        req.body.sectionName,
        req.body.units,
        req.body.grade,
        req.params.id
    ],
    (err,result) => {
        if(err) return res.send(err);
        return res.send(result);
    });
}

exports.remove = (req, res) => {
    conn.query("DELETE FROM grade WHERE id=?",
    [
        req.params.id
    ],
     (err,result) => {
        if(err) return res.send(err);
        return res.send(result);
    });
}
