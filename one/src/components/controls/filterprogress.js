import React, { Component } from 'react'

export default class filterprogress extends Component {
  render() {
    return (
        <div className="filter filter--progress my ">
        <ul className="list-unstyled text-left">Lọc
          <li className="py-1 display-5 lead">
            <i className="fa fa-check-square-o mr-2" />Hoàn thành</li>
            <li className="py-1 display-5 lead" >
            <i class="fa fa-spinner"> Đang tiến hành </i>
            </li>
            <li className="py-1 display-5 lead" >
            <i class="fa fa-thumbs-up"> Hoàn Thành </i>
            </li>
          <li className="py-1 display-5 lead">
            <i className="fa fa-trash-o mr-2" />Hủy bỏ</li>
        </ul>
      </div>
    )
  }
}
