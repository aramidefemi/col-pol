import React from 'react';
import UserSidebar from '../templates/user-sidebar';

const SchoolSetup = () => {
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
							<h6 className='text-center'>Basic Record Setup</h6>
						</div>
					</div>
					<h5 className='text-center mt-4'>School Setup</h5>
					<div className='row'>
						<div className='col-md-10 ms-auto me-auto'>
							<div className='row mt-4'>
								<div className='col-md-3'>
									<div className='border rounded bg-light-grey text-center p-3'>
										<img src='assets/icons/calendar.svg' className='icon-size-lg' />
										<p>Academic Sessions</p>
									</div>
								</div>
								<div className='col-md-3'>
									<div className='border rounded bg-light-grey text-center p-3'>
										<img src='assets/icons/house-black-silhouette-without-door.svg' className='icon-size-lg' />
										<p>Campuses</p>
									</div>
								</div>
								<div className='col-md-3'>
									<div className='border rounded bg-light-grey text-center p-3'>
										<img src='assets/icons/book-set.svg' className='icon-size-lg' />
										<p>Courses</p>
									</div>
								</div>
								<div className='col-md-3'>
									<div className='border rounded bg-light-grey text-center p-3'>
										<img src='assets/icons/file-xlg.svg' className='icon-size-lg' />
										<p>Course Registration</p>
									</div>
								</div>
							</div>
							<div className='row mt-4'>
								<div className='col-md-3'>
									<div className='border rounded bg-light-grey text-center p-3'>
										<img src='assets/icons/users.svg' className='icon-size-lg' />
										<p>Course Advisors</p>
									</div>
								</div>
								<div className='col-md-3'>
									<div className='border rounded bg-light-grey text-center p-3'>
										<img src='assets/icons/pantheon-of-rome.svg' className='icon-size-lg' />
										<p>Departments</p>
									</div>
								</div>
								<div className='col-md-3'>
									<div className='border rounded bg-light-grey text-center p-3'>
										<img src='assets/icons/department.svg' className='icon-size-lg' />
										<p>Faculties</p>
									</div>
								</div>
								<div className='col-md-3'>
									<div className='border rounded bg-light-grey text-center p-3'>
										<img src='assets/icons/bar-chart.svg' className='icon-size-lg' />
										<p>Levels</p>
									</div>
								</div>
							</div>
							<div className='row mt-4'>
								<div className='col-md-3'>
									<div className='border rounded bg-light-grey text-center p-3'>
										<img src='assets/icons/book-of-black-cover-closed.svg' className='icon-size-lg' />
										<p>Program of Study</p>
									</div>
								</div>
								<div className='col-md-3'>
									<div className='border rounded bg-light-grey text-center p-3'>
										<img src='assets/icons/reading-book.svg' className='icon-size-lg' />
										<p>Students</p>
									</div>
								</div>
								<div className='col-md-3'>
									<div className='border rounded bg-light-grey text-center p-3'>
										<img src='assets/icons/school-building.svg' className='icon-size-lg' />
										<p>School Programs</p>
									</div>
								</div>
								<div className='col-md-3'>
									<div className='border rounded bg-light-grey text-center p-3'>
										<img src='assets/icons/school-calendar.svg' className='icon-size-lg' />
										<p>Semester</p>
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

export default SchoolSetup;
