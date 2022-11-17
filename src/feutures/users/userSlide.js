import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: '1', name: 'amanda', umur: '22', },
  { id: '2', name: 'john', umur: '19',},
  localStorage.getItem('form')
]


const userSlice = createSlice({
  name: 'users',
  initialState ,
  reducers: {
    addUser: (state,action) => {
      state.push(action.payload)
    },
    editUser: (state,action) => {
      const {id , name ,umur,hobi,Alamat } = action.payload;
      const existUser = state.find(user => user.id ===  id);
      if (existUser){
        existUser.name = name;
        existUser.umur =  umur;
        existUser.hobi =  hobi;
        existUser.Alamat =  Alamat;
      }
    },
    deleteUser : (state,action) => {
      const { id } = action.payload;
      const existUser = state.find(user => user.id ===  id);
      if (existUser){
        return state.filter(user => user.id  !== id)
      }
    }
  }
})

export const { addUser ,editUser ,deleteUser} = userSlice.actions;
export default userSlice.reducer;