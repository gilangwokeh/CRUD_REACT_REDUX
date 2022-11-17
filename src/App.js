import './App.css';
import UserList from './feutures/users/UserList';
import { Route, Routes } from 'react-router-dom';
import AddUsers from './feutures/users/AddUsers';
import EditUser from './feutures/users/EditUser';

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className='text-center font-bold text-2xl text-gray-900'>Crud with redux React js</h1>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/add-user' element={<AddUsers />} />
        <Route path='/edit-user/:id' element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
