import React from 'react';

const Task = ({ task, handleClickTask }) => {
    const handleClick = () => handleClickTask(task);
    return (
        <div onClick={handleClick} role="presentation">
            {task.name} - {task.isDone ? '[x]' : '[ ]'}
        </div>
    );
};
  
export default Task;