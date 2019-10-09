import React from "react";
// import { Grid } from "@material-ui/core";

import { SwipeblePictures, Picture } from "../components/Picture";

const pictureSrc = [
  "/resource/image/emm/emm001.png",
  "/resource/image/emm/emm002.png",
  "/resource/image/emm/emm003.png"
];

class PageProjects extends React.Component<{}> {
  render = () => {
    return (
      <SwipeblePictures width={420} height={250}>
        {pictureSrc.map((p, index) => {
          return <Picture key={index} src={p} />;
        })}
      </SwipeblePictures>
    );
  };
}

export default PageProjects;
