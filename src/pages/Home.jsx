import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import ArchivedTasks from "../components/ArchivedTasks";
import "./Home.css";
function Home() {
  const { tasks: initialTasks, archivedTasks: initialArchivedTasks } =
    useLoaderData();
  const [tasks, setTasks] = useState(initialTasks);
  const [archivedTasks, setArchivedTasks] = useState(initialArchivedTasks);
  const [filter, setFilter] = useState({
    completed: "all",
    priority: "all",
    deadline: null,
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("archivedTasks", JSON.stringify(archivedTasks));
  }, [archivedTasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const updateTask = (updatedTask) =>
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );

  const removeTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const archiveTask = (id) => {
    const taskToArchive = tasks.find((task) => task.id === id);
    setArchivedTasks([...archivedTasks, taskToArchive]);
    removeTask(id);
  };

  const filteredTasks = tasks.filter((task) => {
    const byCompletion =
      filter.completed === "all" ||
      task.completed === (filter.completed === "true");
    const byPriority =
      filter.priority === "all" || task.priority === filter.priority;
    const byDeadline =
      !filter.deadline || new Date(task.deadline) <= new Date(filter.deadline);
    return byCompletion && byPriority && byDeadline;
  });

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <div className="filters">
        <label>
          Completion:
          <select
            onChange={(e) =>
              setFilter({ ...filter, completed: e.target.value })
            }
          >
            <option value="all">All</option>
            <option value="true">Completed</option>
            <option value="false">Incomplete</option>
          </select>
        </label>
        <label>
          Priority:
          <select
            onChange={(e) => setFilter({ ...filter, priority: e.target.value })}
          >
            <option value="all">All</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
        <label>
          Deadline:
          <input
            type="date"
            onChange={(e) => setFilter({ ...filter, deadline: e.target.value })}
          />
        </label>
      </div>
      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        removeTask={removeTask}
        archiveTask={archiveTask}
      />
      <ArchivedTasks archivedTasks={archivedTasks} />
    </div>
  );
}

export default Home;
