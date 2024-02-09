import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Aside from "./Aside/Aside";
import Todo from "./Todo/Todo";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasksByDate, setTasksByDate] = useState({});

  const changeDate = (e) => {
    setCurrentDate(e);
  };

  console.log(tasksByDate);

  const setTasks = (e) => {
    e.preventDefault();
    setTasksByDate((prev) => ({
      ...prev,
      [currentDate.toDateString()]: [
        ...(prev[currentDate.toDateString()] || []),
        e.target[0].value,
      ],
    }));
  };

  return (
    <div className="App">
      <div className="aside">
        {" "}
        <Calendar value={currentDate} onChange={changeDate}></Calendar>
        <h3>Today's tasks: </h3>
        <form onSubmit={setTasks}>
          <input></input>
          <button>Add</button>
        </form>
      </div>

      <div className="right">
        <h2>Список дел на {currentDate.toDateString()} число</h2>
        <div className="todos">
          {tasksByDate[currentDate.toDateString()] &&
            tasksByDate[currentDate.toDateString()].map((task, index) => (
              <Todo key={index} text={task}></Todo>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
