const data = require('./data.js');

module.exports = {

    get_products: ( req, res ) => {
        res.status(200).send( data.products )
        
    }

}