import React from 'react';
import Sidebar from '../templates/sidebar';

const AdminSetup = () => {
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
							<h6 className='text-center'>Application Setup</h6>
						</div>
					</div>
					<h5 className='text-center mt-4'>Application Setup</h5>

					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 me-auto ms-auto col-12'>
									<label className='small' for='autoSizingInput'>
										Faculty Name
									</label>
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
							<form className='row g-3 justify-content-center align-items-center'>
								<div className='col-md-8 me-auto ms-auto col-12'>
									<div className='row'>
										<div className='col-md-6'>
											<label className='small' for='autoSizingInput'>
												Faculty Name
											</label>
											<select className='form-select form-select-lg bg-light mb-3' aria-label='.form-select-lg example'>
												<option selected>Select Department</option>
												<option value='1'>One</option>
												<option value='2'>Two</option>
												<option value='3'>Three</option>
											</select>
										</div>
										<div className='col-md-6'>
											<label className='small' for='autoSizingInput'>
												Faculty Name
											</label>
											<select className='form-select form-select-lg bg-light mb-3' aria-label='.form-select-lg example'>
												<option selected>Select Department</option>
												<option value='1'>One</option>
												<option value='2'>Two</option>
												<option value='3'>Three</option>
											</select>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 me-auto ms-auto col-12'>
									<select className='form-select form-select-lg bg-light mb-3' aria-label='.form-select-lg example'>
										<option selected>Program of Study</option>
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
										<option selected>Faculty</option>
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
										<option selected>Department</option>
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
									<label className='small' for='autoSizingInput'>
										Application Fee Amount
									</label>

									<input
										type='text'
										className='form-control form-control-lg bg-light-grey'
										id='autoSizingInput'
										placeholder='e.g N30,000'
									/>
								</div>
							</form>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 me-auto ms-auto col-12'>
									<label className='small' for='autoSizingInput'>
										Application Fee Amount
									</label>

									<input
										type='text'
										className='form-control form-control-lg bg-light-grey'
										id='autoSizingInput'
										placeholder='e.g N30,000'
									/>
								</div>
							</form>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-md-6 ms-auto me-auto mt-5'>
							<div className='row'>
								<div className='col-md-12'>
									<div className='d-grid gap-2'>
										<button className='btn btn-success btn-lg' type='button'>
											Setup
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminSetup;
