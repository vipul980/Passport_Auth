var app = require('./app');
const http = require('http');
const {PORT} = require("./utils/keys");
  
const server = http.createServer(app);
app.set("port", PORT);

server.listen(PORT, () => { console.log(`Server started on port ${PORT}`)})
