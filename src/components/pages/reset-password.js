import React from 'react';
import Header from '../templates/header';

const ResetPassword = () => {
	return (
		<div>
			<Header />
			<main>
				<div className='container'>
					<div className='row'>
						<div className='col-md-5 m-auto'>
							<div className='card mt-5'>
								<h5 className='text-center my-4'>Reset Password</h5>
								<div className='px-4 mb-3'>
									<label for='username' className='form-label small'>
										Enter new password
									</label>
									<input type='password' name='password' className='form-control form-control-lg bg-light border-0' />
									<span className='fa fa-eye field-icon'></span>
								</div>
								<div className='px-4 mb-3'>
									<label for='username' className='form-label small'>
										Re-enter password
									</label>
									<input type='password' name='password' className='form-control form-control-lg bg-light border-0' />
									<span className='fa fa-eye field-icon'></span>
								</div>
								<div className='d-grid gap-2 p-4'>
									<button className='btn btn-lg primary-bg text-white'>
										<small>Reset</small>
									</button>
								</div>
								<p className='small text-center px-4 py-2'>Already have an account? Log In</p>
							</div>
						</div>
					</div>
					<hr className='mt-5' />
					<div className='text-end'>
						<img src='assets/img/sw-logo.png' alt='sw-logo' />
					</div>
				</div>
			</main>
		</div>
	);
};

export default ResetPassword;
