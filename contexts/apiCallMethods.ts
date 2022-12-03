import axios from "axios";

export const api = axios.create({ baseURL: 'https://infinity-e4uz.onrender.com' })
//https://infinity3.herokuapp.com/
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
        return {data: data, }
    } catch (error: any) {
        console.log(error);
        return { error: error.message, data: null}
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

export const postCustom = async (url: string, body: any, _options?: any)=>{
    try {
        const res = await axios.post(url, body, {
            ..._options,
            maxBodyLength: Infinity,
            maxContentLength: Infinity,
            onUploadProgress: (progressEvent) => {
                console.log(progressEvent.loaded / progressEvent.total)
            }
        });
        const data = await res.data
        return data
    } catch (error: any) {
        console.log(error);
        return {error: error, message: error?.message}
    }
}

export const getCustom = async (url: string, _options?: any)=>{
    try {
        const res = await axios.get(url, {..._options,
        method: 'GET',});
        const data = await res.data
        return data
    } catch (error: any) {
        console.log(error);
        return {error: error, message: error?.message}
    }
}