import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const api = axios.create({
    baseURL: apiUrl,
});

export const get = async (url) => {
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const post = async (url, data) => {
    try {
        const response = await api.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const put = async (url, data) => {
    try {
        const response = await api.put(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const remove = async (url) => {
    try {
        const response = await api.delete(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};
