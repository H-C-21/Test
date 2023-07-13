import { createSlice } from '@reduxjs/toolkit';

let status = false

if(localStorage.getItem('auth')){
  status = localStorage.getItem('auth');
}

const initialAuthState = {
  isAuthenticated: status,
  Username: localStorage.getItem('user')
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      localStorage.setItem('auth', 'true');
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('auth');
      localStorage.removeItem('user');
    },
    setUsername(state,user){
        localStorage.setItem('user', user.payload)
        state.Username = user.payload
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;