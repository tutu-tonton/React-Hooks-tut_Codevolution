//========================================
//  lesson20 useReducer
//  state / action オブジェクト形式
//========================================
import React, { useReducer } from 'react';

const initialState = {
	firstCounter: 0,
	secondCounter: 10,
};
const countReducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { ...state, firstCounter: state.firstCounter + action.value };
		case 'DECREMENT':
			return { ...state, firstCounter: state.firstCounter - action.value };
		case 'RESET':
			return initialState;
		case 'INCREMENT2':
			return { ...state, secondCounter: state.secondCounter + action.value };
		case 'DECREMENT2':
			return { ...state, secondCounter: state.secondCounter - action.value };
		default:
			return state;
	}
};

const CounterTwo = () => {
	const [count, dispatch] = useReducer(countReducer, initialState);

	return (
		<React.Fragment>
			<div>
				<div>first Count : {count.firstCounter}</div>
				<div>second Count : {count.secondCounter}</div>
				<button onClick={() => dispatch({ type: 'INCREMENT', value: 1 })}>Increment</button>
				<button onClick={() => dispatch({ type: 'DECREMENT', value: 1 })}>Decrement</button>
				<button onClick={() => dispatch({ type: 'INCREMENT', value: 5 })}>Increment5</button>
				<button onClick={() => dispatch({ type: 'DECREMENT', value: 5 })}>Decrement5</button>
				<button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
			</div>
			<div>
				<button onClick={() => dispatch({ type: 'INCREMENT2', value: 1 })}>Increment</button>
				<button onClick={() => dispatch({ type: 'DECREMENT2', value: 1 })}>Decrement</button>
			</div>
		</React.Fragment>
	);
};

export default CounterTwo;
