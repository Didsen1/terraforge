import axios from "axios";
import { BASE_URL } from '../../../utils/constants/api';

export const createUser = async (data: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, data, {
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    }
    catch (err: any) {
        console.error(`Ошибка при запросе createUser: ${err.code}:${err.message}`);
    }
}