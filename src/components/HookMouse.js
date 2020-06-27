//========================================
//  lesson9 Run effects only once
//  lesson10 useEffect with cleanup
//========================================

import React, { useState, useEffect } from 'react';

const HookMouse = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMousePosition = (e) => {
		console.log('Mouse event');
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		console.log('useEffect called');
		window.addEventListener('mousemove', logMousePosition);
		// cleanup: アンマウント時には解除する
		return () => {
			console.log('Component unmounting code');
			window.removeEventListener('mousemove', logMousePosition);
		};
	}, []);

	return (
		<div>
			Hooks X - {x} Y - {y}
		</div>
	);
};

export default HookMouse;
