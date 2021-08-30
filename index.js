var express = require("express");
var i18n = require("i18n");

var app = express();
var port = "8080";

i18n.configure({
  directory: "./locais",
  extension: "js",
  defaultLocale: "pt-BR",
  locais: ["pt-BR", "en-US"],
  cookie: "lang",
});

app.use(i18n.init);

app.use((req, use, next) => {
  console.log(`Idiomas suportados: ${req.acceptsLanguages()}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Bem vindo");
});

app.listen(port, () => {
  console.log("Port: " + port);
});
