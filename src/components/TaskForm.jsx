import React from "react";

export default function TaskForm({ onAdd }) {
  const [isNewTaskOpen, setIsNewTaskOpen] = React.useState(false);
  function addNewTask() {
    setIsNewTaskOpen((prevOpen) => !prevOpen);
  }
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
      <div className="flex flex-row justify-end items-center mb-4">
        {/* <h2 className="text-xl font-bold text-slate-800">Your Tasks</h2> */}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer"
          onClick={addNewTask}
        >
          {isNewTaskOpen ? "Close Form" : "+ New Task"}
        </button>
      </div>

      {isNewTaskOpen && (
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-4">
          <form action={onAdd}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-slate-700">
                  Task Name:
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Do laundry"
                  className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-slate-700">
                  Type:
                </label>
                <input
                  type="text"
                  name="type"
                  placeholder="e.g. Chores"
                  className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-slate-700">
                  Due Date:
                </label>
                <input
                  type="text"
                  name="due"
                  placeholder="e.g. Tomorrow"
                  className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <button className="w-full bg-slate-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-900 transition-colors cursor-pointer">
                  Save Task
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
