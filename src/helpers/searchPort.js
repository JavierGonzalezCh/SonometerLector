const SerialPort = require('serialport');

function searchPorts(){
    SerialPort.list().then(ports => {
      console.log('Puertos disponibles:');
      ports.forEach(port => {
        console.log(`${port.path} - ${port.manufacturer || 'Desconocido'}`);
      });
    }).catch(err => {
      console.error('Error al listar puertos serie:', err);
    });
}

module.exports = searchPorts;