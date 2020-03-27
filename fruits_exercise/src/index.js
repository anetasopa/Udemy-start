import foods from './foods';
import { choice, remove } from './helpers';

let fruit = choice(foods);

console.log(`I would like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}.`);

let remaining = remove(foods, fruit);

console.log(`I am sorry, we are all out. We have ${remaining.length} other foods left.`);
