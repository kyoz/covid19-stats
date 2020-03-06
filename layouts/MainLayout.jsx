import GithubCorner from 'react-github-corner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/index.css';

function MainLayout({ children }) {
  return (
    <div className="container">
      <Header></Header>

      { children }

      <Footer></Footer>

      <GithubCorner href="https://github.com/kyoz/covid19-stats" />

      <style jsx>{`
        .container {
          width: 100%;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default MainLayout;
