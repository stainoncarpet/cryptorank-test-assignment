import Heading from '../components/common/Heading/Heading';
import Layout from '../components/common/Layout/Layout';
import calculator from '../helpers/calculator';

const HomePage = (props: any) => {
  return <Layout>
    <Heading>{props.msg1}</Heading>
    <Heading>{props.msg2}</Heading>
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