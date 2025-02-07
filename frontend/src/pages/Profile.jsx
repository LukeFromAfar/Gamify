import { useContext } from "react";
import { AuthContext } from "../hooks/AuthContext.jsx";


export default function Profile() {
    const { user } = useContext(AuthContext);

    if(!user) window.location.replace("/login")
    
    return (
        <div>
        <h1>Profile</h1>
        </div>
    );
}