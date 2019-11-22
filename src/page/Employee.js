/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState,useEffect } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import '../index.css';
import CardEmployee from '../components/CardEmployee';
const doctor = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchBy, setSearchBy] = useState('');
    const [word, setWord] = useState('');
    const [data,setData] = useState({Employees:[]});
    //for fetch data
    useEffect(()=>{
        if (searchBy == 'name'){
             url =  'http://localhost:5000/Employee/findbyname/:fname/:lname'
        }else if(searchBy == 'ID'){
             url = 'http://localhost:5000/Employee/findbyid/:id'
        }else{
             url = 'http://localhost:5000/Employee'
        }
        console.log('pat');
         axios.get(url).then(res => {
            
            setData({employees : res.data});
            
            })
    },[]);



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

                        <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                        <button type="button" class="btn btn-primary">ยืนยัน</button>
                    </div>

                </FormGroup>
            </Form>
            {employees.map((item)=><CardEmployee LicenseID={item.LicenseID} Fname={item.Fname} Lname={item.Lname} BirthDate={item.BirthDate} Gender={item.Gender} Tel={item.Tel} Address={item.Address} Nationality={item.Nationality}/>)}
        </div>
    );
};

export default doctor;