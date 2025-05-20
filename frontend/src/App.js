import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch tasks from backend
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await fetch(process.env.REACT_APP_API_URL + '/tasks');
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      setTasks([]);
    }
    setLoading(false);
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setLoading(true);
    try {
      await fetch(process.env.REACT_APP_API_URL + '/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTask })
      });
      setNewTask('');
      fetchTasks();
    } catch (err) {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    setLoading(true);
    try {
      await fetch(process.env.REACT_APP_API_URL + '/tasks/' + id, { method: 'DELETE' });
      fetchTasks();
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <form onSubmit={addTask} style={{ marginBottom: 20 }}>
        <input
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit" disabled={loading}>Add</button>
      </form>
      {loading && <p>Loading...</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: 10 }}>
            {task.title}
            <button onClick={() => deleteTask(task.id)} style={{ marginLeft: 10 }}>Delete</button>
          </li>
        ))}
      </ul>
      {!loading && tasks.length === 0 && <p>No tasks yet.</p>}
    </div>
  );
}

export default App;
