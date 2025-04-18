const _ = require('lodash');


// const serverFood = (food) => {
// 	console.log("food being served:: ", food)
// }

// const orderFood = (callback) => {
// 	console.log("order placed");
// 	// waiter give order to chef
// 	setTimeout(() => {
// 		console.log('food is ready');
// 		callback("pizza 🍕");
// 	}, 3000);
// 	console.log("waiter moves to other customers");
// }

// orderFood(serverFood);
// console.log("Meanwhile, you can browse your phone 📱.");

// =========================== LRU ==================================
/* const createLRUCache = (capacity) => {
	const cache = new Map();

	const get = (key) => {
		if (!cache.has(key)) {
			return -1;
		}
		const value = cache.get(key);
		cache.delete(key);
		cache.set(key, value);
		return value;
	}

	const put = (key, value) => {
		if (cache.has(key)) {
			cache.delete(key);
		} else if (cache.size >= capacity) {
			const arr = Array.from(cache.keys());
			const lu = arr[0];
			cache.delete(lu);
		}
		cache.set(key, value);
	}

	return {
		cache,
		get,
		put
	}
}

const lru = createLRUCache(2);
lru.put(1, 'A');
lru.put(2, 'B');
lru.get(1);
lru.get(2);
lru.put(3, 'C');
console.log(lru.cache); */


// // ==============================Promise==============
// const fetchMultipleUsers = async () => {
// 	try {
// 		let urls = [
//             "https://jsonplaceholder.typicode.com/users/1",
//             "https://jsonplaceholder.typicode.com/users/2",
//             "https://jsonplaceholder.typicode.com/users/3"
// 		];
// 		// all promises
// 		const allPromises = urls.map((url) => fetch(url));
// 		const responses = await Promise.all(allPromises);
// 		// responses are still promises, we need response.json() which is async
// 		const users = await Promise.all(responses.map((res) => res.json()));
// 		console.log({ users });
// 	} catch (error) {
// 		console.log('error:: ', error);
// 	}
// }

// fetchMultipleUsers();

// PROMISE==============================================
// const p1 = new Promise((resolve) => resolve(10));
// const p2 = new Promise((resolve) => setTimeout(() => {
// 	resolve(20);
// }, 1000));
// const p3 = new Promise((_, reject) => reject('Error'));

// Promise.allSettled([p1, p2, p3])
// 	.then((results) => console.log('results:: ', results))
// 	.catch((err) => console.log({ err }));


// ======PROMISE.ALL======================
// const p1 = new Promise((resolve) => resolve(10));
// const p2 = new Promise((resolve) => setTimeout(() => {
// 	resolve(20);
// }, 1000));
// const p3 = new Promise((_, reject) => reject('Error'));

// const customPromiseAll = (promises) => {
// 	return new Promise((resolve, reject) => {
// 		let results = [];
// 		let completedPromises = 0;

// 		if (promises.length === 0) {
// 			resolve([]);
// 		}

// 		promises.forEach((prom, index) => {
// 			// convert all items into a promise
// 			Promise.resolve(prom)
// 				.then((res) => {
// 					results[index] = res;
// 					completedPromises++;
// 					if (promises.length === completedPromises) {
// 						resolve(results);
// 					}
// 				})
// 				.catch((err) => {
// 					reject(err)
// 				})
// 		})
// 	})
// };

// customPromiseAll([p1, p2])
// 	.then((res) => console.log('response:: ', res))
// 	.catch((err) => console.log('error:: ', err));


// =================DEEP COPY and SHALLOW COPY===================
// const obj1 = { name: 'Alice', address: { city: 'New York' } };
// // shallow copy - copies reference of nested object to new hash
// const obj2 = { ...obj1 };
// // changing val of nested hash, changes the original hash(obj1)
// obj2.address.city = 'Miami';
// // instead do a deep clone
// const obj4 = JSON.parse(JSON.stringify(obj1));
// // if nested obj contains functions or date types, it wont work, use lodash
// const obj3 = _.cloneDeep(obj1);
// obj3.address.city = 'Virginia';
// console.log({ obj1, obj2, obj3, obj4 });


