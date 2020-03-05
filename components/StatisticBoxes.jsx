function StatisticsBoxes({ data }) {
  return (
    <div className="container">
      <div className="box confirmed">
        <img src="icon/confused.svg" width="64px" height="64px" />
        Confirmed: { data.confirmed.value | '?' }
      </div>

      <div className="box recovered">
        <img src="icon/laughing.svg" width="64px" height="64px" />
        Recovered: { data.recovered.value | '?' }
      </div>

      <div className="box deaths">
        <img src="icon/sad.svg" width="64px" height="64px" />
        Deaths: { data.deaths.value | '?' }
      </div>

      <style jsx>{`
        .container {
          display: flex;
          padding: 8px;
        }

        .box {
          width: 100%;
          margin: 8px;
          padding: 16px;
          border-radius: 4px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          font-size: 1.3em;
          color: rgba(0,0,0,.36);
        }

        .box > img {
          border: 4px solid rgba(0,0,0,.08);
          border-radius: 50%;
        }

        .confirmed {
          background: #FEDC54;
        }

        .recovered {
          background: #A8E061;
        }

        .deaths {
          background: #FE6969;
        }

      `}</style>
    </div>
  )
}

export default StatisticsBoxes;
