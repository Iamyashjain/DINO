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
    resetScore(); // Reset at the start of the game

    intervalRef.current = setInterval(() => {
      // Get the latest score and update it
      const currentScore = getScore();
      setScore(currentScore + Math.floor(Math.random() * 10) + 10);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalRef.current);
      const finalScore = getScore();
      navigate("/game-over", { state: { isEligible: finalScore >= 50 } });
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
