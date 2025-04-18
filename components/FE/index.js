"use client";
import React, { useState } from 'react';


const initialFolderStructure = [
	{
		name: 'folder1',
		type: 'folder',
		children: [
			{
				name: 'page.js',
				type: 'file'
			},
			{
				name: 'layout.js',
				type: 'file'
			}
		]
	},
	{
		name: 'components',
		type: 'folder',
		children: [
			{
				name: 'Button.js',
				type: 'file'
			},
			{
				name: 'Navbar.js',
				type: 'file'
			},
			{
				name: 'Form',
				type: 'folder',
				children: [
					{
						name: 'Input.js',
						type: 'file'
					},
					{
						name: 'Select.js',
						type: 'file'
					}
				]
			},
		]
	},
	{
		name: 'package.json',
		type: 'file'
	}
];

const TreeNode = ({ data }) => {
	const [open, setOpen] = useState('');
	const hasChildren = data.children && data.children.length > 0;
	console.log({ open });
	return (
		<div style={{ margin: '20px', cursor: 'pointer' }}>
			<div onClick={() => {
				console.log(data?.name);
				if (hasChildren && !open) {
					setOpen(data?.name);
				} else {
					setOpen('');
				}
			}}>
				{hasChildren ? '📁' : '📄'} {data.name}
			</div>
			{hasChildren && open ? (
				<div>
					{data?.children?.map((item, index) => {
						return (
							<TreeNode key={index} data={item} />
						)
					})}
				</div>
			) : null}
		</div>
	)
};

function FE() {
	const [folderStructure, setfolderStructure] = useState(initialFolderStructure);

	const addItem = (type) => {
		const name = prompt(`Enter ${type} name:`);
		if (!name) return;
	
		const newItem = { name, type };
		if (type === 'folder') newItem.children = [];
	
		setfolderStructure([...folderStructure, newItem]);
	};
	
	return (
		<div>
			<div style={{ marginBottom: 10, cursor: 'pointer' }}>
				<button onClick={() => addItem('file')}>📄 Add File</button>
				<button onClick={() => addItem('folder')}>📁 Add Folder</button>
			</div>
			{folderStructure.map((data, index) => {
				return (
					<TreeNode key={index} data={data} />
				)
			})}
		</div>
	)
}

export default FE