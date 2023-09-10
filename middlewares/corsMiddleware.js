const cors = require('cors');

const Cors = cors(
    {
        origin : ['http://localhost:3000' , 'https://syedjavithtodofrontend.netlify.app/'] ,
        methods : ['GET' , 'POST' , 'DELETE' , 'PATCH'],
        allowedHeaders : ['Content-Type', 'Authorization'],
        credentials : true 
    }
        )

module.exports = Cors;