function scrape(event){
    let res = {
        "text" : "",
        "screen_name": event.user.screen_name,
        "name": event.user.name,
    };

    if(event.retweeted_status != undefined){
      res.text = (event.retweeted_status.truncated)?event.retweeted_status.extended_tweet.full_text:event.retweeted_status.text
    }else{
      res.text = (!event.truncated)?event.text:event.extended_tweet.full_text;
    }
    return res;
}

module.exports = {scrape};