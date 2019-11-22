/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import '../index.css';
import CardCase from '../components/CardCase';
import axios from 'axios';
const casePatient = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // set fetch by data 
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchBy, setSearchBy] = useState('');
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [word, setWord] = useState('');
    

    //function call in useEffect and ยืนยัน button
    fetchData(){
        if (searchBy == 'name'){
            url =  'http://localhost:5000/case/findbyname/:fname/:lname'
       }else if(searchBy == 'ID'){
            url = 'http://localhost:5000/case/findbyid/:id'
       }else{
            url = 'http://localhost:5000/case'
       }
       console.log('pat');
        axios.get(url).then(res => {
           setData({realData : res.data});
           })
    }
    //set fetch by data
    useEffect(()=>{
       fetchData()
    },[]);


    
    return (
        <div className='col-lg-10 col-sm-12 col-md-10'>
            <div className="thaiFont">
                <div class='row'>
                    <h2>ป้อนข้อมูลที่ต้องการค้นหา</h2>
                    <div class="input-group mb-3" id="dropDownInput">
                        <div class="input-group-prepend">
                            <select class="custom-select" id="inputGroupSelect01" onChange={(e) => setSearchBy(e.target.value)}>
                                <option selected>ต้องการค้นหาด้วย</option>
                                <option value="name">Name</option>
                                <option value="ID">ID</option>
                            </select>
                        </div>

                        <input type="text" class="form-control" onChange={(e) => {
                            setWord(e.target.value);
                        }} />
                        <button type="button" class="btn btn-primary" onClick={fetchData()}>ยืนยัน</button>
                    </div>

                </div>
            </div>
            {realData.map((items) => <CardCase
                Fname={items.Fname}
                Lname={items.Lname}
                ID={items.ID}
                dateOfBirth={items.BirthDate}
                Tel={items.Tel}
                conTel={items.CounsinTel}
                Address={items.Address}
                desc={items.desc}
                addDesc={items.addDesc}
            />)}


        </div>
    );
};

export default casePatient;