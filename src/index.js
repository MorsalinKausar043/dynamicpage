const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000 ;

const staticpath = path.join(__dirname , "../public/src");
app.use(express.static(staticpath));

app.set('view engine' , 'hbs');

app.get('' , (req, res) =>{
    res.status(201).render('index',{name:"Morsalin"});
})

app.listen(port , () =>{
    console.log(`server port is ${port}`)
})