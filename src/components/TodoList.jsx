import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delTood, editTodo } from "../redux/TodoSclicce";
import { addListener } from "@reduxjs/toolkit";

function TodoList() {
  const dispatch = useDispatch();
  const Todos = useSelector((ombor) => ombor.todos);

  return (
    <>
      <span className="text-center font-bold text-4xl text-blue-600">
        TASKS
      </span>
      <div className="w-full p-4 bg-red-700 flex flex-col gap-2">
        {Todos.map((todo, i) => (
          <span
            className="flex gap-2 text-blue-950 relative content-center items-center text-lg bg-cyan-400  w-[100]  rounded p-3 font-semibold"
            key={todo.id}
          >
            {i + 1}) {todo.text}
            <div className="absolute right-3 top-2 flex gap-1">
              <button
                onClick={() => dispatch(delTood(todo.id))}
                className="bg-transparent hover:bg-cyan-600  p-1 rounded px-2"
              >
                <img src="./delete.svg" className="w-7" alt="" />
              </button>
              <button
                onClick={() => dispatch(editTodo(todo.id))}
                className="bg-transparent hover:bg-cyan-600 p-1 rounded px-2"
              >
                <img src="./edit.svg" className="w-7" alt="" />
              </button>
            </div>
          </span>
        ))}
      </div>
    </>
  );
}

export default TodoList;
