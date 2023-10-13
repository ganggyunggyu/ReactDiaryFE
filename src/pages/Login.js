/** @format */

import React, { useState } from 'react';
import FormHeader from '../components/FormHeader';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import axios from '../api/axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const FormITems = [
    { value: email, setValue: setEmail, type: 'email', placeholder: '이메일' },
    {
      value: password,
      setValue: setPassword,
      type: 'password',
      placeholder: '비밀번호',
    },
  ];
  const isLogin = async () => {
    try {
      const result = await axios.post('/auth/login', {
        email: email,
        password: password,
      });
      console.log('로그인 요청 성공 : ', result);
    } catch (error) {
      console.log('로그인 요청 실패 : ', error);
    }
  };
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <FormHeader text={'Login'} />
      <form className='w-5/6 md:w-80 mt-5'>
        {FormITems.map((el, i) => {
          return (
            <FormInput
              value={el.value}
              setValue={el.setValue}
              type={el.type}
              placeholder={el.placeholder}
            />
          );
        })}
        <FormButton submitFunc={isLogin} text={'Login'} />
      </form>
    </div>
  );
}
