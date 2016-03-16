'use strict';

const request = require("supertest");
const should = require("should-http");
let url = "http://localhost:5001";

describe("Product Controller",function () {
    describe("findOne()", function () {
        it("should retrieve existing product",function(done){
            request(url)
                .get("/products/1")
                .end(function(err,res){
                    res.should.status(200);
                    res.body.should.have.property('id',1);
                    res.body.should.have.properties(['id','name','price']);
                    done();
                });
        });
        it("should retrieve non-existent product",function(done){
            request(url)
                .get("/products/0")
                .end(function(err,res){
                    res.should.status(404);
                    done();
                });
        });
    });
});
