/** @jsx jsx */
import { Container, Heading, Text, jsx } from "theme-ui";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Container my={[6, 7, 7]} px={[3, 3, 3, 3, 0]}>
      <Heading as="h1" variant="styles.h1">
        {t("HERO.TITLE")}
      </Heading>
      <Text variant="styles.p">{t("HERO.TEXT")}</Text>
    </Container>
  );
};

export default Hero;
