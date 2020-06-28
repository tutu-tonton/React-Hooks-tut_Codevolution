//========================================
//  lesson17 userContext
//  userContext使った方法
//========================================
import React, { useContext } from 'react';
import ComponentF from './ComponentF';
import { UserContext, ChannelContext } from '../../App';

const ComponentE = () => {
	const user = useContext(UserContext);
	const channel = useContext(ChannelContext);
	return (
		<div>
			{user} - {channel}
			{/* contextAPIを使った書き方を確認した */}
			{/* <ComponentF /> */}
		</div>
	);
};

export default ComponentE;
