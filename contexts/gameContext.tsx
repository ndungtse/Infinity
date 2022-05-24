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

    const getGames = async()=>{
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            headers: {
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
              'X-RapidAPI-Key': 'bbce629d3cmsh48cb41094daa35cp1157cejsn05466969482c'
            }
          };
        const res = await Axios.request(options)
        console.log(res);
        return {
          props: {
            gameData: res.data
          },
        };
      };

    return(
        <GameContext.Provider value={gameData}>
            {children}
        </GameContext.Provider>
    )
}

