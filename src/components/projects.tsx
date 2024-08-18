/** @jsx jsx */
import { Box, Container, jsx } from "theme-ui";
import ProjectsMDX from "../sections/projects.mdx";
import React from "react";

const Projects = () => (
  <React.Fragment>
    <Box
      sx={{
        height: ["100px", "150px", "200px"],
        clipPath: `polygon(0 0%, 100% 75%, 100% 100%, 0 100%)`,
        background: `linear-gradient(to right, #18171c 0%, #2b2b2b 100%)`,
      }}
    />
    <Box
      sx={{
        background: `linear-gradient(to right, #18171c 0%, #2b2b2b 100%)`,
        pb: [6],
      }}
    >
      <Container px={[3, 3, 3, 3, 0]}>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
            p: { color: `white` },
          }}
        >
          <ProjectsMDX />
        </div>
      </Container>
    </Box>
    <Box
      color="background"
      sx={{
        height: ["100px", "150px", "200px"],
        clipPath: `polygon(0 0%, 100% 0%, 100% 50%, 0 25%)`,
        background: `linear-gradient(to right, #18171c 0%, #2b2b2b 100%)`,
      }}
    ></Box>
  </React.Fragment>
);

export default Projects;
