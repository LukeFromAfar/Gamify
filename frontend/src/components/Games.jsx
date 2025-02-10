import { useState, useEffect } from "react";
import axios from "axios";


export default function Games() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getAllGames();
    }, []);

    function getAllGames() {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/`, 
            { withCredentials: true })
            .then((res) => {
            console.log("Games", res.data.games);
            setGames(res.data.games);
        }).catch((err) => {
            console.log("error",err);
        });
    }

    function handleClick(id) {
        console.log(id, "ID");
        window.location.href = `/game/${id}`
    }

    return (
        <div>
            <h1>Games</h1>
            <div className="flex flex-row gap-4">
                {games ? 
                games.map((game) => {
                    return (
                    <div key={game._id} className="flex flex-col" onClick={handleClick}>
                        <h2>{game.title}</h2>
                        <p>{game.price} {game.discount}&#37;</p>
                        <p>{game.publisher}</p>
                        <p>{game.developer}</p>
                        <p>{game.releaseDate}</p>
                        <p>{game.status}</p>
                        <p>{game.shortDescription}</p>
                        <p>{game.description}</p>
                        <p>{game.image}</p>
                        <p>{game.tags}</p>
                    </div>
                    )
                }) : <div>No games found</div>}
            </div>
                


        </div>
    );
}