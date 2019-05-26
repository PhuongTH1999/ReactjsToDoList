import React, { Component } from 'react'
// import component
import AddNewTask from '../components/controls/AddNewTask'
import Addlocalstoretask from '../components/controls/addlocalstoretask'
import FilterProgress from '../components/controls/filterprogress'
import FilterLabel from '../components/controls/filterlabel'
import Filterpriority from '../components/controls/filterpriority'
import Sort from '../components/controls/Sort'


export default class controls extends Component {
  render() {
    return (
        <div className="col-md-3 text-center px-0">
        <div className="header header--left d-flex align-items-center">
          {/* <img src="./img/user_3.jpg" className="ml-2 user" /> */}
          <h3 className="text-white d-inline font-weight-light ml-2">Trần Hoàng Phương</h3>
        </div>
        {/* addlocalstoretask */}
            <Addlocalstoretask
            generateData={this.props.generateData}
            >
            </Addlocalstoretask>
            {/* Addnewtask */}
            <AddNewTask></AddNewTask>
            {/* Filter */}
            <div className="px-3">
            <FilterProgress></FilterProgress>
        
            {/* filterlabel */}
            <FilterLabel></FilterLabel>

            {/* FilterPrioiority */}
            <Filterpriority></Filterpriority>
          {/* Filter Sort */}
            <Sort></Sort>
         
        </div>
      </div>
    )
  }
}
