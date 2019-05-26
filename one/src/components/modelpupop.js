import React, { Component } from 'react'
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';

export default class modelpupop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            Mota: '',
            priority: '',
            labelArr: [],
            status: '',
            memberID:''
        }
    }
    memberChange = (memberID) => {
        this.setState({
            memberID: memberID
        });
    }
    LabelChanged = (labelArr) => {
        this.setState({
            labelArr: labelArr
        });
    }
    oneChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNewTaskk(this.state)
    }
    

    render() {
        return (
            <div className="modal fade" id="modalTask">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Thêm công việc</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <form onSubmit={this.onSubmit} >
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="taskName">Tên công việc:</label>
                                    <input type="text"
                                        onChange={this.oneChange}
                                        name="name"
                                        className="form-control" id="taskName" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Mô tả:</label>
                                    <textarea className="form-control" rows={2}
                                        onChange={this.oneChange}
                                        name="Mota" id="description" defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="priority">Độ ưu tiên:</label>
                                    <select className="form-control"
                                        onChange={this.oneChange}
                                        name="priority"
                                        id="priority">
                                        <option value="3">Thấp</option>
                                        <option value="2" >Trung bình</option>
                                        <option value="1">Cao</option>
                                    </select>
                                </div>
                                <label htmlFor>Người thực hiện: </label>>
                                <br />
                                <CheckboxGroup
                                    checkboxDepth={2} // This is needed to optimize the checkbox group
                                    name="memberID"
                                    value={this.state.memberID}
                                    onChange={this.memberChange}>
                                    <label><Checkbox value="user_2" /> Đặng Trung Hiếu</label>
                                    <label><Checkbox value="user_3" /> Trương Tấn Khải</label>
                                    <label><Checkbox value="user_4" /> Trần Văn A</label>
                                    <label><Checkbox value="user_5" /> Trần Văn B</label>
                                </CheckboxGroup>
                                <br /><br />
                                <label htmlFor>Nhãn:</label>
                                <br />
                                <CheckboxGroup
                                    checkboxDepth={2} // This is needed to optimize the checkbox group
                                    name="labelArr"
                                    value={this.state.labelArr}
                                    onChange={this.LabelChanged}>
                                    <label><Checkbox value="Frontend" /> Frontend</label>
                                    <label><Checkbox value="BackEnd" /> Backend</label>
                                    <label><Checkbox value="API" /> API</label>
                                    <label><Checkbox value="Is" /> Issue</label>
                                </CheckboxGroup>                             
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-success" >Add task</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        )
    }
}
