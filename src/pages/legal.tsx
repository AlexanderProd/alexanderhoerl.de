/** @jsx jsx */
import { Box, Container, Heading, Text, jsx } from "theme-ui";
import * as React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";

import Seo from "../components/seo";
import { useTranslation } from "gatsby-plugin-react-i18next";

const LegalPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();

  return (
    <Container px={[3, 3, 3, 3, 0]} mb={[4]}>
      <Box
        my={[4]}
        sx={{
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <Link to="/">&larr; {t("HEADER.BACK")}</Link>
      </Box>
      <Heading as="h1" variant="styles.legal.h1">
        {t("FOOTER.LEGAL")}
      </Heading>
      <Heading as="h2" variant="styles.legal.h2">
        Angaben gemäß § 5 TMG:
      </Heading>
      <Text>
        Alexander Hörl
        <br />
        Am Stadtwald 22
        <br />
        90768 Fürth
      </Text>
      <Heading as="h2" variant="styles.legal.h2">
        Kontakt:
      </Heading>
      <Text>
        E-Mail: mail@alexanderhoerl.de
        <br />
        Telefon: +49 176 77251685
        <br />
        Steuer-Nr.: 218 229 80683
      </Text>
      <Heading as="h2" variant="styles.legal.h2">
        Haftungsausschluss:
      </Heading>
      <Heading as="h3" variant="styles.legal.h3">
        Haftung für Inhalte
      </Heading>
      <Text>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen.
      </Text>
      <Heading as="h3" variant="styles.legal.h3">
        Haftung für Links
      </Heading>
      <Text>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen.
      </Text>
      <Heading as="h3" variant="styles.legal.h3">
        Urheberrecht
      </Heading>
      <Text>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
      </Text>
      <Heading as="h3" variant="styles.legal.h3">
        Datenschutz
      </Heading>
      <Text>
        Die Nutzung von im Rahmen der Impressumspflicht veröffentlichten
        Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
        angeforderten Werbeinformationen wird hiermit ausdrücklich
        widersprochen.
      </Text>
      <Heading as="h3" variant="styles.legal.h3">
        Google Analytics
      </Heading>
      <Text>
        Diese Website benutzt Google Analytics, einen Webanalysedienst der
        Google Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'',
        Textdateien, die auf Ihrem Computer gespeichert werden und die eine
        Analyse der Benutzung der Website durch Sie ermöglicht.
      </Text>
    </Container>
  );
};

export default LegalPage;

export const Head: HeadFC = () => <Seo />;

export const query = graphql`
  query Legal($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
