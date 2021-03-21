# Mongoose
Ce projet est une démonstration d'une Application Web utilisant MongoDB.

Le site permet de visualiser une liste de Clients, d'en ajouter ainsi qu'en supprimer.

1. [Prérequis](#prérequis)
2. [Informations importantes](#informations-importantes)
3. [Auteur](#auteur)
## Prérequis
* MongoDB
* NodeJS

## Informations importantes
* Le serveur web fonctionne sur le **Port 3500**
* Le fichier **setupMongoDB.txt** contient quelques commandes pour créer la BD ainsi que pour remplir la collection __Client__
* Selon votre cas, il pourrait être nécessaire de modifier l'**Url de la BD** dans le fichier **index.js**
```js
// Configuration de MongoDB
var urlMongo = "mongodb://127.0.0.1:27017/";

//...
```
> index.js, ligne 20

### Auteur
* [**Sharpeon**](https://github.com/Sharpeon)
