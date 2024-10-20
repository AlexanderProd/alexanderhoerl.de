/** @jsx jsx */
import React, { useState } from "react";
import { Box, Button, Container, Heading, Text, jsx } from "theme-ui";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import MediaCard from "../components/MediaCard";
import { ChevronDown, ChevronUp } from "../components/ui/icons";

type Category = "WEBSITES" | "WEB_APPS" | "WEB_SHOPS";

type Project = {
  key: string;
  imageName: string;
  link: string;
  type: Category;
};

const categories: Category[] = ["WEB_APPS", "WEBSITES", "WEB_SHOPS"];

const data: Project[] = [
  {
    key: "THERMAL_INLINE_SIMULATOR",
    imageName: "thermal-inline-simulator",
    link: "https://simulator.h7.de",
    type: "WEB_APPS",
  },
  {
    key: "CSQ_VIEWER",
    imageName: "csq-viewer",
    link: "https://csq-viewer.com",
    type: "WEB_APPS",
  },
  {
    key: "LIGHTWEIGHT_SYSTEM",
    imageName: "lws",
    link: "https://lightweight-system.alexanderhoerl.de",
    type: "WEBSITES",
  },
  {
    key: "NIGHTTEC",
    imageName: "nighttec",
    link: "https://nighttec.net",
    type: "WEB_SHOPS",
  },
  {
    key: "LUCINSKI",
    imageName: "lucinski",
    link: "https://lucinski.de",
    type: "WEBSITES",
  },
  {
    key: "ROGGENHOFER_CONSULT",
    imageName: "roggenhofer-consult",
    link: "https://roggenhofer-consult.de",
    type: "WEBSITES",
  },
  {
    key: "H7",
    imageName: "h7",
    link: "https://h7.de",
    type: "WEBSITES",
  },
  {
    key: "IB_VRM",
    imageName: "ib-vrm",
    link: "https://ib-vrm.de",
    type: "WEBSITES",
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
          <div sx={{ mb: [4] }}>
            <Heading as="h2" variant="styles.h2" color="white" mt={0}>
              {t("PROJECTS.TITLE")}
            </Heading>
            <Text variant="styles.p" color="white">
              {t("PROJECTS.DESCRIPTION")}
            </Text>
          </div>
          {categories.map((category) => (
            <CategorySection
              key={category}
              title={t(`PROJECTS.${category}`)}
              description={t(`PROJECTS.${category}.DESCRIPTION`)}
              projects={data.filter((project) => project.type === category)}
              assets={assets}
            />
          ))}
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

type CategorySectionProps = {
  title: string;
  description: string;
  projects: Project[];
  assets: Assets;
};

const gridStyles = {
  display: `grid`,
  gridGap: [4, 4, 4, 5],
  gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `repeat(2, 1fr)`],
  mb: [4, 4, 4, 5],
};

const findMediaAssets = (
  assets: Assets,
  imageName: string
): [Asset | null, Asset | null] => {
  return assets.reduce<[Asset | null, Asset | null]>(
    (acc, asset) => {
      if (asset.name === imageName) {
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
};

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  description,
  projects,
  assets,
}) => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  const firstTwoProjects = projects.slice(0, 2);
  const remainingProjects = projects.slice(2);

  return (
    <div>
      <Heading as="h3" variant="h3" color="white" mb={4}>
        {title}
      </Heading>
      <div sx={gridStyles}>
        {firstTwoProjects.map((project) => {
          const [bgImage, bgVideo] = findMediaAssets(assets, project.imageName);

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
      {remainingProjects.length > 0 && (
        <React.Fragment>
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, height: 0 },
                  visible: { opacity: 1, height: `auto` },
                }}
                transition={{ duration: 0.5 }}
                sx={gridStyles}
              >
                {remainingProjects.map((project, index) => {
                  const [bgImage, bgVideo] = findMediaAssets(
                    assets,
                    project.imageName
                  );

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <MediaCard
                        key={project.key}
                        imageUrl={bgImage?.publicURL ?? ""}
                        videoUrl={bgVideo?.publicURL ?? ""}
                        title={t(`PROJECTS.${project.key}.TITLE`)}
                        link={project.link}
                      >
                        <Text>{t(`PROJECTS.${project.key}.DESCRIPTION`)}</Text>
                      </MediaCard>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
          <div
            sx={{
              display: `flex`,
              justifyContent: `center`,
            }}
          >
            <Button
              variant="ghost"
              onClick={() => setShowMore((prev) => !prev)}
              sx={{
                cursor: `pointer`,
                color: `white`,
                display: `flex`,
                alignItems: `center`,
                gap: 2,
              }}
            >
              {showMore ? (
                <React.Fragment>
                  {t("PROJECTS.SHOW_LESS")}
                  <ChevronUp height={16} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {t("PROJECTS.MORE")}
                  <ChevronDown height={16} />
                </React.Fragment>
              )}
            </Button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Projects;
