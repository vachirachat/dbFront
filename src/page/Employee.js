/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import '../index.css';
import CardEmployee from '../components/CardEmployee';
import axios from 'axios'
const doctor = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchBy, setSearchBy] = useState('');
    const [word, setWord] = useState('');
    const [data, setData] = useState({ Employees: []});
    let url;
    //use for in useEffect and ยืนยัน
    async function fetchData(text) {
        if (searchBy == 'name') {
            
            let fullName = text.split(' ')
            if(fullName.length != 2) return;
            console.log(fullName);
            const fname=fullName[0]
            const lname=fullName[1]
            url = 'http://localhost:5000/employee/findbyname/'+fname+"/"+lname
        } else if (searchBy == 'ID') {
            url = 'http://localhost:5000/employee/findbyid/'+text
        } else {
            url = 'http://localhost:5000/employee'
        }
        console.log(url);
        
        const res = await axios.get(url);
        
        console.log(res);
        if(res.data =="not found") {
            setData({ Employees: [] });
            return
        }
        setData({ Employees: res.data });
        
        
        

    }


    //fetch data from database เริ่มแก้ตาม tutorial ที่ส่งให้
    useEffect(() => {
        fetchData()
    }, []);

    ///////////////////////////////////////////////////



    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div className='col-lg-10 col-sm-12 col-md-10 thaiFont'>
            <Form>
                <FormGroup row>
                    <h2>ป้อนข้อมูลที่ต้องการค้นหา</h2>
                    <div class="input-group mb-3" id="dropDownInput">
                        <div class="input-group-prepend">
                            <select class="custom-select" id="inputGroupSelect01" onChange={(e) => setSearchBy(e.target.value)}>
                                <option selected>ต้องการค้นหาด้วย</option>
                                <option value="name">Name</option>
                                <option value="ID">ID</option>
                            </select>
                        </div>

                        <input id="myText" type="text" class="form-control" aria-label="Text input with dropdown button" />
                        <button type="button" class="btn btn-primary" onClick={() => fetchData(document.getElementById("myText").value)}>ยืนยัน</button>
                    </div>

                </FormGroup>
            </Form>
            {data.Employees.map((item) => <CardEmployee EmpID={item.EmpID} Fname={item.Fname} Lname={item.Lname} BirthDate={item.BirthDate} Gender={item.Gender} Tel={item.Tel} Address={item.Address} Nationality={item.Nationality} Job={item.JobType}/>)}
        </div>
    );
};

export default doctor;