import axios from 'axios'
import { ACCESS_TOKEN } from '../util/settings/config'

const baseURL = 'https://movienew.cybersoft.edu.vn/api/'

const TokenCyberSoft = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0OCIsIkhldEhhblN0cmluZyI6IjEwLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNzUyMzIwMDAwMCIsIm5iZiI6MTY3OTY3NzIwMCwiZXhwIjoxNzA3NjcwODAwfQ.N-naoH9C9l_9p7kMChk45-IrJfIqEYyMlZijuzHsXsI'

export const api = axios.create()

api.interceptors.request.use((config) => {
    config = {
        ...config,
        headers: {
            TokenCyberSoft,
            Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        },
        baseURL,
    }

    return config
})