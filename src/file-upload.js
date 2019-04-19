var fs = require('fs')
const pathUtil = require('path');
var writeFile = function(req,res,mime,path){
    var pathToBeWritten = pathUtil.normalize(path+mime[1])
    
    try {
        if (fs.existsSync(pathToBeWritten)) {
            fs.unlinkSync(pathToBeWritten) //normalize path
        }
      } catch(err) {
        console.error(err)
      }
    var fileType = mime[1]
    console.log(fileType)
    var img = fs.readFileSync(req.file.path)
    fs.writeFile(path+fileType, img, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
     
}
module.exports.writeFile = writeFile