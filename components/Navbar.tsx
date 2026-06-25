import Link from "next/link";

// simple navigation bar
export default function Navbar() {
  return (
    <nav className="nav">

      <Link href="/">Home</Link>
      <Link href="/predictor">Game Predictor</Link>
      <Link href="/profile">Fan Profile</Link>

    </nav>
  );
}