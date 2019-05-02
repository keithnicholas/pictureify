var SpotifyWebApi = require('spotify-web-api-node');
var cid = '4b411b00183642f0af7c6238c6daf88d'
var csecret = 'd75c4f8c23f2478dbe6adc391fb99adf'
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: cid,
  clientSecret: csecret,
  redirectUri: 'http://www.keithnicholas.com/'
});
/*spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
  
      // Save the access token so that it's used in future calls
      //spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
);*/
  spotifyApi.setAccessToken("BQD25HzIzw82IZwosqm8yyAzOwzUhb5Dg_wKNe9zczt-w2WttvoJmedXGci9DIOWBf4ySYAPrQFs9yNhsKQ");
  /*spotifyApi.searchPlaylists('mountain',{limit: 1})
  .then(function(data) {
    //console.log('Found playlists are', data.body);
    console.log(data.body.playlists.items)
  }, function(err) {
    console.log('Something went wrong!', err);
  });*/
console.log("\n")


/*spotifyApi.getPlaylist('0dzuVoRrDKaTKTik1jGY4p',{limit: 1})
  .then(function(data) {
    //console.log('Some information about this playlist', data.body);
    //console.log('\n'+data.body.tracks.items)

  }, function(err) {
    console.log('Something went wrong!', err);
  });
*/

var getPlaylist = function(spotifyApi){
  spotifyApi.getPlaylist('0dzuVoRrDKaTKTik1jGY4p',{limit: 1})
  .then(function(data) {
    //console.log('Some information about this playlist', data.body);
    console.log('\n'+data.body.external_urls.spotify)
    //return data.body.uri
  }, function(err) {
    console.log('Something went wrong!', err);
  });
}
module.exports.getPlaylist = getPlaylist