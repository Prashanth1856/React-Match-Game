import './index.css'

const ResultCard = props => {
  const {onRestartGame, finalScore} = props

  return (
    <div className="result-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-logo"
      />
      <p className="score-heading">YOUR SCORE</p>
      <p className="final-score">{finalScore}</p>
      <button type="button" onClick={onRestartGame} className="reset-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-icon"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ResultCard
