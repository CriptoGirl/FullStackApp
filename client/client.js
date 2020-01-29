const
  express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 80
  // port = process.env.PORT || 5000

const app = express();

app.use(history());
app.use(serveStatic(__dirname + '/dist/spa'));
app.listen(port);
console.log('Server is listening on port: ', port)
console.log('Base URL: ', process.env.FSA_SERVER_URL)
