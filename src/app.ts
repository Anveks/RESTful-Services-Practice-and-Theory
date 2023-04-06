import express, { Request, Response } from 'express';

const server = express(); // express is a function 

// defining GET method + route + response
server.get("/api/books", (request: Request, response: Response) => {
  console.log("Client gets API Books."); // http://localhost:3001/api/books
  response.json([{id: 1, name: "C++"}, {id: 2, name: "Java"}, {id: 3, name: "PHP"}]); // data returned is already in json format
});

server.listen(3001, () =>  console.log("Listening...")); // starting the server