import React from 'react';
import './App.css';
// import ClassCounter from './components/ClassCounter.component';
// import HookCounter from './components/HookCounter.component';
// import HookCounterTwo from './components/HookCounterTwo.component';
// import HookCounterThree from './components/HookCounterThree.component';
// import HookCounterFour from './components/HookCounterFour.component';
// import ClassCounterOne from './components/ClassCounterOne';
import HookCounter from './components/HookCounter';

function App() {
	return (
		<div className="App">
			<HookCounter />
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
