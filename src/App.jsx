import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/game-over" element={<GameOver />} />
      </Routes>
    </Router>
  );
}

export default App;
