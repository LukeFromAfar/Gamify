export default function Navbar() {
  return (
    <nav className="flex w-full justify-end bg-gray-300 p-4">
      <ul className="flex flex-row gap-4 *:hover:text-red-800 w-min">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
