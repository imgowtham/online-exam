import Axios from 'axios';

export const getData = async(url) => {
    return await Axios
        .get(url)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}