"use client";
import React, { useState } from 'react'

import { useRouter } from 'next/navigation';
import api from '@/services/api';


const Home = () => {
  const router = useRouter();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>('');

  const authentication = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      if (login !== '' && password !== '') {
        const formData = {
          login,
          password
        }

        const add = await api.post('/login', formData);
        if (add.data.token) {
          sessionStorage.setItem('token', add.data.token);
          router.push('/home');
        } else {
          setError(add.data.error)
        }
      }
    } catch (error) {
      setError((error as Error).message);
    }
  }
  return (
    <section>
      <form className='w-full' onSubmit={authentication}>
        <span className='font-bold text-blue-500 py-2 block text-2xl'>Login</span>
        <div className='w-full py-2'>
          <label htmlFor="" className='text-sm font-bold py-2 block'>Usuário</label>
          <input type='text' name='name' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)} />
        </div>
        <div className='w-full py-2'>
          <label htmlFor="" className='text-sm font-bold py-2 block'>Senha</label>
          <input name='login' type="password" className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
        </div>
        <div className='w-full py-2'>
          <button className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400">Login</button>
        </div>
        <div>
          {error && <div className="p-2 text-white border-gray-200 border-[1px] rounded-sm bg-red-400" style={{ color: 'red' }}>{error}</div>}
        </div>
      </form>
    </section>
  )
}

export default Home;