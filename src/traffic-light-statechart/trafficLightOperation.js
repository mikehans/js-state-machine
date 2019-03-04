import {init, transition, listNext, setCurrentState, getCurrentState, compoundStates, createCompoundState} from './machine.js';

let config = {
  id: "lightController",
  initial: "error",
  states: {
    normal: {
      on: {
        ERROR: "error"
      },
      type: 'compound'
    },
    error: {
      entry: {
      },
      exit: {
      },
      on : {
        RESET: "reset"
      }
    }
  },
  actions: {
    reset: doReset,
    error: doError
  }
};

function doReset(){
  console.log("Resetting me");
  setCurrentState('normal');
}

function doError(){
  console.log("Error! Oh noes!");
  setCurrentState('error');
}

export {config, transition, init, listNext, getCurrentState, createCompoundState, compoundStates, createCompoundState};