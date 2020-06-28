//========================================
//  lesson3 useState with previous state
//========================================

import React, { useState } from 'react';

const HookCounterTwo = () => {
	const initialCount = 0;
	const [count, setCount] = useState(initialCount);

	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount((prevCount) => prevCount + 1);
			// これだと1しか増えない <- 非同期処理だから
			// setCount(count + 1);
		}
	};

	return (
		<div>
			<h3>Count: {count}</h3>
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
			{/* setterには関数を与える */}
			{/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
			{/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
			<button onClick={incrementFive}>Increment 5</button>
		</div>
	);
};

export default HookCounterTwo;
