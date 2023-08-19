# Kortext book downloader

A book is made up of multiple `.jpgs` files, each file is a page, the script will _attempt_ to download each image and save it in the `Book` folder.

Each request needs to be authenticated with a bearer token, which is obtained by logging into Kortext from the browser and inspecting a page request header.

### How to get a new Bearer token:

1- Login into Kortext;

2- Open the book that you want to download;

3- Use the browser to inspect the network activity ([web search](https://duckduckgo.com/?q=inspect+network+activity))

4- Move to the next page of the book

5- Find the request for the new page and on the details about the request under the request header you can find the `Bearer` token to copy into the code.

### Requirements
- NodeJS
- yarn/npm 
### How to

1 - `git clone https://github.com/iamvecr/downloader.git`

2 - `cd downloader`

3 - Add the missing parameters in `index.js`;

4- `yarn install` or `npm install`;

5- `node index.js`


