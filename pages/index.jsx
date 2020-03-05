import fetch from 'isomorphic-unfetch'
import MainLayout from '../layouts/MainLayout';
import StatisticsBoxes from '../components/StatisticBoxes';

function Home({ data }) {
  console.log(data);
  return (
    <MainLayout>
      <StatisticsBoxes data={data}></StatisticsBoxes>
    </MainLayout>
  );
}

Home.getInitialProps = async ctx => {
  const res = await fetch('https://covid19.mathdro.id/api');
  const data = res ? await res.json() : {};

  return { data };
}

export default Home;
