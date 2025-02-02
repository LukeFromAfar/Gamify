export default function Register() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("register");
  }

  return (
    <div className="flex items-center justify-center ">
      <form className="flex flex-col items-center justify-center w-full max-w-md">
        <h2 className="text-3xl">Register</h2>
        <label htmlFor="email">Email</label>
        <input
          className="border-1 border-gray-500 rounded-md"
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="border-1 border-gray-500 rounded-md"
          type="password"
          id="password"
          name="password"
        />
        <label htmlFor="repeatPassword">Repeat Password</label>
        <input
          className="border-1 border-gray-500 rounded-md"
          type="repeatPassword"
          id="repeatPassword"
          name="repeat"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Register
        </button>
      </form>
    </div>
  );
}
