import React from 'react';

export default function Statistics({ total, completed, pending }) {
  return (
    <div className="stats-grid">
      <div className="stat-card total">
        <h3>Total Tasks</h3>
        <p className="stat-value">{total}</p>
      </div>
      <div className="stat-card completed">
        <h3>Completed</h3>
        <p className="stat-value">{completed}</p>
      </div>
      <div className="stat-card pending">
        <h3>Pending</h3>
        <p className="stat-value">{pending}</p>
      </div>
    </div>
  );
}
