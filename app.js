const fs = require ('fs');
const _ = require ('lodash');
const yargs = require ('yargs');

const notes = require ('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

if (command === 'add') {
  notes.addNote (argv.title, argv.body);
} else if (command === 'list') {
} else if (command === 'remove') {
} else if (command === 'read') {
} else {
  console.log ('Command not found');
}
