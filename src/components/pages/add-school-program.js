import React from 'react';
import UserSidebar from '../templates/user-sidebar';

const AddSchoolProgram = () => {
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
					<h5 className='text-center mt-4'>Create School Program</h5>
					<div className='col-md-10 me-auto ms-auto'>
						<div className='row'>
							<div className='col-md-3 ms-auto'>
								<div className='d-grid gap-2'>
									<button className='btn btn-success btn-lg fs-6'>
										Add School program <i className='fas fa-plus'></i>
									</button>
								</div>
							</div>
						</div>
						<div className='card row mt-4'>
							<h6 className='mt-3'>List of School Programs</h6>
							<table className='table'>
								<thead>
									<tr className='text-primary'>
										<th scope='col'>id</th>
										<th scope='col'>Program Type</th>
										<th scope='col'>Faculty</th>
										<th scope='col'>Department</th>
										<th scope='col'>Admin Action</th>
									</tr>
								</thead>
								<tbody className='fw-light fs-6'>
									<tr>
										<th scope='row'>1</th>
										<td>School of Medicine</td>
										<td>Social Sciences</td>
										<td>Engineering</td>
										<td>
											<span>
												<u>View</u>
											</span>
											<button className='btn btn-sm btn-primary'>Edit</button>
											<button className='btn btn-sm btn-danger'>Delete</button>
										</td>
									</tr>
									<tr>
										<th scope='row'>2</th>
										<td>School of Medicine</td>
										<td>Social Sciences</td>
										<td>Engineering</td>
										<td>
											<span>
												<u>View</u>
											</span>
											<button className='btn btn-sm btn-primary'>Edit</button>
											<button className='btn btn-sm btn-danger'>Delete</button>
										</td>
									</tr>
									<tr>
										<th scope='row'>3</th>
										<td>School of Medicine</td>
										<td>Social Sciences</td>
										<td>Engineering</td>
										<td>
											<span>
												<u>View</u>
											</span>
											<button className='btn btn-sm btn-primary'>Edit</button>
											<button className='btn btn-sm btn-danger'>Delete</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddSchoolProgram;
