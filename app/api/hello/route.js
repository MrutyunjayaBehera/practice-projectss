import { NextResponse } from "next/server";

const ipRateLimitMap = new Map();

export async function GET(req) {
	try {
		const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
		const now = Date.now();
		const limit = 5;
		const interval = 60 * 1000;
		const entry = ipRateLimitMap.get(ip) || { count: 0, lastRequestTime: now };
		if (now - entry.lastRequestTime < interval) {
			if (entry.count >= limit) {
				return NextResponse.json({ error: "Too many requests" }, { status: 429 });
			}
			entry.count++;
		} else {
			entry.count = 1;
			entry.lastRequestTime = now;
		}
		console.log({ ip });
		ipRateLimitMap.set(ip, entry);
		return NextResponse.json({ message: 'You are within the limit' }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}