function StatisticsBoxes({ data }) {
  return (
    <div className="container">
      <div className="box">Confirmed: { data.confirmed.value | '?' }</div>
      <div className="box">Recovered: { data.recovered.value | '?' }</div>
      <div className="box">Deaths: { data.deaths.value | '?' }</div>

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
          background: #fff;
        }
      `}</style>
    </div>
  )
}

export default StatisticsBoxes;
