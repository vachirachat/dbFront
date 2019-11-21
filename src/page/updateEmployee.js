import React from 'react';

const updateEmployee = props => {
    
    return (
        <div class='card border col-lg-11' style={{padding:'50px',border:'100px',borderRadius:'30px',marginBottom:'25px',boxShadow:'0 8px 6px -6px black'}}>
            <div className='row'>
            <h2>EmpID : </h2><input type="text" class="form-control form-control-sm col-lg-6" style={{marginLeft:'72px'}}/></div>
            <div className='row'>
            <h2>ชื่อ : </h2><input type="text" class="form-control form-control-sm col-lg-6" style={{marginLeft:'127px'}}/></div>
            <div className='row'>
                <div className='col-sm-12 col-lg-2'>            
                <h3>ชื่อหมอ</h3>
                </div>
                <div className='col-sm-12 col-lg-6'>  
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
            </div>
            <h4>เคสที่ดูแล : {props.case}</h4>
            
        </div>
    );
};

export default updateEmployee;