"use client"
import React, { useState } from "react";
import axios from 'axios';

type FakeApiData = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function FakeApi() {

  const [fakeApiData, setFakeApiData] = useState([]);

  const requestFakeApi = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setFakeApiData(response.data);
    } catch (e) {
      console.log(e);
    }

  }

  return (
    <>
      <h1>Dados Fake Api</h1>
      <button className="bg-green-500 p-2 inline-block text-white text-sm"
        onClick={() => requestFakeApi()}>Buscar dados Fake Api</button>
      <table>
        {fakeApiData.map((data: FakeApiData) => (
          <tr key={data.id} className='border border-slate-300'>
            <td className='border border-slate-300'>{data.name}</td>
            <td className='border border-slate-300 text-center'>{data.username}</td>
            <td className='border border-slate-300 text-center'>{data.email}</td>
            <td className='border border-slate-300 text-center'>{data.phone}</td>
          </tr>
        ))}
      </table>
    </>
  )
}