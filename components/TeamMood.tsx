"use client";

import { useState } from "react";

export default function TeamMood() {

  const [mood, setMood] = useState("Excited");


  return (

    <div className="card">

      <h2>
        Fan Mood
      </h2>


      <p>
        Current Mood: {mood}
      </p>


      <button onClick={() => setMood("Excited")}>
        Excited
      </button>


      <button onClick={() => setMood("Nervous")}>
        Nervous
      </button>


      <button onClick={() => setMood("Confident")}>
        Confident
      </button>


    </div>

  );
}