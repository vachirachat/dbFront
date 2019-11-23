import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import '../index.css';
const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>    
      
    <div style={{marginLeft:'15%'}}>
          <a href='/' id="button2" class="btn btn-outline-primary">patient</a>
          <a href="/case" id="button2" class="btn btn-outline-primary">case</a>
          <a href="/doctor" id="button2" class="btn btn-outline-primary">employee</a>
    </div>
    </div>

  );
}

export default Example;