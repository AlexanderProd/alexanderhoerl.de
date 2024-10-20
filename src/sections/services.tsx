/** @jsx jsx */
import { Button, Container, Heading, jsx, Link, Grid, Box } from "theme-ui";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <Container mt={[5, 5, 5]} mb={[5, 5, 7]} px={[3, 3, 3, 3, 0]}>
      <Heading as="h2" variant="styles.h2">
        {t("SERVICES.TITLE")}
      </Heading>

      <Grid gap={4} columns={[1, 2, 2, 3]} mt={4}>
        <Box>
          <Heading as="h3" variant="h3">
            {t("SERVICES.WEB_DEVELOPMENT")}
          </Heading>
          <p
            dangerouslySetInnerHTML={{
              __html: t("SERVICES.WEB_DEVELOPMENT.DESCRIPTION"),
            }}
          />
        </Box>
        <Box>
          <Heading as="h3" variant="h3">
            {t("SERVICES.MARKETING_AUTOMATION")}
          </Heading>
          <p
            dangerouslySetInnerHTML={{
              __html: t("SERVICES.MARKETING_AUTOMATION.DESCRIPTION"),
            }}
          />
        </Box>
        <Box>
          <Heading as="h3" variant="h3">
            {t("SERVICES.INDIVIDUAL_SOLUTIONS")}
          </Heading>
          <p
            dangerouslySetInnerHTML={{
              __html: t("SERVICES.INDIVIDUAL_SOLUTIONS.DESCRIPTION"),
            }}
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default Services;
