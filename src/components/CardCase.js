import React from 'react';
import { Form } from 'reactstrap';
import '../index.css';
import axios from 'axios';
const CardCase = (props) => {
    console.log('props:', props);
    let date = new Date(props.Date);
    let birthdate = new Date(props.BirthDate);
    const ID = props.PatientID;
    const caseid = props.CaseID;
    let doctor = props.doctor.join(', ');
    let intern = props.intern.join(', ');
    let nurse = props.nurse.join(', ');

    let age = function _calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    //if have more time add confirm delete
    function deleteData() {
        let a = window.confirm('Do you want to delete?')
        if (a == true) {
            let url = 'http://localhost:5000/case/delete/' + caseid
            axios.delete(url).then((res) => {
                alert("success")
                window.location.reload();
            }, (err) => {
                alert("failed")
            });
        }
    }
    return (
        <div class='card border' style={{ padding: '50px', border: '100px', borderRadius: '30px', marginBottom: '25px' }}>
            <div className='row'>
                <a href={'/updateCase/' + ID + '/' + caseid}><button type="button" class="btn btn-primary " role='button' style={{ width: '100px' }} onClick={() => {

                }}>แก้ไข</button></a>
                <a href={'/insertDoctor/' + caseid}><button type="button" class="btn btn-success " role='button' style={{ width: '100px', marginLeft: '5px' }} onClick={() => {

                }}>เพิ่มหมอ</button></a>
                <a href={'/insertNurse/' + caseid}><button type="button" class="btn btn-success " role='button' style={{ width: '125px', marginLeft: '5px' }} onClick={() => {

                }}>เพิ่มพยาบาล</button></a>
                <a href={'/insertIntern/' + caseid}><button type="button" class="btn btn-success " role='button' style={{ width: '100px',marginLeft: '5px'}} onClick={() => {

                }}>เพิ่มIntern</button></a>
                <button type="button" class="btn btn-danger" style={{ width: '100px',marginLeft: '5px' }} onClick={() => {
                    deleteData();
                }}>ลบ</button>
            </div>
            <h2>เคส : {props.CaseID}</h2>
            <h2>Date : {date.toLocaleString()}</h2>
            <div className='row'>
                <div className='col-sm-12 col-lg-2'>
                    <h3>ชื่อผู้ป่วย</h3>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <h6>ID : {props.PatientID}</h6>
                    <p>ชื่อผู้ป่วย : {props.Fname} {props.Lname}</p>
                    <p>เพศ : {props.Gender}</p>
                    <p>อายุ : {age(birthdate)}</p>
                    <p>Tel : {props.Tel}</p>
                    <p>Cousin Tel : {props.conTel}</p>
                    <p>ที่อยู่ : {props.Address}</p>
                </div>
                <div className='col-sm-12 col-lg-3'>
                    <p>หมอผู้รับผิดชอบ : {doctor}</p>
                    <p>พยาบาลผู้รับผิดชอบ : {nurse}</p>
                    <p>Internผู้รับผิดชอบ : {intern}</p>
                </div>

            </div>
            <h4>อาการเบื้องต้น : {props.desc}</h4>
            <h4>วินิจฉัย : {props.diag}</h4>

        </div>
    );

};

export default CardCase;