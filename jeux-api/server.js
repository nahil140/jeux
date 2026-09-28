const express = require("express");
const app = express();

// Route de test : GET /
app.get("/", (req, res) => {
  res.json({ message: "Mon API fonctionne" });
});

let jeux = [
  { id: 1, titre: "gta 67", plateforme: "ps67", genre: "jeu", note: 20, termine: false },
  { id: 2, titre: "counter strike 67", plateforme: "switch", genre: "jeu", note: 20, termine: true},
  { id: 3, titre: "mortal kombat 67", plateforme: "pc", genre: "jeu", note: 20, termine: true},
  { id: 4, titre: "gran turismo 67", plateforme: "pc", genre: "jeu", note: 20, termine: true},
  { id: 5, titre: "super mario bros 67", plateforme: "ps67", genre: "jeu", note: 20, termine: false},
  { id: 6, titre: "call of duty black ops 67", plateforme: "switch", genre: "jeu", note: 20, termine: false}
];

// GET /jeux/2 -> renvoie le jeu dont l id vaut 2
app.get("/jeux/:id", (req, res) => {
  const id = Number(req.params.id);            // ":id" arrive en texte -> on convertit
  const jeu = jeux.find((p) => p.id === id);
  if (!jeu) {                              // rien trouve
    return res.status(404).json({ erreur: "jeu introuvable" });
  }
  res.json(jeu);
});

// POST /jeux -> ajoute un jeu envoye dans le corps de la requete
app.post("/jeux", (req, res) => {
  if (!req.body.titre) {                          // donnee obligatoire manquante
    return res.status(400).json({ erreur: "Le nom est obligatoire" });
  }
  const nouveau = {
    id: jeux.length + 1,
    titre: req.body.titre,
    plateforme: req.body.plateforme,
    genre: req.body.genre,
    note: req.body.note

  };
  jeux.push(nouveau);                       // on ajoute au tableau
  res.status(201).json(nouveau);                // 201 = cree
});

// DELETE /jeux/2 -> supprime le jeu n 2
app.delete("/jeux/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = jeux.findIndex((p) => p.id === id);
  if (index === -1) {                           // -1 = pas trouve
    return res.status(404).json({ erreur: "jeu introuvable" });
  }
  jeux.splice(index, 1);                    // retire 1 element a cette position
  res.status(200).json({ message: "jeu supprimé" });
});

// GET /jeux -> renvoie tout le tableau
app.get("/jeux", (req, res) => {
  res.json(jeux);
});

// On demarre le serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});