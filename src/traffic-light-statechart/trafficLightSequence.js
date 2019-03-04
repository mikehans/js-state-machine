import { init, transition, listNext, setCurrentState, getCurrentState } from './machine.js';

let config = {
    id: 'sequencer',
    initial: "red",
    states: {
        red: {
            on: {
                TIMER: 'green'
            }
        },
        yellow: {
            on:{
                TIMER: 'red'
            }
        },
        green: {
            on:{
                TIMER: 'yellow'
            }
        }
    },
    actions: {
        green: changeGreen,
        yellow: changeYellow,
        red: changeRed
    }
};

function changeGreen(){
    changeLight('green');
}

function changeYellow(){
    changeLight('yellow');
}

function changeRed(){
    changeLight('red');
}

function changeLight(colour){
    setCurrentState(colour);
    console.log("changed light to " + colour);
}

export {config, transition, init, listNext, getCurrentState};