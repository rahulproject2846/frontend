import axios from 'axios'

export const api = axios.create({
    baseURL : 'https://backend-azure-two.vercel.app',
    withCredentials : true
})