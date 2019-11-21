import React from 'react';
import {Form} from 'reactstrap';
import '../index.css';
const CardPatient = (props) => {
    return (
        <div class='card border' style={{padding:'50px',border:'100px',borderRadius:'30px',marginBottom:'25px'}}>
            <div className='row'>
                <div className='col-sm-12 col-lg-2'>            
                <h3>ชื่อผู้ป่วย</h3>
                </div>
                <div className='col-sm-12 col-lg-6'>            
                    <h6>ID : {props.PatientID}</h6>
                    <p>ชื่อผู้ป่วย : {props.Fname} {props.Lname}</p>
                    <p>เพศ : {props.Gender}</p>
                    <p>วันเกิด :{props.BirthDate}</p>
                    <p>Tel :{props.Tel}</p>
                    <p>Cousin Tel :{props.CousinTel}</p>
                    <p>ที่อยู่ :{props.Address}</p>
                </div>
                <div className='col-sm-12 col-lg-2'>            
                    <h3>เคส</h3>

                </div>

            </div>
        </div>
    );
};

export default CardPatient;