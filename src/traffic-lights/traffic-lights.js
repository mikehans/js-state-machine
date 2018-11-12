import * as machine from '../lib/machine.js';

var actions = {
    "redlight": ()=> console.log('Stop light'),
    "yellowlight": () => console.log("Yellow light"),
    "greenlight": ()=> console.log("Green light"),
    "error": () => console.log("Flashing yellow light"),
    "reset": () => console.log("Resetting state")
};

var states = {
    "red": {
        "green": actions.greenlight,
        "error": actions.error
    },
    "yellow": {
        "red": actions.redlight,
        "error": actions.error
    },
    "green":{
        "yellow": actions.yellowlight,
        "error": actions.error
    },
    "default": actions.redlight,
    "error": actions.error,
    "reset": actions.reset
};

function transitionInvalid(){
    console.log("Invalid transition ya nuffie");
}

// Test run...
machine.init("red", "green", states, actions, transitionInvalid);

var nextState = machine.getNextValidStates()[0];
console.log(machine.transition(nextState));
var nextState = machine.getNextValidStates()[0];
console.log(machine.transition(nextState));
console.log("Attempt to reset");
console.log(machine.reset());
var nextState = machine.getNextValidStates()[0];
console.log(machine.transition(nextState));
var nextState = machine.getNextValidStates()[0];
console.log(machine.transition(nextState));
console.log("WILL ERROR");
console.log(machine.transition('error'));
console.log("Now back to red");
console.log(machine.transition('red'));
console.log("This will be an invalid transition");
console.log(machine.transition('blah'));
var nextState = machine.getNextValidStates()[0];
console.log(machine.transition(nextState));
