const Data = require('../db/dataModel');
const csvtojson = require('csvtojson');

const csvFilePath = 'src/Catalog_v2.csv'

async function sendData() {
    const jsonData = await csvtojson().fromFile(csvFilePath);
    let count = 0;
    jsonData.forEach(async(data) => {
        const datoPrueba = new Data(data);
        await datoPrueba.save()
        .then(() => {
            count = count + 1;
        })
        .finally(()=>{
            console.log(`Se guardaron ${count} de ${jsonData.length}`);
        });
    });
}

module.exports = sendData;