import React from 'react';
import StudentSidebar from '../templates/student-sidebar';

const StudentDashboard = () => {
	return (
		<div className='body-wrapper'>
			<StudentSidebar />
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
					<h5 className='text-center mt-4'>My Dashboard</h5>
					<div className='row'>
						<div className='col-md-8 mx-auto'>
							<div className='row mt-4'>
								<div className='col-md-4'>
									<div className='border rounded bg-light-grey text-center p-3'>
										<img src='assets/icons/reading-book.svg' className='icon-size-lg' />
										<p>My Preferences</p>
									</div>
								</div>

								<div className='col-md-4'>
									<div className='border rounded bg-light-grey text-center p-3'>
										<img src='assets/icons/book-set.svg' className='icon-size-lg' />
										<p>Course Registration</p>
									</div>
								</div>
								<div className='col-md-4'>
									<div className='border rounded bg-light-grey text-center p-3'>
										<img src='assets/icons/naira.svg' className='icon-size-lg' />
										<p>Fees Payment</p>
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

export default StudentDashboard;
