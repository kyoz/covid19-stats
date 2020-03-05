import '../styles/index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <div className="container">
      <Header></Header>

      { children }

      <Footer></Footer>

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
