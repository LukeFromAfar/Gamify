import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GameBox() {
    const id = useParams().id;
    console.log(id);

    const [ game , setGame ] = useState();

    useEffect(() => {
        retrieveGame();
    }, []);

    function retrieveGame() {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/${id}`, { withCredentials: true })
        .then((res) => {
            console.log("Game", res.data.game);
            setGame(res.data.game);
        }).catch((err) => {
            console.log("error",err);
        });
    }

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2>Game Box</h2>
      {game ? <div>
        <h1>{game.title}</h1>
        <p>{game.price} {game.discount}&#37;</p>
        <p>{game.publisher}</p>
        <p>{game.developer}</p>
        <p>{game.releaseDate}</p>
        <p>{game.status}</p>
        <p>{game.shortDescription}</p>
        {/* <p>{game.description}</p> */}
        <p>{game.image}</p>
        <p>{game.tags}</p> 
      </div> : <div>Loading...</div>}
    </div>
  );
}