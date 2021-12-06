import React, { useState } from "react";
import "./task.scss";
import DayPickerInput from "react-day-picker/DayPickerInput";
import dateFnsFormat from "date-fns/format";
import "react-day-picker/lib/style.css";

import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";
import addDays from "date-fns/addDays";
import isToday from "date-fns/isToday";

const FORMAT = "dd/MM/yyyy";
function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

const Addtask = ({ onCancel, onAddTask }) => {
  const [Task, setTask] = useState("");
  const [date, setDate] = useState(null);
  return (
    <div className="add-task-dailog">
      <input value={Task} onChange={(event) => setTask(event.target.value)} />
      <div className="add-task-action-container">
        <div className="btn-container">
          <button
            disabled={!Task}
            className="add-btn"
            onClick={() => {
              onAddTask(Task, date);
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
            formatDate={formatDate}
            format={FORMAT}
            dayPickerProps={{
              modifiers: {
                disabled: [{ before: new Date() }],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

const T_Header_MAPP = {
  INBOX: "Inbox",
  TODAY: "Today",
  NEXT_7: "Next 7 days",
};

const TaskITems = ({ selectedTab, tasks }) => {
  let tasktoRender=[...tasks];

  if (selectedTab === "NEXT_7") {
    tasktoRender=tasktoRender.filter(
        (task) =>
          isAfter(task.date, new Date()) &&
          isBefore(task.date, addDays(new Date(), 7))
      );
  }
  if (selectedTab === "TODAY") {
    tasktoRender=tasktoRender.filter((task) => isToday(task.date));
  }
  return(
    <div className="task-item-container">

     { tasktoRender.map((task)=>(
       <div className="task-item1">
         <p>
         {task.text}
         </p>
         <p>
         {dateFnsFormat(new Date(task.date), FORMAT)}
         </p>
       </div>
     
      ))}
    </div>
  )
};

const Task = ({ selectedTab }) => {
  const [showAddTask, setshowAddTask] = useState(false);

  const [tasks, settasks] = useState([]);

  const addNewTask = (text, date) => {
    const newTaskItem = { text, date: date || new Date() };
    settasks((prevstate) => [...prevstate, newTaskItem]);
  };

  return (
    <div className="task-bar">
      <h1>{T_Header_MAPP[selectedTab]}</h1>

      {selectedTab==="INBOX" ? <div className="add-class-btn" onClick={() => setshowAddTask((e) => !e)}>
        <span className="plus">+</span>
        <span className="add-text">Add task</span>
      </div> : null}
      {showAddTask && (
        <Addtask
          onAddTask={addNewTask}
          onCancel={() => setshowAddTask(false)}
        />
      )}
      {tasks.length > 0 ? (
        <TaskITems tasks={tasks} selectedTab={selectedTab} />
      ) : (
        <p>no task</p>
      )}
    </div>
  );
};
export default Task;
