import app from "./src/app.js";
const port = process.env.PORT || 3000; //prod ou dev

/*
const rotas = {
    '/': ' Node Library',
    '/livros': 'Entrei na pagina de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'pag editora',
    '/projeto': 'info sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(rotas[req.url]);
}) 

*/

app.listen(port, () =>{
    console.log(`Servidor escutando em http://localhost:${port}`);
});