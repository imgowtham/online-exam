import Axios from 'axios';
//import Cookies from 'js-cookie';

export const getData = async (url) => {
    try {
        const response = await Axios
            .get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const postData = async (url, data) => {
    try {
        const response = await Axios
            .post(url, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const postMultiPartData = async (url, data) => {
    try {
        const response = await Axios
            .post(url, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
        return response.data;
    } catch (error) {
        throw error;
    }
}