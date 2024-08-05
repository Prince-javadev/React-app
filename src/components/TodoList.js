import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onUpdateTask }) => {
  return (
    <div className="todo-list">
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} onUpdateTask={onUpdateTask} />
      ))}
    </div>
  );
};

export default TodoList;
