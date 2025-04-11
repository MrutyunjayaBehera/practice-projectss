import { NextResponse } from "next/server";

export async function GET(req) {
	try {
		console.log({ req });
		const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5';
		const res = await fetch(URL, { cache: 'no-store' });
		const data = await res.json();
		return NextResponse.json({ data: data }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: error }, { status: 500 });
	}
}