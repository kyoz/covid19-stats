function Footer() {
  return (
    <div className="container">  
      <div className="separator"></div>

      <div className="copyright">
        © Copyright 2020, <a className="author" href="https://github.com/kyoz">Kyoz</a>
      </div>

      <div>
        Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a>, <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div>

      <style jsx>{`
        .container {
          margin-top: 32px;
          text-align: center;
        }

        .author {
          font-weight: bold;
          color: #2979FF;
          text-decoration: none;
        }

        .copyright {
          margin-bottom: 18px;
        }

        .separator {
          margin: 52px 0 38px 0;
          width: 100%;
          height: 1px;
          background: rgba(0,0,0,.06);
        }
      `}</style>
    </div>
  )
}

export default Footer;
