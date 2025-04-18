"use client";
import { initialFileStructure } from "@/constants/projectStructure";
import { useMemo, useState } from "react";

const IMAGE_MAPPING = {
	file: "📄",
	folder: "📁",
};

// 🔁 Recursive Tree Component
const RecursiveNodeTree = ({ data }) => {
	const [open, setOpen] = useState(true); // auto open for filtered

	const hasChildren = data.children && data.children.length > 0;

	return (
		<div>
			<div
				onClick={() => setOpen(!open)}
				style={{
					background: "#221f20",
					color: "white",
					padding: "4px",
					cursor: "pointer",
				}}
			>
				{IMAGE_MAPPING[data.type]} {data.name}
			</div>

			{hasChildren && open && (
				<div style={{ marginLeft: "20px" }}>
					{data.children.map((child) => (
						<RecursiveNodeTree key={child.name} data={child} />
					))}
				</div>
			)}
		</div>
	);
};

// 🧠 Filter tree based on search
const filterTree = (node, searchTerm) => {
	if (!searchTerm) return node;

	if (node.type === "file") {
		return node.name.toLowerCase().includes(searchTerm.toLowerCase())
			? node
			: null;
	}

	const filteredChildren = node.children
		?.map((child) => filterTree(child, searchTerm))
		.filter(Boolean);

	if (filteredChildren && filteredChildren.length > 0) {
		return {
			...node,
			children: filteredChildren,
		};
	}

	return null;
};

export default function SpinnyTechRound1() {
	const [searchVal, setSearchVal] = useState("");

	const filteredStructure = useMemo(() => {
		const filtered = filterTree(initialFileStructure, searchVal);
		return filtered || null;
	}, [searchVal]);

	return (
		<div
			style={{
				height: "90vh",
				width: "30vw",
				background: "#121212",
				color: "white",
				padding: "20px",
			}}
		>
			<input
				type="text"
				placeholder="Search files..."
				value={searchVal}
				onChange={(e) => setSearchVal(e.target.value)}
				style={{
					width: "100%",
					padding: "10px",
					marginBottom: "20px",
					fontSize: "16px",
				}}
			/>

			{filteredStructure ? (
				<RecursiveNodeTree data={filteredStructure} />
			) : (
				<div>No matching files found</div>
			)}
		</div>
	);
}
