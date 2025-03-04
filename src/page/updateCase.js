/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import axios from 'axios'
const updateCase = (props) => {
    //const [searchby, setSearchby] = useState(false)

    const { match } = props;
    let patid = match.params.patid;
    let caseid = match.params.caseid;
    // idUrl คือ id ที่มึงต้องเอาไปเซต path ต่อ

    //for set all data element
    const [caseID, setCaseID] = useState('');
    const [date, setDate] = useState('');
    const [desc, setDesc] = useState('');
    const [diag, setDiag] = useState('');
    let i;
    const [data, setData] = useState({ Patient: {} });
    //for fetch first Data
    function fetchData() {
        let url = 'http://localhost:5000/patient/findbyid/' + patid
        let url2 = 'http://localhost:5000/case/findbyid/' + caseid
        console.log(props);
        axios.get(url).then(res => {
            const r = res.data[0]
            setData({ Patient: r });
        })
        axios.get(url2).then(res => {
            const r = res.data[0]
            setCaseID(r.CaseID);
            setDiag(r.Diagnosis);
            setDesc(r.Description);
            setDate(new Date(r.Date).toISOString().replace('.000Z',''));
            
        })
        

    }

    //for set data to server
    function sendData() {
        let dataSend = { 'Date': date, 'Description': desc, 'Diagnosis': diag, 'PatientID': patid }
        let url = 'http://localhost:5000/case/update/' + caseid
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

    useEffect(() => {
        fetchData()
    }, []);

    //<h1>{id}</h1> for fetch data
    return (

        <div>
            <div class='card border col-lg-11' style={{ padding: '50px', border: '100px', borderRadius: '30px', marginBottom: '25px' }}>
                <h1>แก้ไขข้อมูลใน case</h1>
                <div class='row'>
                    <h2>เคส : </h2><input type='text' class="form-control form-control-sm col-lg-10" value={caseID} style={{ marginLeft: '26px', marginTop: '5px' }} />
                </div>
                <div class='row'>
                    <h2>Date : </h2><input type="datetime-local" class="form-control form-control-sm col-lg-10" value={date}  style={{ marginLeft: '10px', marginTop: '5px' }} onChange={(e) => { setDate(e.target.value) }} />
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-lg-2'>
                        <h3>ใส่รูป</h3>
                    </div>

                    <div className='col-sm-12 col-lg-10'>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>ID : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '72px' }} value={data.Patient.PatientID}  />
                        </div>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>ชื่อผู้ป่วย : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '30px' }} value={data.Patient.Fname} />
                        </div>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>นามสกุล : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '30px' }} value={data.Patient.Lname}  />
                        </div>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>วันเกิด : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '43px' }} value={data.Patient.BirthDate}  />
                        </div>

                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>Tel : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '65px' }} value={data.Patient.Tel} />
                        </div>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>Cousin Tel : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '10px' }} value={data.Patient.CousinTel}  />
                        </div>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>ที่อยู่ : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '57px' }} value={data.Patient.Address}  />
                        </div>
                    </div>

                </div>
                <h4>อาการเบื้องต้น : </h4><textarea class="form-control col-lg-12" aria-label="With textarea" value={desc} onChange={(e) => { setDesc(e.target.value) }} style={{ marginTop: '5px', marginBottom: '10px' }}></textarea>
                <h4>บรรยายข้อมูลเพิ่มเติม : </h4><textarea class="form-control col-lg-12" aria-label="With textarea" value={diag} onChange={(e) => { setDiag(e.target.value) }} style={{ marginTop: '5px', marginBottom: '10px' }} ></textarea>
            </div>
            <button type="button" class="btn btn-primary" onClick={(e) => sendData()}>ยืนยันการเปลี่ยนแปลง</button>

        </div>


    );
};

export default updateCase;