function filter(twt, tweets, regexp){
if(twt.text.match(regexp)!=null){
    tweets.push(twt);
}
}

function cleanArgs(args){
const len = args.length;
let tmp = "";
let kw = "";
if(args.length>1){
for(let i = 0; i < len; i++){
  tmp+=args[i]+", "
}
kw = tmp.substring(0, tmp.length-2);
}else{
  kw = args[0];
}
return kw;
}

module.exports = {filter, cleanArgs}