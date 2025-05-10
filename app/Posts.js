"use client";

import { useState } from "react";


export default function Posts() {
	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

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
			<button onClick={callApi}>TEST RATE LIMITING</button>
			{message && <p className="text-green-600 mt-2">{message}</p>}
      		{error && <p className="text-red-500 mt-2">{error}</p>}
		</div>
	)
}