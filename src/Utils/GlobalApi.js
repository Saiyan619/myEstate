import axios from "axios";
const axiosClient = axios.create({
    baseURL: 'http://localhost:5000/'
});

const getAllHouse = () => axiosClient.get('/house/getHouse');
const createHouse = (data) => axiosClient.post('house/createHouse', data)
const getHouseDetails = (id) => axiosClient.get(`house/getHouse/${id}`)

export default {
    getAllHouse,
    createHouse,
    getHouseDetails
}