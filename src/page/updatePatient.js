import React from 'react';
import {useState} from 'react';

const updatePatient = props => {
    //const [name, setName] = useState('Mary');


    return (
        <div class='card border col-lg-11' style={{padding:'50px',border:'100px',borderRadius:'30px',marginBottom:'25px'}}>
        <h1>แก้ไขข้อมูลผู้ป่วย</h1>
        <div className='row'>
            <div className='col-sm-12 col-lg-2'>            
            <h3>ชื่อผู้ป่วย</h3>
            </div>
            <div className='col-lg-6'>
                  
                    <div class='row' style={{marginLeft:'5px'}}>
                    <h6 style={{marginTop:'10px'}}>ID : </h6><input type="text" class="form-control form-control-sm col-lg-6" style={{marginLeft:'72px'}}/>
                    </div>
                    <div class='row' style={{marginLeft:'5px'}}>
                    <h6 style={{marginTop:'10px'}}>ชื่อผู้ป่วย : </h6><input type="text" class="form-control form-control-sm col-lg-6" style={{marginLeft:'30px'}}/>
                    </div>
                    <div class='row' style={{marginLeft:'5px'}}>
                    <h6 style={{marginTop:'10px'}}>วันเกิด : </h6><input type="text" class="form-control form-control-sm col-lg-6" style={{marginLeft:'43px'}}/>
                    </div>
                    
                    <div class='row' style={{marginLeft:'5px'}}>
                    <h6 style={{marginTop:'10px'}}>Tel : </h6><input type="text" class="form-control form-control-sm col-lg-6" style={{marginLeft:'65px'}}/>
                    </div>
                    <div class='row' style={{marginLeft:'5px'}}>
                    <h6 style={{marginTop:'10px'}}>Cousin Tel : </h6><input type="text" class="form-control form-control-sm col-lg-6" style={{marginLeft:'10px'}}/>
                    </div>
                    <div class='row' style={{marginLeft:'5px'}}>
                    <h6 style={{marginTop:'10px'}}>ที่อยู่ : </h6><input type="text" class="form-control form-control-sm col-lg-6" style={{marginLeft:'57px'}}/>
                    </div>
                

            </div>
            <div className='col-lg-4'>
                <h2>เคสที่ต้องดูแล</h2>
            </div>

        </div>
        <button>button</button>
    </div>
    );
};

export default updatePatient;