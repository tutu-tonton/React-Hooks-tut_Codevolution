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
import CounterOne from './components/useReducer/CounterOne';

function App() {
	return (
		<div className="App">
			<CounterOne />

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
	);
}

export default App;
