import * as machine from '../lib/machine.js';

var actions = {
  "isValid": ()=> console.log('question is valid'),
  "isInvalid": () => console.log('question is invalid'),
  "reset": () => console.log('resetting')
};

var states = {
  "valid": {
    "invalid": actions.isInvalid
  },
  "invalid": {
    "valid": actions.isValid
  },
  "reset": {
    "invalid": actions.reset
  },
  "default": actions.isInvalid
};

machine.init("invalid", "valid", states, actions);

function exitPossible(){
  if (machine.getCurrentState() === machine.getExitState()){
    return true;
  } else {
    return false;
  }
}

export {machine, actions, states, exitPossible};
