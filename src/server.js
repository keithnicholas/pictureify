var express = require('express')

var app = express();
app.set('view engine',"ejs")
app.use('/assets',express.static('assets'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+ '/index.html')
})
app.get('/contact',(req,res)=>{
    res.send(__dirname+ '/contact.html')
})
app.get('/profile/:id',function(req,res){
    var name = req.params.id;
    var person = {
        age: 23,
        loc: 'Vancouver',
        hobbie: ['gaming','hiking','sleep'] 
    }
    res.render("profile.ejs",{namePassed: name,data: person});
})
