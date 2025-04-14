"use client";

import { useState } from "react";
import { CheckCircle, Trash2 } from "lucide-react";
import styles from "./todo.module.css";

export default function Todo() {
	const [todos, setTodos] = useState([
		{ id: 1, text: "Learn Next.js", completed: false },
		{ id: 2, text: "Build a Todo App", completed: false },
		{ id: 3, text: "Deploy to Vercel", completed: false },
	]);
	const [newTodo, setNewTodo] = useState("");

	const addTodo = () => {
		if (newTodo.trim() === "") return;
		const newTask = { id: Date.now(), text: newTodo, completed: false };
		setTodos((prev) => [...prev, newTask]);
		setNewTodo("");
	};

	const toggleTodo = (id) => {
		setTodos((prev) =>
			prev.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const deleteTodo = (id) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Todo List</h1>
			<div className={styles.inputContainer}>
				<input
					type="text"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					placeholder="Add a new task"
					className={styles.input}
				/>
				<button onClick={addTodo} className={styles.addButton}>Add</button>
			</div>
			<ul className={styles.todoList}>
				{todos.map((todo) => (
					<li key={todo.id} className={`${styles.todoItem} ${styles.animate}`}>
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => toggleTodo(todo.id)}
						/>
						<span
							className={
								todo.completed ? styles.completed : ""
							}
						>
							{todo.text}
						</span>
						<CheckCircle className={styles.icon} />
						<button
							onClick={() => deleteTodo(todo.id)}
							className={styles.deleteButton}
						>
							<Trash2 className={styles.icon} />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}