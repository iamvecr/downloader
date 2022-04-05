# Book downloader (Kortext)

The book is divided into .jpgs every image is a page, the url to each page has the page number in it. 


e.g. In the following `25` is the page number 
`https://read-api.kortext.com/core/api/v1/reader/draw/123456/25?width=8910&height=10692&pageLabel=25`

To make it easier to inject the page number the url is divided in 2 parts:

`urlInitial` = is the first part of the URL, up until the first page argument 
`detalis` = second part with `width` and `height` parameters

Every request needs to be authorized with a Bearer token.
To obtain a new token;
1- Login into Kortext;
2- Open the book that you want to download;
3- Use the browser to inspect the network activity ([web search](https://duckduckgo.com/?q=inspect+network+activity))
4- Go to the next page in the book
5- Find the request for the new page and on the details about the request you can find the `Bearer` token to copy into the code. 

### Requirements
- NodeJS
- yarn/npm 
### How to
1- Add the missing parameters into `index.js`;
2- `yarn install` or `npm install`;
3- `node index.js`
4- ???
5- Profit
