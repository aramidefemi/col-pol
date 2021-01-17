import React from 'react';
import Sidebar from '../templates/sidebar';

const UserDashboard = () => {
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
					<div className='row bg-light'>
						<div className='col-md-12 py-4'>
							<h6 className='text-center'>Base Record Setup</h6>
						</div>
					</div>
					<h5 className='text-center mt-4'>School Record</h5>

					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 offset-md-1 col-12'>
									<label className='visually-hidden' for='autoSizingInput'>
										Name
									</label>
									<input
										type='text'
										className='form-control form-control-lg bg-light'
										id='autoSizingInput'
										placeholder='Enter School Name Here'
									/>
								</div>
								<div className='col-md-3 col-12'>
									<button type='submit' className='btn btn-lg btn-success px-5'>
										Save
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className='row mt-5'>
						<div className='col-md-9 me-auto ms-auto'>
							<h6 className='ps-4'>List of School Names</h6>
						</div>

						<img
							src='assets/icons/file-lg.svg'
							className='img-fluid mx-auto mt-5 d-block'
							style={{ height: '296px', width: '296px' }}
						/>
						<p className='small text-center'>
							No list has been set yet. School names will be appear here once you add them
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDashboard;
