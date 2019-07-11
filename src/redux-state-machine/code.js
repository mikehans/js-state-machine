function machine(state = {}, action) {
	let newState;
	switch (action.type) {
		case 'INIT':
			newState = Object.assign({}, state, action.config);
			return newState;
		case 'TRANSITION':
			let desiredTransition = state.states[state.currentState].on[action.transitionType];
			let possibleTransitions = Object.keys(state.states[state.currentState].on);
			// console.log("DEBUG DATA", possibleTransitions,  action.transitionType, desiredTransition);

			if(possibleTransitions.some((ele) => ele === action.transitionType)){
				// do the transition
				console.log('transitioning')
				newState = Object.assign({}, state, {currentState: desiredTransition});
				return newState;
			}

			return state;
		default:
			return state;
	}
}

const INIT_CONFIG = {
	id: 'sequencer',
	initial: "red",
	currentState: "red",
	states: {
		red: {
			on: {
				TIMER: 'green',
				ERROR: 'error...'
			}
		},
		yellow: {
			on: {
				TIMER: 'red'
			}
		},
		green: {
			on: {
				TIMER: 'yellow'
			}
		}
	},
	actions: {
		green: '() => sequencer.changeGreen()',
		yellow: '() => sequencer.changeYellow()',
		red: '() => sequencer.changeRed()'
	}
};

let trafficLight = window.Redux.createStore(machine);
trafficLight.subscribe(() => console.log(trafficLight.getState()));

trafficLight.dispatch({ type: 'INIT', config: INIT_CONFIG });

function transition(type){
	trafficLight.dispatch({type: 'TRANSITION', transitionType: type});
}

function getCurrentState(){
	return trafficLight.getState().currentState;
}

function listAllowedTransitions(){
	let current =  trafficLight.getState().currentState;
	let next = trafficLight.getState().states[current].on;
	return Object.keys(next);
}

transition('TIMER');
transition('TIMER');
transition('TXXXXXIMER');
console.log("Current state is", getCurrentState());
transition('TIMER');
console.log("Next", listAllowedTransitions());