import ConcurrentRender from "@/components/ConcurrentRender";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen text-center">
			<ConcurrentRender />
		</div>
	);
}
