var chai = require("chai");
var mocha = require("mocha");
var JetApi = require("../jet-api");

var expect = chai.expect;
var assert = chai.assert;

describe("Products Namespace", function() {
    this.timeout(10000);

    describe("List Products", function(){
        it("Should return a list of all products currently on Jet", function(done) {
            JetApi.connect(process.env.API_USER, process.env.API_SECRET)
                .then(function(jetConnection) {
                    jetConnection.Products.listProducts()
                        .then(
                            function(successObject){
                                assert(successObject.sku_urls);
                                done();
                            }, done
                        ).catch(done);
                    }
                ).catch(done);
        });
    });

    //describe("Create Products", function(){
    //    it("Should save the product on Jet.com", function(done) {
    //        var product = {
    //
    //        };
    //        JetApi.connect(process.env.API_USER, process.env.API_SECRET)
    //            .then(function(jetConnection) {
    //                jetConnection.createProducts()
    //                    .then(
    //                    function(successObject){
    //                        assert(successObject.sku_urls);
    //                        done();
    //                    }, done
    //                ).catch(done);
    //            }
    //        ).catch(done);
    //    });
    //});
});