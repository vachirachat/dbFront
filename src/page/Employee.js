/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import '../index.css';
import CardEmployee from '../components/CardEmployee';
const doctor = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchBy, setSearchBy] = useState('');
    const [word, setWord] = useState('');
    const data = {
        Employee: [
            {
                "Fname": "Somsri",
                "Lname": "sdalskd;",
                "Nationality": "Thai",
                "Gender": "M",
                "Address": "string",
                "Ssn": "1234567891001",
                "Tel": "string    ",
                "DpID": null,
                "JobType": "Nurse",
                "BirthDate": "1234-10-10",
                "LicenseID": "1234567",
                "LicenseExp": "1999-10-10",
                "Specialist": "Phys",
                "Head": "True",
                "StartDate": "1990-01-10",
                "EndDate": "1991-01-10"
            },
            {
                "Fname": "Somsri",
                "Lname": "abc",
                "Nationality": "Thai",
                "Gender": "M",
                "Address": "string",
                "Ssn": "1234567891001",
                "Tel": "string    ",
                "DpID": null,
                "JobType": "Nurse",
                "BirthDate": "1234-10-10",
                "LicenseID": "1234567",
                "LicenseExp": "1999-10-10",
                "Specialist": "Phys",
                "Head": "True",
                "StartDate": "1990-01-10",
                "EndDate": "1991-01-10"
            }
        ]
    }
    const Employees = data.Employee;
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
            {Employees.map((item)=><CardEmployee LicenseID={item.LicenseID} Fname={item.Fname} Lname={item.Lname} BirthDate={item.BirthDate} Gender={item.Gender} Tel={item.Tel} Address={item.Address} Nationality={item.Nationality}/>)}
        </div>
    );
};

export default doctor;