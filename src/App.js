import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';
import TaskForm from './components/TaskForm';
import data from './data/data.json';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    // Load tasks from JSON file on component mount
    if (data && data.length > 0) {
      setTasks(data);
      setFilteredTasks(data);
    }
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setFilteredTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const searchTasks = (query) => {
    if (!query) {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(
        tasks.filter(task =>
          task.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={searchTasks} />
      <TaskForm onAddTask={addTask} />
      <TodoList tasks={filteredTasks} onUpdateTask={updateTask} />
    </div>
  );
};

export default App;
