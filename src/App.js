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
import './index.css';
function App() {
  return (
    <Router>
    <div>
      <nav class="navbar" style={{backgroundColor:'#4285f4'}}>
        <a class="navbar-brand" href="#">
            <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
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
      
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
