import React from 'react';
import {   Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div id="side-nav">
      <div className="sidebar-header">
        <img
          alt=""
          src="assets/img/logo.svg"
          style={{ height: '100px', width: '200px' }}
        />
      </div>

      <h6 className="text-primary ms-4 mt-5">Main</h6>

      <div className="sidebar-menu">
        <a href="#">
          <div className="row active pl-5 pr-5">
            <div className="col-md-3 pt-3 ps-4">
              <img alt="" src="assets/icons/home.svg" className="icon-size" />
            </div>
            <div className="col-md-9 pt-3 pl-0">
              <p>Home</p>
            </div>
          </div>
        </a>
        <Link to='/change-password'>
          <div className="row pl-5 pr-5">
            <div className="col-md-3 pt-3 ps-4">
              <img
                alt=""
                src="assets/icons/padlock.svg"
                className="icon-size"
              />
            </div>
            <div className="col-md-9 pt-3 pl-0">
              <p className=" ">Change Password</p>
            </div>
          </div>
        </Link>
      </div>
      <h6 className="text-primary ms-4 mt-5">Setup</h6>

      <div className="sidebar-menu mb-5">
        <Link to='/application-setup'>
          <div className="row pl-5 pr-5">
            <div className="col-md-3 pt-3 ps-4">
              <img alt="" src="assets/icons/hat.svg" className="icon-size" />
            </div>
            <div className="col-md-9 pt-3 pl-0">
              <p className=" ">Admission Management</p>
            </div>
          </div>
        </Link>
        <Link to='/school-setup'>
          <div className="row pl-5 pr-5">
            <div className="col-md-3 pt-3 ps-4">
              <img alt="" src="assets/icons/hat.svg" className="icon-size" />
            </div>
            <div className="col-md-9 pt-3 pl-0">
              <p className=" ">School Management</p>
            </div>
          </div>
        </Link>
        <Link to='/form-review'>
          <div className="row pl-5 pr-5">
            <div className="col-md-3 pt-3 ps-4">
              <img alt="" src="assets/icons/hat.svg" className="icon-size" />
            </div>
            <div className="col-md-9 pt-3 pl-0">
              <p className=" ">Form Review</p>
            </div>
          </div>
        </Link>
        <Link to='/student-dashboard'>
          <div className="row pl-5 pr-5">
            <div className="col-md-3 pt-3 ps-4">
              <img alt="" src="assets/icons/hat.svg" className="icon-size" />
            </div>
            <div className="col-md-9 pt-3 pl-0">
              <p className=" ">Student Dashboard</p>
            </div>
          </div>
        </Link>
        <Link to='/add-courses'>
          <div className="row pl-5 pr-5">
            <div className="col-md-3 pt-3 ps-4">
              <img alt="" src="assets/icons/file.svg" className="icon-size" />
            </div>
            <div className="col-md-9 pt-3 pl-0">
              <p className=" ">Records Management</p>
            </div>
          </div>
        </Link>

        <Link to='/add-school-program'>
          <div className="row pl-5 pr-5">
            <div className="col-md-3 pt-3 ps-4">
              <img
                alt=""
                src="assets/icons/database-storage.svg"
                className="icon-size"
              />
            </div>
            <div className="col-md-9 pt-3 pl-0">
              <p className="d-block">
                Base Records <i className="fas fa-angle-right ms-5"></i>
              </p>
            </div>
          </div>
        </Link>

        <a href="#">
          <div className="row pl-5 pr-5">
            <div className="col-md-3 pt-3 ps-4">
              <img
                alt=""
                src="assets/icons/payment-card.svg"
                className="icon-size"
              />
            </div>
            <div className="col-md-9 pt-3 pl-0">
              <p className=" ">Payment Gateway</p>
            </div>
          </div>
        </a>
        <Link to='/course-registration'>
          <div className="row pl-5 pr-5">
            <div className="col-md-3 pt-3 ps-4">
              <img
                alt=""
                src="assets/icons/google-docs.svg"
                className="icon-size"
              />
            </div>
            <div className="col-md-9 pt-3 pl-0">
              <p className=" ">Course Registration</p>
            </div>
          </div>
        </Link>
        <a href="#">
          <div className="row pl-5 pr-5">
            <div className="col-md-3 pt-3 ps-4">
              <img alt="" src="assets/icons/hostel.svg" className="icon-size" />
            </div>
            <div className="col-md-9 pt-3 pl-0">
              <p className=" ">Hostel Management</p>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="row pl-5 pr-5">
            <div className="col-md-3 pt-3 ps-4">
              <img
                alt=""
                src="assets/icons/profit-report.svg"
                className="icon-size"
              />
            </div>
            <div className="col-md-9 pt-3 pl-0">
              <p className=" ">Results Publishing</p>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="row pl-5 pr-5">
            <div className="col-md-3 pt-3 ps-4">
              <img
                alt=""
                src="assets/icons/user-management.svg"
                className="icon-size"
              />
            </div>
            <div className="col-md-9 pt-3 pl-0">
              <p className=" ">User Management</p>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="row pl-5 pr-5">
            <div className="col-md-3 pt-3 ps-4">
              <img
                alt=""
                src="assets/icons/pie-chart.svg"
                className="icon-size"
              />
            </div>
            <div className="col-md-9 pt-3 pl-0">
              <p className=" ">Analytics</p>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="row pl-5 pr-5">
            <div className="col-md-3 pt-3 ps-4">
              <img
                alt=""
                src="assets/icons/report-stat.svg"
                className="icon-size"
              />
            </div>
            <div className="col-md-9 pt-3 pl-0">
              <p className=" ">Reports</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
