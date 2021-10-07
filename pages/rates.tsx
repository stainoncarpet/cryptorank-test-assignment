import Layout from '../components/common/Layout/Layout'

export default function Home(props: any) {
  return <Layout>
    Rates page
    {props.test}
  </Layout>
}

export async function getServerSideProps(context: any) {
  return {
    props: {test: "we got rates"}
  }
}