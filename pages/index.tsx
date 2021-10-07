import Layout from '../components/common/Layout/Layout';
import calculator from '../helpers/calculator';

const HomePage = (props: any) => {
  return <Layout>
    <p>{props.msg1}</p>
    <p>{props.msg2}</p>
    </Layout>
};

export async function getServerSideProps(context: any) {
  const msg1 = await calculator.calculateFromATH();
  const msg2 = await calculator.calculateToATH();

  return {
    props: {msg1, msg2}
  }
}

export default HomePage;