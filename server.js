const express = require('express');
const connectToMongo = require('./db');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoute');
const BodyParser = require('./middlewares/bodyParserMiddleware');
const Cors = require('./middlewares/corsMiddleware');
const StaticMiddleware = require('./middlewares/staticMiddleware');





dotenv.config();
const PORT = process.env.PORT
const port = 5000
const app = express();
app.use(Cors);
app.use(express.json());
app.use(BodyParser);

app.use(StaticMiddleware);
app.use('/',userRoutes);


connectToMongo();

app.listen( PORT || port , ()=>{
console.log("server started at port "+PORT);
})