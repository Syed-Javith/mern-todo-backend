const cors = require('cors');

const Cors = cors(
    {
        origin : 'http://localhost:3000' ,
        methods : ['GET' , 'POST' , 'DELETE' , 'PATCH'],
        allowedHeaders : ['Content-Type', 'Authorization'],
        credentials : true 
    }
        )

module.exports = Cors;