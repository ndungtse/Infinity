import Axios from "axios"


const allGames = async() => {
    let games: Array<object> =[];

    for (let i = 0; i < 18434; i++) {
        console.log('fetching');
        
        const res = await Axios.get(`https://api.rawg.io/api/games?key=a5c36a8abe0c4ddb9489dc567b3cf68d&page_size=12000&page=18434`)
        const data = await res.data.results
        games.concat(data)
    }
    console.log(games);
    
    return games
}

export default allGames