import React from 'react';
import Sidebar from '../templates/sidebar';

const AddCourses = () => {
	return (
		<div className='body-wrapper'>
			<Sidebar />
			<div id='wrapper' className='bg-white'>
				<div className='container-fluid'>
					<div className='row'>
						<nav className='navbar primary-bg pe-5 ps-2' style={{ width: '100%' }}>
							<button type='button' id='sidebarCollapse' className='btn'>
								<i className='fas fa-align-left text-white'></i>
							</button>

							<a href='#' className='btn btn-lg btn-light ml-auto'>
								{' '}
								Logout
							</a>
						</nav>
					</div>
					<div className='row bg-light-grey'>
						<div className='col-md-12 py-4'>
							<h6 className='text-center'>Base Record Setup</h6>
						</div>
					</div>
					<h5 className='text-center mt-4'>Courses</h5>

					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 me-auto ms-auto col-12'>
									<select className='form-select form-select-lg bg-light mb-3' aria-label='.form-select-lg example'>
										<option selected>Select Faculty</option>
										<option value='1'>One</option>
										<option value='2'>Two</option>
										<option value='3'>Three</option>
									</select>
								</div>
							</form>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 me-auto ms-auto col-12'>
									<select className='form-select form-select-lg bg-light mb-3' aria-label='.form-select-lg example'>
										<option selected>Select Department</option>
										<option value='1'>One</option>
										<option value='2'>Two</option>
										<option value='3'>Three</option>
									</select>
								</div>
							</form>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 me-auto ms-auto col-12'>
									<select className='form-select form-select-lg bg-light mb-3' aria-label='.form-select-lg example'>
										<option selected>Select Academic Year</option>
										<option value='1'>One</option>
										<option value='2'>Two</option>
										<option value='3'>Three</option>
									</select>
								</div>
							</form>
						</div>
					</div>

					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 me-auto ms-auto col-12'>
									<select className='form-select form-select-lg bg-light mb-3' aria-label='.form-select-lg example'>
										<option selected>Select Faculty</option>
										<option value='1'>One</option>
										<option value='2'>Two</option>
										<option value='3'>Three</option>
									</select>
								</div>
							</form>
						</div>
					</div>

					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 me-auto ms-auto col-12'>
									<input
										type='text'
										className='form-control form-control-lg bg-light-grey'
										id='autoSizingInput'
										placeholder='Enter fee amount attached to this program'
									/>
								</div>
							</form>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-md-6 ms-auto me-auto mt-5'>
							<div className='row'>
								<div className='col-md-6 col-6'>
									<div className='d-grid gap-2'>
										<button className='btn btn-success btn-lg' type='button'>
											Add Course via CSV
										</button>
									</div>
								</div>
								<div className='col-md-6 col-6'>
									<div className='d-grid gap-2'>
										<button className='btn btn-success btn-lg' type='button'>
											Add Course Manually
										</button>
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-12 mt-4'>
									<img src='assets/icons/info-circle.svg' className='icon-size my-2' />
									<p className='d-inline-block'>Note: the CSV allows bulk upload of document in a specific format</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AddCourses;
