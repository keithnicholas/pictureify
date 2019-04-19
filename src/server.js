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
app.use('/resources', express.static(__dirname +'/resources'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+ '/index.html')
})
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+ '/index.html')
})
app.get('/index',(req,res)=>{
    res.sendFile(__dirname+ '/index.html')
})
app.post("/upload",upload.single('img-upload'), async (req,res,next)=>{
    var mime = req.file.mimetype.split('/')
    if(mime[0] ==='image'){  
        var pathWrite = __dirname+'/uploads/image-uploaded.'
        var path = pathWrite+mime[1] // full path
        myUtilFile.writeFile(req,res,mime,pathWrite)// write file
        var label = await vision.wordify(path)

        //Similar to cookie 
        app.locals.label = []
        label.forEach(function(each){
            app.locals.label.push(each)
        })
        console.log(app.locals.label)
        res.redirect('/process')
    }else{
        res.send(404, 'Uploaded is not image')
    }

    fs.unlinkSync(req.file.path) // delete temporary file
})
app.get("/process",(req,res)=>{
    res.send("<p>"+app.locals.label +"</p>")
    var labels = app.locals.label

    //TODO: connect to a music API
    
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