const express = require('express');
const client = require('./config/redisClient');
require('dotenv').config();
const morgan = require('morgan');
const weatherRoute = require("./routes/weatherRoute")
const app = express();
const PORT = process.env.PORT;

client;
app.use(morgan('tiny'));
app.use(express.json())

app.use('/api/', weatherRoute)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} 🔥`);
})