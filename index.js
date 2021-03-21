const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var MongoClient = require('mongodb').MongoClient;


// Configuration générale
app.set('view engine', 'ejs');

app.use('/js',express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js',express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js',express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css',express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded());

// Configuration de MongoDB
var urlMongo = "mongodb://127.0.0.1:27017/";

// Page d'accueil
app.get("/", (req, res) => {
    // Trouve tous les Clients dans la base de données
    MongoClient.connect(urlMongo, (err, db) => {
        if(err) throw err;
        var dbo = db.db("Mongoose"); // La BD

        dbo.collection("Clients").find().toArray((err, result) => {
            if(err) throw err;
            //console.log(result);
            db.close();

            res.render("accueil", {
                result: result
            });
        });
    });
});

// POST pour ajouter un client
app.post("/ajouterClient", (req, res) => {
    var client = {
        nom: req.body.nomClient,
        age: req.body.age,
        solde: req.body.solde
    };
    console.log(client); 

    // Ajoute le client à la base de donnée
    MongoClient.connect(urlMongo, (err, db) => {
        if(err) throw err;
        var dbo = db.db("Mongoose") // La BD

        dbo.collection("Clients").insertOne(client, (err, result) => {
            if(err) throw err;
            console.log("Un client à été ajouté à la base de donnée !")
        });

        db.close();
    });

    res.redirect("/");
});

// POST pour enlever un client
app.post("/enleverClient", (req, res) => {
    var nomClient = {nom: req.body.nom};

    MongoClient.connect(urlMongo, (err, db) => {
        if(err) throw err;
        var dbo = db.db("Mongoose") // La BD

        dbo.collection("Clients").deleteOne(nomClient, (err, result) => {
            if(err) throw err;

        });
    });

    res.redirect("/");
});

app.listen(3500, () => {
    console.log("Démarrage du serveur sur le port 3500.")
});