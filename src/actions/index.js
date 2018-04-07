//Authentication Actions
import { API_BASE_URL } from '../config';

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  user
});

export const registerUser = (username, password) => dispatch => {
  fetch(`${API_BASE_URL}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(res => res.json())
  .then(json => {
      dispatch(registerUserSuccess(json))
      window.location = '/login-form'
  })
  .catch(error => console.log(error))
}

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const loginUserSuccess = (token) => ({
  type: LOGIN_USER_SUCCESS,
  token
});

export const loginUser = (username, password) => dispatch => {
  fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(res => res.json())
  .then(json => {
    const { authToken } = json
    localStorage.setItem('token', authToken);
    dispatch(loginUserSuccess(authToken))
    window.location = '/dashboard'
  })
  .catch(error => {
    window.location = '/'
  })
}

export const logoutUser = () => dispatch => {
  localStorage.clear()
  window.location = '/'
}

// export const protectedEndpoint = () => dispatch => {
//   console.log('we made it');
// //   fetch(`${API_BASE_URL}/protected`, {
// //     method: 'GET',
// //     headers: {
// //       'Content-Type': 'application/json'
// //     }
// //   })
// //   .then(res => res.json())
// //   .then(json => console.log(json))
// //   .catch(error => console.log(error))
// }

//Experience Actions

export const ADD_EXPERIENCE = 'ADD_EXPERIENCE';
export const addExperience = (title, date, details, recommendation) => ({
    type: ADD_EXPERIENCE,
    title,
    date,
    details,
    recommendation,
});

export const DELETE_EXPERIENCE = 'DELETE_EXPERIENCE';
export const deleteExperience = () => ({
    type: DELETE_EXPERIENCE,
});

export const EDIT_EXPERIENCE = 'EDIT_EXPERIENCE';
export const editExperience = () => ({
    type: EDIT_EXPERIENCE,
});



