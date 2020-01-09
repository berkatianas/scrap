const express = require("express");
const request = require("request");

const app = express();

// @route  GET /scrap
// @desc   Get HTML code from url
// @access Public
app.get("/scrap", (req, res) => {
  request("https://www.folhomee.fr/", (error, response, html) => {
    if (!error && response.statusCode == 200) {
      // SI Ok, retourner un status 200 (OK),et retourner un Json avec du HTML pour l'afficher en Front
      return res.status(200).json(html);
    } else {
      // si Erreur, retourner Erreur du serveur
      return res.status(500).send("Error");
    }
  });
});

// le port process.env.PORT pour le déploiment,sinon en local c'est 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Run!"));
