import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL:"http://127.0.0.1:5001/e-clone-3a65b/us-central1/api"
    baseURL:"https://amazon-backend-first-deploy.onrender.com"

})
export {axiosInstance}