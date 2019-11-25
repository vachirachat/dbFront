/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
const updateEmployee = (props) => {
    const { match } = props;
    let id = match.params.empid;
    // idUrl คือ id ที่มึงต้องเอาไปเซต path ต่อ

    //for set all data element
    const [empID, setEmpID] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [gender, setGender] = useState('');
    const [nation, setNation] = useState('');
    const [addr, setAddr] = useState('');
    const [ssn, setSsn] = useState('');
    const [tel, setTel] = useState('');
    const [jobtype, setJobType] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [data, setData] = useState({ Employee: {} });
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
    function fetchData() {
        let url = 'http://localhost:5000/employee/findbyid/' + id
        console.log(props);
        axios.get(url).then(res => {
            const r = res.data[0]
            setData({ Employee: r });
            setEmpID(r.EmpID);
            setFname(r.Fname);
            setLname(r.Lname);
            setNation(r.Nationality);
            setGender(r.Gender);
            setBirthdate(new Date(r.BirthDate).toISOString().replace('T17:00:00.000Z', ''));            
            setAddr(r.Address);
            setSsn(r.Ssn);
            setTel(r.Tel);
            setJobType(r.JobType);
        })



    }

    //for set data to server
    function sendData() {
        let dataSend = {
            'Fname': fname, 'Lname': lname, 'Gender': gender, 'Address': addr,
            'BirthDate': birthdate, 'Ssn': ssn, 'Tel': tel, 'JobType': jobtype,
            'Nationality': nation
        }
        let url = 'http://localhost:5000/employee/update/' + id
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

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div class='card border col-lg-11' style={{ padding: '50px', border: '100px', borderRadius: '30px', marginBottom: '25px', boxShadow: '0 8px 6px -6px black' }}>
            <div className='row'>
                <h2>EmpID : {empID}</h2></div>
            <div className='row'>
                <h2>Job : {jobtype}</h2></div>
            <div className='row'>
                <div className='col-sm-12 col-lg-2'>
                    <h3>รูป</h3>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <div class='row' style={{ marginLeft: '5px' }}>
                        <h6 style={{ marginTop: '10px' }}>ชื่อ : </h6><input type="text" class="form-control form-control-sm col-lg-6" value={fname} onChange={(e) => { setFname(e.target.value) }} style={{ marginLeft: '72px' }} />
                    </div>
                    <div class='row' style={{ marginLeft: '5px' }}>
                        <h6 style={{ marginTop: '10px' }}>นามสกุล : </h6><input type="text" class="form-control form-control-sm col-lg-6" value={lname} onChange={(e) => { setLname(e.target.value) }} style={{ marginLeft: '30px' }} />
                    </div>
                    <div class='row' style={{ marginLeft: '5px' }}>
                        <h6 style={{ marginTop: '10px' }}>เพศ : </h6><input type="text" class="form-control form-control-sm col-lg-6" value={gender} onChange={(e) => { setGender(e.target.value) }} style={{ marginLeft: '30px' }} />
                    </div>
                    <div class='row' style={{ marginLeft: '5px' }}>
                        <h6 style={{ marginTop: '10px' }}>สัญชาติ : </h6><input type="text" class="form-control form-control-sm col-lg-6" value={nation} onChange={(e) => { setNation(e.target.value) }} style={{ marginLeft: '30px' }} />
                    </div>
                    <div class='row' style={{ marginLeft: '5px' }}>
                        <h6 style={{ marginTop: '10px' }}>วันเกิด : </h6><input type="date" class="form-control form-control-sm col-lg-6" value={birthdate} onChange={(e) => { setBirthdate(e.target.value) }} style={{ marginLeft: '43px' }} />
                    </div>

                    <div class='row' style={{ marginLeft: '5px' }}>
                        <h6 style={{ marginTop: '10px' }}>Tel : </h6><input type="text" class="form-control form-control-sm col-lg-6" value={tel} onChange={(e) => { setTel(e.target.value) }} style={{ marginLeft: '65px' }} />
                    </div>
                    <div class='row' style={{ marginLeft: '5px' }}>
                        <h6 style={{ marginTop: '10px' }}>เลขบัตรประชาชน : </h6><input type="text" class="form-control form-control-sm col-lg-6" value={ssn} onChange={(e) => { setSsn(e.target.value) }}
                            style={{ marginLeft: '10px' }} />
                    </div>
                    <div class='row' style={{ marginLeft: '5px' }}>
                        <h6 style={{ marginTop: '10px' }}>ที่อยู่ : </h6><textarea class="form-control col-lg-12" aria-label="With textarea" value={addr} onChange={(e) => { setAddr(e.target.value) }}
                            style={{ marginTop: '5px', marginBottom: '10px' }}></textarea>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary" onClick={(e) => sendData()}>ยืนยันการเปลี่ยนแปลง</button>

        </div>
    );
};

export default updateEmployee;