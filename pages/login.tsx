//https://react-hook-form.com/get-started
//npm install react-hook-form

//이메일, 비번을 입력하고 Sign In 버튼을 클릭하면 경고창이 뜨는데..
//firebase- authenticaion으로 이동해서 email, password로 활성화 및 첫번째꺼 체크
//이후 다시 새로고침후 로그인시  뜨는 경고창에서 유저가 없다는 메세지가 뜨면 성공

import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

interface Inputs {
  email: string;
  password: string;
}

function login() {
  const [Login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (Login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="relative flex h-screen w-screen fex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://rb.gy/p2hphi"
        fill
        className="-z-10 !hidden opacity-60 sm:!inline object-cover"
        alt="logo"
      />

      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
        onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-4xl font-semibold">Sign In</h1>

        <div className="space-y-4">
          <label htmlFor=""></label>
          <input
            type="email"
            placeholder="Email"
            className="input"
            {...register('email', { required: true })}
          />
          {/* 해당 항목 미입력시 출력될 에러 구문 */}
          {errors.email && (
            <span className="p-1 text-[13px] font-light  text-orange-500">
              Please enter a valid email
            </span>
          )}

          <label htmlFor=""></label>
          <input
            type="password"
            placeholder="Password"
            className="input"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="p-1 text-[13px] font-light  text-orange-500">
              Your password must contain between 4 and 60 characters.
            </span>
          )}
        </div>

        <button
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={() => setLogin(true)}>
          Sign In
        </button>

        <div className="text-[gray]">
          New to Netflix?
          <button
            type="submit"
            className="text-white hover:underline cur"
            onClick={() => setLogin(false)}>
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
}

export default login;
