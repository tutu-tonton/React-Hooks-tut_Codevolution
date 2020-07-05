import React, { useContext } from 'react';
import { CountContext } from '../../App_firstHalf';

const ComponentF = () => {
	const countContext = useContext(CountContext);
	return (
		<div>
			ComponentF : {countContext.countState}
			<button onClick={() => countContext.countDispatch('INCREMENT')}>Increment</button>
			<button onClick={() => countContext.countDispatch('DECREMENT')}>Decrement</button>
			<button onClick={() => countContext.countDispatch('RESET')}>Reset</button>
		</div>
	);
};

export default ComponentF;
