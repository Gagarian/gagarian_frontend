import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	loginUser,
	userSelector,
	clearState,
} from "../../Services/Slices/userSlice";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loding from "../../Middlewares/Loding";
import { useTranslation } from "react-i18next";

import _ from "lodash";
const Login = () => {
	const dispatch = useDispatch();
	const { t, i18n } = useTranslation();

	let navigate = useNavigate();
	const { register, handleSubmit } = useForm();

	const { isFetching, isError, errorMessage, isSuccess, token } =
		useSelector(userSelector);
	const onSubmit = (data) => {
		dispatch(loginUser(data));
	};
	useEffect(() => {
		return () => {
			dispatch(clearState());
		};
	}, []);
	useEffect(() => {
		if (isError) {
			toast.error(errorMessage);
			dispatch(clearState());
		}

		if (isSuccess && !_.isNil(token)) {
			// history.push("/");
			// {
			// }
			setTimeout(() => {
				// setLoading(false);
			}, 3000);
			navigate("/");
			toast.success("Login");
		}
	}, [isError, isSuccess]);
	return (
		<Loding isLoding={isFetching}>
			<div className='h-full overflow-hidden bg-gray-900'>
				<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
					<div className='flex flex-col items-center justify-between xl:flex-row'>
						<div className='w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12'>
							<h2 className='capitalize max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
								{t("Translate.11")}
							</h2>
							<p className='max-w-xl mb-4 text-base text-white md:text-lg'>
								{t("Translate.10")}
							</p>
							<a
								href='/'
								aria-label=''
								className='inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700'>
								{t("Main.1")}

								<svg
									className='inline-block w-3 ml-2'
									fill='currentColor'
									viewBox='0 0 12 12'>
									<path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
								</svg>
							</a>
						</div>
						<div className='w-full max-w-xl xl:px-8 xl:w-5/12'>
							<div className='relative'>
								<svg
									viewBox='0 0 52 24'
									fill='currentColor'
									className='absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block'>
									<defs>
										<pattern
											id='766323e1-e594-4ffd-a688-e7275079d540'
											x='0'
											y='0'
											width='.135'
											height='.30'>
											<circle cx='1' cy='1' r='.7' />
										</pattern>
									</defs>
									<rect
										fill='url(#766323e1-e594-4ffd-a688-e7275079d540)'
										width='52'
										height='24'
									/>
								</svg>
								<div className='relative bg-white rounded shadow-2xl p-7 sm:p-10'>
									<h3 className='mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl'>
										Sign up
									</h3>
									<form onSubmit={handleSubmit(onSubmit)}>
										<div className='mb-1 sm:mb-2'>
											<label
												htmlFor='name'
												className='inline-block mb-1 font-medium'>
												Username
											</label>
											<input
												type='username'
												{...register("username")}
												id=''
												placeholder='Enter Username'
												className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
												autoFocus
												autoComplete='true'
												required
											/>
										</div>
										<div className='mb-1 sm:mb-2'>
											<label
												htmlFor='password'
												className='inline-block mb-1 font-medium'>
												Password
											</label>
											<input
												type='password'
												{...register("password")}
												id=''
												placeholder='Enter Password'
												minLength='6'
												className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
												required
											/>
										</div>
										<div className='mt-4 mb-2 sm:mb-4'>
											<button
												type='submit'
												className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>
												Signin
											</button>
										</div>
										<p className='text-xs text-gray-600 sm:text-sm'>
											We respect your privacy.
										</p>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Loding>
	);
};

export default Login;
