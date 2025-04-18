export const initialFileStructure = {
	name: 'root',
	type: 'folder',
	children: [
		{
			name: 'src',
			type: 'folder',
			children: [
				{
					name: 'components',
					type: 'folder',
					children: [
						{ name: 'Header.tsx', type: 'file' },
						{ name: 'Footer.tsx', type: 'file' },
					],
				},
				{
					name: 'screens',
					type: 'folder',
					children: [
						{ name: 'HomeScreen.tsx', type: 'file' },
						{ name: 'ProfileScreen.tsx', type: 'file' },
					],
				},
				{
					name: 'utils',
					type: 'folder',
					children: [
						{ name: 'helpers.ts', type: 'file' },
						{ name: 'constants.ts', type: 'file' },
					],
				},
				{ name: 'App.tsx', type: 'file' },
				{ name: 'index.tsx', type: 'file' },
			],
		},
		{
			name: 'assets',
			type: 'folder',
			children: [
				{
					name: 'images',
					type
						: 'folder',
					children: [
						{ name: 'logo.png', type: 'file' },
						{ name: 'background.jpg', type: 'file' },
					],
				},
				{
					name: 'fonts',
					type: 'folder',
					children: [
						{ name: 'Roboto-Regular.ttf', type: 'file' },
						{ name: 'Roboto-Bold.ttf', type: 'file' },
					],
				},
			],
		},
		{
			name: 'tests',
			type: 'folder',
			children: [
				{ name: 'App.test.tsx', type: 'file' },
				{ name: 'utils.test.ts', type: 'file' },
			],
		},
		{ name: '.gitignore', type: 'file' },
		{ name: 'package.json', type: 'file' },
		{ name: 'tsconfig.json', type: 'file' },
	],
};