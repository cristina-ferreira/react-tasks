import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, handleClickTask }) => {
    return (
        <ul>
            {tasks.map((task) => {
                return (
                    <li  key={task.name}>
                        <Task task={task} handleClickTask={handleClickTask} />
                    </li>
                );
            })}
        </ul>
    );
};

export default TaskList;
