import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../hooks/AuthContext.jsx";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { user } = useContext(AuthContext);

  if(user) window.location.href = "/profile";

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    

    axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
      {
        email,
        password,
      },
      { withCredentials: true },
    ).then((res) => {
      console.log(res);
      setMessage(res.data.msg);
      if(res.status == 202) {window.location.replace("/profile")}
    }, 500);
  }

  return (
    <div className="flex items-center justify-center">
      <form className="flex flex-col items-center justify-center w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-3xl">Login</h2>
        <label htmlFor="email">Email</label>
        <input
          className="border-1 border-gray-500 rounded-md"
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          className="border-1 border-gray-500 rounded-md"
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Login
        </button>
      </form>
      {message ? <div>{message}</div> : <div></div>}
    </div>
  );
}
