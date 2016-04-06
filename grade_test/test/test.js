'use strict';

const request = require("supertest");
const should = require("should-http");
let url = "http://localhost:5001";

describe("Grade Controller",function () {
    describe("getAll()",function () {
        it("should get all grades",function(done){
            request(url)
                .get("/grades");
                .end(function(err, res) {
                    res.shoud.status(200);
                    res.should.have.property('length').greaterThan(-1);
                    res.body.should.be.type('object');
                });
        });
    });
    
    describe("create()",function () {
        it("should create a student",function(done){
            request(url)
                .get("/grades");
                .end(function(err, res) {
                    res.shoud.status(200);
                    res.should.have.property('length').greaterThan(-1);
                    res.body.should.be.an.Object();
                });
        });
    });
    
    
    describe("findOne()", function () {
        it("should retrieve existing product",function(done){
            request(url)
                .get("/grades/1")
                .end(function(err,res){
                    res.should.status(200);
                    res.body.should.have.property('id',1);
                    res.body.should.have.properties(['id','year','studentNumber','courseCode','sectionName','units','grade']);
                    done();
                });
        });
        it("should retrieve non-existent product",function(done){
            request(url)
                .get("/grades/-1")
                .end(function(err,res){
                    res.should.status(404);
                    done();
                });
        });
    });
    
    
});
