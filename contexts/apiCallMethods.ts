import axios from "axios";

export const api = axios.create({ baseURL: 'http://localhost:5000/' })

export const dbApi = axios.create({
    baseURL: 'http://localhost:5173/api'
})

export const footHeaders = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID,
    'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
}

export const getApi = async (path: string, _options?: any) => {
    try {
        const res = await api.get(`/${path}`, _options);
        const data = await res.data
        return data
    } catch (error: any) {
        console.log(error);
        return null
    }
}

export const postApi = async (path: string, body: any, _options?: any)=>{
    try {
        const res = await api.post(`/${path}`, body, _options);
        const data = await res.data
        return data
    } catch (error: any) {
        console.log(error);
        return {error: error, message: error?.message}
    }
}