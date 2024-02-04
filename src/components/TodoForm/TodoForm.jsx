import React from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoBtn from "../TodoBtn/TodoBtn";
import './TodoForm.css'

const TodoForm = () => {
  return (
    <>
      <form className="todo-form">
        <TodoInput />
        <TodoBtn />
      </form>
    </>
  );
};

export default TodoForm;
