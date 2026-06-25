import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="container">

      <Navbar />

      <h1>Blue Jays Fan Hub</h1>

      <div className="card">
        <p>
          Welcome to the Blue Jays Fan Hub.
        </p>

        <p>
          This project demonstrates React and Next.js concepts
          including components, props, state management,
          event handling, conditional rendering, and styling.
        </p>
      </div>

    </div>
  );
}