var pty = require('pty.js');

// Come up with the line and column regex for VT-100
let line = 0;
let col = 0;
const regex = /(ESC\[)+/g;
const adjregex = regex + line + ";" + col + "f";

// Come up with regex for font to be bold
const regex = /(ESC\[)+/g;
const boldregex = regex + "1m";

var adjregex = pty.spawn('bash', [], {
  //name: 'xterm-color',
  cols: col,
  rows: line,
  cwd: process.env.HOME,
  env: process.env
});

var boldregex = pty.spawn('bash', [], {
  //name: 'xterm-color',
  cwd: process.env.HOME,
  env: process.env
});
 
term.on('adjregex', function(data) {
  console.log(adjregex);
});

term.on('boldregex', function(data) {
  console.log(boldregex);
});
 
console.log(term.process);