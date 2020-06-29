import React, { useContext } from 'react';
import { CountContext } from '../../App_前半';

const ComponentA = () => {
	const countContext = useContext(CountContext);
	return (
		<div>
			ComponentA : {countContext.countState}
			<button onClick={() => countContext.countDispatch('INCREMENT')}>Increment</button>
			<button onClick={() => countContext.countDispatch('DECREMENT')}>Decrement</button>
			<button onClick={() => countContext.countDispatch('RESET')}>Reset</button>
		</div>
	);
};

export default ComponentA;
