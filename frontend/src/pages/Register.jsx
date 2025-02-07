import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("register");
    // console.log(email, password, repeatPassword);
    axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/auth/register`,
      {
        email,
        password,
        repeatPassword,
      },
      { withCredentials: true },
    ).then((res) => {
      setMessage(res.data.message);
      if(res.status == 202) {window.location.replace("/profile")}
    }, 500);
  }

  return (
    <div className="flex items-center justify-center ">
      <form
        className="flex flex-col items-center justify-center w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl">Register</h2>
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
        <label htmlFor="repeatPassword">Repeat Password</label>
        <input
          className="border-1 border-gray-500 rounded-md"
          placeholder="Repeat Password"
          type="password"
          id="repeatPassword"
          name="repeat"
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Register
        </button>
      </form>
      {message ? <div>{message}</div> : <div></div>}
    </div>
  );
}
