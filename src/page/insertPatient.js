/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState,useEffect} from 'react';
import axios from 'axios';

const insertPatient = (props) => {
    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [tel, setTel] = useState('');
    const [couTel, setCouTel] = useState('');
    const [address, setAddress] = useState('');

    function sendData(){
        let dataSend = { 'Fname': Fname, 'Lname': Lname, 'BirthDate': birthDate,'Gender':gender,'Tel':tel,'CousinTel':couTel,'Address':address }
        let url = 'http://localhost:5000/Patient/insert'
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
     //for set all data element
     
 
    return (
        <div class='card border col-lg-11' style={{padding:'50px',border:'100px',borderRadius:'30px',marginBottom:'25px'}}>
            <h1>สร้างข้อมูลใหม่โดย Patient </h1>
            <div className='row' >
                <div className='col-sm-12 col-lg-2'>            
                <h3>หน้าคน</h3>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <div class='row' style={{marginLeft:'5px'}}>           
                    <p>ชื่อผู้ป่วย : </p><input type="text" class="form-control form-control-sm col-lg-10" style={{ marginLeft: '36px' }} onChange={(e) => { setFname(e.target.value) }} />
                    
                    </div>
                    <div class='row' style={{marginLeft:'5px'}}>           
                    <p>นามสกุล : </p><input type="text" class="form-control form-control-sm col-lg-10" style={{ marginLeft: '36px' }} onChange={(e) => { setLname(e.target.value) }} />
                     
                    </div>
                    <div class='row' style={{marginLeft:'5px'}}>           
                    <p>เพศ : </p><input type="text" class="form-control form-control-sm col-lg-10" style={{ marginLeft: '60px' }} onChange={(e) => { setGender(e.target.value) }} />
                    </div>
                    <div class='row' style={{marginLeft:'5px'}}>           
                    <p>วันเกิด : </p><input type="text" class="form-control form-control-sm col-lg-10" style={{ marginLeft: '47px' }} onChange={(e) => { setBirthDate(e.target.value) }} />
                    
                    </div>
                    <div class='row' style={{marginLeft:'5px'}}>           
                    <p>เบอร์โทรผู้ป่วย : </p><input type="text" class="form-control form-control-sm col-lg-10" style={{ marginLeft: '67px' }} onChange={(e) => { setTel(e.target.value) }} />
                    
                    </div>
                    <div class='row' style={{marginLeft:'5px'}}>           
                    <p>เบอร์โทรญาติ : </p><input type="text" class="form-control form-control-sm col-lg-10" style={{ marginLeft: '17px' }} onChange={(e) => { setCouTel(e.target.value) }} />
                    
                    </div>
                    <div class='row' style={{marginLeft:'5px'}}>           
                    <p>ที่อยู่ : </p><input type="text" class="form-control form-control-sm col-lg-10" style={{ marginLeft: '60px' }} onChange={(e) => { setAddress(e.target.value) }} />
                    
                    </div>
                    <button type="button" class="btn btn-success" style={{marginTop:'10px'}} onClick={(e) => sendData()}>ยืนยันการเปลี่ยนแปลง</button>
                </div>
                      
                    

                

            </div>
        </div>
    );
};

export default insertPatient;