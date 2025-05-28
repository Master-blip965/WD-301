import React from 'react';

const TaskCard = ({ title, description, dueDate, completedAtDate, assigneeName }) => {
  return (
    <div className="card bg-white rounded-3xl shadow-lg p-8 mb-8 transition-transform hover:-translate-y-3 hover:shadow-2xl">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700 mb-5">{description}</p>

      {dueDate && <p className="text-sm text-blue-600 mb-2">Due on: {dueDate}</p>}

      {completedAtDate && <p className="text-sm text-green-600 mb-2">Completed on: {completedAtDate}</p>}

      {assigneeName && (
        <p className="text-sm text-gray-700 mt-4">
          Assignee: <span className="font-medium">{assigneeName}</span>
        </p>
      )}
    </div>
  );
};

export default TaskCard;
