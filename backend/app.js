const express = require('express');
const articlesRouter = require('./routes/article');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hi there! friendly reminder to go to /articles');
  });

app.use('/articles', articlesRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
