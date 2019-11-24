/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';

import axios from 'axios';

const insertCase = (props) => {
    //for set all data element
    const [date, setDate] = useState('');
    const [PatientID, setPatientID] = useState('');
    const [desc, setDesc] = useState('');
    const [diag, setDiag] = useState('');
    const [docID, setDocID] = useState('');

    function sendData() {
        let dataSend = { 'Date': date, 'PatientID': PatientID, 'Description': desc, 'Diagnosis': diag, 'DoctorID': docID }
        let url = 'http://localhost:5000/case/insert'
        console.log(dataSend);
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
    return (
        <div>
            <div class='card border col-lg-11' style={{ padding: '50px', border: '100px', borderRadius: '30px', marginBottom: '25px' }}>
                <h1>สร้างข้อมูลใหม่ใน case</h1>
                <div class='row'>
                    <h2>Date : </h2><input type="text" class="form-control form-control-sm col-lg-10" style={{ marginLeft: '10px', marginTop: '5px' }} onChange={(e) => { setDate(e.target.value) }} />
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-lg-10'>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>รหัสผู้ป่วย : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '72px' }} onChange={(e) => { setPatientID(e.target.value) }} />
                        </div>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>รหัสหมอ : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '30px' }} onChange={(e) => { setDocID(e.target.value) }} />
                        </div>
                    </div>

                </div>
                <h4>อาการเบื้องต้น : </h4><textarea class="form-control col-lg-12" aria-label="With textarea" onChange={(e) => { setDesc(e.target.value) }} style={{ marginTop: '5px', marginBottom: '10px' }}></textarea>
                <h4>บรรยายข้อมูลเพิ่มเติม : </h4><textarea class="form-control col-lg-12" aria-label="With textarea" onChange={(e) => { setDiag(e.target.value) }} style={{ marginTop: '5px', marginBottom: '10px' }} ></textarea>

                <button type="button" class="btn btn-success" onClick={(e) => sendData()}>สร้างข้อมูลใหม่</button>
            </div>

        </div>

    );
};

export default insertCase;