// Revise Express from https://www.youtube.com/watch?v=JlgKybraoy4

// using ESM module loader in package.json so we can use "import" instead of "require"
import Express from "express";
import Products from "./products.js";

const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  //res.send("Hello World");
  res.json(Products);
});

// use the http.rest file to send a GET
// you need the REST Client plugin installed in VS Code
// which does the Postman / Insomnia
app.listen(port, () => console.log("listening on port:" + port));

// app.post();
// app.delete();
// app.put();
