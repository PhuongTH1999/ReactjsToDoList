import React, { Component } from 'react'
//import component
import Thead from './taskitem/Thead'
import Item from './taskitem/item'

export default class taskitem extends Component {
    render() {
            let elmIten = this.props.tasks.map((item, index) => {
                return <Item
                    key={index}
                    item={item}
                    index={index}
                    editTask={this.props.editTask}
                />
            })
        return (
            <div className="col-md-9 px-0">
                <div className="container-fluid px-0">
                    <div className="row header header--right d-flex align-items-center mx-0">
                        <div className="col-md-6">
                            <div className=" d-flex justify-content-between">
                                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group text-left my-0">
                                <input type="text" className="form-control" placeholder="Tìm kiếm xe" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <table className="table table-hover">
                        {/* Thead */}
                        <Thead> </Thead>

                        <tbody>
                            {/* item */}
                            {elmIten}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
