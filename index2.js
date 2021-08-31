var i18n = require("i18n");

i18n.configure({
  defaultLocale: "pt-BR",
  locale: ["pt-BR", "en"],
  directory: "./locales",
  extension: ".json",
});

i18n.init();

i18n.setLocale("en");

console.log(`bem vindo!`);
console.log(i18n.__({ phrase: "hello", locale: "pt-BR" }));
console.log(i18n.__l("bus"));
