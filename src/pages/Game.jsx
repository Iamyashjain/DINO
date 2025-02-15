import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/gameStore";
import { useEffect, useRef } from "react";

const Game = () => {
  const navigate = useNavigate();
  const { getScore, setScore, resetScore } = useGameStore();
  const intervalRef = useRef(null);

  useEffect(() => {
    resetScore();
    return () => {
      clearInterval(intervalRef.current); // Clear interval on component unmount
    };
  }, []);

  const playGame = () => {
    resetScore();

    intervalRef.current = setInterval(() => {
      const currentScore = getScore();
      setScore(currentScore + Math.floor(Math.random() * 10) + 10);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalRef.current);
      const finalScore = getScore();
      if (finalScore >= 50) {
        const token = Math.random().toString(36).substring(2); // Generate token
        sessionStorage.setItem("gameToken", token); // Store token in session
        navigate("/game-over", { state: { isEligible: true, token } });
      } else {
        navigate("/game-over", { state: { isEligible: false } });
      }
    }, 5000);
  };

  return (
    <div className="game">
      <h2>Dino Game</h2>
      <p>Score: {getScore()}</p>
      <button onClick={playGame}>Start Game</button>
    </div>
  );
};

export default Game;
