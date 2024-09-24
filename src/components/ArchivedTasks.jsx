import React from "react";

const ArchivedTasks = ({ archivedTasks }) => {
  return (
    <div>
      <h2>Archived Tasks</h2>
      <ul>
        {archivedTasks.map((task) => (
          <li key={task.id} className="task archived">
            {task.description} - {task.deadline} - {task.priority} -{" "}
            {task.completed ? "Completed" : "Incomplete"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArchivedTasks;
