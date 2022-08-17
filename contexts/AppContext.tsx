import jwtDecode from "jwt-decode";
import { useContext, createContext, useState, useEffect, ReactNode } from "react";
import { getCookie } from "./utilities";

type appContextType = {
    user: any;
    setUser: (user: object) => void;
    games: Array<object>;
    setGames: (games: Array<object>) => void;
    token: string;
    setToken: (token: string) => void;
    setUserData: (userData: object) => void;
    userData: object;
}

const appContextDefaultValues: appContextType = {
    user: {},
    setUser: () => {},
    games: [],
    setGames: () => {},
    token: "",
    setToken: () => {},
    setUserData: () => {},
    userData: {},
}

const appContext = createContext<appContextType>(appContextDefaultValues);

export const useApp = () => {
    return useContext(appContext);
}

type Props = {
    children: ReactNode,
}

export default function AppProvider({ children }: Props) {
    const [user, setUser] = useState<any>(undefined);
    const [games, setGames] = useState<any>([]);
    const [token, setToken] = useState("");
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const token = getCookie("token");
        if (token) {
            try {
                const user: any = jwtDecode(token);
                console.log(user);
                
                if (user.email_verified) {
                    setUser(user);
                    return
                }
            } catch (error) {
                console.log(error);
                setUser(null)
            }
        }
        setUser(null);
    }, []);

    useEffect(() => {
        const games = localStorage.getItem("games");
        if (games) {
            setGames(JSON.parse(games));
        }
    }, []);

    useEffect(() => {
        const userData = localStorage.getItem("userData");
        if (userData) {
            setUserData(JSON.parse(userData));
        }
    }, []);

    return (
        <>
        {user !== undefined && (
        <appContext.Provider value={{ user, setUser, games, setGames, token, setToken, setUserData, userData }}>
            {children}
        </appContext.Provider>
        )}
        </>
    );
}

