const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors');

const app = express();

const productCtrl = require('./productCtrl');

app.use( bodyParser() );
app.use( cors() );

app.get( '/api/products', productCtrl.get_products )

const port = 3005;
app.listen( port, () => {
    console.log( `Eavesdropping on port ${port}` )
})