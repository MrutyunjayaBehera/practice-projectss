"use client";

import { useState } from "react";

export default function Posts() {
	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	// const fetchData = useCallback(async () => {
	// 	const response = await fetch('/api/limited');
	// 	const { data } = await response.json();
	// 	return data;
	// }, []);

	// const { data, error, isLoading } = useQuery({
	// 	queryKey: ['posts'],
	// 	queryFn: fetchData,
	// 	staleTime: 60000,
	// });

	const callApi = async () => {
		try {
			const res = await fetch('/api/hello');
			if (res.status === 429) {
				setError("Too many requests");
				return;
			}
			const data = await res.json();
			setMessage(data.message);
			setError('');
		} catch (error) {
			setError("⚠️ Error occurred");
		}
	}

	return (
		<div>
			<h1>Posts</h1>
			{/* <button onClick={fetchData}>FETCH DATA</button>
			{isLoading && <p>Loading...</p>}
			<ul>
				{(data || []).map((post) => (
					<li key={post.id} className="mb-8">
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</li>
				))}
			</ul> */}
			<button onClick={callApi}>TEST RATE LIMITING</button>
			{message && <p className="text-green-600 mt-2">{message}</p>}
      		{error && <p className="text-red-500 mt-2">{error}</p>}
		</div>
	)
}