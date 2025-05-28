import React from 'react';
import TaskCard from './TaskCard';

const App = () => {
  const pendingTasks = [
    { id: 1, title: 'Design landing page', description: 'Create UI for home page', dueDate: '2025-05-30', assigneeName: 'Alice' },
    { id: 2, title: 'Setup database', description: 'PostgreSQL setup', dueDate: '2025-06-02', assigneeName: 'Bob' },
  ];

  const doneTasks = [
    { id: 3, title: 'Setup repo', description: 'Initialized GitHub repo', completedAtDate: '2025-05-20', assigneeName: 'Charlie' },
  ];

  return (
    <div id="root">
      <h1 style={{ width: '100%', textAlign: 'center', marginBottom: '2rem' }}>Task Lists</h1>

      <div className="task-lists-container">
        <section className="task-group-container">
          <h2>Pending</h2>
          {pendingTasks.map(task => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
              assigneeName={task.assigneeName}
            />
          ))}
        </section>

        <section className="task-group-container">
          <h2>Done</h2>
          {doneTasks.map(task => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              completedAtDate={task.completedAtDate}
              assigneeName={task.assigneeName}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default App;
