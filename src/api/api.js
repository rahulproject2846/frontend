import axios from 'axios'
const local = 'http://localhost:5000'
const production = 'https://backend-azure-two.vercel.app'
export const api = axios.create({
    baseURL: production,
    withCredentials: true,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
})