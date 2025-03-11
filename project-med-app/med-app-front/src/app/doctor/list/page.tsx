"use client"
import React, { useEffect, useState } from 'react'; // HOOK = gancho
import Link from 'next/link';
import api from '@/services/api';

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const response = await api.get('/doctors');
        const content = response.data;
        setDoctors(content);
      } catch (error) {
        setError('Ocorreu um erro ao buscar os médicos');
      }
    }
    getDoctors();
  }, [doctors]);

  const deleteDoctor = async (id: any) => {
    const add = await api.delete(`/doctors/${id}`);
    const content = add.data;
    console.log('Content DELETE.DOCTOR', content);
    // if (content.login) {
    //   // window.location.reload();
    // } else {
    //   setError(content.error);
    // }
  }

  return (
    <>
      <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/home">Voltar</Link>
      <table>
        <thead>
          <tr>
            <td className='border border-slate-300'>Nome</td>
            <td className='border border-slate-300 text-center'>Login</td>
            <td className='border border-slate-300 text-center'>Especialidade Médica</td>
            <td className='border border-slate-300 text-center'>Registro Médico</td>
            <td className='border border-slate-300 text-center'>Email</td>
            <td className='border border-slate-300 text-center'>Telefone</td>
          </tr>
        </thead>

        <tbody className="doctors" id="doctors">
          {!!doctors && doctors.map((doctor: any) => (
            <tr key={doctor.id}>
              <td className='border border-slate-300'>{doctor.name}</td>
              <td className='border border-slate-300 text-center'>{doctor.login}</td>
              <td className='border border-slate-300 text-center'>{doctor.medicalSpecialty}</td>
              <td className='border border-slate-300 text-center'>{doctor.medicalRegistration}</td>
              <td className='border border-slate-300 text-center'>{doctor.email}</td>
              <td className='border border-slate-300 text-center'>{doctor.phone}</td>
              <td className='border border-slate-300 text-center'>
                <button onClick={(e) => deleteDoctor(doctor._id)} className='bg-red-500 p-2 inline-block text-white text-sm'>Delete</button></td>
              <td className='border border-slate-300 text-center'>
                <Link href={`/doctor/edit/${doctor._id}`} className='bg-yellow-500 p-2 inline-block ml-3 text-white text-sm'>Edit</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {error && <div className="p-2 text-white border-gray-200 border-[1px] rounded-sm bg-red-400" style={{ color: 'red' }}>{error}</div>}
      </div>
    </>
  )
}