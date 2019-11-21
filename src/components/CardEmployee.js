import React from 'react';
import '../index.css';
const cardEmployee = (props) => {
    return (
        <div class='card border' style={{padding:'50px',border:'100px',borderRadius:'30px',marginBottom:'25px',boxShadow:'0 8px 6px -6px black'}}>
            <h2>LicenseID : {props.LicenseID}</h2>
            <h2>ชื่อ : {props.Fname} {props.Lname}</h2>
            <div className='row'>
                <div className='col-sm-12 col-lg-2'>            
                <h3>ชื่อหมอ</h3>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <p>วันเกิด : {props.BirthDate}</p>
                    <p>เพศ : {props.Gender}</p>
                    <p>Tel : {props.Tel}</p>
                    <p>เชื้อชาติ : {props.Nationality}</p>
                    <p>ที่อยู่ : {props.Address}</p>
                </div>

            </div>
            <h4>เคสที่ดูแล : {props.case}</h4>
            
        </div>
    );
};

export default cardEmployee;