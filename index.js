var express = require("express");
var i18n = require("i18n");

var app = express();
var port = "8080";

i18n.configure({
  directory: "./locais",
  extension: ".js",
  defaultLocale: "pt-BR",
  locais: ["pt-BR", "en-US"],
  cookie: "lang",
});

app.use(i18n.init);

app.use((req, res, next) => {
  console.log(`Idiomas suportados: ${req.acceptsLanguages()}`);
  let local = req.acceptsLanguages()[0];
  req.setLocale(local);
  res.setLocale(local);
  next();
});

app.get("/", (req, res) => {
  res.send(res.__("hello"));
});

app.listen(port, () => {
  console.log("Port: " + port);
});
