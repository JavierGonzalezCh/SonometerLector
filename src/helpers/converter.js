const csvtojson = require('csvtojson')

async function csvToJsonConverter(csvFilePath) {
    console.log('Leyendo el archivo CSV:', csvFilePath);
    const jsonData = await csvtojson().fromFile(csvFilePath);

    return jsonData
}

module.exports = csvToJsonConverter;