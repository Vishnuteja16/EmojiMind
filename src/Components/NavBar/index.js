import './index.css'

const NavBar = ({currentScore, isGameInProgress, topScore}) => (
  <nav className="nav-bar-container">
    <div className="title-with-logo-container">
      <img
        className="emoji-logo"
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
      />
      <h1 className="title">Emoji Game</h1>
    </div>
    {isGameInProgress && (
      <div className="scores-container">
        <p className="score">Score: {currentScore}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )}
  </nav>
)

export default NavBar
