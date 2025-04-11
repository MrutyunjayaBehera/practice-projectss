import Posts from "./Posts";

export default function Home() {
	return (
		<div>
			<h2>Render number: {Math.random()}</h2>
			<Posts />
		</div>
	);
}
