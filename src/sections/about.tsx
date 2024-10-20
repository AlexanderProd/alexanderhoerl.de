import * as React from "react";
import { Box, Container, Grid, Heading, Text } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Box
        bg="divider"
        sx={{
          height: ["100px", "150px", "200px"],
          clipPath: `polygon(0 80%, 100% 0%, 100% 100%, 0 100%)`,
        }}
      />
      <Box bg="divider" py={[3]}>
        <Container px={[3, 3, 3, 3, 0]}>
          <Grid gap={4} columns={["100%", "100%", "100%", "2fr 1fr"]}>
            <Box>
              <Heading variant="styles.h2" as="h2">
                {t("ABOUT.TITLE")}
              </Heading>
              <Text variant="styles.blockquote">{t("ABOUT.SUBTITLE")}</Text>
              <p dangerouslySetInnerHTML={{ __html: t("ABOUT.DESCRIPTION") }} />
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
};

export default About;
