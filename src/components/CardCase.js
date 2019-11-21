import React from 'react';
import {Form} from 'reactstrap';
import '../index.css';
import updateCase from '../page/updateCase';
import axios from axios;
const CardCase = (props) => {

    const ID = props.ID;

    //set Path for delete
    confirmDelete(){
        var r = confirm('ยืนยันเพื่อลบ');
        if (r==true){
            //set ตรงนี้นะ สำหรับ delete 
            axios.post('')
        }else{
        
        }
    }
    /////////////////////////////////////////////////////////

    return (
        <div class='card border' style={{padding:'50px',border:'100px',borderRadius:'30px',marginBottom:'25px'}}>
            <div className='row'>
            <a href={'/updateCase/'+ID}><button type="button" class="btn btn-primary " role='button' style={{width:'100px'}} onClick={()=>{
                console.log('แก้ไข');
            }}>แก้ไข</button></a>
    
            <button type="button" class="btn btn-danger" style={{width:'100px'}} onClick={()=>{
                confirmDelete()
            }}>ลบ</button>
            </div>
            <h2>เคส : {props.caseID}</h2>
            <h2>Date : {props.Date}</h2>
            <div className='row'>
                <div className='col-sm-12 col-lg-2'>            
                <h3>ชื่อผู้ป่วย</h3>
                </div>
                <div className='col-sm-12 col-lg-6'>            
                    <h6>ID : {props.ID}</h6>
                    <p>ชื่อผู้ป่วย : {props.Fname} {props.Lname}</p>
                    <p>วันเกิด : {props.dateOfBirth}</p>
                    <p>Tel : {props.Tel}</p>
                    <p>Cousin Tel : {props.conTel}</p>
                    <p>ที่อยู่ : {props.Address}</p>
                </div>
                <div className='col-sm-12 col-lg-3'>            
                    <h3>หมอผู้รับผิดชอบ</h3>
                </div>

            </div>
            <h4>อาการเบื้องต้น : {props.desc}</h4>
            <h4>บรรยายข้อมูลเพิ่มเติม : {props.addDesc}</h4>
            
        </div>
    );
};

export default CardCase;