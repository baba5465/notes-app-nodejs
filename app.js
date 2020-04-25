const fs = require ('fs');
const _ = require ('lodash');
const yargs = require ('yargs');

const notes = require ('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

if (command === 'add') {
  var note = notes.addNote (argv.title, argv.body);
  if (_.isUndefined (note)) {
    console.log ('Already exists');
  } else {
    console.log ('Note added');
  }
} else if (command === 'list') {
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote (title);
  var message = noteRemoved ? 'Note removed' : 'Note does not exists';
  console.log (message);
} else if (command === 'read') {
} else {
  console.log ('Command not found');
}
