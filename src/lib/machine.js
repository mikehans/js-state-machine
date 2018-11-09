var _currentState = '';
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
  _currentState = 'reset';
  _actions.reset();
  _currentState = _initialState;
  _actions[_currentState]();
  return true;
}

function transition(state){
  if(_currentState !== state){
    if(_states[_currentState][state]){
      _states[_currentState][state]();
      _currentState = state;
      return true;
    } else {
      _errCallback();
      return false;
    }
  } else {
    return false;
  }
}

function getNextValidStates(){
  return Object.keys(_states[_currentState]);
}

function getCurrentState(){
  return _currentState;
}

export {init, getCurrentState, reset, transition, getNextValidStates};
