function Header() {
  return (
    <div className="container">
      <img src="icon/virus.svg" height="72px" />
      <div className="title">Covid-19 Statistics</div>
      
      <style jsx>{`
        .container {
          margin: 48px 24px 32px 24px;
          text-align: center;
        }

        .title {
          margin-top: 8px;
          font-size: 1.5em;
          color: #FC685B;
        }
      `}</style>
    </div>
  )
}

export default Header;
