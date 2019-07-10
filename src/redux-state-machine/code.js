



function machine(state = null, action) {
	switch (action.type) {
		case 'INIT':
			let newState = Object.assign({}, state, action.config);
			return newState;
		default:
			return state;
	}
}

let trafficLight = window.Redux.createStore(machine);
trafficLight.subscribe(() => console.log(trafficLight.getState()));

const INIT_CONFIG = {
	id: 'sequencer',
	initial: "red",
	states: {
		red: {
			on: {
				TIMER: 'green'
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

trafficLight.dispatch({ type: 'INIT', config: INIT_CONFIG });