import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import patient from './page/patient';
import casePatient from './page/casePatient';
import doctor from './page/Employee';
import updateCase from './page/updateCase';
import updateEmployee from './page/updateEmployee';
import updatePatient from './page/updatePatient';
import Navbar from './components/Navbar';
import insertPatient from  './page/insertPatient';
import insertCase from './page/insertCase';
import insertEmployee from './page/insertEmployee';
import insertDoctor from './page/insertDoctor';
import insertNurse from './page/insertNurse';
import insertIntern from './page/insertIntern';
import './index.css';
function App() {
  return (
    <Router>
    <div class='thaiFont'>
      <nav class="navbar" style={{backgroundColor:'#4285f4'}}>
        <a class="navbar-brand" href="/">
          <div class="row">
            
            <h1 style={{color:'red',marginLeft:'20px'}}> + </h1>
            <h1 style={{color:'white'}}>Hosptial Database</h1>
            <h5 style={{color:'white',marginTop:"17px",marginLeft:'10px'}}>ข้อมูลที่ยุ่งยากให้เราช่วยจัดการ</h5>
            
            </div>
    </a>
    </nav>
    
    <div style={{marginLeft:'10%'}}>
      <Navbar className='col-sm-12 col-md-8 col-lg-8' style={{textAlign:'center',display:'inline-block'}}/>
 
      <Switch>
        <Route exact path='/' component={patient} />
        <Route path='/case' component={casePatient} />
        <Route path='/employee' component={doctor}/>
        <Route path='/updateCase/:patid/:caseid' component={updateCase}/>
        <Route path='/updateEmployee/:empid' component={updateEmployee}/>
        <Route path='/updatePatient/:patid' component={updatePatient}/>
        <Route path='/insertPatient' component={insertPatient} />
        <Route path='/insertCase' component={insertCase} />
        <Route path='/insertEmployee' component={insertEmployee} />
        <Route path='/insertDoctor/:caseid' component={insertDoctor} />
        <Route path='/insertNurse/:caseid' component={insertNurse} />
        <Route path='/insertIntern/:caseid' component={insertIntern} />

      
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;