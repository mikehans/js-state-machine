// Models a finite state machine that forms part of a larger statechart

let machine = {
  init: function (config) {
    this.config = config;
    this.currentState = config.initial;
  }
  // allow transitioning from one state to the next
  , transition: function (ev) {
    var cs;
    try {
      cs = this.currentState;

      var a = this.config.states[this.currentState].on[ev.toUpperCase()];
      this.config.actions[a]();

      // check for compound state
    } catch (e) {
      console.log("Invalid transition: " + ev);
      console.log(e);
      console.log('recovering state...');
      this.currentState = cs;
      console.log('Current state: ' + this.currentState);
    }
  }
  , listNext: function () {
    return Object.keys(this.config.states[this.currentState].on);
  }
  , getCurrentState: function () {
    return this.currentState;
  }
  , setCurrentState: function (val) {
    this.currentState = val;
    // check _compoundStates - _currentState is a matching key
    // if so enter the matching and look for an initial or history state
  }
  /*,
  createCompoundState: function(mountPoint, machine) {
    this.compoundStates[mountPoint] = machine;
    // I think there should be only 1 machine per mountPoint
  }
  */
};

//export default machine;
