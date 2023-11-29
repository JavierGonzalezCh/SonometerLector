require('dotenv').config();

const connectDB = require('./db/dbConection');
const dataSender = require('./helpers/dataSender');

connectDB();
//dataSender();