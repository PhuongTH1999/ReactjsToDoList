import React, { Component } from 'react'


export default class item extends Component {

    getLabel = (label) => {
        let labelColor;
        switch (label) {
            case 'Frontend':
                return labelColor = '#389E0D';
            case 'API':
                return labelColor = '#13C2C2';
            case 'Is':
                return labelColor = '#CF1322';
            case 'BackEnd':
                return labelColor = '#722ED1';
            default:
                break;
        }
    }
    // getIMG = (itemimg) => {
    //     let img;
    //     switch (itemimg) {
    //         case 'user_1':
    //             return img = '../../.././public./img./user_1.jpg';
    //         case 'user_2':
    //             return img = '../../.././public./img./user_2.jpg';
    //     }
    // }
    // getPriority = (pro) => {
    handleEditing = () => {
        this.props.editTask(this.props.item);
    }
    // handleDeleting = () => {
    //     this.props.deleTask(this.props.index);

    //     item[i] = item.splice(i,1);
    // }
    render() {
        // let elmLaybel = item.labelColor.map((item, index) => {
        //     return <i
        //         key={index}
        //         className=" fa fa-circle"
        //     />
        // })
        let { item, index } = this.props

        // label
        let elmLaybel = item.labelArr.map((label, index) => {
            return <i className="fa fa-circle"
                style={{ color: this.getLabel(label) }}
            />
        })

        //end label
        // priority
        let priorityValue;
        switch (parseInt(item.priority, 10)) {
            case 1:
                priorityValue = "Cao";
                break;
            case 2:
                priorityValue = "Trung Bình";
                break;
            case 3:
                priorityValue = "Thấp";
                break;
            default:
                break;
        }
        // end priority

        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">
                    {elmLaybel}

                </td>
                <td className="text-danger font-weight-bold text-center">{priorityValue}</td>
                <td className="text-center">
                    <img src="./img/user_2.jpg" className="user" />
                    {/* {item.img} */}
                    {/* {/* <img src="./img/user_3.jpg" className="user" /> */}
                    {/* <img src="./img/user_1.jpg" className="user"  /> */}

                </td>
                <td className="text-center">
                    <div className="">
                        <button type="button" className="btn btn-outline-primary"
                            onClick={this.handleEditing}> Sữa </button>
                    
                        <button type = "button" className = "btn btn-success" 
                        onClick={this.handleDeleting} >
                        Xoá</button>
                    </div>
                        <select class="form-control" name="" id="">
                            <option>Đang Tiến Hành</option>
                            <option>Chưa Bắt đầu</option>
                            <option>Hoàn Thành</option>
                        </select>
                    
                </td>
                <td className="text-center">
                    <i className="fa fa-check-square-o mr-2" />
                </td>
            </tr>


        )
    }
}
