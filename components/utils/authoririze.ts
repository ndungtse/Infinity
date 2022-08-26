import { getApi } from './../../contexts/apiCallMethods';
// import { NextApiRequest, NextApiResponse } from 'next';
// import jwt from 'jsonwebtoken';

const verifyToken = async (token: any) => {
    try {
        const res: any = await getApi(`api/user/auth/${token}`);
        if(res.authorized) return true
        return false
    } catch (error: any) {
        console.log(error);
        return false
    }
}

export default verifyToken
