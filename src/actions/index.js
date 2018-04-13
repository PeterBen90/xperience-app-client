import { API_BASE_URL } from '../config';
import history from '../history';

//Authentication Actions

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
export const loginUserSuccess = (userId, token) => ({
  type: LOGIN_USER_SUCCESS,
  userId,
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
  .then(response => {
    localStorage.setItem('authToken', response.authToken)
    localStorage.setItem('userId', response.userId)
    dispatch(loginUserSuccess(response.userId, response.authToken))
    history.push('/dashboard')
  })
  .catch(error => {
    window.location = '/'
  })
}

export const logoutUser = () => dispatch => {
  localStorage.clear()
  window.location = '/'
}

//Experience Actions


export const addExperience = (title, date, location, details, recommendation) => dispatch => {
  fetch(`${API_BASE_URL}/experience/${localStorage.getItem('userId')}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
    body: JSON.stringify({title, date, location, details, recommendation}),
  })
  .then(res => res.json())
  .then(experiences => {
    dispatch(fetchExperiencesSuccess(experiences))
    window.location = '/experience-page'
  })
  .catch(error => console.log(error))
}


export const FETCH_EXPERIENCES_SUCCESS = 'FETCH_EXPERIENCES_SUCCESS'
export const fetchExperiencesSuccess = experiences => ({
  type: FETCH_EXPERIENCES_SUCCESS,
  experiences
})

export const fetchExperiences = () => dispatch => {
  fetch(`${API_BASE_URL}/experience/${localStorage.getItem('userId')}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
  })
  .then(res => res.json())
  .then(experiences => {
    console.log(experiences);
    dispatch(fetchExperiencesSuccess(experiences))
  })
  .catch(error => console.log(error))
}



