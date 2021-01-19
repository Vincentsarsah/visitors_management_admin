import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

import Contacts from '../components/Contacts'
import StaffList from '../components/StaffList'
import AboutUs from '../components/RandomCode'
import Report from '../components/Report'
import RandomCode from '../components/RandomCode'


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {

  const handleEmail = () => {
    window.open("mailto:vincent.sarsah@amalitech.org") 
  }
  return (
    <Router>
          <div>
          <MDBNavbar color="indigo" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text"></strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to=""><Link to="/"  className = "navButton">Home</Link></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!"><Link to="/StaffList"  className = "navButton">StaffList</Link></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!"><Link to="/Report"  className = "navButton">Report</Link></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!"><Link to="/RandomCode"  className = "navButton">RandomCode</Link></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2">Action</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="https://visitors-app-7b543.web.app/">Management App</MDBDropdownItem>
                      <MDBDropdownItem href="#!" onClick = {handleEmail}>Send Email</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBFormInline waves>
                    <div className="md-form my-0">
                      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                  </MDBFormInline>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route path="/StaffList" component={StaffList} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Report" component={Report} />
            <Route path="/RandomCode" component={RandomCode} />
          </Switch>
        </div>
    </Router>
    );
  }
}

export default NavbarPage;