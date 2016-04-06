'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let router = require(__dirname+"/routes/router");

app.use(bodyParser());
app.use(router( express.Router() ) );

app.listen(4000,function(){
    const address = server.address().address;
    const port_no = server.address().port;
    console.log("App listening to http://%s:%s",address,port_no);
});
