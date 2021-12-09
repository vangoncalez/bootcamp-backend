import express from 'express';

const app = express();

app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Conseguimos criar um servidor Express'
  })
});

app.listen(port, () => {
  console.log('Server funcionando na porta: ', port);
})


///// para adicionar o pacote express npm i @types/express


// import http from 'http';


// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Funcionou');
// });

// const port = 5000;

// server.listen(port, () => {
//   console.log('Server funcionando na porta: ', port);
// })
