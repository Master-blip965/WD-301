import React, { useState } from "react";
import { Task } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Smarter Tasks</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskApp;
