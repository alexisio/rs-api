jsdox = require('jsdox');

jsdox.generateForDir('lib/apis', 'docs', '', callback);
jsdox.generateForDir('lib/apis/boss', 'docs/boss', '', callback);
jsdox.generateForDir('lib/apis/distraction', 'docs/distraction', '', callback);

function callback() {
    console.log('finished a generation');
}