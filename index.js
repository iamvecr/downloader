const axios = require('axios')                                                          //Used to make GET requests
const fs = require('fs')
var totalNumberOfPages = 600                                                            //Change here the number of pages
var urlInitial = 'https://read-api.kortext.com/core/api/v1/reader/draw/XXXXXXX/'        //Change the XXXXXX with the book ID  
var details = '?width=8910&height=10692&pageLabel='                                     //Width and Height might change, higher number === higher quality
var authorization = 'Bearer ';
var page;

(async function loop() {
    for (page = 0; page < totalNumberOfPages; page++) {
        var completeURL = urlInitial + page + details + page
        console.log('url page made up: ' + completeURL);
        var filepath = './'+page+'.jpg'
        await downloadImage(completeURL, filepath)
        console.log('Finished! Page ' + page + ' of ' + totalNumberOfPages);
    }
})();

async function downloadImage(url, filepath) {
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
        headers : { Authorization: authorization}
    });


    return new Promise((resolve, reject) => {
        response.data.pipe(fs.createWriteStream(filepath))
            .on('error', reject)
            .once('close', () => resolve(filepath)); 
    });
}