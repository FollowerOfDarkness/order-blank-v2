"use client";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useAuthenticate } from "../model/login.handler";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSigninMutation } from "../api/login.api";
// import { ILoginForm } from "@/shared/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ILoginForm, StatusCodesEnum } from "@/shared/types";
import { message } from "antd";
import Loader from "@/shared/ui/Loader";
// import { IFormInput, onSubmit } from "../model/login.form.handler";

export const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm<ILoginForm>();
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [login, { isLoading }] = useSigninMutation();
  const { push } = useRouter();
  const onSubmit = (data: any) => {
    login(data)
      .unwrap()
      .then(res => {
        console.log(res);
        if (res.statusCode !== StatusCodesEnum.ok) {
          message.warning("Введите правильный логин/ пароль");
          return;
        }
		localStorage.setItem("accessToken", res?.accessToken ? res.accessToken : "");
      }); // Вызов функции useauthenticate с данными формы
  };
  if (isLoading) return <Loader />;
  return (
    <form
      //   action={useauthenticate}
      onSubmit={handleSubmit(onSubmit)}
      className="w-[420px] rounded-lg  px-7 py-7 text-white shadow-lg backdrop-blur-xl "
    >
      <h1 className="text-center text-[36px] ">Login</h1>
      <div className="relative my-7 h-12 w-full">
        <input
          {...register("email", { required: true })}
          className="border-white-200 h-full w-full rounded-full border-2 border-solid bg-transparent 
		  p-4 px-6 pb-4 pl-4 text-[16px] text-white outline-none placeholder:text-white"
          type="email"
          name="email"
          placeholder="Email"
        />
        <FaUser className="absolute right-5 top-2/4 -translate-y-1/2 transform text-[16px]" />
      </div>

      <div className="relative my-7 h-12 w-full">
        <input
          {...register("password", { required: true })}
          className="border-white-200 h-full w-full rounded-full border-2 border-solid bg-transparent 
		  p-4 px-6 pb-4 pl-4 text-[16px] text-white outline-none placeholder:text-white"
          type="password"
          name="password"
          placeholder="Password"
        />
        <FaLock className="absolute right-5 top-2/4 -translate-y-1/2 transform text-[16px]" />
      </div>
      <div className=" flex items-center justify-center text-[14px] ">
        <label htmlFor="remember">
          <input className="mr-2" type="checkbox" name="remember" />
          Запомнить меня?
        </label>
      </div>
      <input
        className="my-5 h-11 w-full rounded-full bg-white font-medium text-black shadow-md 
		outline-none transition-transform hover:scale-105 hover:shadow-2xl"
        type="submit"
        name="form_auth_submit"
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
  );
};
