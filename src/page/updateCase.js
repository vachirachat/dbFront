/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState,useEffect } from 'react';

const updateCase = (props) => {
    //const [searchby, setSearchby] = useState(false)

   const { match } = props;
   let { idUrl } = match.params;
    // idUrl คือ id ที่มึงต้องเอาไปเซต path ต่อ
   
    //for set all data element
    const [caseID,setCaseID] = useState('');
    const [dateMain, setDateMain] = useState('');
    const [ID, setID] = useState('');
    const [Fname, setFname] = useState('');
    const [Lname,setLname] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [tel, setTel] = useState('');
    const [conTel, setConTel] = useState('');
    const [address, setAddress] = useState('');
    const [des, setDes] = useState('');
    const [addDes, setAddDes] = useState('');

    const [data,setData] = useState({Case:[]});

    //for fetch first Data
    function fetchData(){
    let url = 'http://localhost:5000/patient/findbyid/:idUrl'
    console.log('pat');
    axios.get(url).then(res => {
       
       setData({case : res.data});
       
    })}

    //for set data to server
    function sendData(){
        let dataSend = {'Fname':{Fname},'Lname':{Lname},'Tel':{Tel},'CounsinTel':{ConTel},'Address':{Address},'ID':{ID}}
        let url = //set path for send data
        axios.post(url,dataSend)
        .then((response)=>{
            console.log(response);
        },(error)=>{
            console.log(error);
        });
    }

    useEffect(()=>{
        fetchData()
    },[]);

    //<h1>{id}</h1> for fetch data
    return (
        
        <div>
            <div class='card border col-lg-11' style={{ padding: '50px', border: '100px', borderRadius: '30px', marginBottom: '25px' }}>
                <h1>แก้ไขข้อมูลใน case</h1>
                <div class='row'>
                    <h2>เคส : </h2><input type='text' class="form-control form-control-sm col-lg-10" style={{ marginLeft: '26px', marginTop: '5px' }} onChange = {(e)=> {
                        setCaseID(e.target.value);
                    }}/>
                </div>
                <div class='row'>
                    <h2>Date : </h2><input type="text" class="form-control form-control-sm col-lg-10" style={{ marginLeft: '10px', marginTop: '5px' }} onChange={(e)=>{setDateMain(e.target.value)}}/>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-lg-2'>
                        <h3>ใส่รูป</h3>
                    </div>

                    <div className='col-sm-12 col-lg-10'>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>ID : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '72px' }} value={data.Case.ID} onChange={(e)=>{setID(e.target.value)}}/>
                        </div>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>ชื่อผู้ป่วย : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '30px' }} value={data.Case.Fname} onChange={(e)=>{setFname(e.target.value)}}/>
                        </div>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>นามสกุล : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '30px' }} value={data.Case.Lname} onChange={(e)=>{setLname(e.target.value)}}/>
                        </div>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>วันเกิด : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '43px' }} value={data.Case.BirthDate} onChange={(e)=>{setBirthDate(e.target.value)}}/>
                        </div>

                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>Tel : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '65px' }} value={data.Case.Tel} onChange={(e)=>{setTel(e.target.value)}}/>
                        </div>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>Cousin Tel : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '10px' }} value={data.Case.CounsinTel} onChange={(e)=>{setConTel(e.target.value)}}/>
                        </div>
                        <div class='row' style={{ marginLeft: '5px' }}>
                            <h6 style={{ marginTop: '10px' }}>ที่อยู่ : </h6><input type="text" class="form-control form-control-sm col-lg-9" style={{ marginLeft: '57px' }} value={data.case.Address} onChange={(e)=>{setAddress(e.target.value)}}/>
                        </div>
                    </div>

                </div>
                <h4>อาการเบื้องต้น : </h4><textarea class="form-control col-lg-12" aria-label="With textarea" style={{ marginTop: '5px', marginBottom: '10px' }}></textarea>
                <h4>บรรยายข้อมูลเพิ่มเติม : </h4><textarea class="form-control col-lg-12" aria-label="With textarea" style={{ marginTop: '5px', marginBottom: '10px' }} ></textarea>
            </div>
            <button type="button" class="btn btn-primary" onClick={(e)=>sendData()}>ยืนยันการเปลี่ยนแปลง</button>
        </div>
        
        
    );
};

export default updateCase;