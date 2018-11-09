var currentState = 'idle';
var _actions = {};
var _states = {};
var _errCallback = function(){};

function init(initialState, states, actions, errorCallback){
  currentState = initialState;
  _actions = actions;
  _states = states;
  _errCallback = errorCallback;
}

function transition(state){
  if(_states[currentState][state]){
    _states[currentState][state]();
    currentState = state;
    return true;
  } else {
    _errCallback();
    return false;
  }
}

function getNextValidStates(){
  return Object.keys(_states[currentState]);
}

export {init, currentState, transition, getNextValidStates};
