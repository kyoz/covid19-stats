import '../styles/index.css';

function MainLayout({ children }) {
  return (
    <div className="container">
      <div>This is header</div>

      { children }

      <style jsx>{`
        .container {
          width: 1280px;
          max-width: 100%;
          margin: auto;
          padding: 0;
        }
      `}</style>
    </div>
  )
}

export default MainLayout;
