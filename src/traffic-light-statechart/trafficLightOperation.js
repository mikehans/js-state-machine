import machine from './machine.js';

let trafficLight = Object.create(machine);

trafficLight.testMe = 6;
trafficLight.doReset = function () {
  console.log("ON TEST! - resetting...");
  trafficLight.setCurrentState('normal');
};

trafficLight.doError = function () {
  console.log("Error! Oh noes! flashing yellow light.......");
  trafficLight.setCurrentState('error');
};

trafficLight.init({
  id: "lightController",
  initial: "error",
  states: {
    normal: {
      on: {
        ERROR: "error"
      },
      type: 'compound',
      typeid: 'sequencer'
    },
    error: {
      entry: {
      },
      exit: {
      },
      on: {
        RESET: "reset"
      }
    }
  },
  actions: {
    reset: () => trafficLight.doReset(),
    error: () => trafficLight.doError()
  }
});

// console.log("trafficLightOperation - showing trafficLight");
// console.log(trafficLight);
// console.log("=========================================");

export default trafficLight;