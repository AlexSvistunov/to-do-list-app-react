import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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
    <>
      <Calendar value={currentDate} onChange={changeDate}></Calendar>;
      <form onSubmit={setTasks}>
        <input></input>
        <button>Add</button>
      </form>
      {tasksByDate[currentDate.toDateString()] &&
        tasksByDate[currentDate.toDateString()].map((task, index) => (
          <div key={index}>{task}</div>
        ))}
    </>
  );
};

export default App;
