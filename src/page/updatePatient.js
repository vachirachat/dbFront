/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const updatePatient = props => {
    //const [name, setName] = useState('Mary');

    const { match } = props;
    let id = match.params.patid;
    // idUrl คือ id ที่มึงต้องเอาไปเซต path ต่อ

    //for set all data element
    const [patID, setPatID] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [gender, setGender] = useState('');
    const [addr, setAddr] = useState('');
    const [couTel, setCouTel] = useState('');
    const [tel, setTel] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [data, setData] = useState({ Patient: {} });
    /*{
     "Fname":"suchat",
    "Lname":"eiei",
    "BirthDate":"1998-11-25",
    "Gender":"M",
    "Address":"Germany",
    "Tel":"0001234567",
    "CounsinTel":"1234567890"
    }*/
    function fetchData() {
        let url = 'http://localhost:5000/patient/findbyid/' + id
        console.log(props);
        axios.get(url).then(res => {
            const r = res.data[0]
            setData({ Patient: r });
            setPatID(r.PatientID);
            setFname(r.Fname);
            setLname(r.Lname);
            setGender(r.Gender);
            setBirthdate(new Date(r.BirthDate).toISOString().replace('T17:00:00.000Z', ''));
            console.log(new Date(r.BirthDate).toDateString().replace('.000Z', ''));
            
            setAddr(r.Address);
            setCouTel(r.CousinTel);
            setTel(r.Tel);
        })



    }

    //for set data to server
    function sendData() {
        let dataSend = {
            'Fname': fname, 'Lname': lname, 'Gender': gender, 'Address': addr,
            'BirthDate': birthdate, 'CousinTel': couTel, 'Tel': tel
        }
        let url = 'http://localhost:5000/patient/update/' + id
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
                props.history.push('/');
            });
    }

    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div class='card border col-lg-11' style={{ padding: '50px', border: '100px', borderRadius: '30px', marginBottom: '25px', boxShadow: '0 8px 6px -6px black' }}>
            <div className='row'>
                <h2>PatientID : {patID}</h2></div>
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
                        <h6 style={{ marginTop: '10px' }}>วันเกิด : </h6><input type="date" class="form-control form-control-sm col-lg-6" value={birthdate} onChange={(e) => { setBirthdate(e.target.value) }} style={{ marginLeft: '43px' }} />
                    </div>

                    <div class='row' style={{ marginLeft: '5px' }}>
                        <h6 style={{ marginTop: '10px' }}>เบอร์โทรศัพท์ : </h6><input type="text" class="form-control form-control-sm col-lg-6" value={tel} onChange={(e) => { setTel(e.target.value) }} style={{ marginLeft: '65px' }} />
                    </div>
                    <div class='row' style={{ marginLeft: '5px' }}>
                        <h6 style={{ marginTop: '10px' }}> เบอร์โทรญาติ </h6><input type="text" class="form-control form-control-sm col-lg-6" value={couTel} onChange={(e) => { setCouTel(e.target.value) }}
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

export default updatePatient;