import React, { useState } from 'react';

const TodoItem = ({ task, onUpdateTask }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const toggleComplete = () => {
    const updatedTask = { ...task, isCompleted: !task.isCompleted };
    onUpdateTask(updatedTask);
  };

  const handleSave = () => {
    const updatedTask = {
      ...task,
      title: editedTitle,
      description: editedDescription,
      lastUpdated: new Date().toISOString(),
    };
    onUpdateTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
      <div onClick={() => setIsExpanded(!isExpanded)}>
        <h3>{task.title}</h3>
        {isExpanded && (
          <div className="task-details">
            {isEditing ? (
              <div>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            ) : (
              <div>
                <p>{task.description}</p>
                <p>Last Updated: {new Date(task.lastUpdated).toLocaleString()}</p>
                <button onClick={toggleComplete}>
                  {task.isCompleted ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => setIsEditing(true)}>Edit</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
