import jwtDecode from "jwt-decode";
import { useContext, createContext, useState, useEffect, ReactNode } from "react";
import { getApi } from "./apiCallMethods";
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
    authHeaders: object;
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
    authHeaders: {},
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
    const [showError, setShowError] = useState(false);

    const getToken = async() => {
        const token = getCookie("token");
        setToken(token);
        if (token) {
            try {
                const user: any = jwtDecode(token);
                console.log(user);
                let provider = "";
                let final: any
                if (user.email_verified){ 
                    provider = "google";
                    final = await getApi(`api/user/google/${user.user_id}`, { headers: { Authorization: token, provider: provider } });
                } else { 
                    provider = "email";
                    final = await getApi(`api/user/${user.id}`, { headers: { Authorization: token, provider: provider } });
                    // while (final.message === "Network Error") {
                    //     setShowError(true);
                    //     console.log("Network Error");
                    //     final = await getApi(`api/user/${user.id}`, { headers: { Authorization: token, provider: provider } });
                    // }
                    // setShowError(false);
                }
                setUser(final.data);
                return
            } catch (error) {
                console.log(error);
                setUser(null)
            }
        }
        setUser(null);
    }

    const authHeaders = {
        "Authorization": token,
        "Content-Type": "application/json"
    }

    useEffect(() => {
        getToken();
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
        {showError && <div className="bg-yellow-300 absolute top-0 p-2">
           <p>Network Error. Retrying...</p></div>}
        {user !== undefined && (
        <appContext.Provider value={{ user, setUser, games, setGames, token, setToken, setUserData, userData, authHeaders }}>
            {children}
        </appContext.Provider>
        )}
        </>
    );
}

