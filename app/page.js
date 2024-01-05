"use client";
import React, { useState } from "react";

export default function page() {
	const [task, setTask] = useState("");
	const [desc, setDesc] = useState("");
	const [todo, setTodo] = useState([]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (task === "" && task === "") return;

		setTodo([...todo, { task, desc }]);

		setTask("");
		setDesc("");
	};
	const deleteHandler = (indexNumber) => {
		let copyTodo = [...todo];
		copyTodo.splice(indexNumber, 1);
		setTodo(copyTodo);
	};

	// if there is no task then change the style
	let todoStyle =
		todo.length === 0
			? "bg-red-200 text-red-600 font-bold text-3xl text-center"
			: " text-black font-normal text-xl";

	let renderTask = "NO Task Available...";
	if (todo.length > 0) {
		renderTask = todo.map((_t, i) => {
			return (
				<li
					key={i}
					className="list w-full rounded-md p-2 flex justify-between items-center">
					<div className="">
						<h4 className="text-reg">{_t.task}</h4>
						<h5 className="text-sm">{_t.desc}</h5>
					</div>

					<button
						className="px-2 py-1 text-sm text-white bg-red-700 rounded-md"
						onClick={() => deleteHandler(i)}>
						Delete
					</button>
				</li>
			);
		});
	}

	return (
		<div className="w-full h-full flex flex-col justify-center gap-1 items-center">
			<h1 className="text-3xl font-bold">TO-DO LIST</h1>

			<form
				onSubmit={submitHandler}
				className=" md: w-1/2  p-2 h-[200px] flex flex-col justify-center gap-2 bg-blue-100 items-center">
				<input
					type="txxt"
					placeholder="Enter Task Here"
					className=" w-full border-2 border-blue-600 outline-none p-2 rounded-sm placeholder:text-gray-500"
					value={task}
					onChange={(e) => {
						setTask(e.target.value);
					}}
				/>

				<textarea
					type="text"
					placeholder="Description"
					className=" w-full h-full border-2 border-blue-600 outline-none p-2 rounded-sm  placeholder:text-gray-500"
					value={desc}
					onChange={(e) => {
						setDesc(e.target.value);
					}}
				/>

				<button className="bg-blue-600 p-2 rounded-sm font-semibold text-white">
					Add Task
				</button>
			</form>
			<div className="my-8 w-1/2 relative flex justify-center items-center">
				<hr className="h-1 w-full bg-blue-950 " />
				<h3 className="rounded-full absolute w-[40px] h-[40px] grid place-items-center bg-blue-950 text-white">
					{todo.length}
				</h3>
			</div>

			{/* Tasks */}
			<div
				className={` ${todoStyle} w-1/2 p-3 flex flex-col justify-center items-center`}>
				<ul className="w-full flex flex-col gap-y-2 justify-center">
					{renderTask}
				</ul>
			</div>
		</div>
	);
}
