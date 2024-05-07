'use client';

import { message } from 'antd';
import { useRouter } from 'next/navigation';
// import { ILoginForm } from "@/shared/types";
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';



import { useSigninMutation } from '../api/login.api';



import { DASHBOARD_PAGES } from '@/shared/lib/pages-url.config';
// import { useAuthenticate } from '../model/login.handler'
import { ILoginForm, StatusCodesEnum } from '@/shared/types'
import { Loader } from '@/shared/ui'


// import { IFormInput, onSubmit } from "../model/login.form.handler";

export const LoginForm = () => {
	const { register, handleSubmit, reset } = useForm<ILoginForm>()
	const [isLoginForm, setIsLoginForm] = useState(false)
	const [login, { isLoading }] = useSigninMutation()
	const { push } = useRouter()
	const onSubmit = (data: any) => {
		login(data)
			.unwrap()
			.then(res => {
				console.log('>>>', res.body.accessToken)
				if (res.statusCode !== StatusCodesEnum.ok) {
					message.warning('Введите правильный логин/ пароль')
					return
				}
				localStorage.setItem(
					'accessToken',
					res?.body.accessToken ? res.body.accessToken : ''
				)
				push(DASHBOARD_PAGES.HOME)
			}) // Вызов функции useauthenticate с данными формы
			.catch(e => {
				message.error('Ошибка авторизации')
				console.error(e)
			})
	}
	if (isLoading) return <Loader />
	return (
		<form
			//   action={useauthenticate}
			onSubmit={handleSubmit(onSubmit)}
			className='w-[420px] rounded-lg  px-7 py-7 text-white shadow-lg backdrop-blur-xl '
		>
			<h1 className='text-center text-[36px] '>Login</h1>
			<div className='relative my-7 h-12 w-full'>
				<input
					{...register('email', { required: true })}
					className='border-white-200 h-full w-full rounded-full border-2 border-solid bg-transparent 
		  p-4 px-6 pb-4 pl-4 text-[16px] text-white outline-none placeholder:text-white'
					type='email'
					name='email'
					placeholder='Email'
				/>
				<FaUser className='absolute right-5 top-2/4 -translate-y-1/2 transform text-[16px]' />
			</div>

			<div className='relative my-7 h-12 w-full'>
				<input
					{...register('password', { required: true })}
					className='border-white-200 h-full w-full rounded-full border-2 border-solid bg-transparent 
		  p-4 px-6 pb-4 pl-4 text-[16px] text-white outline-none placeholder:text-white'
					type='password'
					name='password'
					placeholder='Password'
				/>
				<FaLock className='absolute right-5 top-2/4 -translate-y-1/2 transform text-[16px]' />
			</div>
			<div className=' flex items-center justify-center text-[14px] '>
				<label htmlFor='remember'>
					<input
						className='mr-2'
						type='checkbox'
						name='remember'
					/>
					Запомнить меня?
				</label>
			</div>
			<input
				className='my-5 h-11 w-full rounded-full bg-white font-medium text-black shadow-md 
		outline-none transition-transform hover:scale-105 hover:shadow-2xl'
				type='submit'
				name='form_auth_submit'
			/>
			{/* <button
        className="my-5 h-11 w-full rounded-full bg-white font-medium text-black shadow-md 
		outline-none transition-transform hover:scale-105 hover:shadow-2xl"
        type="submit"
        name="form_auth_submit"
      >
        Войти
      </button> */}
		</form>
	)
}