import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_SCHOOL, GET_SCHOOLS } from '../../redux/application/action';
import Sidebar from '../templates/sidebar';
import ShowIF from '../../common/ShowIF';
import FlatList from '../../common/FlatList';

const UserDashboard = () => {
  const dispatch = useDispatch();
  const [ state, setState ] = useState('');
  const { schools : { list } } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(GET_SCHOOLS());
  }, []);
  const handleChange = ({ target: { value } }) => {
    setState(value);
  };

  const addSchool = () => {
    const name = state;
    const payload = {
      school: {
        name,
        code: name,
        description: name,
        motto: 'Our motto is ' + name,
        address: 'Nigeria',
      },
    };
    dispatch(ADD_SCHOOL(payload));
  };

  return (
    <div className="body-wrapper">
      <Sidebar />
      <div id="wrapper" className="bg-white">
        <div className="container-fluid">
          <div className="row">
            <nav
              className="navbar primary-bg pe-5 ps-2"
              style={{ width: '100%' }}
            >
              <button type="button" id="sidebarCollapse" className="btn">
                <i className="fas fa-align-left text-white"></i>
              </button>

              <a href="#" className="btn btn-lg btn-light ml-auto">
                {' '}
                Logout
              </a>
            </nav>
          </div>
          <div className="row bg-light">
            <div className="col-md-12 py-4">
              <h6 className="text-center">Base Record Setup</h6>
            </div>
          </div>
          <h5 className="text-center mt-4">School Record</h5>

          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row g-3 mt-3 justify-content-center align-items-center">
                <div className="col-md-8 offset-md-1 col-12">
                  <label className="visually-hidden" for="autoSizingInput">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light"
                    id="autoSizingInput"
                    placeholder="Enter School Name Here"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3 col-12">
                  <button
                    
                    onClick={addSchool}
                    className="btn btn-lg btn-success px-5"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-md-10 ">
              <div className="card row py-3">
                <div className="row mt-2 justify-content-center">
                  <h6 className="ps-4">List of School Names</h6>
                </div>
{console.log('props schools',list)}
                <ShowIF Child={()=><FlatList Child={SchoolRow} data={list} />} show={list} />
                <ShowIF
                  Child={() => (
                    <>
                      {' '}
                      <img
                        alt=""
                        src="assets/icons/file-lg.svg"
                        className="img-fluid mx-auto mt-5 d-block"
                        style={{ height: '296px', width: '296px' }}
                      />
                      <p className="small text-center">
                        No list has been set yet. School names will be appear
                        here once you add them
                      </p>
                    </>
                  )}
                  show={!list}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SchoolRow = ({ attributes:  { name }}) => {
  console.log('props',name)
  return (
    <div className="row mt-4 justify-content-center">
      <div className="col-md-11">
        <div className="row bg-light-grey py-2 px-2 border rounded">
          <div className="col-md-7 col-6">
            <h6 className="pt-2">{name}</h6>
          </div>
          <div className="col-md-2 col-3 ps-0">
            <div className="d-grid gap-2">
              <button className="btn btn-primary">Update</button>
            </div>
          </div>
          <div className="col-md-2 col-3 ps-0">
            <div className="d-grid gap-2">
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
          <div className="col-md-1 col-2">
            <img
              alt=""
              src="assets/icons/info-circle.svg"
              className="icon-size my-2"
              data-bs-toggle="tooltip"
              title="Click the update button to add corresponding school/Institution details."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
