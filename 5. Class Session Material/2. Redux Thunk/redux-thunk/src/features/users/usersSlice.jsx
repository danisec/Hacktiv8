import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API = 'https://jsonplaceholder.typicode.com/users'

const initialState = {
  user: [],
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(API)
  return response.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.user.push(...action.payload)
    })
  },
})

export default usersSlice.reducer
