import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSelector, clearState } from "../Services/Slices/userSlice";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
const Header = ({ gone }) => {
	let navigate = useNavigate();

	const { t, i18n } = useTranslation();
	function handleClick(lang) {
		i18n.changeLanguage(lang);
	}
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const {
		isSuccess,
		username,
		profile,
		isFetching,
		isError,
		errorMessage,
		token,
	} = useSelector(userSelector);
	const dispatch = useDispatch();
	// console.log(visiableGone);
	const goneParm = gone || false;
	const [top, setTop] = useState(true);
	const [visiableGone, setvisiableGone] = useState(!top);
	const visiableStyle = visiableGone ? "hidden" : "visible";
	const [toggle, setToggle] = useState(true);

	const toggleClass = " transform translate-x-5 bg-green-500";

	const handleLogout = () => {
		// TODO Save Token
		// localStorage.setItem("token", response.data.key);
		// locaremoveItem()
		dispatch(clearState());
		localStorage.removeItem("token");
		// console.log("Logout");
	};
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		if (!top) {
			setvisiableGone(true);
		} else {
			setvisiableGone(false);
		}

		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	useEffect(() => {
		if (toggle) {
			handleClick("en");
		} else {
			handleClick("am");
		}
	}, [toggle]);
	return (
		// <nav className='bg-white shadow dark:bg-gray-800'><div class="bg-gray-900">
		<header
			className={`w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
				!top && "fixed bg-white blurC shadow-lg"
			}`}>
			<div class='px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
				{/* <div class='relative flex grid items-center grid-cols-2 lg:grid-cols-3'> */}
				<div className='container px-6  mx-auto md:flex md:justify-between md:items-center'>
					<div className='flex justify-center md:block'>
						<a
							className='relative text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300'
							href='#'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								className='bi bi-search'
								viewBox='0 0 16 16'>
								<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
							</svg>
						</a>
					</div>
					<div className='flex items-center justify-between'>
						<div>
							<a
								className='text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'
								href='/'>
								{t("Main.1")}
							</a>
						</div>

						<div className='flex md:hidden'>
							<button
								type='button'
								className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
								aria-label='toggle menu'>
								<svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
									<path
										fillRule='evenodd'
										d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'></path>
								</svg>
							</button>
						</div>
					</div>

					<div className='flex items-center mt-4 md:mt-0'>
						<div
							className='md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer'
							onClick={() => {
								setToggle(!toggle);
							}}>
							<div
								className={
									"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform" +
									(toggle ? null : toggleClass)
								}></div>
						</div>
						{username != null ? (
							<>
								<button
									onClick={() => navigate("/cart")}
									className='hidden mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none'
									aria-label='show notifications'>
									<svg
										className='w-5 h-5'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>

									<span className='absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full'></span>
								</button>

								<button
									type='button'
									className='flex items-center focus:outline-none'
									aria-label='toggle profile dropdown'>
									<div className='w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full'>
										<div class='dropdown dropdown-right dropdown-end'>
											<img
												tabIndex='0'
												src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
												className='object-cover w-full h-full'
												alt='avatar'
											/>
											<ul
												tabIndex='0'
												class='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52'>
												<li>
													<a>Item 1</a>
												</li>
												<li>
													<a>Item 2</a>
												</li>
												<li>
													<a>Item 3</a>
												</li>
											</ul>
										</div>
									</div>

									<h3 className='mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden'>
										{username}
									</h3>
								</button>
							</>
						) : (
							<ul class='flex items-center hidden ml-auto space-x-8 lg:flex'>
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
							</ul>
						)}
					</div>
				</div>
				{/* SubHeader */}

				<nav className={!goneParm ? visiableStyle : "hidden"}>
					<div className='container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300'>
						<a
							href='#'
							class='text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6'>
							{t("Translate.1")}
						</a>

						<a
							href='#'
							class='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'>
							{t("Translate.2")}
						</a>

						<a
							href='#'
							class='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'>
							{t("Translate.3")}
						</a>

						<a
							href='#'
							class='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'>
							{t("Translate.4")}
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
};
export default Header;
