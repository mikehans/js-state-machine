//import trafficLight from './trafficLightOperation.js';
// import Sequencer from './trafficLightSequence.js';

const trafficLightConfig = Object.create(trafficLight);

console.log(trafficLightConfig);
trafficLightConfig.transition("RESET");
trafficLightConfig.transition("asdf");
trafficLightConfig.transition('error');

// const sequencerConfig = {
//     id: 'sequencer',
//     initial: "red",
//     states: {
//         red: {
//             on: {
//                 TIMER: 'green'
//             }
//         },
//         yellow: {
//             on: {
//                 TIMER: 'red'
//             }
//         },
//         green: {
//             on: {
//                 TIMER: 'yellow'
//             }
//         }
//     },
//     actions: {
//         green: changeGreen,
//         yellow: changeYellow,
//         red: changeRed
//     }
// };


// let sequencer = new Sequencer();

// trafficLight.init(trafficLight.config);
// sequencer.init(sequencer.config);
// trafficLight.createCompoundState('normal', sequencer);
// console.log('transition...');
// console.log(trafficLight.listNext());
// trafficLight.transition('TIMER');


// console.log(trafficLight.compoundStates);