// =================Object.freeze(), Object.seal(), and Object.preventExtensions() in JavaScript========================
// const obj1 = { name: 'Alice', age:21 };
// makes object immutable
// Object.freeze(obj1);
// obj1.name = 'choco';
// console.log({ obj1 });
// only properties can be modified, use when you only want to maintain hash structure
// Object.seal(obj1);
// obj1.name = 'Chetak';
// obj1.city = 'Jodhpur';
// console.log({ obj1 });
// can only modify and delete existing properties
// Object.preventExtensions(obj1);
// obj1.name = 'Raghav';
// delete obj1.age;
// obj1.city = 'Miami';
// console.log({ obj1 });


// ================================= SSG, ISR, SSR in Nextjs ==================================


// ========================== CLOSURES =============================
/* 
	callbacks are functions that are passed to other function as an argument
	- for better sequential control
	- for better code readability
	- for handling async functions better
	Closures are functions that have access to variables in their outer scope, even
	after the outer function has returned.
	- for encapsulation
	- for data privacy
	- for better code readability
	- for handling async functions better
*/
/* const normalFunction = () => {
	let arr = new Array(1000000).fill('❤️');
	return function inner() {
		console.log(arr[0]);
		arr = null;
	};
};
const fixedFunc = normalFunction();
fixedFunc(); */


// ========================== PROTOTYPE INHERITANCE =============================
// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 21);
// map.set('city', 'New York');
// console.log(map);
// console.log(map.get('age'));


// ========================== REVERSE VOWELS====================================
/* var reverseVowels = function(s) {
	const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
	const arr = s.split('');
	let left = 0; let right = s.length - 1;
	while (left < right) {
		while (!vowels.has(arr[left])) {
			left++;
		}
		while (!vowels.has(arr[right])) {
			right--;
		}
		[arr[left], arr[right]] = [arr[right], arr[left]];
		left++;
		right--;
	}
	console.log(arr.join(''));
	return arr.join('');
};
reverseVowels('AceCreIm'); */


// ======================================REVERSE WORDS IN A SENTENCE==================
/* var reverseWords = function (s) {
	const arr = s.trim().replace(/\s+/g, ' ').split(' ');
	if (arr.length === 0) {
		return '';
	}

	let left = 0; let right = arr.length - 1;
	while (left < right) {
		[arr[left], arr[right]] = [arr[right], arr[left]];
		left++;
		right--;
	}
	console.log(arr.join(' '))
	return arr.join(' ');
};
reverseWords('a good   example'); */


// =============================Product of array except self============================
/* var productExceptSelf = function (nums) {
	let pr = 1;
	let res = [];
	let zeroCount = 0;
	for (let i = 0; i <= nums.length - 1; i++) {
		if (nums[i] === 0) {
			zeroCount++;
		}
	}
	if (zeroCount === 1) {
		for (let i = 0; i <= nums.length - 1; i++) {
			if (nums[i] !== 0) {
				res[i] = 0;
			} else {
				for (let i = 0; i <= nums.length - 1; i++) {
					if (nums[i] !== 0) {
						pr *= nums[i];
					}
				}
			}
		};
		console.log({ res, pr });
		return res;
	}
	if (zeroCount > 1) {
		for (let i = 0; i <= nums.length - 1; i++) {
			res[i] = 0;
		}
	} else {
		for (let i = 0; i <= nums.length - 1; i++) {
			pr *= nums[i];
		}
		for (let i = 0; i <= nums.length - 1; i++) {
			res[i] = pr / (nums[i]);
		}
	}
	return res;
};
productExceptSelf([-1, 1, 0, -3, 3]); */


// =================================== SORTING ALGORITHM ============================
// find the smallest and put it in left start from i = 0
/* const selectionSort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
	}
	return arr;
}; */
/* const insertionSort = (arr) => {
	const n = arr.length;
	for (let i = 0; i < n; i++) {
		let key = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = key;
	}
	return arr;
} */
/* const mergeSort = (arr) => {
	const n = arr.length;
	if (n <= 1) {
		return arr;
	}
	return arr;
}
const res = mergeSort([29, 10, 14, 37, 14]);
console.log({ res }); */


