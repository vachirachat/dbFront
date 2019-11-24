import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import '../index.css';
const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="thaiFont">
    <h1 className="thaiFont" style={{marginTop:'15px'}}> สร้างข้อมูล</h1>    
    <div style={{marginLeft:'5%'}}>
          <a href='/insertPatient' id="button2" class="btn btn-outline-success">Patient</a>
          <a href="/insertCase" id="button2" class="btn btn-outline-success">Case</a>
          <a href="/insertEmployee" id="button2" class="btn btn-outline-success">Employee</a>
    </div>  
    <h1>เลือกมุมมองที่ต้องการค้นหาข้อมูล</h1>
    <div style={{marginLeft:'15%'}}>
          <a href='/' id="button2" class="btn btn-outline-primary">Patient</a>
          <a href="/case" id="button2" class="btn btn-outline-primary">Case</a>
          <a href="/employee" id="button2" class="btn btn-outline-primary">Employee</a>
    </div>
    
    </div>

  );
}

export default Example;