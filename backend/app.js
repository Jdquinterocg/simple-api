const express = require('express');
const cors = require('cors');

const articlesRouter = require('./routes/article');
const authenticateToken = require('./middleware/auth')
const config = require('./config/env')

const app = express();
const port = config.port || 3000;

// Configura el middleware cors para permitir solicitudes desde cualquier origen
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hi there! friendly reminder to go to /articles');
  });

app.use('/articles', authenticateToken, articlesRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
