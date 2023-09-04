const bodyParser = require('body-parser');

const BodyParser = bodyParser.urlencoded(
    {
        extended : true
    }
)

module.exports = BodyParser;