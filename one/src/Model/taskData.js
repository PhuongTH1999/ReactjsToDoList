var randomid = require('randomid');

const TasksData = [
{
    id: randomid(5),
    name: "Soạn Reactjs",
    memterID:["user_1","user_2"],
    labelArr:["Frontend","BackEnd"],
    priority:1,
    status:2,
    description:"Phải soạn Reactjs chung với reudux và nodejs"
},
{
    id: randomid(5),
    name: "Dạy Angulars",
    memterID:["user_3"],
    labelArr:["Frontend","API"],
    priority:2,
    status:3,
    description:"Nội dung của Angular rất dài và khó"
},
{
    id: randomid(5),
    name: "Soạn Reactjs 1",
    memterID:["user_4","user_3"],
    labelArr:["Frontend","Is"],
    priority:3,
    status:1,
    description:"Phải soạn Reactjs chung với reudux và nodejs 3"
},
{
    id: randomid(5),
    name: "Soạn Reactjs 2",
    memterID:["user_4","user_2"],
    labelArr:["Frontend"],
    priority:1,
    status:4,
    description:"Phải soạn Reactjs chung với reudux và nodejs 2"
}
]
export default TasksData