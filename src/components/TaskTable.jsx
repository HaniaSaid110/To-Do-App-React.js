import React from "react";
import { Link } from "react-router-dom";

export default function TaskTable({ onToggle, tasks, onDelete }) {
  const [filterType, setFilterType] = React.useState(`all`);

  const visibleTasks = tasks.filter((task) => {
    if (filterType === `all`) {
      return true;
    } else if (filterType === `completed`) {
      return task.completed === true;
    }
  });

  const taskElement = visibleTasks.map((task) => (
    <div
      key={task.id}
      className={`p-5 mb-4 border rounded-xl shadow-sm transition-all duration-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
        task.completed
          ? "bg-slate-50 border-slate-200 opacity-75"
          : "bg-white border-slate-300 hover:shadow-md"
      }`}
    >
      <div className="flex flex-col gap-2">
        {/* Name acts as the clickable link */}
        <Link
          to={`/task/${task.id}`}
          className={`text-xl font-bold hover:underline ${
            task.completed ? "text-slate-500 line-through" : "text-slate-800"
          } hover:text-blue-600`}
        >
          {task.name}
        </Link>
        <div className="flex flex-row gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md">
            <span className="font-semibold text-slate-700">Type:</span>{" "}
            {task.type || "N/A"}
          </span>
          <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md">
            <span className="font-semibold text-slate-700">Due:</span>{" "}
            {task.due || "N/A"}
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center gap-4">
        {/* Checkbox Section */}
        <label className="flex items-center gap-2 cursor-pointer text-slate-700 select-none bg-blue-50 px-3 py-2 rounded-lg border border-blue-100 transition-colors hover:bg-blue-100">
          <input
            type="checkbox"
            checked={task.completed}
            name="completed"
            onChange={() => onToggle(task.id)}
            className="w-5 h-5 cursor-pointer accent-blue-600"
          />
          <span className="font-medium text-blue-900">
            {task.completed ? "Done" : "Pending"}
          </span>
        </label>
        
        {/* Delete Button */}
        <button
          className="cursor-pointer px-4 py-2 bg-red-50 text-red-600 hover:bg-red-500 hover:text-white rounded-lg transition-colors font-semibold"
          onClick={() => onDelete(task)}
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <div className="mt-8">
      {/* Filter Buttons */}
      <div className="flex flex-row gap-3 mb-6">
        <button
          onClick={() => setFilterType(`all`)}
          className={`px-5 py-2 rounded-lg font-medium transition-all ${
            filterType === "all"
              ? "bg-slate-800 text-white shadow-md"
              : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
        >
          Show All
        </button>
        <button
          onClick={() => setFilterType(`completed`)}
          className={`px-5 py-2 rounded-lg font-medium transition-all ${
            filterType === "completed"
              ? "bg-slate-800 text-white shadow-md"
              : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
        >
          Show Completed
        </button>
      </div>

      {/* Task List */}
      <div className="flex flex-col">
        {taskElement}
        {tasks.length === 0 && (
          <div className="p-10 text-center text-slate-500 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300">
            No tasks added yet. Fill out the form above to add a task!
          </div>
        )}
      </div>
    </div>
  );
}
