import React, { createContext, ReactNode, useContext} from "react";
import Axios from 'axios'
import { GetStaticProps } from "next";

type gameContextType = {
    games: Array<object>
}

const gameContextDefaultValues: gameContextType = {
    games: []
}

const GameContext = createContext<gameContextType>(gameContextDefaultValues)

export const useGames = ()=>{
    return useContext(GameContext)
}

type Props = {
    children: ReactNode,
}

export function GameProvider({children}: Props, { gameData }: any){
    console.log(gameData);


    return(
        <GameContext.Provider value={gameData}>
            {children}
        </GameContext.Provider>
    )
}

