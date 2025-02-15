import { useLocation, Link } from "react-router-dom";
import { useGameStore } from "../store/gameStore";
import { useEffect } from "react";
import "./GameOver.css";

const GameOver = () => {
  const { state } = useLocation();
  const { score, resetScore } = useGameStore();

  useEffect(() => {
    resetScore();
  }, []);

  return (
    <div className="game-over-container">
      <div className="game-over-card">
        <h2>Game Over!</h2>
        <p>
          Your Score: <strong>{score}</strong>
        </p>
        {state?.isEligible ? (
          <div className="form-container">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe08nEmr6eoM56Q2NS5o0tO2Wsl1gS-p1zIUTMUq7WYnplhUw/viewform?embedded=true"
              className="responsive-iframe"
              frameBorder="0"
              title="Google Form"
            >
              Loading…
            </iframe>
          </div>
        ) : (
          <p className="warning">Score at least 50 to access the form!</p>
        )}
        <Link className="play-again-btn" to="/">
          Play Again
        </Link>
      </div>
    </div>
  );
};

export default GameOver;
