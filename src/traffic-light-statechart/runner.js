import * as trafficLight from './trafficLightOperation.js';
import * as sequencer from './trafficLightSequence.js';

trafficLight.init(trafficLight.config);
// sequencer.init(sequencer.config);
trafficLight.createCompoundState('normal', sequencer);
console.log('transition...');
console.log(trafficLight.listNext());
trafficLight.transition('TIMER');

// console.log(trafficLight.compoundStates);

