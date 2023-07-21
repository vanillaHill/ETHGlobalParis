import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Seo />
      Home
    </Layout>
  );
};

export default HomePage;
