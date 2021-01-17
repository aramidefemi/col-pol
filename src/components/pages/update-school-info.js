import React from 'react';
import Sidebar from '../templates/sidebar';

const UpdateSchoolInfo = () => {
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
					<h5 className='text-center mt-4'>Data Records</h5>

					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 offset-md-1 col-12'>
									<label className='small' for='autoSizingInput'>
										School Program
									</label>
									<input
										type='text'
										className='form-control form-control-lg bg-light-grey'
										id='autoSizingInput'
										placeholder='Enter school program here e.g school of medicine, Undergraduate'
									/>
								</div>
								<div className='col-md-3 col-12 pt-4'>
									<button type='submit' className='btn btn-lg btn-success px-5'>
										Save
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 offset-md-1 col-12'>
									<label className='small' for='autoSizingInput'>
										Faculty Name
									</label>
									<input
										type='text'
										className='form-control form-control-lg bg-light-grey'
										id='autoSizingInput'
										placeholder='Enter faculty here'
									/>
								</div>
								<div className='col-md-3 col-12 pt-4'>
									<button type='submit' className='btn btn-lg btn-success px-5'>
										Save
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 offset-md-1 col-12'>
									<label className='small' for='autoSizingInput'>
										Department
									</label>
									<input
										type='text'
										className='form-control form-control-lg bg-light-grey'
										id='autoSizingInput'
										placeholder='Enter department here'
									/>
								</div>
								<div className='col-md-3 col-12 pt-4'>
									<button type='submit' className='btn btn-lg btn-success px-5'>
										Save
									</button>
								</div>
							</form>
						</div>
					</div>

					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 offset-md-1 col-12'>
									<label className='small' for='autoSizingInput'>
										Program of study
									</label>
									<input
										type='text'
										className='form-control form-control-lg bg-light-grey'
										id='autoSizingInput'
										placeholder='Enter program of study e.g Bachelor of Science'
									/>
								</div>
								<div className='col-md-3 col-12 pt-4'>
									<button type='submit' className='btn btn-lg btn-success px-5'>
										Save
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 offset-md-1 col-12'>
									<label className='small' for='autoSizingInput'>
										Level of study
									</label>
									<input
										type='text'
										className='form-control form-control-lg bg-light-grey'
										id='autoSizingInput'
										placeholder='Enter Study level e.g 200 level'
									/>
								</div>
								<div className='col-md-3 col-12 pt-4'>
									<button type='submit' className='btn btn-lg btn-success px-5'>
										Save
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 offset-md-1 col-12'>
									<label className='small' for='autoSizingInput'>
										Fees of study
									</label>
									<input
										type='text'
										className='form-control form-control-lg bg-light-grey'
										id='autoSizingInput'
										placeholder='Enter fee amount attached to this program'
									/>
								</div>
								<div className='col-md-3 col-12 pt-4'>
									<button type='submit' className='btn btn-lg btn-success px-5'>
										Save
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-md-4 mt-5'>
							<div className='d-grid gap-2'>
								<button className='btn btn-success' type='button'>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateSchoolInfo;
