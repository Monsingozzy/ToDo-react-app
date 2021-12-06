import React, { useState } from "react";
import "./task.scss";
import DayPickerInput from "react-day-picker/DayPickerInput";
import dateFnsFormat from "date-fn/Format";

import "react-day-picker/lib/style.css";
import { setDate, setDay } from "date-fns";

const FORMAT = "dd/mm/yyyy";

const Addtask = ({ onCancel, onAddTask }) => {
  const [Task, setTask] = useState("");
  const [Date, setDate] = useState(null);
  return (
    <div className="add-task-dailog">
      <input value={Task} onChange={(event) => setTask(event.target.value)} />
      <div className="add-task-action-container">
        <div className="btn-container">
          <button
            className="add-btn"
            onClick={() => {
              onAddTask(Task);
              onCancel();
            }}
          >
            Add task
          </button>

          <button className="cancel-btn" onClick={() => onCancel()}>
            Cancel
          </button>
        </div>
        <div className="icon-container">
          <DayPickerInput
            onDaychange={(day) => setDate(day)}
            placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
          />
        </div>
      </div>
    </div>
  );
};

const Task = () => {
  const [showAddTask, setshowAddTask] = useState(false);

  const [tasks, settasks] = useState([]);

  const addNewTask = (text) => {
    settasks((prevstate) => [...prevstate, text]);
  };

  return (
    <div className="task-bar">
      <h1>Inbox</h1>

      <div className="add-class-btn" onClick={() => setshowAddTask((e) => !e)}>
        <span className="plus">+</span>
        <span className="add-text">Add task</span>
      </div>
      {showAddTask && (
        <Addtask
          onAddTask={addNewTask}
          onCancel={() => setshowAddTask(false)}
        />
      )}
      {tasks.length > 0 ? tasks.map((task) => <p>{task}</p>) : "no taskes"}
    </div>
  );
};
export default Task;
