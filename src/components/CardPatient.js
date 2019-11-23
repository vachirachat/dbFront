import React from 'react';
import { Form } from 'reactstrap';
import '../index.css';
import {axios} from 'axios'

const CardPatient = (props) => {
    let c = props.CID.join(' ,');
    let id = props.PatientID
    function deleteData() {
        let url = 'http://localhost:5000/patient/delete/' + id
        axios.delete(url).then((res) => {
            alert("success")

        }, (err) => {
            alert("failed")
        });

    }


    return (
        <div class='card border' style={{ padding: '50px', border: '100px', borderRadius: '30px', marginBottom: '25px' }}>
            <div className='row'>
                <a href={'/updatePatient/' + id}><button type="button" class="btn btn-primary " role='button' style={{ width: '100px' }} onClick={() => {
                    deleteData();
                    console.log('c');
                }}>แก้ไข</button></a>

                <button type="button" class="btn btn-danger" style={{ width: '100px' }} onClick={() => {
                    'deleteData();'
                }}>ลบ</button>
            </div>
            <div className='row'>
                <div className='col-sm-12 col-lg-2'>
                    <h3>Patient</h3>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <h6>ID : {props.PatientID}</h6>
                    <p>ชื่อผู้ป่วย : {props.Fname} {props.Lname}</p>
                    <p>เพศ : {props.Gender}</p>
                    <p>วันเกิด : {props.BirthDate}</p>
                    <p>Tel :{props.Tel}</p>
                    <p>Cousin Tel :{props.CousinTel}</p>
                    <p>ที่อยู่ : {props.Address}</p>
                </div>
                <div className='col-sm-12 col-lg-2'>
                    <h3>เคส : {c}</h3>

                </div>

            </div>
        </div>
    );
};

export default CardPatient;