/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui";
import { Link } from "gatsby";
import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Box
        as="footer"
        variant="footer"
        bg="divider"
        sx={{
          height: ["100px", "150px", "200px"],
          clipPath: `polygon(0 80%, 100% 0%, 100% 100%, 0 100%)`,
        }}
      />
      <Box as="footer" variant="footer" bg="divider">
        {t("FOOTER.COPYRIGHT", { year: new Date().getFullYear() })}
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
          <Link aria-label={t("FOOTER.LEGAL")} to="legal">
            {t("FOOTER.LEGAL")}
          </Link>
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
