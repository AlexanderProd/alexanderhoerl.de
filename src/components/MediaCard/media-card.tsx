/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui";
import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./styles.css";
import {
  GatsbyImage,
  getImage,
  getImageData,
  StaticImage,
} from "gatsby-plugin-image";
import { graphql, StaticQuery } from "gatsby";

interface MediaCardProps {
  imageName?: string;
  imageUrl: string;
  videoUrl?: string;
  link?: string;
  children: React.ReactNode;
  title: string;
}

const MediaCard: React.FC<MediaCardProps> = ({
  imageName,
  imageUrl,
  videoUrl,
  children,
  link,
  title,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [springStyle, api] = useSpring(() => ({
    transform: "scale(1)",
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  }));

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    api.start({ transform: "scale(1.05)" });
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    api.start({ transform: "scale(1)" });
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener"
      sx={{
        "&:hover": {
          cursor: link ? "pointer" : "default",
        },
      }}
    >
      <animated.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
        className="background-media-card"
        style={springStyle}
        sx={{
          minHeight: ["200px", "200px", "300px"],
        }}
      >
        <img src={imageUrl} alt={title} className="background-image" />
        {/* <picture>
          <source srcSet={`/${imageName}.avif`} type="image/avif" />
          <img src={imageUrl} alt={title} className="background-image" />
        </picture> */}
        {/*  <StaticQuery
          query={graphql`
            query MediaCardQuery {
              images: allFile(
                filter: {
                  sourceInstanceName: { eq: "assets" }
                  extension: { in: ["jpg", "jpeg", "png"] }
                }
              ) {
                nodes {
                  name
                  childImageSharp {
                    gatsbyImageData(
                      layout: FULL_WIDTH
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          `}
          render={(data) => {
            const image = data.images.nodes.find(
              (node: any) => node.name === imageName
            );
            const imageData = getImage(image);

            if (!imageData) {
              return null;
            }

            return (
              <GatsbyImage
                image={imageData}
                alt={title}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              />
            );
          }}
        /> */}
        {videoUrl && (
          <video
            ref={videoRef}
            src={videoUrl}
            className="background-video"
            muted
            loop
            playsInline
            controls={false}
          />
        )}
        <div className="overlay-text" sx={{ padding: [2, 2, 4] }}>
          <Flex
            sx={{
              height: "100%",
              flexDirection: "column",
              justifyContent: "flex-end",
              "&:hover": {
                cursor: link ? "pointer" : "default",
              },
              p: {
                fontSize: [12, 14],
                color: `white`,
                margin: 0,
                lineHeight: 1.25,
              },
            }}
          >
            {children}
            <div
              sx={{
                textTransform: `uppercase`,
                letterSpacing: `wide`,
                pt: 3,
                fontSize: [18, 20, 22, 23, 24],
                fontWeight: `medium`,
                lineHeight: 1.125,
              }}
            >
              {title}
            </div>
          </Flex>
        </div>
      </animated.div>
    </a>
  );
};

export default MediaCard;
