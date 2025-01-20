import axios from "axios";
const axiosClient = axios.create({
    baseURL: 'http://localhost:5000/'
});

const getAllHouse = () => axiosClient.get('/house/getHouse');

export default {
    getAllHouse
}