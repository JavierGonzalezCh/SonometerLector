const SerialPort = require('serialport');

// Reemplaza 'COMx' con el nombre del puerto que estás utilizando
const port = new SerialPort('COM6', { baudRate: 9600 });

// Verificar si el puerto está abierto
if (port.isOpen) {
  console.log('El puerto está abierto.');
} else {
  console.log('El puerto está cerrado.');
}
//module.exports = searchPorts;