var express = require('express')
var fs = require("fs")
var vision = require("./vision.js")
var app = express();
var multer  = require('multer')
var myUtilFile = require('./file-upload.js')

var upload = multer({ dest: 'uploads/tmp' })
app.set('view engine',"ejs")
//app.use('/assets',express.static('assets'))
//app.use("/styles", express.static(__dirname + '/styles'));
app.use(express.static('resources'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+ '/index.html')
})
app.post("/upload",upload.single('img-upload'),(req,res,next)=>{
    res.send('<p>Okeh</p>')
    var mime = req.file.mimetype.split('/')
    if(mime[0] ==='image'){  
        var pathWrite = __dirname+'/uploads/image-uploaded.'
        var path = pathWrite+mime[1] // full path
        myUtilFile.writeFile(req,res,mime,pathWrite)// write file
        var label = vision.wordify(path)
    }else{
        res.send(404, 'Uploaded is not image')
    }
    fs.unlinkSync(req.file.path) // delete temporary file
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


app.listen(3000)