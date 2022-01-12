import "antd/dist/antd.css";
import './App.css';
import { Table, Button, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"


function App() {

    const [isedit, setIsedit] = useState(false);
    const [editEmployee, setEditEmployee] = useState("");
    const [dataSource, setDataSource] = useState([{
            id: 1,
            name: 'John',
            email: 'john420@gmail.com',
            address: 'Bijnor'
        },
        {
            id: 2,
            name: 'David',
            email: 'david420@gmail.com',
            address: 'Punjab'
        },
        {
            id: 3,
            name: 'Sameer',
            email: 'samer420@gmail.com',
            address: 'Assam'
        }
    ])
    const columns = [{
            key: '1',
            title: 'Id',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Name',
            dataIndex: 'name'
        },
        {
            key: '3',
            title: 'Email',
            dataIndex: 'email'
        },
        {
            key: '4',
            title: 'Address',
            dataIndex: 'address'
        },
        {
            key: '5',
            // title: 'Action',
            render: (record) => {
                return ( <
                    >

                    <
                    EditOutlined onClick = {
                        () => {
                            onedit(record)
                        }
                    }
                    />  <
                    DeleteOutlined onClick = {
                        () => {
                            onDelete(record)
                        }
                    }
                    style = {
                        { color: "red", marginLeft: 12 }
                    }
                    />  <
                    />
                )
            }
        }
    ];
    const onAdd = () => {
        const randomdata = parseInt(Math.random() * 1000);
        const newemployee = {
            id: randomdata,
            name: "Name" + randomdata,
            email: randomdata + "@gmail.com",
            address: "Address" + randomdata
        }
        setDataSource(pre => {
            return [...pre, newemployee]
        })
    }
    const onDelete = (record) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this data?',
            okText: 'Yes',
            okType: 'danger',
            onOk: () => {
                setDataSource(pre => {
                    return pre.filter(employee => employee.id != record.id)
                })
            }
        })

    }
    const onedit = (record) => {
        setIsedit(true);
        setEditEmployee({...record });
    };
    const resetEditing = () => {
        setIsedit(false);
        setEditEmployee(null);
    }
    return (


        <
        div className = "App" >

        <
        header >

        <
        Button onClick = { onAdd } > Add new < /Button>  <
        Table columns = { columns }
        dataSource = { dataSource } >

        <
        /Table>  <
        Modal title = "Edit employee"
        visible = { isedit }
        okText = "Save"
        onCancel = {
            () => {
                resetEditing()

            }
        }
        onOk = {
            () => {
                setDataSource(pre => {
                    return pre.map(employee => {
                        if (employee.id === editEmployee.id) {
                            return editEmployee;
                        } else {
                            return employee
                        }
                    })
                })
                resetEditing();
            }
        } >




        <
        Input onChange = {
            (e) => {
                setEditEmployee(pre => {
                    return {...pre, name: e.target.value }
                })
            }
        }
        /> <
        Input onChange = {
            (e) => {
                setEditEmployee(pre => {
                    return {...pre, email: e.target.value }
                })
            }
        }
        /> <
        Input onChange = {
            (e) => {
                setEditEmployee(pre => {
                    return {...pre, address: e.target.value }
                })
            }
        }
        /> 



        <
        /Modal>  <
        /header>  <
        /div>

    );
}

export default App;