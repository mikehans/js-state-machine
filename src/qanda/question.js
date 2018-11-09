import * as machine from '../lib/machine.js';

var actions = {
  "valid": ()=> console.log('question is valid'),
  "invalid": () => console.log('question is invalid'),
  "reset": () => console.log('resetting')
};

var states = {
  "valid": {
    "invalid": actions.invalid
  },
  "invalid": {
    "valid": actions.valid
  },
  "reset": {
    "invalid": actions.reset
  }
};

machine.init("invalid", states, actions);

console.log(machine.transition('valid'));
console.log(machine.transition('invalid'));
console.log(machine.transition('valid'));
console.log( machine.transition('invalid')); 
console.log("try to repeat setting to invalid state");
console.log( machine.transition('invalid'));
console.log(machine.transition('invalid')); 
console.log(machine.transition('valid'));
console.log(machine.reset());
console.log(machine.transition('valid'));
console.log( machine.transition('invalid')); 
