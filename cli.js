#!/usr/bin/env node
var fs = require('fs');
var song = require('song');
var file = process.argv[2];

if (!file) {
    console.error('Usage: sing.js [songfile]');
}
else {
    var sing = song();
    sing(JSON.parse(fs.readFileSync(file, 'utf8')));
}
