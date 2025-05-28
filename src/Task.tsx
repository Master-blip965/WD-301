import React from "react";
import { Task } from "./types";

const TaskComponent: React.FC<Task> = ({
  title,
  description,
  dueDate,
  completedAtDate,
  assigneeName
}) => {
  return (
    <div className="TaskItem">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {dueDate && <p>Due on: {dueDate}</p>}
      {completedAtDate && <p>Completed on: {completedAtDate}</p>}
      {assigneeName && <p>Assignee: {assigneeName}</p>}
    </div>
  );
};

export default TaskComponent;
