const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  levelType: String,
  code: String,
  catalogType: String,
  name: String,
  description: String,
  sourceLink: String
})

const Data = mongoose.model('Data', dataSchema, 'sonometer_datas')

module.exports = Data
