import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="navbar-container">
      <div className="title-scorecard-container">
        <div className="main-title-container">
          <img
            className="emoji-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="heading">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scorecard-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
