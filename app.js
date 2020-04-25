const fs = require ('fs');
const os = require ('os');
const notes = require ('./notes.js');

var user = os.userInfo ();
fs.appendFileSync ('greetings.txt', '\nHello World!' + user.username);
