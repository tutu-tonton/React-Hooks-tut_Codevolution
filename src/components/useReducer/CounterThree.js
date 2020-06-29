//========================================
//  lesson 21 Multiple useReducer
//========================================
import React, { useReducer } from 'react';

const initialState = 0;
const countReducer = (state, action) => {
	switch (action) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		case 'RESET':
			return initialState;
		default:
			return state;
	}
};

const CounterThree = () => {
	const [count, dispatch] = useReducer(countReducer, initialState);
	const [countTwo, dispatchTwo] = useReducer(countReducer, initialState);

	return (
		<React.Fragment>
			<div>
				<div>Count : {count}</div>
				<button onClick={() => dispatch('INCREMENT')}>Increment</button>
				<button onClick={() => dispatch('DECREMENT')}>Decrement</button>
				<button onClick={() => dispatch('RESET')}>Reset</button>
			</div>
			<div>
				<div>CountTwo : {countTwo}</div>
				<button onClick={() => dispatchTwo('INCREMENT')}>Increment</button>
				<button onClick={() => dispatchTwo('DECREMENT')}>Decrement</button>
				<button onClick={() => dispatchTwo('RESET')}>Reset</button>
			</div>
		</React.Fragment>
	);
};

export default CounterThree;
