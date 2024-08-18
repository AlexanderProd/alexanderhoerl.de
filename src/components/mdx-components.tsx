import * as React from "react";
import ProjectCard from "./project-card";
import MediaCard from "./MediaCard/media-card";

const MdxComponents = {
  ProjectCard: ({ link, title, bg, children, ...props }: any) => (
    <ProjectCard {...props} link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  MediaCard: ({ imageUrl, videoUrl, children, ...props }: any) => (
    <MediaCard {...props} imageUrl={imageUrl} videoUrl={videoUrl}>
      {children}
    </MediaCard>
  ),
};

export default MdxComponents;
