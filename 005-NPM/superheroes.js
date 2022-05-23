import superheroes from 'superheroes';
import supervillains from 'supervillains';
import doggos from 'dog-names';
import chalk from 'chalk';


const superRandom = superheroes.random();

console.log(`My favourite superhero is ${chalk.blue(superRandom)}`);
console.log(`My favourite supervillain is ${chalk.red(supervillains.random())}`);
console.log(`My favourite dog is ${chalk.green(doggos.allRandom())}`);