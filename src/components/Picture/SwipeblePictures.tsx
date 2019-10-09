import React from "react";
import SwipebleViews from "react-swipeable-views";
import { withStyles } from "@material-ui/core";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined
} from "@material-ui/icons";
import classNames from "classnames";

import { PSwipeblePictures, SSwipeblePictures } from "./types";
import styles from "./styles";

class SwipeblePictures extends React.Component<
  PSwipeblePictures,
  SSwipeblePictures
> {
  constructor(props: PSwipeblePictures) {
    super(props);
    this.state = {
      index: 0,
      showIcon: false
    };
  }

  handleShowIcon = () => {
    this.setState({ showIcon: true });
  };

  handleHideIcon = () => {
    this.setState({ showIcon: false });
  };

  handleChangeIndex = (index: number): void => {
    this.setState({ index });
  };

  handlePrev = () => {
    const { children } = this.props;
    const pictureAmount = React.Children.count(children);
    this.setState(prevState => {
      let nextIndex;
      if (prevState.index === 0) {
        nextIndex = pictureAmount - 1;
      } else {
        nextIndex = prevState.index - 1;
      }
      return { index: nextIndex };
    });
  };

  handleNext = () => {
    const { children } = this.props;
    const pictureAmount = React.Children.count(children);
    this.setState(prevState => {
      let nextIndex;
      if (prevState.index === pictureAmount - 1) {
        nextIndex = 0;
      } else {
        nextIndex = prevState.index + 1;
      }
      return { index: nextIndex };
    });
  };

  render = () => {
    const { width, height, classes, children } = this.props;
    const { index, showIcon } = this.state;
    return (
      <div
        className={classes.swipeViewContainer}
        onMouseEnter={this.handleShowIcon}
        onMouseLeave={this.handleHideIcon}
      >
        <SwipebleViews index={index} onChangeIndex={this.handleChangeIndex}>
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { width, height });
            } else {
              return child;
            }
          })}
        </SwipebleViews>
        <KeyboardArrowLeftOutlined
          className={classNames(classes.icon, classes.iconPrev, {
            [classes.iconVisible]: showIcon
          })}
          onClick={this.handlePrev}
        />
        <KeyboardArrowRightOutlined
          className={classNames(classes.icon, classes.iconRight, {
            [classes.iconVisible]: showIcon
          })}
          onClick={this.handleNext}
        />
      </div>
    );
  };
}

export default withStyles(styles)(SwipeblePictures);
