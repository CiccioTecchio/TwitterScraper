const Twitter = require('twitter');
const fs = require('fs');
const key = require('./key.json');
const client = new Twitter(key);
const kw = "your keyword"
const LIMIT = 10;
let tweets = new Array();

client.stream('statuses/filter', {track: kw }, function (stream) {
  stream.on('data', function(event) {
    
    let res = {
        "text" : "",
        //"screen_name": event.user.screen_name,
        //"name": event.user.name,
        //"location": event.user.location
    };


    if(event.retweeted_status != undefined){
      res.text = (event.retweeted_status.truncated)?event.retweeted_status.extended_tweet.full_text:event.retweeted_status.text
    }else{
      res.text = (!event.truncated)?res.text = event.text:res.text = event.extended_tweet.full_text;
    }
    
    if(tweets.length < LIMIT){
      tweets.push(res);
      console.log(tweets.length)
    }else {
      stream.destroy();
      fs.writeFileSync('tweets.json', JSON.stringify(tweets));
    }
  });

  stream.on('error', function(error) {
      console.log(error)
    throw error;
  });
});


