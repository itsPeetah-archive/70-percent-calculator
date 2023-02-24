import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'tailwindcss/tailwind.css';
import { useState } from 'react';

function Home() {
  const [maxScore, setMaxScore] = useState(10);

  function handleMaxScoreChange(valStr: string) {
    const num = Math.floor(parseFloat(valStr));
    setMaxScore(num);
  }
  return (
    <div className="w-full h-screen | flex flex-col justify-center items-center">
      <div className="flex flex-row gap-2 items-center">
        <label className="text-white" htmlFor="maxScore">
          Punteggio Massimo:
        </label>
        <input
          name="maxScore"
          type="number"
          value={maxScore}
          min={0}
          onChange={(v) => handleMaxScoreChange(v.target.value)}
          className="px-2 py-1 rounded-md"
        />
      </div>
      <div className="grid grid-cols-3 grid-rows-2 place-items-center gap-x-8 | text-center text-white drop-shadow-lg">
        <h1 className="text-3xl ">Buona</h1>
        <h1 className="text-5xl">70%</h1>
        <h1 className="text-3xl ">Cattiva</h1>
        <h1 className="text-6xl text-lime-500 drop-shadow-lg">
          {Math.floor(maxScore * 0.7)}
        </h1>
        <h1 className="text-8xl drop-shadow-lg">
          {Math.floor(maxScore * 70) / 100}
        </h1>
        <h1 className="text-6xl text-red-500 drop-shadow-lg">
          {Math.floor(maxScore * 0.7) + 1}
        </h1>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
