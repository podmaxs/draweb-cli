#!/usr/bin/env node

'use strict';

process.title = 'draweb';

process.on('uncaughtException', function(err) {
  console.error('Caught exception:\n', err.stack, '\n\nMind letting us know? https://github.com/driftyco/ionic-cli/issues\n');
});

/*var IonicCli = require('../lib/cli');

IonicCli.run(process.argv).catch(function(err){
  console.error('Caught exception:\n', err.stack, '\n\nMind letting us know? https://github.com/driftyco/ionic-cli/issues\n');
});*/

console.log('<><><><><><> draweb cli test');
