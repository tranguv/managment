import { configureStore } from '@reduxjs/toolkit';

// import reducers
import userReducer from '../slices/user/userSlice';

const store = configureStore({
  reducer: {
    userStore: userReducer,
  },
});

export default store;
