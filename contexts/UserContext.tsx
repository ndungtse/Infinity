import React, { createContext, ReactNode, useContext, useState} from "react";
import Axios from 'axios'
import { GetStaticProps } from "next";

type UserContextType = {
    suggestedUsers: any,
    setSuggestedUsers: any,
}

const UserContextDefaultValues: UserContextType = {
    suggestedUsers: [],
    setSuggestedUsers: () => {},
}

const UserContext = createContext<UserContextType>(UserContextDefaultValues)

export const useUsers = ()=>{
    return useContext(UserContext)
}

type Props = {
    children: ReactNode,
}

export function UserProvider({children}: Props){
    const [suggested, setSuggested] = useState([])


    return(
        <UserContext.Provider value={{
            suggestedUsers: suggested,
            setSuggestedUsers: setSuggested
        }}>
            {children}
        </UserContext.Provider>
    )
}

