import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSelector, clearState } from "../Services/Slices/userSlice";
import { ShoppingCart } from "@material-ui/icons";
const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { isSuccess } = useSelector(userSelector);
	const dispatch = useDispatch();

	const handleLogout = () => {
		// console.log("Logout");
		// localStorage.setItem("token", response.data.key);
		// locaremoveItem()
		dispatch(clearState());
		localStorage.removeItem("token");
	};
	return (
		<div class='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
			<div class='relative flex items-center justify-between'>
				<div class='flex items-center'>
					<a
						href='/'
						aria-label='Company'
						title='Company'
						class='inline-flex items-center mr-8'>
						<svg
							class='w-8 text-deep-purple-accent-400'
							viewBox='0 0 24 24'
							strokeLinejoin='round'
							strokeWidth='2'
							strokeLinecap='round'
							strokeMiterlimit='10'
							stroke='currentColor'
							fill='none'>
							<rect x='3' y='1' width='7' height='12' />
							<rect x='3' y='17' width='7' height='6' />
							<rect x='14' y='1' width='7' height='6' />
							<rect x='14' y='11' width='7' height='12' />
						</svg>
						<span class='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
							Company
						</span>
					</a>
					<ul class='flex items-center hidden space-x-8 lg:flex'>
						<li>
							<a
								href='/'
								aria-label='Our product'
								title='Our product'
								class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
								Product
							</a>
						</li>
						<li>
							<a
								href='/'
								aria-label='Our product'
								title='Our product'
								class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
								Features
							</a>
						</li>
						<li>
							<a
								href='/'
								aria-label='Product pricing'
								title='Product pricing'
								class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
								Pricing
							</a>
						</li>
						<li>
							<a
								href='/'
								aria-label='About us'
								title='About us'
								class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
								About us
							</a>
						</li>
					</ul>
				</div>
				<ul class='flex items-center hidden space-x-8 lg:flex'>
					{!isSuccess ? (
						<>
							<li>
								<a
									href='/login'
									aria-label='Sign in'
									title='Sign in'
									class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
									Sign in
								</a>
							</li>
							<li>
								<a
									href='/signup'
									class='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
									aria-label='Sign up'
									title='Sign up'>
									Sign up
								</a>
							</li>
						</>
					) : (
						<li class='flex items-center mt-4 md:mt-0'>
							<button
								class='hidden mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none'
								aria-label='show notifications'>
								<svg
									class='w-6 h-6'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</button>
							<div class='m-6 indicator'>
								<div class='indicator-item badge badge-primary'>2</div>
								<ShoppingCart />
								{/* <div class='grid w-32 h-32 bg-base-300 place-items-center'> */}
								{/* content */}
								{/* </div> */}
							</div>

							{/* <IconButton
								component={Link}
								to='/cart'
								aria-label='Show cart items'
								color='inherit'>
								<Badge badgeContent={totalItems} color='secondary'></Badge>
							</IconButton> */}
							<p>Cart</p>

							<div class='dropdown dropdown-end'>
								<div tabindex='0' class='btn btn-ghost rounded-btn'>
									<div class='w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full'>
										<img
											src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
											class='object-cover w-full h-full'
											alt='avatar'
										/>
									</div>
								</div>
								<ul
									tabindex='0'
									class='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52'>
									<li>
										<a>Setting</a>
									</li>
									<li>
										<a onClick={handleLogout}>Logout</a>
									</li>
								</ul>
							</div>
						</li>
					)}
				</ul>
				<div class='lg:hidden'>
					<button
						aria-label='Open Menu'
						title='Open Menu'
						class='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
						onClick={() => setIsMenuOpen(true)}>
						<svg class='w-5 text-gray-600' viewBox='0 0 24 24'>
							<path
								fill='currentColor'
								d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
							/>
							<path
								fill='currentColor'
								d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
							/>
							<path
								fill='currentColor'
								d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
							/>
						</svg>
					</button>
					{isMenuOpen && (
						<div class='absolute top-0 left-0 w-full'>
							<div class='p-5 bg-white border rounded shadow-sm'>
								<div class='flex items-center justify-between mb-4'>
									<div>
										<a
											href='/'
											aria-label='Company'
											title='Company'
											class='inline-flex items-center'>
											<svg
												class='w-8 text-deep-purple-accent-400'
												viewBox='0 0 24 24'
												strokeLinejoin='round'
												strokeWidth='2'
												strokeLinecap='round'
												strokeMiterlimit='10'
												stroke='currentColor'
												fill='none'>
												<rect x='3' y='1' width='7' height='12' />
												<rect x='3' y='17' width='7' height='6' />
												<rect x='14' y='1' width='7' height='6' />
												<rect x='14' y='11' width='7' height='12' />
											</svg>
											<span class='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
												Company
											</span>
										</a>
									</div>
									<div>
										<button
											aria-label='Close Menu'
											title='Close Menu'
											class='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
											onClick={() => setIsMenuOpen(false)}>
											<svg class='w-5 text-gray-600' viewBox='0 0 24 24'>
												<path
													fill='currentColor'
													d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
												/>
											</svg>
										</button>
									</div>
								</div>
								<nav>
									<ul class='space-y-4'>
										<li>
											<a
												href='/'
												aria-label='Our product'
												title='Our product'
												class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
												Product
											</a>
										</li>
										<li>
											<a
												href='/'
												aria-label='Our product'
												title='Our product'
												class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
												Features
											</a>
										</li>
										<li>
											<a
												href='/'
												aria-label='Product pricing'
												title='Product pricing'
												class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
												Pricing
											</a>
										</li>
										<li>
											<a
												href='/'
												aria-label='About us'
												title='About us'
												class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
												About us
											</a>
										</li>
										<li>
											<a
												href='/login'
												aria-label='Sign in'
												title='Sign in'
												class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
												Sign in
											</a>
										</li>
										<li>
											<a
												href='/'
												class='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
												aria-label='Sign up'
												title='Sign up'>
												Sign up
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default Header;
