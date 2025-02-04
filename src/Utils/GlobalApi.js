import axios from "axios";
const axiosClient = axios.create({
    baseURL: 'http://localhost:5000/'
});

const getAllHouse = () => axiosClient.get('/house/getHouse');
const createHouse = (data) => axiosClient.post('house/createHouse', data)
// const createHouse = (formData) => axiosClient.post('house/creatHouse', formData, {
//     headers: {
//         'Content-Type': 'multipart/form-data'
//     }
// });
export default {
    getAllHouse,
    createHouse
}