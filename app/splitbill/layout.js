import React from 'react';
import './splitbill.css';

function layout({ children }) {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen text-center gap-4">
			{children}
		</div>
	)
}

export default layout