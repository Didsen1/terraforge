import axios from "axios";
import { BASE_URL } from '../../../utils/constants/api';

export const loginUser = async (data: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, data, {
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    }
    catch (err: any) {
        console.error(`Ошибка при запросе loginUser: ${err.code}:${err.message}`);
    }
}