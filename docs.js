jsdox = require('jsdox');

jsdox.generateForDir('lib/apis', 'docs', 'docs/templates', callback);
jsdox.generateForDir('lib/apis/boss', 'docs/boss', 'docs/templates', callback);
jsdox.generateForDir('lib/apis/distraction', 'docs/distraction', 'docs/templates', callback);
jsdox.generateForDir('lib/apis/skilling', 'docs/skilling', 'docs/templates', callback);

function callback() {
    console.log('finished a generation');
}