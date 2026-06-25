import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="container">

      <Navbar />

      <h1>Blue Jays Fan Hub</h1>

      <div className="card">
        <p>
          Welcome to the Blue Jays Fan Hub!
        </p>

        <p>
          This website demonstrates React concepts including
          components, props, state management, event handling,
          conditional rendering, and CSS styling.
        </p>
      </div>

    </main>
  );
}