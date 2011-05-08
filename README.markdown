song
====

Sing songs in node.js with a synthesized voice.

example
=======

    var sing = require('song')();
    sing([
        {
            note : 'E3',
            durations : [ { beats : 0.3, text : 'hello' } ]
        },
        {
            note : 'F#4',
            durations : [ { beats : 0.3, text : 'cruel' } ]
        },
        {
            note : 'C3',
            durations : [ { beats : 0.3, text : 'world' } ]
        },
    ]);

install
=======

First install [festival](http://www.cstr.ed.ac.uk/projects/festival/)

Then install with [npm](http://npmjs.org):

    npm install -g song

You'll then have a `song` command to sing json files and an npm package.
