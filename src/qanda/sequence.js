import * as machine from '../lib/machine.js';
import * as question1 from '../qanda/question.js';
//import * as question2 from '../qanda/question.js';

var actions = {
  "moveNext": ()=> console.log("Move next"),
  "movePrevious": () => console.log("Move previous"),
  "finish": () => console.log("Finish"),
  "reset": () => console.log("Reset the sequence")
};

var states = {
  "question1": {
    "question2": actions.moveNext,
    "reset": actions.reset
  },
  "question2": {
    "question1": actions.movePrevious,
    "finish": actions.finish,
    "reset": actions.reset
  },
  "reset":{
    "question1": actions.reset
  }
};

machine.init("question1", "finish", states, actions);
//console.log('question1 states');
//console.log(question1.machine.states);
