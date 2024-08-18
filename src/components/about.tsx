import * as React from "react";
import AboutMDX from "../sections/about.mdx";
import { Box, Container, Grid } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";

const About = () => (
  <React.Fragment>
    <Box
      bg="divider"
      sx={{
        height: ["100px", "150px", "200px"],
        clipPath: `polygon(0 80%, 100% 0%, 100% 100%, 0 100%)`,
      }}
    />
    <Box color="background" bg="divider" py={[3]}>
      <Container px={[3, 3, 3, 3, 0]}>
        <Grid gap={4} columns={["100%", "100%", "100%", "2fr 1fr"]}>
          <Box>
            <AboutMDX />
          </Box>
          <StaticImage
            src="../assets/alexanderhoerl.png"
            alt="Alexander Hörl"
            placeholder="blurred"
            layout="fullWidth"
          />
        </Grid>
      </Container>
    </Box>
    <Box
      color="background"
      bg="divider"
      sx={{
        height: ["100px", "150px", "200px"],
        clipPath: `polygon(0 0%, 100% 0%, 100% 0%, 0 80%)`,
      }}
    />
  </React.Fragment>
);

export default About;
