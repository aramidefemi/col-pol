import React from 'react';
import App from '../App';
import Sidebar from '../templates/sidebar';

const ApplicationSetup = () => {
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
							<h6 className='text-center'>Application Setup</h6>
						</div>
					</div>
					<h5 className='text-center mt-4'>Application Setup</h5>

					<div className='row justify-content-center'>
						<div className='col-md-10 ms-auto me-auto'>
							<div className='card'>
								<div className='card-header'>Upload your CSV file</div>
								<div className='card-body'>
									<div className='row'>
										<div className='col-md-8'>
											<div className='row justify-content-center'>
												<div className='col-md-2'>
													<p className='small mt-5'>CSV File</p>
												</div>
												<div className='col-md-8 col-10 text-center'>
													<div className='drop-zone border rounded bg-light-grey pb-4'>
														<p className='text-center mt-4'>Drop a file here to upload</p>
														<button className='upload-btn'>
															<i className='fas fa-upload'></i> <span className='ps-2 fw-light'>Select a file</span>
														</button>
														{/* <!-- <input type="file" name="myFile" className="drop-zone__input" /> --> */}
													</div>
												</div>
												<div className='col-md-1 col-2'>
													<img src='assets/icons/info-circle.svg' className='mt-5' />
												</div>
											</div>
											<div className='row justify-content-center'>
												<div className='col-md-2'>
													<p className='small mt-5'>Delimiter</p>
												</div>
												<div className='col-md-8 col-10 text-center'>
													<select
														className='form-select form-select-lg fs-6 bg-light mb-3 mt-5'
														aria-label='.form-select-lg example'>
														<option selected>Comma</option>
														<option value='1'>One</option>
														<option value='2'>Two</option>
														<option value='3'>Three</option>
													</select>
												</div>
												<div className='col-md-1 col-2'>
													<img src='assets/icons/info-circle.svg' className='mt-5' />
												</div>
											</div>
										</div>
										<div className='col-md-4'>
											<h6>Download CSV File Template</h6>
											<button className='upload-btn bg-light-grey btn btn-md me-2'>Downlad CSV</button>
											<img src='assets/icons/info-circle.svg' />
										</div>
									</div>
									<div className='row'>
										<div className='col-md-8'>
											<div className='row justify-content-center mt-4'>
												<div className='col-md-8 col-10 offset-md-1'>
													<div className='d-grid gap-2'>
														<button className='btn btn-secondary btn-lg fs-6 py-3' type='button'>
															Upload
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='row justify-content-center'>
										<div className='col-md-12 text-center mt-4'>
											<img src='assets/icons/info-circle.svg' className='icon-size my-2' />
											<p className='d-inline-block'>
												Note: the CSV allows bulk upload of document in a specific format
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className='row mt-5 justify-content-center'>
								<div className='col-md-4'>
									<div className='d-grid gap-2'>
										<button className='btn btn-lg btn-success fs-6'>Setup</button>
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

export default ApplicationSetup;
