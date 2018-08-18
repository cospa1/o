const sa=require('superagent');
const usd_jpy='http://api.thni.net/jzip/X0401/JSON/J/state_index.js'

//main
exports.handler = function(event,context,callback){
 getApiAsync(usd_jpy).then(function(res){callback(null,res)}).catch(function(err){callback(null,err)});
}

 function getApiAsync(url){
   return new Promise(function(resolve,reject){
     sa
     .get(url)
     .end(function(err,data){
       if(err){reject(err);}
       resolve(data);
      });
   })
 }
