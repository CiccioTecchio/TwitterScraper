const Twitter = require('twitter');
const fs = require('fs');

const key = require('./key.json');
const scraper = require('./scraper.js');
const filter = require('./filter.js');
const regexp = require('./regexp.js');

const client = new Twitter(key);
const args = process.argv.slice(2)
const kw = filter.cleanArgs(args);
const LIMIT = 10;

let tweets = new Array();

client.stream('statuses/filter', {track: kw, language: "it" }, function (stream) {
  stream.on('data', function(event) {
    let res = scraper.scrape(event);
    
    if(tweets.length < LIMIT){
      filter.filter(res, tweets, regexp.indirizzo);
      console.log(tweets.length);
    }else {
      stream.destroy();
      fs.writeFileSync('tweets.json', JSON.stringify(tweets, null, 2));
    }
  });

  stream.on('error', function(error) {
      console.log(error)
    throw error;
  });
});