//import * as machine from './machine';

var actions = {
    "red": ()=> console.log('Stop light'),
    "yellow": () => console.log("Yellow light"),
    "green": ()=> console.log("Green light")
};

var states = {
    "red": {
        "green": actions.green
    },
    "yellow": {
        "red": actions.red
    },
    "green":{
        "yellow": actions.yellow
    }
}

function transitionInvalid(){
    console.log("Invalid transition ya nuffie");
}

machine.init("red", states, actions);

var nextState = machine.getNextValidStates()[0];
setTimeout(console.log(machine.transition(nextState), 2000));
