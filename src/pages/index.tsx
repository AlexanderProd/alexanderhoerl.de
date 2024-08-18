import React from "react";
import { type HeadFC, type PageProps } from "gatsby";

import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Seo from "../components/seo";

const LegalPage: React.FC<PageProps> = () => {
  return (
    <React.Fragment>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default LegalPage;

export const Head: HeadFC = () => <Seo />;
