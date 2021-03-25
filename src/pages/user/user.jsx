import React from 'react';
import {Card,Table,Switch,Button, Image} from 'antd';
import '../../config/index.less';


const dataSource = [
    {
      id: '1',
      userName: '王晓红',
      userPetName:'wangixoahong',
      userPwd:'wangxiaohong',
      userSex:'男',
      userStatus:1,
      userPhone:'13232762562',
      userImg: 'http://www.jituwang.com/uploads/allimg/160226/257934-160226225P747.jpg',
    },
]
const columns = [
    {
        title:'id',
        dataIndex:'id',
        key:'id',
    },
    {
      title: '用户账号',
      dataIndex: 'userPetName',
      key: 'userPetName',
    },
    {
        title: '姓名',
        dataIndex: 'userName',
        key: 'userPetName'
      },
    {
      title: '密码',
      dataIndex: 'userPwd',
      key: 'userPwd',
    },
    {
        title: '性别',
        dataIndex: 'userSex',
        key: 'userSex',
    },
    {
        title: '电话',
        dataIndex: 'userPhone',
        key: 'userPhone',
    },
    {
        title: '是否激活',
        dataIndex: 'userStatus',
        key: 'casePosition',
        render: (text) => (<Switch checkedChildren="是" unCheckedChildren="否" defaultChecked={text===1} />)
    },
    {
        title: '头像',
        dataIndex: 'userImg',
        key: 'userImg',
        render: text => <Image src={text} width='100px' />
    },
    {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        render: (record) => ([
            <Button type='link' >删除</Button>
        ])
    },
]
class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }

    getData = async () => {
        
    }

    async componentDidMount(){

    }

    render() {
        return (
            <Card>
                <Table
                    rowKey={(record) => {
                        return (record.order_id || record.dorder_id + Date.now()) //在这里加上一个时间戳就可以了
                    }}
                    columns={columns}
                    dataSource={dataSource}
                />
            </Card>
        )
    }
}
export default Company;