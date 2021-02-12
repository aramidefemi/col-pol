import React from 'react';
import StudentSidebar from '../templates/student-sidebar';

const CourseRegistration = () => {
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
					<h5 className='text-center mt-4'>Course Registration</h5>
					<div className='row mt-4'>
						<div className='col-md-10 mx-auto'>
							<table className='table table-bordered border-dark text-center'>
								<thead>
									<tr>
										<th>S/N</th>
										<th>Core Courses</th>
										<th>Credit Units</th>
										<th>Course Code</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr className='border border-0'>
										<td>1</td>
										<td>Engineering Mathematics - Calculus and algebra</td>
										<td>3 Units</td>
										<td>EEE 301</td>
										<td>
											<div className='d-grid gap-2'>
												<button className='btn btn-success'>Add</button>
											</div>
										</td>
									</tr>
									<tr className='border border-0'>
										<td>2</td>
										<td>Engineering Mathematics - Calculus and algebra</td>
										<td>3 Units</td>
										<td>EEE 301</td>
										<td>
											<div className='d-grid gap-2'>
												<button className='btn btn-success'>Add</button>
											</div>
										</td>
									</tr>
									<tr className='border border-0'>
										<td>3</td>
										<td>Engineering Mathematics - Calculus and algebra</td>
										<td>3 Units</td>
										<td>EEE 301</td>
										<td>
											<div className='d-grid gap-2'>
												<button className='btn btn-success'>Add</button>
											</div>
										</td>
									</tr>
									<tr className='border border-0'>
										<td>4</td>
										<td>Engineering Mathematics - Calculus and algebra</td>
										<td>3 Units</td>
										<td>EEE 301</td>
										<td>
											<div className='d-grid gap-2'>
												<button className='btn btn-success'>Add</button>
											</div>
										</td>
									</tr>
									<tr className='border border-0'>
										<td>5</td>
										<td>Engineering Mathematics - Calculus and algebra</td>
										<td>3 Units</td>
										<td>EEE 301</td>
										<td>
											<div className='d-grid gap-2'>
												<button className='btn btn-success'>Add</button>
											</div>
										</td>
									</tr>
									<tr className='border border-0'>
										<td>6</td>
										<td>Engineering Mathematics - Calculus and algebra</td>
										<td>3 Units</td>
										<td>EEE 301</td>
										<td>
											<div className='d-grid gap-2'>
												<button className='btn btn-success'>Add</button>
											</div>
										</td>
									</tr>
									<tr className='border border-0'>
										<td>7</td>
										<td>Engineering Mathematics - Calculus and algebra</td>
										<td>3 Units</td>
										<td>EEE 301</td>
										<td>
											<div className='d-grid gap-2'>
												<button className='btn btn-success'>Add</button>
											</div>
										</td>
									</tr>
									<tr className='border border-0'>
										<td>8</td>
										<td>Engineering Mathematics - Calculus and algebra</td>
										<td>3 Units</td>
										<td>EEE 301</td>
										<td>
											<div className='d-grid gap-2'>
												<button className='btn btn-success'>Add</button>
											</div>
										</td>
									</tr>
									<tr className='border border-top-0 border-dark'>
										<td>9</td>
										<td>Engineering Mathematics - Calculus and algebra</td>
										<td>3 Units</td>
										<td>EEE 301</td>
										<td>
											<div className='d-grid gap-2'>
												<button className='btn btn-success'>Add</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className='row mt-4'>
						<div className='col-md-10 mx-auto'>
							<table className='table table-bordered border-dark text-center'>
								<thead>
									<tr>
										<th>S/N</th>
										<th>Elective Courses</th>
										<th>Credit Units</th>
										<th>Course Code</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr className='border border-0'>
										<td>1</td>
										<td>Engineering Mathematics - Calculus and algebra</td>
										<td>3 Units</td>
										<td>EEE 301</td>
										<td>
											<div className='d-grid gap-2'>
												<button className='btn btn-success'>Add</button>
											</div>
										</td>
									</tr>
									<tr className='border border-0'>
										<td>2</td>
										<td>Engineering Mathematics - Calculus and algebra</td>
										<td>3 Units</td>
										<td>EEE 301</td>
										<td>
											<div className='d-grid gap-2'>
												<button className='btn btn-success'>Add</button>
											</div>
										</td>
									</tr>
									<tr className='border border-0'>
										<td>3</td>
										<td>Engineering Mathematics - Calculus and algebra</td>
										<td>3 Units</td>
										<td>EEE 301</td>
										<td>
											<div className='d-grid gap-2'>
												<button className='btn btn-success'>Add</button>
											</div>
										</td>
									</tr>

									<tr className='border border-top-0 border-dark'>
										<td>4</td>
										<td>Engineering Mathematics - Calculus and algebra</td>
										<td>3 Units</td>
										<td>EEE 301</td>
										<td>
											<div className='d-grid gap-2'>
												<button className='btn btn-success'>Add</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>

							<p className='text-end'>
								Total Course Units Per Semester: <span className='fw-bold'>24 units</span>
							</p>

							<div className='col-md-4 mx-auto mt-4'>
								<div className='d-grid gap-2'>
									<button className='btn btn-success'>Submit</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CourseRegistration;
