import './Header.css'

function Header({ total, passing, failing }) {
  return (
    <header className="header">
      <div className="header-icon">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 2L3.5 6v5c0 4.8 3.3 9.3 7.5 10.5C15.2 20.3 18.5 15.8 18.5 11V6L11 2z"
            fill="rgba(255,255,255,0.9)"
          />
          <path
            d="M8 11l2.2 2.2L14 8.5"
            stroke="#0f6e56"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <h1 className="header-title">Student Scoreboard</h1>
        <p className="header-sub">
          {total} student{total !== 1 ? 's' : ''} &nbsp;·&nbsp; {passing} passing &nbsp;·&nbsp; {failing} failing
        </p>
      </div>
    </header>
  )
}

export default Header
