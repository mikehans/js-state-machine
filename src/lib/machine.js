var _currentState = '';
var _initialState = 'idle';
var _actions = {};
var _states = {};
var _exitState = '';
var _errCallback = function(){};

function init(initialState, exitState, states, actions, errorCallback){
  _initialState = initialState;
  _exitState = exitState;
  _actions = actions;
  _states = states;
  _errCallback = errorCallback;
  reset();
}

function reset(){
  _currentState = 'reset';
  _actions.reset();
  _currentState = _initialState;
  _states.default();
  return true;
}

function transition(state){
  if(_currentState !== state){
    if(state === "error"){
      _states.error();
      return true;
    } else {
      if(_states[_currentState][state]){
        _states[_currentState][state]();
        _currentState = state;
        return true;
      } else {
        _errCallback();
        return false;
      }
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

function getEntryState(){
  return _initialState;
}

function getExitState(){
  return exitState;
}

export {init, getEntryState, getExitState, getCurrentState, reset, transition, getNextValidStates};
