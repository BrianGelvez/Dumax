require('dotenv').config();
const server = require("./src/server");
const {PORT} = process.env;

server.get('/', (req, res) => {
  res.send('Hello dumax!');
});

server.listen(PORT);
