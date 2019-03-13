import trafficLight from './trafficLightOperation.js';
import sequencer from './trafficLightSequence.js';

const trafficLightConfig = Object.create(trafficLight);

console.log("configurator - showing trafficLightConfig");
console.log(trafficLightConfig);
console.log("=========================================");
console.log("RUNNING..................................");
trafficLightConfig.transition("RESET");
console.log("Current state: " + trafficLightConfig.currentState);
trafficLightConfig.transition("asdf");
console.log("Current state: " + trafficLightConfig.currentState);
trafficLightConfig.transition('error');
console.log("Current state: " + trafficLightConfig.currentState);

let seq = Object.create(sequencer);

console.log("SEQUENCER");
console.log(seq);
seq.transition("TIMER");
console.log("Current state: " + seq.currentState);
seq.transition("TIMER");
console.log("Current state: " + seq.currentState);
seq.transition("TIMER");
console.log("Current state: " + seq.currentState);
seq.transition("TIMER");
console.log("Current state: " + seq.currentState);
seq.transition("TIMER");
console.log("Current state: " + seq.currentState);
seq.transition("TIMER");
console.log("Current state: " + seq.currentState);

// trafficLight.init(trafficLight.config);
// sequencer.init(sequencer.config);
// trafficLight.createCompoundState('normal', sequencer);
// console.log('transition...');
// console.log(trafficLight.listNext());
// trafficLight.transition('TIMER');


// console.log(trafficLight.compoundStates);

export default trafficLightConfig;