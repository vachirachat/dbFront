/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import axios from 'axios';
const insertEmployee = (props) => {
    const [Lname, setLname] = useState('');
    const [Fname, setFname] = useState('');
    const [job, setJob] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [tel, setTel] = useState('');
    const [nationality, setNationality] = useState('');
    const [address, setAddress] = useState('');
    const [ssn, setSsn] = useState('');
    /*{
            "EmpID": "0000001",
            "Fname": "Somchai",
            "Lname": "abc",
            "Nationality": "Thai",
            "Gender": "M",
            "Address": "string",
            "Ssn": "1234567891020",
            "Tel": "string    ",
            "DpID": null,
            "JobType": "Doctor",
            "BirthDate": "1234-10-09T17:17:56.000Z"
        }*/
    function sendData() {
        let dataSend = { 'Lname': Lname, 'Fname': Fname, 'JobType': job, 'BirthDate': birthDate, 
        'Gender': gender, 'Tel': tel, 'Nationality': nationality, 'Address': address,
         'Ssn' : ssn}
        let url = 'http://localhost:5000/Employee/insert/'
        console.log(dataSend);
        axios.post(url, dataSend)
            .then((response) => {
                console.log(response);
                if (response.data.name == "error") {
                    console.log(response.data);
                    alert("failed")
                    return
                }
                alert("success")
                props.history.push('/employee');
            });
    }

    return (
        <div class='card border col-lg-11' style={{ padding: '50px', border: '100px', borderRadius: '30px', marginBottom: '25px', boxShadow: '0 8px 6px -6px black' }}>
            <h1>ใส่ข้อมูลพนักงาน</h1>
            <div style={{ marginLeft: '50px', marginTop: '10px' }}>
                <div class='row' style={{ marginTop: '10px' }}>
                    <p>ชื่อจริง : </p><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '70px' }} onChange={(e) => { setFname(e.target.value) }} />
                </div>
                <div class='row' style={{ marginTop: '10px' }}>
                    <p>นามสกุล : </p><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '60px' }} onChange={(e) => { setLname(e.target.value) }} />
                </div>
                <div className='row' style={{ marginTop: '10px' }}>
                    <p>JOB : </p><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '83px' }} onChange={(e) => { setJob(e.target.value) }} />
                </div>

                <div className='row' style={{ marginTop: '10px' }}>
                    <p>วันเกิด : </p><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '70px' }} onChange={(e) => { setBirthDate(e.target.value) }} />
                </div>
                <div className='row' style={{ marginTop: '10px' }}>
                    <p>เพศ : </p><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '85px' }} onChange={(e) => { setGender(e.target.value) }} />
                </div>
                <div className='row' style={{ marginTop: '10px' }}>
                    <p>เลขบัตรประชาชน : </p><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '85px' }} onChange={(e) => { setSsn(e.target.value) }} />
                </div>
                <div className='row' style={{ marginTop: '10px' }}>
                    <p>Tel : </p><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '89px' }} onChange={(e) => { setTel(e.target.value) }} />
                </div>
                <div className='row' style={{ marginTop: '10px' }}>
                    <p>เชื้อชาติ : </p><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '63px' }} onChange={(e) => { setNationality(e.target.value) }} />
                </div>
                <div className='row' style={{ marginTop: '10px' }}>
                    <p>ที่อยู่ : </p><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '80px' }} onChange={(e) => { setAddress(e.target.value) }} />
                </div>
            </div>
            <button type="button" class="btn btn-success" onClick={(e) => sendData()} style={{ marginTop: '20px' }}>สร้างข้อมูลใหม่</button>
        </div>


    );
};

export default insertEmployee;