import React from 'react';

const UserSidebar = () => {
	return (
		<div id='side-nav'>
			<div className='sidebar-header'>
				<img src='assets/img/logo.svg' style={{ height: '100px', width: '200px' }} />
			</div>

			<h6 className='text-primary ms-4 mt-5'>Main</h6>

			<div className='sidebar-menu'>
				<a href='#'>
					<div className='row active pl-5 pr-5'>
						<div className='col-md-3 pt-3 ps-4'>
							<img src='assets/icons/home.svg' className='icon-size' />
						</div>
						<div className='col-md-9 pt-3 pl-0'>
							<p>Home</p>
						</div>
					</div>
				</a>
				<a href='#'>
					<div className='row pl-5 pr-5'>
						<div className='col-md-3 pt-3 ps-4'>
							<img src='assets/icons/padlock.svg' className='icon-size' />
						</div>
						<div className='col-md-9 pt-3 pl-0'>
							<p className=' '>Change Password</p>
						</div>
					</div>
				</a>
			</div>
			<h6 className='text-primary ms-4 mt-5'>Setup</h6>

			<div className='sidebar-menu mb-5'>
				<a href='#'>
					<div className='row pl-5 pr-5'>
						<div className='col-md-3 pt-3 ps-4'>
							<img src='assets/icons/hat.svg' className='icon-size' />
						</div>
						<div className='col-md-9 pt-3 pl-0'>
							<p className=' '>Applications</p>
						</div>
					</div>
				</a>

				<a href='#'>
					<div className='row pl-5 pr-5'>
						<div className='col-md-3 pt-3 ps-4'>
							<img src='assets/icons/database-storage.svg' className='icon-size' />
						</div>
						<div className='col-md-9 pt-3 pl-0'>
							<p className='d-block'>
								Base Records <i className='fas fa-angle-right ms-5'></i>
							</p>
						</div>
					</div>
				</a>

				<a href='#'>
					<div className='row pl-5 pr-5'>
						<div className='col-md-3 pt-3 ps-4'>
							<img src='assets/icons/debit-card.svg' className='icon-size' />
						</div>
						<div className='col-md-9 pt-3 pl-0'>
							<p className=' '>Fees Setup</p>
						</div>
					</div>
				</a>
				<a href='#'>
					<div className='row pl-5 pr-5'>
						<div className='col-md-3 pt-3 ps-4'>
							<img src='assets/icons/google-docs.svg' className='icon-size' />
						</div>
						<div className='col-md-9 pt-3 pl-0'>
							<p className=' '>Course Registration</p>
						</div>
					</div>
				</a>

				<a href='#'>
					<div className='row mt-5 pl-5 pr-5'>
						<div className='col-md-3 pt-3 ps-4'>
							<img src='assets/icons/settings.svg' className='icon-size' />
						</div>
						<div className='col-md-9 pt-3 pl-0'>
							<p className=' '>Settings</p>
						</div>
					</div>
				</a>

				<div className='row mt-5 pl-5 pr-5' style={{ border: 'none', background: 'none' }}>
					<div className='col-md-10 mx-auto'>
						<div className='d-grid gap-2'>
							<button className='btn btn-light'>
								<i className='fas fa-sign-out-alt'></i> Logout
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserSidebar;
