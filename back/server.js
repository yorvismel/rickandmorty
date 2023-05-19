const http = require("http");
const  characters = require("./src/utils/data");


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    //    rickandmorty/character/3
    if(req.url.includes("rickandmorty/character")){
        //console.log(req.url.split("/"));
        let id = req.url.split("/").at(-1);
        let characterFind = characters.find(char => char.id === Number(id))
        
        res.writeHead(200, { "Content-type": "application/json"})
        res.end(JSON.stringify(characterFind))
    }


}).listen(3001, "localhost");