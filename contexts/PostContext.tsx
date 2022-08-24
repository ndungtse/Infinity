import { createContext, ReactNode, useContext, useState } from "react";
import { getApi, getCustom } from "./apiCallMethods";
import { useApp } from "./AppContext";

interface PostContextType {
    posts: Array<object>;
    setPosts: (posts: Array<object>) => void;
    getPosts: () => void;
}

const PostContext = createContext<PostContextType>({
    posts: [],
    setPosts: () => {},
    getPosts: () => {},
 })
 type Props = {
    children: ReactNode,
}

export const usePosts = () => useContext(PostContext)

export default function PostProvider({children}: Props) {
    const [posts, setPosts] = useState<Array<object>>([]);
    const { user, authHeaders } = useApp();

    const getPosts = async() => {
        try {
            const data = await getCustom(`api/posts`, {
                headers: authHeaders,   
            });
            if(data.success) setPosts(data.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <PostContext.Provider value={{posts, setPosts, getPosts}}>
            {children}
        </PostContext.Provider>
    )
} 
