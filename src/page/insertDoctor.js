/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState ,useEffect } from 'react';
import axios from 'axios';
const insertDoctor = (props) => {
    const { match } = props;
    let id = match.params.caseid;
    const [caseID,setCaseID] = useState('');
    const [doctorID,setDoctorID] = useState('');
    function fetchData(){
        setCaseID(id);
    }
    function sendData(){
        let dataSend = { 'CaseID': caseID, 'DoctorID': doctorID }
        let url = 'http://localhost:5000/case/insert/doctor'
        axios.post(url, dataSend)
            .then((response) => {
                console.log(response);
                if(response.data.name == "error"){
                    console.log(response.data);
                    alert("failed")
                    return
                }
                alert("success")
                props.history.push('/case');
            });
    }
    useEffect(() => {
        fetchData()
    }, []);
    return (

        <div class='card border col-lg-11' style={{padding:'50px',border:'100px',borderRadius:'30px',marginBottom:'25px',boxShadow:'0 8px 6px -6px black'}}>
            <h1>ใส่ข้อมูล case กับหมอ </h1>
            <div class='row' style={{ marginLeft: '5px' }}>
                <h6 style={{ marginTop: '10px' }}>CaseID : </h6><input type="text" value ={caseID}class="form-control form-control-sm col-lg-10" style={{ marginLeft: '42px' }} />
            </div>
            <div class='row' style={{ marginLeft: '5px' }}>
                <h6 style={{ marginTop: '10px' }}>DoctorID : </h6><input type="text" class="form-control form-control-sm col-lg-10" style={{ marginLeft: '30px' }} onChange={(e) => { setDoctorID(e.target.value) }} />
            </div>
            <button type="button" class="btn btn-success" style={{marginTop:'20px'}}onClick={(e) => sendData()}>สร้างข้อมูลใหม่</button>
        </div>
    );
};

export default insertDoctor;