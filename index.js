const axios = require('axios')                                                          //Used to make GET requests
const fs = require('fs')                                                                //Used to save the requested images
//------------- Modify the following parameters -------------
var totalNumberOfPages = 681                                                            //Change here the number of pages
var baseURl = 'https://read-api.kortext.com/core/api/v1/reader/draw/XXXXXX/'            //Change the XXXXXX with the ID of the book  
// var parameters = '?width=8910&height=10692&pageLabel='                               //Images are too big ~1.5MB or 2GB> for a book!
var parameters = '?width=1080&height=1296&pageLabel='                                   //Width and Height might change, higher number === higher quality
// On Firefox make sure to check the show Raw Data flag and copy the bearer code 
var authToken = 'Bearer '

const loopRes =  loop()

async function loop() {
    for (page = 0; page < totalNumberOfPages; page++) {
        var completeURL = baseURl + page + parameters + page
        console.log('Complete URL: ' + completeURL);
        var filepath = './Book/'+page+'.jpg'                                           //Where to save the images 
        await downloadImage(completeURL, filepath)
        console.log('Finished! Page ' + page + ' of ' + totalNumberOfPages);
    }
};

async function downloadImage(url, filepath) {
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
        headers : { Authorization: authToken}
    });


    return new Promise((resolve, reject) => {
        response.data.pipe(fs.createWriteStream(filepath))
            .on('error', reject)
            .once('close', () => resolve(filepath)); 
    });
}