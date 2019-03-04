// Models a finite state machine that forms part of a larger statechart
let _config = {};
let _currentState = '';
let _compoundStates = {};

function init(config){
  _config = config;
  _currentState = _config.initial;
}

// allow transitioning from one state to the next
function transition(ev){
  try{
    var a = _config.states[_currentState].on[ev.toUpperCase()];
    _config.actions[a]();
    
    // check for compound state
    if(a.type && a.type === 'compound'){
      console.log("COMPOUND STATE"); 
      console.log(_compoundStates[_currentState]);
    }
  } catch(e){
    console.log(e);
    // console.log("Illegal transition: No '" + ev + "' action on '" + _currentState + "' state");
  }
}

function listNext(){
  return Object.keys(_config.states[_currentState].on);
}

function setCurrentState(state){
  _currentState = state;
  
  // check _compoundStates - _currentState is a matching key
  // if so enter the matching and look for an initial or history state
}

function getCurrentState(){
  return _currentState;
}

function createCompoundState(mountPoint, machine){
   _compoundStates[mountPoint] = machine;
   // I think there should be only 1 machine per mountPoint
}

export {init, transition, listNext, setCurrentState, getCurrentState, _config as config, _compoundStates as compoundStates, createCompoundState};