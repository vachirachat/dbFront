/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState,useEffect} from 'react';
import CardPatient from '../components/CardPatient';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
const patient = () => {
    
    
    const [searchBy, setSearchBy] = useState('');
    const [word, setWord] = useState('');
    const [data,setData] = useState([]);
    let url;
    //fetch data from database เริ่มแก้ตาม tutorial ที่ส่งให้
    /*{data.map((item)=> <CardPatient 
        Fname={item.Fname} 
        Lname={item.Lname} 
        Gender={item.Gender} 
        PatientID={item.PatientID} 
        Tel={item.Tel} 
        CousinTel={item.CounsinTel} 
        Address={item.Address}/>)}*/
    useEffect(async ()=>{
        if (searchBy == 'name'){
             url =  'http://localhost:5000/patient/findbyname/:fname/:lname'
        }else if(searchBy == 'ID'){
             url = 'http://localhost:5000/patient/findbyid/:id'
        }else{
             url = 'http://localhost:5000/patient'
        }
        //let result = await 
        axios.get(url).then((res)=>{
        const json = res.data
        console.log(json);
        setData(json);
        console.log(data);
        })
        
            
    },[]);
    
    
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

                        <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                        <button type="submit" class="btn btn-primary" onClick={fetchData()}>ยืนยัน</button>
                    </div>
                
                </FormGroup>
            </Form>
            {data.map((item)=> <CardPatient 
        Fname={item.Fname} 
        Lname={item.Lname} 
        Gender={item.Gender} 
        PatientID={item.PatientID} 
        Tel={item.Tel} 
        CousinTel={item.CounsinTel} 
        Address={item.Address}/>)}
            
        </div>
        
    );
};

export default patient;