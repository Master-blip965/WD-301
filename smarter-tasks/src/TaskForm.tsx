import React, { useState } from "react";
import { Task } from "./types";

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !dueDate.trim()) {
      alert("Title and Due Date are required.");
      return;
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      dueDate,
    };

    onAddTask(newTask);
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        id="todoTitle"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        className="border p-2 mr-2"
      />
      <input
        id="todoDescription"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
        className="border p-2 mr-2"
      />
      <input
        id="todoDueDate"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        id="addTaskButton"
        type="submit"
        className="bg-blue-500 text-white p-2"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
