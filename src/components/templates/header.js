import React from 'react';

const Header = () => {
	return (
		<header className='navbar navbar-expand-md navbar-dark primary-bg bd-navbar'>
			<nav className='container flex-wrap flex-md-nowrap' aria-label='Main navigation'>
				<a className='navbar-brand p-0 me-2' href='/' aria-label='Bootstrap'>
					<img src='assets/img/logo.svg' height='51' />
				</a>

				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#bdNavbar'
					aria-controls='bdNavbar'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<svg className='bi' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
						<path
							fill-rule='evenodd'
							d='M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'></path>
					</svg>
				</button>

				<div className='collapse navbar-collapse' id='bdNavbar'>
					<ul className='navbar-nav flex-row flex-wrap ms-md-auto bd-navbar-nav pt-2 py-md-0'>
						<li className='nav-item col-6 col-md-auto'>
							<a
								className='nav-link p-2 active'
								aria-current='page'
								href='/'
								onclick="ga('send', 'event', 'Navbar', 'Community links', 'Bootstrap');">
								Home
							</a>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='#'
								id='navbarDropdown'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Admission
							</a>
							<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<li>
									<a className='dropdown-item' href='#'>
										Action
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Another action
									</a>
								</li>
								<li>
									<hr className='dropdown-divider' />
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Something else here
									</a>
								</li>
							</ul>
						</li>
					</ul>

					<hr className='d-md-none text-white-50' />

					<ul className='navbar-nav flex-row flex-wrap ms-md-auto'>
						<a className='btn btn-light btn-md d-lg-inline-block my-2 my-md-0 ms-md-3' href='#'>
							User Login
						</a>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
