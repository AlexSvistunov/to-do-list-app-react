import React from "react";
import "./Todo.css";

const Todo = (props) => {
  return (
    <div className="todo">
      <div className="todo-left">
        <input type="checkbox"></input>
        <span>{props.text}</span>
      </div>
      <div className="todo-buttons">
        <button className="todo-buttons__edit todo-buttons__btn">
          Edit task
        </button>
        <button className="todo-buttons__delete todo-buttons__btn">
          Delete task
        </button>
      </div>
    </div>
  );
};

export default Todo;
