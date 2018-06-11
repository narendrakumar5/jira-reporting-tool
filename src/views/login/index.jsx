import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';

const ROOT_URL = 'http://localhost:3001';
// const API_KEY = '?key=router';

export function loginUser() {
    const request = axios.get(`${ROOT_URL}/posts`);

    return {
        type: LOGIN_USER,
        payload: request
    };
}