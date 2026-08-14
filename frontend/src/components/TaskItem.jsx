import React from 'react';

export default function TaskItem({ task, onToggleComplete, onDelete }) {
  const formattedDate = new Date(task.createdAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
      <div className="task-content">
        <div className="task-header">
          <h3 className="task-title">{task.title}</h3>
          <span className={`status-badge ${task.isCompleted ? 'badge-completed' : 'badge-pending'}`}>
            {task.isCompleted ? 'Completed' : 'Pending'}
          </span>
        </div>
        {task.description && <p className="task-desc">{task.description}</p>}
        <span className="task-date">Created: {formattedDate}</span>
      </div>
      <div className="task-actions">
        <button
          className={`btn ${task.isCompleted ? 'btn-undo' : 'btn-complete'}`}
          onClick={() => onToggleComplete(task)}
        >
          {task.isCompleted ? 'Undo' : 'Complete'}
        </button>
        <button className="btn btn-delete" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
