const express = require('express');
const connectToMongo = require('./db');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoute');
const BodyParser = require('./middlewares/bodyParserMiddleware');
const Cors = require('./middlewares/corsMiddleware');
const StaticMiddleware = require('./middlewares/staticMiddleware');

dotenv.config();
const PORT = process.env.PORT || 3000; // Use a default port if PORT is not defined
const app = express();

// Middleware
app.use(Cors);
app.use(express.json());
app.use(BodyParser);
app.use(StaticMiddleware);

// Routes
app.use('/', userRoutes);

// Connect to MongoDB
connectToMongo();

// Start the server
app.listen(PORT, () => {
  console.log("Server started at port " + PORT);
});
