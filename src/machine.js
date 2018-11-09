var currentState = '';
var _initialState = 'idle';
var _actions = {};
var _states = {};
var _errCallback = function(){};

function init(initialState, states, actions, errorCallback){
  _initialState = initialState;
  _actions = actions;
  _states = states;
  _errCallback = errorCallback;
  reset();
}

function reset(){
  currentState = 'reset';
  _actions.reset();
  currentState = _initialState;
  _actions[currentState]();
  return true;
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

export {init, currentState, reset, transition, getNextValidStates};
