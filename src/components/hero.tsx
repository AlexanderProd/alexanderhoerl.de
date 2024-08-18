/** @jsx jsx */
import { Container, jsx } from "theme-ui";
import IntroMDX from "../sections/intro.mdx";

const Hero = () => (
  <Container my={[6, 7, 7]} px={[3, 3, 3, 3, 0]}>
    <IntroMDX />
  </Container>
);

export default Hero;
