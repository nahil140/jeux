const express = require("express");
const app = express();

// Route de test : GET /
app.get("/", (req, res) => {
  res.json({ message: "Mon API fonctionne" });
});

let jeux = [
  { id: 1, titre: "gta 67", plateforme: "ps67", genre: "jeu", note: 20, termine: "oui" },
  { id: 2, titre: "counter strike 67", plateforme: "switch", genre: "jeu", note: 20, termine: "oui"},
  { id: 3, titre: "mortal kombat 67", plateforme: "pc", genre: "jeu", note: 20, termine: "oui"},
  { id: 4, titre: "gran turismo 67", plateforme: "pc", genre: "jeu", note: 20, termine: "non"},
  { id: 5, titre: "super mario bros 67", plateforme: "ps67", genre: "jeu", note: 20, termine: "oui"},
  { id: 6, titre: "call of duty black ops 67", plateforme: "switch", genre: "jeu", note: 20, termine: "oui"}
];

// GET /jeux -> renvoie tout le tableau
app.get("/jeux", (req, res) => {
  res.json(jeux);
});

// On demarre le serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});