import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com"

export const getUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
}

export const getUser = async (id:number) => {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data;
}
