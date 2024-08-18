/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui";
import { Link } from "gatsby";
import React from "react";

const Footer = () => (
  <React.Fragment>
    <Box
      bg="divider"
      sx={{
        height: ["100px", "150px", "200px"],
        clipPath: `polygon(0 80%, 100% 0%, 100% 100%, 0 100%)`,
      }}
    />
    <Box as="footer" variant="footer" bg="divider">
      Copyright &copy; {new Date().getFullYear()} All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <Link aria-label="Legal Notice" to="legal">
          Legal Notice
        </Link>
      </Flex>
    </Box>
  </React.Fragment>
);

export default Footer;
