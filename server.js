//criando um server express
const express = require('express'); //chamando o express
const app = express(); //instanciando express guardando em app

app.set("view engine", "ejs");//função set que é de express chamando app, passando 2 argumentos
//view engine é a ferramenta para renderizar o html
// e o ejs é informando que ele sera utilizado
app.get("/", function(req, res){//app.get é uma rota usando o metodo get "/" é a rota
    const items = [
        { 
            title: "N",
            message: "A desenvolvedor de aplicações/serviços de complicada"    
        },
        {
            title: "I",
            message: "nacreditavelmente chato"
        },
        {
            title: "C",
            message: "hatodms"
        },
        {
            title: "E",
            message: "JS usa JS para renderizar HTML"
        },

    ];

    const subtitle = "That's it"

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });//res é resposta, e render para renderizar o index
})

app.get("/sobre", function(req, res){

    res.render("pages/about");
})

app.listen(8080); // app carrega tudo do express e listen uma função de express que ouve uma porta, no caso 8080
// quando chamar a porta 8080 vai executar todo o script
console.log("Rodando");