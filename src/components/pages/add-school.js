import React from 'react';
import Sidebar from '../templates/sidebar';

const AddSchool = () => {
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
					<h5 className='text-center mt-4'>Set Up School Base Record</h5>

					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<form className='row g-3 mt-3 justify-content-center align-items-center'>
								<div className='col-md-8 offset-md-1 col-12'>
									<label className='small' for='autoSizingInput'>
										School Name
									</label>
									<input
										type='text'
										className='form-control form-control-lg bg-light-grey'
										id='autoSizingInput'
										placeholder='Enter School Name Here'
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
					<div className='row mt-5 justify-content-center'>
						<div className='col-md-10'>
							<div className='card row'>
								<div className='row justify-content-center'>
									<div className='col-md-10 py-3'>
										<h6>List of School Names</h6>
										<div className='row mt-4'>
											<div className='col-md-11 col-10'>
												<div className='row bg-light-grey py-2 px-2 border rounded'>
													<div className='col-md-8 col-6'>
														<h6 className='pt-2'>University of Lagos</h6>
													</div>
													<div className='col-md-2 col-3 ps-0'>
														<div className='d-grid gap-2'>
															<button className='btn btn-primary'>Update</button>
														</div>
													</div>
													<div className='col-md-2 col-3 ps-0'>
														<div className='d-grid gap-2'>
															<button className='btn btn-danger'>Delete</button>
														</div>
													</div>
												</div>
											</div>
											<div className='col-md-1 col-2'>
												<img
													src='assets/icons/info-circle.svg'
													className='icon-size my-2'
													data-bs-toggle='tooltip'
													title='Click the update button to add corresponding school/Institution details.'
												/>
											</div>
										</div>
										<div className='row mt-4'>
											<div className='col-md-11 col-10'>
												<div className='row bg-light-grey py-2 px-2 border rounded'>
													<div className='col-md-8 col-6'>
														<h6 className='pt-2'>University of Lagos</h6>
													</div>
													<div className='col-md-2 col-3 ps-0'>
														<div className='d-grid gap-2'>
															<button className='btn btn-primary'>Update</button>
														</div>
													</div>
													<div className='col-md-2 col-3 ps-0'>
														<div className='d-grid gap-2'>
															<button className='btn btn-danger'>Delete</button>
														</div>
													</div>
												</div>
											</div>
											<div className='col-md-1 col-2'>
												<img
													src='assets/icons/info-circle.svg'
													className='icon-size my-2'
													data-bs-toggle='tooltip'
													title='Click the update button to add corresponding school/Institution details.'
												/>
											</div>
										</div>
										<div className='row mt-4'>
											<div className='col-md-11 col-10'>
												<div className='row bg-light-grey py-2 px-2 border rounded'>
													<div className='col-md-8 col-6'>
														<h6 className='pt-2'>University of Lagos</h6>
													</div>
													<div className='col-md-2 col-3 ps-0'>
														<div className='d-grid gap-2'>
															<button className='btn btn-primary'>Update</button>
														</div>
													</div>
													<div className='col-md-2 col-3 ps-0'>
														<div className='d-grid gap-2'>
															<button className='btn btn-danger'>Delete</button>
														</div>
													</div>
												</div>
											</div>
											<div className='col-md-1 col-2'>
												<img
													src='assets/icons/info-circle.svg'
													className='icon-size my-2'
													data-bs-toggle='tooltip'
													title='Click the update button to add corresponding school/Institution details.'
												/>
											</div>
										</div>
										<div className='row mt-4'>
											<div className='col-md-11 col-10'>
												<div className='row bg-light-grey py-2 px-2 border rounded'>
													<div className='col-md-8 col-6'>
														<h6 className='pt-2'>University of Lagos</h6>
													</div>
													<div className='col-md-2 col-3 ps-0'>
														<div className='d-grid gap-2'>
															<button className='btn btn-primary'>Update</button>
														</div>
													</div>
													<div className='col-md-2 col-3 ps-0'>
														<div className='d-grid gap-2'>
															<button className='btn btn-danger'>Delete</button>
														</div>
													</div>
												</div>
											</div>
											<div className='col-md-1 col-2'>
												<img
													src='assets/icons/info-circle.svg'
													className='icon-size my-2'
													data-bs-toggle='tooltip'
													title='Click the update button to add corresponding school/Institution details.'
												/>
											</div>
										</div>
										<div className='row mt-4'>
											<div className='col-md-11 col-10'>
												<div className='row bg-light-grey py-2 px-2 border rounded'>
													<div className='col-md-8 col-6'>
														<h6 className='pt-2'>University of Lagos</h6>
													</div>
													<div className='col-md-2 col-3 ps-0'>
														<div className='d-grid gap-2'>
															<button className='btn btn-primary'>Update</button>
														</div>
													</div>
													<div className='col-md-2 col-3 ps-0'>
														<div className='d-grid gap-2'>
															<button className='btn btn-danger'>Delete</button>
														</div>
													</div>
												</div>
											</div>
											<div className='col-md-1 col-2'>
												<img
													src='assets/icons/info-circle.svg'
													className='icon-size my-2'
													data-bs-toggle='tooltip'
													title='Click the update button to add corresponding school/Institution details.'
												/>
											</div>
										</div>
										<div className='row mt-4'>
											<div className='col-md-11 col-10'>
												<div className='row bg-light-grey py-2 px-2 border rounded'>
													<div className='col-md-8 col-6'>
														<h6 className='pt-2'>University of Lagos</h6>
													</div>
													<div className='col-md-2 col-3 ps-0'>
														<div className='d-grid gap-2'>
															<button className='btn btn-primary'>Update</button>
														</div>
													</div>
													<div className='col-md-2 col-3 ps-0'>
														<div className='d-grid gap-2'>
															<button className='btn btn-danger'>Delete</button>
														</div>
													</div>
												</div>
											</div>
											<div className='col-md-1 col-2'>
												<img
													src='assets/icons/info-circle.svg'
													className='icon-size my-2'
													data-bs-toggle='tooltip'
													title='Click the update button to add corresponding school/Institution details.'
												/>
											</div>
										</div>
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

export default AddSchool;
