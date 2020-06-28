//========================================
//  lesson7 useEffect after render
//========================================

import React, { useState, useEffect } from 'react';

const HookCounter = () => {
	const [count, setCount] = useState(0);

	// render後にコールバック関数が実行される
	useEffect(() => {
		document.title = `You clicked ${count} times`;
	});

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Click {count} times</button>
		</div>
	);
};

export default HookCounter;
