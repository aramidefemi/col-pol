import React from 'react';
import UserSidebar from '../templates/user-sidebar';

const ChangePassword = () => {
	return (
		<div className='body-wrapper'>
			<UserSidebar />
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
							<h6>Welcome John Doe</h6>
						</div>
					</div>
					<div className='row mt-5'>
						<div className='col-md-6 ms-auto me-auto'>
							<div className='card'>
								<h6 className='text-center my-4'>Change Password</h6>
								<div className='px-4 mb-3'>
									<label for='username' className='form-label fs-6'>
										Enter Old Password
									</label>
									<input type='password' name='password' className='form-control form-control-lg bg-light border-0' />
									<span className='fa fa-eye field-icon'></span>
								</div>
								<div className='px-4 mb-3'>
									<label for='username' className='form-label fs-6'>
										Enter New Password
									</label>
									<input type='password' name='password' className='form-control form-control-lg bg-light border-0' />
									<span className='fa fa-eye field-icon'></span>
								</div>
								<div className='px-4 mb-3'>
									<label for='username' className='form-label fs-6'>
										Re-enter Password
									</label>
									<input type='password' name='password' className='form-control form-control-lg bg-light border-0' />
									<span className='fa fa-eye field-icon'></span>
								</div>
								<div className='px-4 mb-3'>
									<div className='d-grid gap-2 py-4'>
										<button className='btn primary-bg text-white btn-lg'>Change Password</button>
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

export default ChangePassword;
