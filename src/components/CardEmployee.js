import React from 'react';
import '../index.css';
import axios from 'axios'
const cardEmployee = (props) => {
    let caseStr = props.Case.join(',');
    let id = props.EmpID
    let date = new Date(props.BirthDate)
    function deleteData() {
        let confirm = window.confirm('Do you want to delete?')
        if (confirm) {
            let url = 'http://localhost:5000/employee/delete/' + id
            axios.delete(url).then((res) => {
                alert("success")
                window.location.reload();
            }, (err) => {
                alert("failed")
            });
        }
    }
    return (
        <div class='card border' style={{ padding: '50px', border: '100px', borderRadius: '30px', marginBottom: '25px', boxShadow: '0 8px 6px -6px black' }}>
            <div className='row'>
                <a href={'/updateEmployee/' + id}><button type="button" class="btn btn-primary " role='button' style={{ width: '100px' }} onClick={() => {
                }}>แก้ไข</button></a>

                <button type="button" class="btn btn-danger" style={{ width: '100px' }} onClick={() => {
                    deleteData();
                }}>ลบ</button>
            </div>
            <h2>EmployeeID : {props.EmpID}</h2>
            <h2>ชื่อ : {props.Fname} {props.Lname}</h2>
            <div className='row'>
                <div className='col-sm-12 col-lg-6'>
                <p>Job : {props.Job.toLocaleLowerCase()}</p>
                    <p>วันเกิด : {date.toDateString()}</p>
                    <p>เพศ : {props.Gender}</p>
                    <p>Tel : {props.Tel}</p>
                    <p>สัญชาติ : {props.Nationality}</p>
                    <p>ที่อยู่ : {props.Address}</p>
                </div>

            </div>
            <h4>เคสที่ดูแล : {caseStr}</h4>

        </div>
    );
};

export default cardEmployee;