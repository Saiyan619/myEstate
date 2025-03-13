import axios from "axios";

// Base Url host connecting frontend to the backend (Making use of the global Api method)
const axiosClient = axios.create({
    // baseURL: import.meta.env.VITE_PUBLIC_API_URL
    baseURL: 'http://localhost:5000/'
});


// Set of functions(Routes written in the backend) to consume on the frontend 
const createUser = (data) => axiosClient.post('user/create', data)
const getUserById = (id)=> axiosClient.get(`user/getUserId/${id}`)
const getProfileByClerkId = (id)=> axiosClient.get(`user/profile/${id}`)
const getAllHouse = () => axiosClient.get('/house/getHouse');
const createHouse = (data) => axiosClient.post('house/createHouse', data)
const getHouseDetails = (id) => axiosClient.get(`house/getHouse/${id}`)
const editHouse = (id, data) => axiosClient.patch(`house/editHouse/${id}`, data);
const deleteHouse = (id) => axiosClient.delete(`house/deleteHouse/${id}`)
const filterHouse = (filters) => axiosClient.get('house/search', { params: filters });
const editProfile = (data )=> axiosClient.patch('user/edit-userProfile', data)

export default {
    createUser,
    getUserById,
    editProfile,
    getProfileByClerkId,
    getAllHouse,
    createHouse,
    getHouseDetails,
    editHouse,
    deleteHouse,
    filterHouse
};