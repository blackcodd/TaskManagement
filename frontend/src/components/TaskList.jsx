import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggleComplete, onDelete, loading }) {
  if (loading) {
    return <div className="loading-state">Loading tasks...</div>;
  }

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks found. Create a new task to get started!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      <h2>Tasks ({tasks.length})</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
