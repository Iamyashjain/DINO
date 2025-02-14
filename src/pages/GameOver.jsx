import { useLocation, Link } from "react-router-dom";
import { useGameStore } from "../store/gameStore";
import { useEffect } from "react";

const GameOver = () => {
  const { state } = useLocation();
  const { score } = useGameStore(); // Don't reset score here

  return (
    <div className="game-over">
      <h2>Game Over!</h2>
      <p>Your Score: {score}</p>
      {state?.isEligible ? (
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe08nEmr6eoM56Q2NS5o0tO2Wsl1gS-p1zIUTMUq7WYnplhUw/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Access Form
        </a>
      ) : (
        <p>Score at least 50 to access the form!</p>
      )}
      <Link to="/">Play Again</Link>
    </div>
  );
};

export default GameOver;
