const converter = require('./converter');
const Data = require('../db/dataModel');

const csvFilePath = 'src/Catalog_v2.csv'
/* 
TO DO
Hay que hacer una manera para que no se sobrescriban los datos
-- Solo ultimo dato del csv -- Comprobacion por fechas
*/
async function sendData() {
    const totalDatas = await converter(csvFilePath)
    let count = 0;
    totalDatas.forEach(async(data) => {
        const datoPrueba = new Data(data);
        await datoPrueba.save()
        .then(() => {
            count = count + 1;
        })
        .finally(()=>{
            console.log(`Se guardaron ${count} de ${totalDatas.length}`);
        });
    });
}

module.exports = sendData;