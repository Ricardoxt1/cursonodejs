const _ = require ('lodash');
const chalk = require ('chalk');

const a = [1,4,6,7,8,9,10,14]
const b = [1,2,3,7,8,9,10,11,12,13]

const diff = _.difference(a, b)

console.log(chalk.red.bold(diff))