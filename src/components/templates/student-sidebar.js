import React from 'react';

const StudentSidebar = () => {
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

				<a href='#'>
					<div className='row pl-5 pr-5'>
						<div className='col-md-3 pt-3 ps-4'>
							<img src='assets/icons/profile-user.svg' className='icon-size' />
						</div>
						<div className='col-md-9 pt-3 pl-0'>
							<p className=' '>My Profile</p>
						</div>
					</div>
				</a>
				<a href='#'>
					<div className='row pl-5 pr-5'>
						<div className='col-md-3 pt-3 ps-4'>
							<img src='assets/icons/reading-book-grey.svg' className='icon-size' />
						</div>
						<div className='col-md-9 pt-3 pl-0'>
							<p className=' '>My Preferences</p>
						</div>
					</div>
				</a>

				<a href='#'>
					<div className='row pl-5 pr-5'>
						<div className='col-md-3 pt-3 ps-4'>
							<img src='assets/icons/book-set-grey.svg' className='icon-size' />
						</div>
						<div className='col-md-9 pt-3 pl-0'>
							<p className='d-block'>
								Course Registration <i className='fas fa-angle-right ms-2'></i>
							</p>
						</div>
					</div>
				</a>

				<a href='#'>
					<div className='row pl-5 pr-5'>
						<div className='col-md-3 pt-3 ps-4'>
							<img src='assets/icons/naira-grey.svg' className='icon-size' />
						</div>
						<div className='col-md-9 pt-3 pl-0'>
							<p className=' '>Fees Payment</p>
						</div>
					</div>
				</a>
			</div>
			<div className='sidebar-menu mt-5'>
				<a href='#'>
					<div className='row pl-5 pr-5'>
						<div className='col-md-3 pt-3 ps-4'>
							<img src='assets/icons/settings-grey.svg' className='icon-size' />
						</div>
						<div className='col-md-9 pt-3 pl-0'>
							<p className=' '>Settings</p>
						</div>
					</div>
				</a>
			</div>

			<div className='row pl-5 pr-5 mt-5'>
				<div className='col-md-9 mx-auto'>
					<div className='d-grid gap-2'>
						<button className='btn btn-light btn-block'>
							<img src='assets/icons/log-out.svg' /> Log Out
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StudentSidebar;
