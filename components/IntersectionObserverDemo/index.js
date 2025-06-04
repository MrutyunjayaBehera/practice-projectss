import React, { useEffect, useRef, useState } from 'react'

function IntersectionObserverDemo() {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				console.log('VISIBLE');
				setVisible(true);
			} else {
				console.log('INVISIBLE');
				setVisible(false);
			}
		});
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div>
			<div>IntersectionObserver</div>
			{visible ? 'VISIBLE' : 'INVISIBLE'}
			<ul
				ref={ref}
				id="list"
				onClick={(e) => {
					console.log(e.target.dataset.id)
				}}
				style={{ marginTop: '100vh' }}
			>
				<li data-id="1">Item 1</li>
				<li data-id="2">Item 2</li>
				<li data-id="3">Item 3</li>
			</ul>
		</div>
	)
}

export default IntersectionObserverDemo;