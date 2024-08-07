const fs = require('fs');
const connectToDatabase = require('../config/db');

async function loadData() {
    const db = await connectToDatabase();
    const collection = db.collection('Articles');

    // Leer el archivo data.json
    const data = JSON.parse(fs.readFileSync(__dirname + '/data.json', 'utf8'));

    // Insertar datos en la colección
    await collection.insertMany(data);
    console.log('Datos cargados en la colección');
}

loadData().catch(console.error);
