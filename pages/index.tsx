/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/Planets.jpg" width={1500} height={500} alt="planets" />

      <Image src="/86970816.png" width={200} height={200} alt="profile" />

      <Image src="/Planets.jpg" width={1500} height={500} alt="planets" />
    </Layout>
  );
}
