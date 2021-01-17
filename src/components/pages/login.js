import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../templates/header';

const Login = () => {
	const history = useHistory();

	const handleClick = () => {
		history.push('/school-setup');
	};

	return (
		<div>
			<Header />
			<main>
				<div className='container'>
					<div className='row mt-5'>
						<div className='col-md-10 m-auto'>
							<div className='row mt-5'>
								<div className='col-md-6 align-self-center'>
									<div className='row mb-2'>
										<div className='col-1'>
											<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													name='flexRadioDefault'
													id='flexRadioDefault1'
												/>
											</div>
										</div>
										<div className='col-11'>
											<h6 className='text-uppercase'>Single Sign-on</h6>
											<p className='small'>Sign in once and have access to all privileged content from one spot</p>
										</div>
									</div>
									<div className='row mb-2'>
										<div className='col-1'>
											<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													name='flexRadioDefault'
													id='flexRadioDefault1'
												/>
											</div>
										</div>
										<div className='col-11'>
											<h6 className='text-uppercase'>Secure & Personalized</h6>
											<p className='small'>Completely control the look and feel of content over a secure channel</p>
										</div>
									</div>
									<div className='row'>
										<div className='col-1'>
											<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													name='flexRadioDefault'
													id='flexRadioDefault1'
												/>
											</div>
										</div>
										<div className='col-11'>
											<h6 className='text-uppercase'>All Together</h6>
											<p className='small'>
												Admissions, Registration, Fees Payment, Exams & Records, Student Self-Care (My School), Library,
												College Shop..
											</p>

											<p className='mt-5 mb-0 text-danger'>For Help:</p>
											<span className='font-weight-light small'>
												Contact the College Support <br />
												Email: college.support@socketworksng.com
											</span>
										</div>
									</div>
								</div>
								<div className='col-md-6'>
									<div className='card mt-4'>
										<h5 className='text-center my-4'>User Login</h5>

										<div className='mb-3 px-4'>
											<label for='username' className='form-label small'>
												User Name
											</label>
											<input type='text' name='username' className='form-control form-control-lg bg-light border-0' />
										</div>
										<div className='px-4 mb-3'>
											<label for='username' className='form-label small'>
												Password
											</label>
											<input
												type='password'
												name='password'
												className='form-control form-control-lg bg-light border-0'
											/>
											<span className='fa fa-eye field-icon'></span>
										</div>
										<p className='small text-end px-4'>Forgot Password?</p>
										<div className='d-grid gap-2 p-4'>
											<button type='button' onClick={handleClick} className='btn btn-lg primary-bg text-white'>
												<small>Submit</small>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr className='mt-5' />
					<div className='text-end'>
						<img src='assets/img/sw-logo.png' />
					</div>
				</div>
			</main>
		</div>
	);
};

export default Login;
