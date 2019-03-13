import machine from './machine.js';

function changeLight(colour) {
    sequencer.setCurrentState(colour);
    console.log("changed light to " + colour);
}

var sequencer = Object.create(machine);
sequencer.changeGreen = function () {
    changeLight('green');
};
sequencer.changeYellow = function () {
    changeLight('yellow');
};
sequencer.changeRed = function () {
    changeLight('red');
};

const sequencerConfig = {
    id: 'sequencer',
    initial: "red",
    states: {
        red: {
            on: {
                TIMER: 'green'
            }
        },
        yellow: {
            on: {
                TIMER: 'red'
            }
        },
        green: {
            on: {
                TIMER: 'yellow'
            }
        }
    },
    actions: {
        green: () => sequencer.changeGreen(),
        yellow: () => sequencer.changeYellow(),
        red: () => sequencer.changeRed()
    }
};

sequencer.init(sequencerConfig);
export default sequencer;