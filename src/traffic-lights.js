import * as machine from './machine.js';

var actions = {
    "red": ()=> console.log('Stop light'),
    "yellow": () => console.log("Yellow light"),
    "green": ()=> console.log("Green light"),
    "error": () => console.log("Flashing yellow light"),
    "reset": () => console.log("Resetting state")
};

var states = {
    "red": {
        "green": actions.green,
        "error": actions.error
    },
    "yellow": {
        "red": actions.red,
        "error": actions.error
    },
    "green":{
        "yellow": actions.yellow,
        "error": actions.error
    },
    "error": {
      "red": actions.red
    },
    "reset": {
      "red": actions.reset
    }
};

function transitionInvalid(){
    console.log("Invalid transition ya nuffie");
}

// Test run...
machine.init("red", states, actions, transitionInvalid);

var nextState = machine.getNextValidStates()[0];
setTimeout(console.log(machine.transition(nextState), 2000));
var nextState = machine.getNextValidStates()[0];
setTimeout(console.log(machine.transition(nextState), 2000));
console.log("Attempt to reset");
setTimeout(console.log(machine.reset()), 2000);
var nextState = machine.getNextValidStates()[0];
setTimeout(console.log(machine.transition(nextState), 2000));
var nextState = machine.getNextValidStates()[0];
setTimeout(console.log(machine.transition(nextState), 2000));
setTimeout(console.log(machine.transition('error'), 2000));
setTimeout(console.log(machine.transition('red'), 2000));
console.log("This will be an invalid transition");
setTimeout(console.log(machine.transition('blah'), 2000));
var nextState = machine.getNextValidStates()[0];
setTimeout(console.log(machine.transition(nextState), 2000));
