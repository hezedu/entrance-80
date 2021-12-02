const http = require('http');


const {httpsRedirectDomains} = require('./config.js');
const letsencrypt = require('./lib/letsencrypt-gen-cert.js');
const routes = require('./routes/index.js');

let maxAge = 1000 * 60 * 60 * 24 * 30 * 6; // half year.
const redirectMaxAge = 'max-age=' + maxAge;

const PORT = 80;

const server = http.createServer(function(req, res){
  if(letsencrypt(req, res)){
    return;
  }
  if(httpsRedirectDomains[req.headers.host]){
    res.writeHead(301, {
      'Cache-control': redirectMaxAge,
      Location: 'https://' + req.headers.host + req.url
    });
    res.end('');
  } else if(routes[req.url]){
    routes[req.url](req, res);
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(PORT);

server.on('listening', function(){
  console.log('entrance-80 server listened on ' + PORT);
});

maxAge = null;
