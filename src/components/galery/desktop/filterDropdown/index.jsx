import { useState } from "react";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import "./filterDropdown.css";

function FilterDropdown() {
    const [show, setShow] = useState(false)
  return (
    <Container style={{marginTop: "130px"}}>

<div className="filter-cont">
        <i class="bi bi-sliders filter-icon" onClick={()=> setShow(!show)}></i>
    
    <div className={`dropdown-custom ${show ? "show" : "hidden"}`}>
      
    </div>
  </div>
    </Container>
   
  );
}

export default FilterDropdown;
