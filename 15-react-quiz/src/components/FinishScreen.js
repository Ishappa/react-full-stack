export default function FinishedScreen({
  points,
  maxPossiblePoints,
  highScore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;
  //   let emoji;

  // if (percentage === 100) emoji = '🏆';
  // if (percentage === 80) emoji = '🙆‍♂️';

  return (
    <>
      <p className="result">
        <p>
          Congratulations! You scored <strong>{points}</strong> out of{" "}
          {maxPossiblePoints} ({Math.ceil(percentage)}%)
        </p>
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
