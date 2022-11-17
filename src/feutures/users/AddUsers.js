import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../component/Button'
import Text from '../../component/Text'
import { v4 as uuidv4 } from 'uuid';
import { addUser } from './userSlide'
const AddUsers = () => {
  const getDatafromLS = () => {
    const data = localStorage.getItem('from');
    if (data) {
     return JSON.parse(data);
    }
    else {
      return []
    }
  }
  if(localStorage.getItem('form') === null){
    localStorage.setItem('from' , '[]')
  }
  const dispatch = useDispatch();
  const [navigate, setNavigate] = useState(false);
  const [error, setError] = useState('')
  const [error2, setError2] = useState('')
  const [error3, setError3] = useState('')
  const [error4, setError4] = useState('')
  const [Values, setValues] = useState(getDatafromLS())
  const handleAddUser = (e) => {
    e.preventDefault()
    setValues({ id: uuidv4(), name: '', umur: '', hobi: '', Alamat: '' })
    if (!Values.name && !Values.umur && !Values.hobi && !Values.Alamat) {
      const regMatch = /^[a-zA-Z]*$/.test(Values.name);
      const regMatch2 = /^[a-zA-Z]*$/.test(Values.hobi);
      const reqMatchNumber = /[0-9]/.test(Values.umur);
      if (Values.name !== regMatch) {
        setError('nama harus isi')
      } else {
        setError(null)
      }
      if (Values.umur !== reqMatchNumber) {
        setError2('Tolong masukkan angka')
      }else{
        setError2(null)
      }
      if (Values.hobi !== regMatch2) {
        setError3('hobi anda kosong')
      }else{
        setError3(null)
      }
      if (!Values.Alamat) {
        setError4('Alamat Anda kosong')
      } 
    }else {
      dispatch(addUser({
        id: uuidv4(),
        name: Values.name,
        umur: Values.umur,
        hobi: Values.hobi,
        Alamat: Values.Alamat
      }));
      localStorage.setItem('form', JSON.stringify(Values));
      setNavigate(true);
    }
  };
  return (
    <div className='mt-10 max-w-xl mx-auto'>
      {
        navigate && (
          <Navigate to="/" />
        )
      }
      <Text
        label='name'
        value={Values.name}
        onChange={(e) => setValues({ ...Values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'name',}} />
      {
        error && (
          <p className='text-red-500'>{error}</p>
        )
      }
      <br />
      <Text
        label='umur'
        value={Values.umur}
        onChange={(e) => setValues({ ...Values, umur: e.target.value })}
        inputProps={{ type: 'number', placeholder: 'Tolong isi angka' }} />
      {
        error2 && (
          <p className='text-red-500'>{error2}</p>
        )
      }
      <br />
      <Text
        label='hobi'
        value={Values.hobi}
        onChange={(e) => setValues({ ...Values, hobi: e.target.value })}
        inputProps={{ type: 'input', placeholder: 'Hobi anda' }} />
      {
        error3 && (
          <p className='text-red-500'>{error3}</p>
        )
      }
      <br />
      <div className='flex flex-col'>
        <label className='mb-2 text-base text-gray-700'>Alamat</label>
        <input className='bg-gray-200 py-2 px-3 border-2 outline-none' value={Values.Alamat} required onChange={(e) => setValues({ ...Values, Alamat: e.target.value })} type='input' placeholder='Tolong isi Alamat Anda' />
        {
          error4 && (
            <p className='text-red-500'>{error4}</p>
          )
        }
      </div>
      <Button onClick={handleAddUser}>Submit</Button>
      <Link to='/'>
        <button className='bg-orange-300 mb-[30px] p-3'>Kembali </button>
      </Link>
    </div>
  )
}

export default AddUsers