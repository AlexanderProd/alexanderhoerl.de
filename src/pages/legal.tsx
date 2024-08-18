/** @jsx jsx */
import { Box, Container, jsx } from "theme-ui";
import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";

import Seo from "../components/seo";
import LegalMDX from "../sections/legal.mdx";

const LegalPage: React.FC<PageProps> = () => {
  return (
    <Container px={[3, 3, 3, 3, 0]}>
      <Box
        my={[4]}
        sx={{
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <Link to="/">&larr; Back</Link>
      </Box>
      <LegalMDX />
    </Container>
  );
};

export default LegalPage;

export const Head: HeadFC = () => <Seo />;
