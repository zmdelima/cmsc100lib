'use strict';

const product = require(__dirname+"/controllers/product");

module.exports = function(router) {
    router.route("/products")
            .get(product.find);
    router.route("/products/:id")
            .get(product.findOne);
    
    return router;
}
