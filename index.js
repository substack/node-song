// http://festvox.org/docs/manual-1.4.3/festival_29.html#SEC138 

var fs = require('fs');
var spawn = require('child_process').spawn;

module.exports = function () {
    var xmlfile = '/tmp/'
        + Math.floor(Math.random() * Math.pow(2,16)).toString(16)
        + '.xml'
    ;
    
    var festival = spawn('festival', [ '-i' ]);
    
    return function (song) {
        var xml = '<?xml version="1.0"?>\n'
            + '<!DOCTYPE SINGING PUBLIC "-//SINGING//DTD SINGING mark up//EN"'
            + ' "Singing.v0_1.dtd" []>\n'
            + '<SINGING BPM="30">'
            + song
                .map(function (pitch) {
                    if (!pitch.note) throw new Error('Pitch has no note');
                    
                    return '<PITCH NOTE='
                        + JSON.stringify(pitch.note.toString())
                        + '>'
                        + pitch.durations
                            .map(function (d) {
                                return '<DURATION BEATS='
                                    + JSON.stringify(d.beats.toString())
                                    + '>' + d.text + '</DURATION>';
                            })
                            .join('\n')
                        + '</PITCH>\n'
                    ;
                })
                .join('\n')
            + '</SINGING>'
        ;
        
        fs.writeFile(xmlfile, xml, function (err) {
            if (err) console.error(err)
            else festival.stdin.write(
                '(tts ' + JSON.stringify(xmlfile) + ' \'singing)\n'
            );
        });
    };
};
