import axios from "axios";

const API_URL = 'https://bootcamp-rent-car.herokuapp.com/customer/';

const getCars = () => {
    return axios.get(`${API_URL}car`)
}