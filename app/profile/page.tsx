"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Greeting from "@/components/Greeting";

export default function Profile() {

  // user inputs
  const [name, setName] = useState("");
  const [player, setPlayer] = useState("");

  // checks if form was submitted
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (

    <main className="container">

      <Navbar />

      <h1>Fan Profile</h1>

      <form className="card" onSubmit={handleSubmit}>

        <input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Favourite player"
          onChange={(e) => setPlayer(e.target.value)}
        />

        <br /><br />

        <button>Submit</button>

      </form>

      {/* shows message after submit */}
      {submitted ? (
        <Greeting name={name} player={player} />
      ) : (
        <p>Please enter your information.</p>
      )}

    </main>
  );
}