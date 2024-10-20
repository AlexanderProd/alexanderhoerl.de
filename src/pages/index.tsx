import React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";

import Hero from "../sections/hero";
import Projects from "../sections/projects";
import About from "../sections/about";
import Contact from "../sections/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Seo from "../components/seo";

const IndexPage: React.FC<PageProps<Queries.IndexQuery>> = ({ data }) => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Projects assets={data.assets.nodes} />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;

export const query = graphql`
  query Index($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    assets: allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
      nodes {
        extension
        publicURL
        name
      }
    }
  }
`;
