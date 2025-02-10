import { useState } from "react";
import axios from "axios";

export default function GameForm() {

    const [ gameForm , setGameForm ] = useState({
        title: "",
        shortDescription: "",
        description: "",
        publisher: "",
        developer: "",
        price: 0,
        discount: 0,
        status: 0,
        releaseDate: Date.now(),        
        tags: "",
        Image: ""
    });

    const [msg, setMsg] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/games/`, gameForm, { withCredentials: true })
        .then((res) => {
            console.log("Submitted", res.data);
            setMsg(res.data.msg);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }).catch((err) => {
            console.log("error",err);
        });
    }

    function handleChange(e) {
        const { id, value } = e.target;
        

        setGameForm((prevState) => ({
            ...prevState,
            [id]: value,
        }));
        console.log(id, value);
    }

  return (
    <div>
        <form action="" className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
            <input type="text" name="title" id="title" placeholder="Title"  onChange={handleChange}/>
            <input type="text" name="shortDescription" id="shortDescription" placeholder="Short Description"  onChange={handleChange}/>
            <textarea name="description" id="description" placeholder="Description"  onChange={handleChange}/>
            <input type="text" name="publisher" id="publisher" placeholder="Publisher"  onChange={handleChange}/>
            <input type="text" name="developer" id="developer" placeholder="Developer"  onChange={handleChange}/>
            <input type="number" name="price" id="price" placeholder="Price"  onChange={handleChange}/>
            <input type="number" name="discount" id="discount" placeholder="Discount in &#37;"  onChange={handleChange}/>
            <select name="status" id="" onChange={handleChange}>
                <option value="0">Not released</option>
                <option value="1">Pre-order</option> 
                <option value="2">Released</option>
            </select>
            <input type="date" min={Date.now()} name="releaseDate" id="releaseDate" placeholder="Release Date"  onChange={handleChange}/>
            <input type="text" name="tags" id="tags" placeholder="Tags"  onChange={handleChange}/>
            <input type="file" name="Image" id="Image" placeholder="Image"  onChange={handleChange}/>
            <button type="submit">Create Game</button> 
        </form>

        {msg ? <div>{msg}</div> : <div></div>}
    </div>
  );
}