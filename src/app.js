require('dotenv').config();

const connectDB = require('./db/dbConection');
const dataSender = require('./helpers/dataSender');
const searchPorts = require('./helpers/searchPort');

const { SerialPortStream } = require('@serialport/stream')
const { MockBinding } = require('@serialport/binding-mock')
const { SerialPort } = require('serialport')

// List ports
const port = new SerialPort({ path: 'COM3', baudRate: 57600 })

port.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message)
  }
  console.log('message written')
})

// Open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message)
})


//connectDB();
//dataSender();