import React from "react";
import { Task } from "./types";

const TaskCard: React.FC<Task> = ({ title, description, dueDate }) => {
  return (
    <div className="TaskItem">
      <h3>
        {title} ({dueDate})
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default TaskCard;
