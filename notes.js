const fs = require ('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body,
  };

  try {
    var notesString = fs.readFileSync ('notes-data.json');
    notes = JSON.parse (notesString);
  } catch (e) {}

  notes.push (note);
  fs.writeFileSync ('notes-data.json', JSON.stringify (notes));
};

var getAll = () => {};

var removeNote = title => {};

var getNote = title => {};

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote,
};
