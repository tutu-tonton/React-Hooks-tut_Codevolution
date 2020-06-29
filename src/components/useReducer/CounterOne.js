//========================================
//  lesson 19 useReducer
//  シンプル・ミニマム構成
//  state/action オブジェクト形式でない
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

const CounterOne = () => {
	const [count, dispatch] = useReducer(countReducer, initialState);

	return (
		<div>
			<div>Count : {count}</div>
			<button onClick={() => dispatch('INCREMENT')}>Increment</button>
			<button onClick={() => dispatch('DECREMENT')}>Decrement</button>
			<button onClick={() => dispatch('RESET')}>Reset</button>
		</div>
	);
};

export default CounterOne;
