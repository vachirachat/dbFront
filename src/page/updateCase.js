/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

const updateCase = (props) => {
    //const [searchby, setSearchby] = useState(false)

   const { match } = props;
   let { idUrl } = match.params;
    // idUrl คือ id ที่มึงต้องเอาไปเซต path ต่อ
   // const [searchBy, setSearchBy] = useState('');
    const [caseID,setCaseID] = useState('');
    const [dateMain, setDateMain] = useState('');
    const [ID, setID] = useState('');
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [tel, setTel] = useState('');
    const [conTel, setConTel] = useState('');
    const [address, setAddress] = useState('');
    const [des, setDes] = useState('');
    const [addDes, setAddDes] = useState('');


    //for fetch first Data
    /*async function fetchData() {
        const res = await fetch('set path');
        res.json()
            .then(res => setData(res))
            .catch(err => setError(res));
    }*/
    //<h1>{id}</h1> for fetch data
    return (
        
        <div>
            <div class='card border col-lg-11' style={{ padding: '50px', border: '100px', borderRadius: '30px', marginBottom: '25px' }}>
                <h1>แก้ไขข้อมูลใน case</h1>
                <div class='row'>
                    <h2>เคส : </h2><input type='text' class="form-control form-control-sm col-lg-10" style={{ marginLeft: '26px', marginTop: '5px' }} onChange = {(e)=> {
                        setCaseID(e.target.value);
                        console.log(caseID);
                    }}/>
                </div>
                <div class='row'>
                    <h2>Date : </h2><input type="text" class="form-control form-control-sm col-lg-10" style={{ marginLeft: '10px', marginTop: '5px' }}/>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-lg-2'>
                        <h3>ใส่รูป</h3>
                    </div>

                    <div className='col-sm-12 col-lg-10'>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>ID : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '72px' }}/>
                        </div>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>ชื่อผู้ป่วย : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '30px' }}/>
                        </div>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>วันเกิด : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '43px' }}/>
                        </div>

                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>Tel : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '65px' }}/>
                        </div>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>Cousin Tel : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '10px' }}/>
                        </div>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>ที่อยู่ : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '57px' }}/>
                        </div>
                    </div>

                </div>
                <h4>อาการเบื้องต้น : </h4><textarea class="form-control col-lg-12" aria-label="With textarea" style={{ marginTop: '5px', marginBottom: '10px' }}></textarea>
                <h4>บรรยายข้อมูลเพิ่มเติม : </h4><textarea class="form-control col-lg-12" aria-label="With textarea" style={{ marginTop: '5px', marginBottom: '10px' }} ></textarea>
            </div>
            <button type="button" class="btn btn-primary" >ยืนยันการเปลี่ยนแปลง</button>
        </div>
        
        
    );
};

export default updateCase;