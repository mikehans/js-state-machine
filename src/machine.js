var currentState = 'idle';
var actions = {};
var states = {};

function init(initialState, states, actions){
  currentState = initialState;
  actions = actions;
  states = states;
}

function transition(state){
  if(stateMap[currentState][state]){
    stateMap[currentState][state]();
    currentState = state;
    return true;
  } else {
    return false;
  }
}

function getNextValidStates(){
  return Object.keys(states[currentState]);
}

export {init, currentState, transition, getNextValidStates};