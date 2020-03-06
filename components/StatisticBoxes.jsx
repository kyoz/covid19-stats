function StatisticsBoxes({ data }) {
  return (
    <div className="container">
      <div className="box confirmed">
        <img src="icon/confused.svg" width="64px" height="64px" />

        <div className="info-wrapper">
          <div>Confirmed</div>
          <div className="number">{ data.confirmed.value | '?' }</div>
        </div>
      </div>

      <div className="box recovered">
        <img src="icon/laughing.svg" width="64px" height="64px" />

        <div className="info-wrapper">
          <div>Recovered</div>
          <div className="number">{ data.recovered.value | '?' }</div>
        </div>
      </div>

      <div className="box deaths">
        <img src="icon/sad.svg" width="64px" height="64px" />

        <div className="info-wrapper">
          <div>Deaths</div>
          <div className="number">{ data.deaths.value | '?' }</div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
        }

        .box {
          display: flex;
          align-items: center;
          width: 220px;
          max-width: 100%;
          margin: 8px;
          padding: 16px;
          border-radius: 4px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          font-size: 1.3em;
          color: rgba(0,0,0,.36);
          box-sizing: border-box;
        }

        .box > img {
          min-width: 64px;
          max-width: 64px;
          min-height: 64px;
          max-height: 64px;
          border: 4px solid rgba(0,0,0,.08);
          border-radius: 50%;
        }

        .info-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
          width: 100%;
          padding-left: 16px;
        }

        .number {
          font-size: 1.8em;
          color: rgba(0,0,0,.32);
          margin-top: 12px;
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

        @media screen and (max-width: 680px) {
          .container {
            flex-direction: column;
            padding-right: 24px;
          }

          .box {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default StatisticsBoxes;
