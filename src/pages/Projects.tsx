import React from "react";
// import { Grid } from "@material-ui/core";

// import { SwipeblePictures, Picture } from "../components/Picture";
import { ProjectContainer, PProjectContainer } from "../components/Project";

const pictureSrc = [
  "/resource/image/emm/emm001.png",
  "/resource/image/emm/emm002.png",
  "/resource/image/emm/emm003.png"
];
const contents: PProjectContainer["contents"] = [
  {
    pictures: pictureSrc,
    name: "Project01",
    description: "Here is something amazing about your project, you can add anything in this block. Here is something amazing about your project, you can add anything in this block. Here is something amazing about your project, you can add anything in this block. Here is something amazing about your project, you can add anything in this block. Here is something amazing about your project, you can add anything in this block. Here is something amazing about your project, you can add anything in this block.",
    repositoryUrl: "https://github.com"
  }
];

class PageProjects extends React.Component<{}> {
  render = () => {
    return (
      <ProjectContainer contents={contents} />
    );
  };
}

export default PageProjects;
