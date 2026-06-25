"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import TeamMood from "@/components/TeamMood";


export default function Predictor(){

const [prediction,setPrediction] = useState("");


return (

<main className="container">

<Navbar />

<h1>
Game Predictor
</h1>


<div className="card">

<h2>
Will the Blue Jays win?
</h2>


<button onClick={()=>setPrediction("Win")}>
Win
</button>


<button onClick={()=>setPrediction("Lose")}>
Lose
</button>


{
prediction && (
<p>
Your prediction: {prediction}
</p>
)
}


</div>


<TeamMood />


</main>

);

}