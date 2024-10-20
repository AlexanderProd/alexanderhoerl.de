/** @jsx jsx */
import { Box, Container, Flex, jsx } from "theme-ui";
import React from "react";
import { useI18next, useTranslation, Link } from "gatsby-plugin-react-i18next";

import { GermanyFlag, USAFlag } from "./ui/icons";

const Header: React.FC<{ showBack?: boolean }> = ({ showBack }) => {
  const { t } = useTranslation();
  const { languages, originalPath, language } = useI18next();

  return (
    <Box
      as="header"
      variant="header"
      sx={{ position: `sticky`, top: 0, zIndex: 10 }}
    >
      <Container px={[3, 3, 3, 3, 0]}>
        <Flex
          py={[4]}
          sx={{
            justifyContent: `space-between`,
          }}
        >
          {/* @ts-ignore */}
          {showBack ? <Link to="/">&larr; {t("HEADER.BACK")}</Link> : <Box />}
          <Box>
            {languages
              .filter((lng) => lng !== language)
              .map((lng) => (
                // @ts-ignore
                <Link to={originalPath} language={lng} key={lng}>
                  {lng === "de" && <GermanyFlag height={16} />}
                  {lng === "en" && <USAFlag height={16} />}
                </Link>
              ))}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
