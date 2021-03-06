'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync(`${__dirname}/assets/palette-bitmap.bmp`);

const bmp = {};

bmp.type = bitmap.toString('utf-8',0,2);
bmp.size = bitmap.readInt32LE(2);
bmp.width = bitmap.readInt32LE(18);
bmp.height = bitmap.readInt32LE(22);
bmp.startLoc = bitmap.readInt32LE(10);


console.dir(bmp);
