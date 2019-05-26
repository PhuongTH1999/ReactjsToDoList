import React, { Component } from 'react';
import './App.css';
import Modelpupop from './components/modelpupop'
import Controls from './components/controls'
import Taskitem from './components/taskitem'

import listOfTask from './Model/getData'
export default class App extends Component {
  constructor (props) {
    super(props);
    this.State ={
      tasks:[],
      
    }  
}
  generateData = () => {
    localStorage.setItem('tasks', JSON.stringify(listOfTask.list))
  }
  componentWillMount = () => {
    let tasksJSON = JSON.parse(localStorage.getItem('tasks'));
    this.setState({
      tasks: tasksJSON
    }) 
  }
  addNewTaskk = (data) => {
    console.log(data)
    let tasksJSON = JSON.parse(localStorage.getItem('tasks'));
    tasksJSON = [...tasksJSON, data]
    this.setState({
      tasks:tasksJSON
    })
    localStorage.setItem('tasks', JSON.stringify(tasksJSON))
  }
  editTask = (data) => {
    console.log(data)
  }
  deleTask = (data) => {
    console.log(data)
  }
  render() {

    let { tasks} = this.state
    
    return (
      <div>
        <div>
          <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}
              <Controls
              generateData={this.generateData}
              >

              </Controls>
              {/* DISPLAY */}
              <Taskitem tasks = {tasks} 
              editTask = {this.editTask}
              deleTask = {this.editTask}
               >
              
              </Taskitem>
            </div>
          </div>
          <Modelpupop addNewTaskk = {this.addNewTaskk}>

          </Modelpupop>

        </div>

      </div>
    )
  }
}
