import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Statistics from './components/Statistics';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { fetchTasks, createTask, updateTask, deleteTask } from './services/api';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message || 'Failed to load tasks.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = async (taskData) => {
    try {
      setActionLoading(true);
      setError(null);
      const newTask = await createTask(taskData);
      setTasks((prev) => [newTask, ...prev]);
    } catch (err) {
      setError(err.message || 'Failed to add task.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleToggleComplete = async (task) => {
    try {
      setError(null);
      const updated = await updateTask(task.id, {
        title: task.title,
        description: task.description,
        isCompleted: !task.isCompleted,
      });
      setTasks((prev) => prev.map((t) => (t.id === task.id ? updated : t)));
    } catch (err) {
      setError(err.message || 'Failed to update task.');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      setError(null);
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message || 'Failed to delete task.');
    }
  };

  const completedCount = tasks.filter((t) => t.isCompleted).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div className="container">
      <Header />
      <Statistics
        total={tasks.length}
        completed={completedCount}
        pending={pendingCount}
      />
      {error && (
        <div className="error-banner">
          <span>{error}</span>
          <button onClick={loadTasks} className="btn-retry">Retry</button>
        </div>
      )}
      <div className="content-grid">
        <TaskForm onAddTask={handleAddTask} loading={actionLoading} />
        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDeleteTask}
          loading={loading}
        />
      </div>
    </div>
  );
}
