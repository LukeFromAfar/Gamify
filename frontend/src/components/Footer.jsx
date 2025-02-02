export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center items-center bg-gray-300 p-4">
      <label className="text-gray-800">Email</label>
      <input
        type="text"
        className="rounded-lg border-2 border-gray-400 p-2 mb-4"
        placeholder="Email"
      />
      <div className="flex flex-row items-center gap-32 mb-4">
        <ul>
          <li className="text-gray-800">
            <a href="/">Home</a>
          </li>
          <li className="text-gray-800">
            <a href="/login">Login</a>
          </li>
          <li className="text-gray-800">
            <a href="/register">Register</a>
          </li>
          <li className="text-gray-800">
            <a href="/about">About</a>
          </li>
        </ul>
        <ul>
          <li className="text-gray-800">
            <a href="/">Home</a>
          </li>
          <li className="text-gray-800">
            <a href="/login">Login</a>
          </li>
          <li className="text-gray-800">
            <a href="/register">Register</a>
          </li>
          <li className="text-gray-800">
            <a href="/about">About</a>
          </li>
        </ul>
        <ul>
          <li className="text-gray-800">
            <a href="/">Home</a>
          </li>
          <li className="text-gray-800">
            <a href="/login">Login</a>
          </li>
          <li className="text-gray-800">
            <a href="/register">Register</a>
          </li>
          <li className="text-gray-800">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
      <p className="text-center text-gray-800">
        Made with ❤️(skibidi sigma) by &nbsp;
        <a href="https://github.com/LukeFromAfar">Lukasz Brzozowski</a>
      </p>
    </footer>
  );
}
