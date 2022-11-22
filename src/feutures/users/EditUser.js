import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../component/Button'
import Text from '../../component/Text'
import { editUser } from './userSlide'
import { Link } from 'react-router-dom'

const EditUser = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existUser = users.filter(user => user.id === params.id);
  const { name, umur,hobi,Alamat } = existUser[0]
  const [Values, setValues] = useState({
    name,
    umur,
    hobi,
    Alamat
  });
  const handleEditUser = () => {
    setValues({ name: '', umur: '', hobi: '', Alamat: '' })
    dispatch(editUser({
      id: params.id,
      name: Values.name,
      umur: Values.umur,
      hobi: Values.hobi,
      Alamat: Values.Alamat
    }));
    navigate('/')
  };
  return (
    <div className='mt-10 max-w-xl mx-auto'>
      <Text
        label='name'
        value={Values.name}
        onChange={(e) => setValues({ ...Values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'name' }} />
      <br />
      <Text
        label='umur'
        value={Values.umur}
        onChange={(e) => setValues({ ...Values, umur: e.target.value })}
        inputProps={{ type: 'number', placeholder: 'Tolong isi kan nomor' }} />
      <br />
      <Text
        label='hobi'
        value={Values.hobi}
        onChange={(e) => setValues({ ...Values, hobi: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'hobi anda' }} />
      <br />
      <Text
        label='Alamat'
        value={Values.Alamat}
        onChange={(e) => setValues({ ...Values, Alamat: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'alamat Anda' }} />
      <Button onClick={handleEditUser}>Edit</Button>
      <Link to='/'>
        <button className='bg-orange-300 mb-[30px] p-3'>Kembali </button>
      </Link>
    </div>
  )
}

export default EditUser