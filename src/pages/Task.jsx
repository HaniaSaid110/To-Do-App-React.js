import React from "react";
// import { Link } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import TaskTable from "../components/TaskTable";
// import { FaSquarePlus } from "react-icons/fa6";

export default function Task() {
  const [tasks, setTasks] = React.useState(() => {
    const savedTasks = localStorage.getItem(`myTasks`);
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  React.useEffect(() => {
    localStorage.setItem(`myTasks`, JSON.stringify(tasks));
  }, [tasks]);

  function addTask(formData) {
    const newTask = {
      id: crypto.randomUUID(),
      name: formData.get("name"),
      type: formData.get("type"),
      due: formData.get("due"),
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function deleteTask(taskToRemove) {
    setTasks((prevTasks) =>
      prevTasks.filter(function (task) {
        return task.id !== taskToRemove.id;
      }),
    );
  }

  function toggleTaskCompletion(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      }),
    );
  }
  return (
    <>
      <TaskForm onAdd={addTask} />
      {console.log(tasks)}
      <TaskTable
        tasks={tasks}
        onToggle={toggleTaskCompletion}
        onDelete={deleteTask}
      />
      {/* <Link to={`/task/1`}>task 1</Link>
      <Link to={`/task/2`}>task 2</Link> */}
    </>
  );
}
