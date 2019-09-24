import React, { Component } from 'react';
import TaskInput from './TaskInput'
import TaskList from './TaskList'

const tasksList = [
    { name: "buy medicine", isDone: true },
    { name: "vet", isDone: true },
    { name: "car inspection", isDone: false},
];


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: tasksList };
    }


  onMarkAsDone = (clickedTask) => {
      this.setState((state) => {
          const updatedTasks = state.tasks.map ((task) => {
              if (task.name === clickedTask.name) {
                  return { name: task.name, isDone: !task.isDone };
              }
              return task;
          });
          return { tasks: updatedTasks };
      });
  }


  onAddTask = (taskName) => {
      const { tasks } = this.state;
      const newTask = { name: taskName, isDone: false };
      const foundTask = tasks.find(task => task.name === taskName);
      if (!foundTask) {
          this.setState((state) => {
              const newTasks = [newTask, ...state.tasks];
              return { tasks: newTasks };
          });
      }
  }

  render() {
      const { tasks } = this.state;
      return (
          <div>
              <TaskInput handleSubmitTask={ this.onAddTask} />
              <TaskList tasks={tasks} handleClickTask={this.onMarkAsDone} />
          </div>
      );
  }
}

export default App;
