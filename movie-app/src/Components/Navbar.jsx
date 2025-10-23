import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Movie Explorer</Link>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
    </nav>
  );
}