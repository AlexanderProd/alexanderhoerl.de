/** @jsx jsx */
import { Button, Container, Heading, jsx, Link } from "theme-ui";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Container my={[7, 7, 7]} px={[3, 3, 3, 3, 0]}>
      <Heading as="h2" variant="styles.h2">
        {t("CONTACT.TITLE")}
      </Heading>
      <p
        dangerouslySetInnerHTML={{
          __html: t("CONTACT.MESSAGE", {
            mailLink: `mail@alexanderhoerl.de`,
            githubLink: `https://github.com/AlexanderProd`,
            linkedinLink: `https://www.linkedin.com/in/alexander-h%C3%B6rl-b6171b112/`,
          }),
        }}
      />
      <Button>
        <Link
          href="https://calendly.com/productionsalexander/gettoknow"
          target="_blank"
          sx={{
            color: `white`,
            "&:hover": { color: `white`, textDecoration: `none` },
          }}
        >
          {t("CONTACT.SCHEDULE_CALL")}
        </Link>
      </Button>
    </Container>
  );
};

export default Contact;
