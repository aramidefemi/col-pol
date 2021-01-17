import React from 'react';
import Header from '../templates/header';

const PasswordResetSuccess = () => {
	return (
		<div>
			<Header />
			<main>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6 m-auto'>
							<div className='card mt-5'>
								<h5 className='text-center my-4'>Reset Password</h5>
								<p className='mt-3 text-center px-5'>
									An email has been sent to dominicughanze348@gmail.com if you registered your Lekkify account with your
									email
								</p>
								<div className='d-grid gap-2 col-10 mx-auto px-4 mb-4'>
									<button className='btn btn-lg text-white primary-bg'>
										<span className='small'>Received It</span>
									</button>
								</div>
								<p className='text-center small'>
									Need more help?
									<span className='font-weight-bold'>Contact support</span>
								</p>
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

export default PasswordResetSuccess;
