/** @jsx jsx */
import { Box, Container, Heading, Text, jsx } from "theme-ui";
import React from "react";
import MediaCard from "../components/MediaCard";
import { useTranslation } from "gatsby-plugin-react-i18next";

const data = [
  {
    key: "THERMAL_INLINE_SIMULATOR",
    imageName: "thermal-inline-simulator",
    link: "https://simulator.h7.de",
  },
  {
    key: "CSQ_VIEWER",
    imageName: "csq-viewer",
    link: "https://csq-viewer.com",
  },
  {
    key: "LIGHTWEIGHT_SYSTEM",
    imageName: "lws",
    link: "https://lightweight-system.alexanderhoerl.de",
  },
  {
    key: "NIGHTTEC",
    imageName: "nighttec",
    link: "https://nighttec.net",
  },
  {
    key: "LUCINSKI",
    imageName: "lucinski",
    link: "https://lucinski.de",
  },
];

const isImage = (extension: string) =>
  ["png", "jpg", "jpeg"].includes(extension);

type Assets = Queries.IndexQuery["assets"]["nodes"];
type Asset = Queries.IndexQuery["assets"]["nodes"][number];

type ProjectProps = {
  assets: Assets;
};

const Projects: React.FC<ProjectProps> = ({ assets }) => {
  const { t } = useTranslation();

  return (
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
            }}
          >
            <div>
              <Heading as="h2" variant="styles.h2" color="white">
                {t("PROJECTS.TITLE")}
              </Heading>
              <Text variant="styles.p" color="white">
                {t("PROJECTS.DESCRIPTION")}
              </Text>
            </div>
            <br />
            {data.map((project) => {
              const [bgImage, bgVideo] = assets.reduce<
                [Asset | null, Asset | null]
              >(
                (acc, asset) => {
                  if (asset.name === project.imageName) {
                    if (isImage(asset.extension)) {
                      acc[0] = asset;
                    } else if (asset.extension === "mp4") {
                      acc[1] = asset;
                    }
                  }
                  return acc;
                },
                [null, null]
              );

              return (
                <MediaCard
                  key={project.key}
                  imageUrl={bgImage?.publicURL ?? ""}
                  videoUrl={bgVideo?.publicURL ?? ""}
                  title={t(`PROJECTS.${project.key}.TITLE`)}
                  link={project.link}
                >
                  <Text>{t(`PROJECTS.${project.key}.DESCRIPTION`)}</Text>
                </MediaCard>
              );
            })}
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
};

export default Projects;
