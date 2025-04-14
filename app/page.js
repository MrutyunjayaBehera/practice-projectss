import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen text-center">
			<Link
				href="/splitbill"
				className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-2 rounded-md shadow-md hover:scale-105 hover:shadow-lg transition-transform"
			>
				SPLIT BILL
			</Link>
			<Link
				href="/todo"
				className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-6 py-2 rounded-md shadow-md hover:scale-105 hover:shadow-lg transition-transform mt-4"
			>
				TODO
			</Link>
		</div>
	);
}
