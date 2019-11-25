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
    const [data, setData] = useState({ realdata: [] });
    let url;
    //function call in useEffect and ยืนยัน button
    async function fetchData() {
        
        if (searchBy == 'PatID') {
            url = 'http://localhost:5000/case/findbypatid/'+word
        } else if (searchBy == 'ID') {
            url = 'http://localhost:5000/case/findbyid/'+word
        } else {
            url = 'http://localhost:5000/case'
        }
        const res = await axios.get(url)
        if(res.data == "not found") return
        console.log(res.data);
        setData({ realdata: res.data })
        
        
        
    
    }
    //set fetch by data
    useEffect(() => {
        fetchData()
    }, []);

    

    return (
        <div className='col-lg-10 col-sm-12 col-md-10'>
            <div className="thaiFont">
                <div class='row'>
                    <h2>ป้อนข้อมูลที่ต้องการค้นหา</h2>
                    <div class="input-group mb-3" id="dropDownInput">
                        <div class="input-group-prepend">
                            <select class="custom-select" id="inputGroupSelect01" onChange={(e) => setSearchBy(e.target.value)}>
                                <option selected>ต้องการค้นหาด้วย</option>
                                <option value="PatID">PatientID</option>
                                <option value="ID">CaseID</option>
                            </select>
                        </div>

                        <input type="text" class="form-control" onChange={(e) => {
                            setWord(e.target.value);
                        }} />
                        <button type="button" class="btn btn-primary" onClick={()=>{fetchData()}}>ยืนยัน</button>
                    </div>

                </div>
            </div>
            {data.realdata.map((items) => <CardCase
                Date={items.Date}
                CaseID={items.CaseID}
                PatientID={items.PatientID}
                Fname={items.Fname}
                Lname={items.Lname}
                Gender={items.Gender}
                BirthDate={items.BirthDate}
                Tel={items.Tel}
                conTel={items.CounsinTel}
                Address={items.Address}
                desc={items.Description}
                diag={items.Diagnosis}
                doctor={items.DoctorID}
                nurse={items.NurseID}
                intern={items.InternID}
            />)}


        </div>
    );
};

export default casePatient;