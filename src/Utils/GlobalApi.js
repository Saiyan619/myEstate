import axios from "axios";

// Base Url host connecting frontend to the backend (Making use of the global Api method)
const axiosClient = axios.create({
    baseURL: 'http://localhost:5000/'
});


// Set of functions(Routes written in the backend) to consume on the frontend 
const getAllHouse = () => axiosClient.get('/house/getHouse');
const createHouse = (data) => axiosClient.post('house/createHouse', data)
const getHouseDetails = (id) => axiosClient.get(`house/getHouse/${id}`)

export default {
    getAllHouse,
    createHouse,
    getHouseDetails
}