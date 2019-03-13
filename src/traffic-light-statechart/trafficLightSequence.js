import machine from './machine.js';

function changeLight(colour) {
    setCurrentState(colour);
    console.log("changed light to " + colour);
}

var additions = {
    changeGreen: function() {
        changeLight('green');
    },
    changeYellow: function() {
        changeLight('yellow');
    },
    changeRed: function() {
        changeLight('red');
    }
};

var trafficLightSequence = Object.create(machine, additions);

export default trafficLightSequence;