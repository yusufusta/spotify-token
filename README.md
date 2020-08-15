# spotify-token
A better experience than Spotify API and a script that can be used for all access.

This project, inspired by [enriquegh](https://github.com/enriquegh/spotify-webplayer-token) project.
## Installing
```sh
npm install spotify-token
```

## Usage
To get a cookie:

 1. You can use any cookie application. Since I'm using Chrome, I'll use [EditThisCookie](http://www.editthiscookie.com/).
 2. Let's login to Spotify from [this address](https://accounts.spotify.com/en/login?continue=https://open.spotify.com/).
 3. After logging in, open the EditThisCookie plug-in; Let's copy the values ​​of `sp_dc` and `sp_key`.
 4. Done!

Let's add it to the code now (sp_dc and sp_key)

For example:

```js
const spotify = require('spotify-token');
    
spotify.getAccessToken("sp_dc", "sp_key").then(function(token){
	console.log(token);
});
```

## Developer
[Quiec](https://github.com/Quiec)

## License
MIT
