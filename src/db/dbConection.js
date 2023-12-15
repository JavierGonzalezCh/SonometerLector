const mongoose = require('mongoose')

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const cluster = process.env.DB_CLUSTER
const database = process.env.DB_NAME

const uri = `mongodb+srv://${user}:${password}@${cluster}.mongodb.net/${database}?retryWrites=true&w=majority`

async function connectDB() {
  try {
    await mongoose.connect(uri,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexión a la base de datos establecida con éxito');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1); 
  }
}

module.exports = connectDB;

