// express
const express = require('express');

// crea l'applicazione
const app = express();

// la porta del server
const port = 50000;

// esempio di un possibile json
const libri = [
    { id: 1, titolo: 'Libro 1' },
    { id: 2, titolo: 'Libro 2' },
    { id: 3, titolo: 'Libro 3' }
];

// la route dell' applicazione, inserendo questa verranno restituiti i libri
app.get('/libri', (req, res) => {


  res.json(libri); // Invia la lista di libri come risposta JSON
});


app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});