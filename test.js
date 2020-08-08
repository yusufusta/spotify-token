const spotify = require('./index.js');

spotify.getAccessToken("sp_dc", "sp_key").then(function(token){
    console.log(token);
});