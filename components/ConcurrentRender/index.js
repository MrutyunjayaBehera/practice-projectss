"use client"

import React, { useEffect, useState, useTransition } from 'react'

/* concurrent rendering is the power of react to concurrenlt render UI meanwhile
doing expensive calc in bg
the magic tool is useTransition */

function ConcurrentRender() {
	const [posts, setPosts] = useState([]);
	const [isPending, startTransition] = useTransition();
	const [isLoading, setIsLoading] = useState(false);

	const fetchposts = async () => {
		try {
			setIsLoading(true);
			const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
			const data = await res.json();
			// non-blocking transition
			startTransition(() => {
				setPosts(data);
			})
		} catch (error) {
			console.error('error:: ', error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchposts();
	}, []);

	console.log({ posts });

	return (
		<div>
			<div>Concurrent Render</div>
			{isLoading || isPending ? (
				<div>FETCHING......</div>
			) : ''}
			{(posts || []).map((post) => {
				return (
					<div key={post.id} style={{
						border: '1px solid gray',
						borderRadius: '12px',
						padding: '12px',
						marginTop: '12px'
					}}>
						<div>{post.title}</div>
						<div>{post.body}</div>
					</div>
				)
			})}
		</div>
	)
}

export default ConcurrentRender