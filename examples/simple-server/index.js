const { join } = require('path');
const { fork } = require('child_process');

const serverFile = join(__dirname, './server.js');
fork(serverFile);
