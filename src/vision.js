async function quickstart(path) {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
    var labelList = []
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
    // Performs label detection on the image file
    const [result] =  await client.labelDetection(path);
    const labels = await result.labelAnnotations;
    console.log('Labels:');
    labels.forEach((label) =>{
      console.log(label.description)
      labelList.push(label.description)
    });
    return labelList
  }
 
module.exports.wordify = quickstart
