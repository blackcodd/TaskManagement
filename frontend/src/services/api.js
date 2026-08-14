const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function fetchTasks() {
  const response = await fetch(`${API_URL}/api/tasks`);
  if (!response.ok) {
    throw new Error('Failed to fetch tasks.');
  }
  return response.json();
}

export async function createTask(taskData) {
  const response = await fetch(`${API_URL}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const msg = errorData?.errors ? Object.values(errorData.errors).flat().join(' ') : 'Failed to create task.';
    throw new Error(msg);
  }
  return response.json();
}

export async function updateTask(id, taskData) {
  const response = await fetch(`${API_URL}/api/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    throw new Error('Failed to update task.');
  }
  return response.json();
}

export async function deleteTask(id) {
  const response = await fetch(`${API_URL}/api/tasks/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete task.');
  }
}
