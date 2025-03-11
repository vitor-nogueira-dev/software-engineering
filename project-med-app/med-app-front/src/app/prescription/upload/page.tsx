"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link";
import api from '@/services/api';

type Prescription = {
  _id: string;
  date: string;
  medicine: string;
  dosage: string;
  instructions: string;
  file?: string;
}

export default function PrescriptionCreate() {

  const router = useRouter();

  useEffect(() => {

    const getDescriptions = async () => {
      try {
        const res = await api.get('/prescriptions', {
          headers: {
            'Authorization': sessionStorage.getItem('token') || ''
          }
        });
        setPrescriptions(res.data);
      } catch (error) {
        setError((error as Error).message);
      }
    }
    getDescriptions();
  }, []);

  const [file, setFile] = useState<Blob>();
  const [error, setError] = useState<string>('');

  const [prescriptions, setPrescriptions] = useState([]);

  const uploadPrescription = async (id: string) => {
    try {
      if (!file) {
        throw new Error('Please select a file first');
      }
      const formData = new FormData();
      formData.append('file', file);
      // formData.append('id', id);
      await api.post('/prescriptions/' + id + '/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      router.push('/prescription/upload');
      // handle the error
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const showFile = async (id: string) => {
    try {
      const path = '/prescriptions/' + id + '/read';
      const res = await api.get(path, { responseType: 'blob' });
      const url = window.URL.createObjectURL(res.data);
      const link = document.createElement('a');
      link.href = url;
      link.download = id + ".pdf";
      link.click();
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const generatePrescription = async (id: string) => {
    try {
      const path = '/prescriptions/' + id + '/generate';

      const res = await api.get(path)
      const content = res.data;

      if (content._id) {
        window.location.reload();
      } else {
        setError(content.error);
      }
    } catch (error) {
      setError((error as Error).message);
    }
  }

  return (
    <>
      <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/home">Voltar</Link>
      <table>
        <thead>
          <tr>
            <td className='border border-slate-300'>Data</td>
            <td className='border border-slate-300 text-center'>Medicine</td>
            <td className='border border-slate-300 text-center'>Dosage</td>
            <td className='border border-slate-300 text-center'>Instructions</td>
          </tr>
        </thead>

        <tbody className="doctors" id="doctors">
          {!!prescriptions && prescriptions.map((prescription: Prescription) => (
            <tr key={prescription._id}>
              <td className='border border-slate-300'>{prescription.date}</td>
              <td className='border border-slate-300 text-center'>{prescription.medicine}</td>
              <td className='border border-slate-300 text-center'>{prescription.dosage}</td>
              <td className='border border-slate-300 text-center'>{prescription.instructions}</td>

              {!prescription.file && <td className='border border-slate-300 text-center'> <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} /></td>}
              {!prescription.file && <td className='border border-slate-300 text-center'><button onClick={() => uploadPrescription(prescription._id)} className='bg-orange-500 p-2 inline-block text-white text-sm'>Upload</button></td>}
              {!prescription.file && <td className='border border-slate-300 text-center'><button onClick={() => generatePrescription(prescription._id)} className='bg-orange-500 p-2 inline-block text-white text-sm'>Gerar Prescrição</button></td>}
              {prescription.file && <td className='border border-slate-300 text-center'><button onClick={() => showFile(prescription._id)} className='bg-green-500 p-2 inline-block text-white text-sm'>Ver Arquivo</button></td>}
            </tr>
          ))}
        </tbody>
      </table>
      {error && <div className="error">{error}</div>}
    </>

  )
}