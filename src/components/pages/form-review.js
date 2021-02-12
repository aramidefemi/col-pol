import React from 'react';

const FormReview = () => {
	return (
		<div className='body-wrapper'>
			<div id='wrapper' className='bg-white'>
				<div className='container-fluid'>
					<div className='row bg-light-grey'>
						<div className='col-md-12 py-4'></div>
					</div>
					<h5 className='text-center mt-4'>Preview</h5>
					<div className='row mt-4'>
						<div className='col-md-5 mx-auto'>
							<form>
								<div className='px-4 mb-3'>
									<label for='username' className='form-label fs-6'>
										Primary School Attended <span className='text-danger'>*</span>
									</label>
									<input
										type='text'
										placeholder='Enter name of school here'
										name='password'
										className='form-control fs-6 py-3 form-control-lg bg-light border'
									/>
								</div>
								<div className='px-4 mb-3'>
									<label for='username' className='form-label fs-6'>
										Result Obtained <span className='text-danger'>*</span>
									</label>
									<input
										type='text'
										placeholder='Enter result obtained here e.g living certificate'
										name='password'
										className='form-control fs-6 py-3 form-control-lg bg-light border'
									/>
								</div>
								<div className='px-4 mb-3'>
									<label for='username' className='form-label fs-6'>
										Secondary School Attended <span className='text-danger'>*</span>
									</label>
									<input
										type='text'
										placeholder='Enter name of school here'
										name='password'
										className='form-control fs-6 py-3 form-control-lg bg-light border'
									/>
								</div>
								<div className='px-4 mb-3'>
									<label for='username' className='form-label fs-6'>
										Jamb Score (Optional)
									</label>
									<input
										type='text'
										placeholder='e.g 340'
										name='password'
										className='form-control fs-6 py-3 form-control-lg bg-light border'
									/>
								</div>
								<h5 className='px-4 fw-light'>Next of Kin Details</h5>
								<div className='px-4 mb-3'>
									<label for='username' className='form-label fs-6'>
										Name of Next of Kin <span className='text-danger'>*</span>
									</label>
									<input
										type='text'
										name='password'
										className='form-control fs-6 py-3 form-control-lg bg-light border'
									/>
								</div>
								<div className='px-4 mb-3'>
									<label for='username' className='form-label fs-6'>
										Name of Guardians or Sponsors <span className='text-danger'>*</span>
									</label>
									<input
										type='text'
										name='password'
										className='form-control fs-6 py-3 form-control-lg bg-light border'
									/>
								</div>
								<div className='px-4 mb-3'>
									<label for='username' className='form-label fs-6'>
										Contact Information <span className='text-danger'>*</span>
									</label>
									<input
										type='text'
										placeholder='Enter Next of Kin phone number'
										name='password'
										className='form-control fs-6 py-3 form-control-lg bg-light border'
									/>
								</div>
								<div className='px-4 mb-3 mt-4'>
									<div className='d-grid gap-2'>
										<button className='btn btn-success py-3'>Submit</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormReview;
