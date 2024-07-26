import axios from 'axios';
import store from '../store/store';
import defaultUser from '../utils/default-user';

export async function signIn(email, password) {
  try {
    // Send request
    console.log(email, password);
    // const user = await axios.post('API URL');

    store.dispatch({
      type: 'signInSuccess',
      payload: defaultUser,
    });

    return {
      isOk: true,
      data: defaultUser,
    };
  } catch {
    return {
      isOk: false,
      message: 'Authentication failed',
    };
  }
}

export async function getUser() {
  try {
    // Send request
    // const user = await axios.get('API URL');

    return {
      isOk: true,
      data: defaultUser,
    };
  } catch {
    return {
      isOk: false,
    };
  }
}

export async function signUp(newUserData) {
  try {
    // Send request
    console.log(newUserData);

    // const user = await axios.post('API URL');
    // store.dispatch({
    //   type: 'createAccount',
    //   payload: defaultUser,
    // });

    return {
      isOk: true,
      data: defaultUser,
    };
  } catch {
    return {
      isOk: false,
      message: 'Failed to create account',
    };
  }
}

export async function changePassword(email, recoveryCode) {
  try {
    // Send request
    console.log(email, recoveryCode);

    return {
      isOk: true,
    };
  } catch {
    return {
      isOk: false,
      message: 'Failed to change password',
    };
  }
}

export async function resetPassword(email) {
  try {
    // Send request
    console.log(email);

    return {
      isOk: true,
    };
  } catch {
    return {
      isOk: false,
      message: 'Failed to reset password',
    };
  }
}

// import defaultUser from '../utils/default-user';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const signIn = createAsyncThunk(
//   'signin',
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       // Send request
//       console.log(email, password);
//       return {
//         isOk: true,
//         data: defaultUser,
//       };
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const getUser = createAsyncThunk(
//   'getUser',
//   async ({ userId }, { rejectWithValue }) => {
//     try {
//       console.log(userId);
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const createAccount = createAsyncThunk(
//   'createAccount',
//   async ({ newUserData }, { rejectWithValue }) => {
//     try {
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const changePassword = createAsyncThunk(
//   'changePassword',
//   async ({ email, recoveryCode }, { rejectWithValue }) => {
//     try {
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const resetPassword = createAsyncThunk(
//   'resetPassword',
//   async ({ email, newPassword, recoveryCode }, { rejectWithValue }) => {
//     try {
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
