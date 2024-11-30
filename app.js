const express=require('express');
const app=express();
const port=3000;
//définir la route pour la racine
app.get('/',(req,res)=>{
    res.send('hello world');
});
//écouter sur le port défini
app.listen(port,() => {
    console.log (`application exemple à l'ecoute sur le port ${port}!`);
});