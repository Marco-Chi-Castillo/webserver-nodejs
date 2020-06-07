//instanciamos un nuevo servidor
const http = require('http');
http.createServer((req, res) => {
  res.write('Hello world');
  res.end();

}).listen(3000);

console.log('Listen server on port 3000');