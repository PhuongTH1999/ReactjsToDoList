import React, { Component } from 'react'

export default class addlocalstoretask extends Component {
  addlocalstoretask = () => {
    this.props.generateData();
  }
  render() {
    return (
        <button type="button" className="btn my-2 btn--addlocalStorage"
        onClick={this.addlocalstoretask} >
        <i className="fa fa-pencil-square-o" />
        Lấy dữ liệu từ local
</button>
    )
  }
}
