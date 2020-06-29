import React from 'react';
import './App.css';
// ===== useState =====
// import HookCounter from './components/HookCounter.component';
// import HookCounterTwo from './components/HookCounterTwo.component';
// import HookCounterThree from './components/HookCounterThree.component';
// import HookCounterFour from './components/HookCounterFour.component';
// import HookCounter from './components/HookCounter';
// import HookCounterOne from './components/HookCounterOne';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import DataFetching from './components/useEffect/DataFetching';
// ===== useContext =====
// import ComponentC from './components/useContext/ComponentC';
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
// ===== useReducer =====
// import CounterOne from './components/useReducer/CounterOne';
// import CounterTwo from './components/useReducer/CounterTwo';
// import CounterThree from './components/useReducer/CounterThree';
// ===== useReducer with useContext =====
import { useReducer } from 'react';
import ComponentA from './components/useReducerWithUseContext/ComponentA.js';
import ComponentB from './components/useReducerWithUseContext/ComponentB.js';
import ComponentC from './components/useReducerWithUseContext/ComponentC.js';

export const CountContext = React.createContext();

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

function App() {
	const [count, dispatch] = useReducer(countReducer, initialState);
	return (
		<CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
			<div className="App">
				Count : {count}
				<ComponentA />
				<ComponentB />
				<ComponentC />
				{/* ===== useReducer ===== */}
				{/* <CounterThree /> */}
				{/* <CounterTwo /> */}
				{/* <CounterOne /> */}
				{/* ===== useContext ===== */}
				{/* <UserContext.Provider value={'Vishwas'}>
				<ChannelContext.Provider value={'Codevolution'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider> */}
				{/* ===== useEffect ===== */}
				{/* <DataFetching /> */}
				{/* <IntervalHookCounter /> */}
				{/* <MouseContainer /> */}
				{/* <HookMouse /> */}
				{/* <HookCounterOne /> */}
				{/* <HookCounter /> */}
				{/* <ClassCounterOne /> */}
				{/* ===== useState ===== */}
				{/* <HookCounterFour /> */}
				{/* <HookCounterThree /> */}
				{/* <HookCounterTwo /> */}
				{/* <HookCounter /> */}
				{/* <ClassCounter /> */}
			</div>
		</CountContext.Provider>
	);
}

export default App;
