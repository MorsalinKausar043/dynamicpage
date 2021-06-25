const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000 ;

// eituku dile css er path thik thakbe pore index.hbs file pore niye nibo

const staticpath = path.join(__dirname , "../public/src");
app.use(express.static(staticpath));

// views er name change kore templete leka hoiche tai emn korsi

const templetepath = path.join(__dirname , "../templates");
app.set('view engine' , 'hbs');
app.set('views' , templetepath)

app.get('' , (req, res) =>{
    res.status(201).render('index',{name:"Morsalin"});
})

app.get('/about' , (req, res) =>{
    res.status(201).render('about' , {name : "about"});
})

app.get("*" , (req,res) =>{
    res.status(404).send('404 file is error:)')
})

app.listen(port , () =>{
    console.log(`server port is ${port}`)
})