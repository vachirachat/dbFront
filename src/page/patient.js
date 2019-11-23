/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import CardPatient from '../components/CardPatient';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
const patient = () => {

    const [searchBy, setSearchBy] = useState('');
    const [word, setWord] = useState('');
    const [data, setData] = useState({ Patient: [] });
    let url
    //use for in useEffect and ยืนยัน
    async function fetchData(text) {
        if (searchBy == 'name') {
            let fullName = text.split(' ')
            if(fullName.length != 2) return;
            console.log(fullName);
            const fname=fullName[0]
            const lname=fullName[1]
            url = 'http://localhost:5000/patient/findbyname/'+fname+"/"+lname
        } else if (searchBy == 'ID') {
            url = 'http://localhost:5000/patient/findbyid/'+text
        } else {
            url = 'http://localhost:5000/patient'
        }
        console.log(url);        
        let res = await axios.get(url);
        console.log(res.data);
        
        if(res.data =="not found") {
            setData({ Patient: [] })
            return
        }
         
        
        res.data.forEach( (i) => {
            i.Case = Array();
            let caseId =  axios.get('http://localhost:5000/case/findbypatid/' + i.PatientID);
            caseId.then((r)=>{
                if(r.data == "not found") return 
                
               for (const j of r.data) {
                   i.Case.push(j.CaseID);
                   
               }
               setData({ Patient: res.data })
            });
            
            
            
        })
       
        console.log(data.Patient);




    }


    //fetch data from database เริ่มแก้ตาม tutorial ที่ส่งให้
    let a = useEffect(() => {
        fetchData()
    }, []);
    
    ///////////////////////////////////////////////////
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
                        
                        <input id="myText" type="text" class="form-control" aria-label="Text input with dropdown button" />
                        <button type="button" class="btn btn-primary" onClick={() => fetchData(document.getElementById("myText").value)}>ยืนยัน</button>
                    </div>
                    
                </FormGroup>
            </Form>

            {data.Patient.map(items => <CardPatient
                Fname={items.Fname}
                Lname={items.Lname}
                Gender={items.Gender}
                BirthDate={items.BirthDate}
                PatientID={items.PatientID}
                Tel={items.Tel}
                CousinTel={items.CounsinTel}
                CID={items.Case}
                Address={items.Address} />)}
        </div>
    );
};

export default patient;