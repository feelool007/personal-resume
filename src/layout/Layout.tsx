import React from "react";

import { PLayout } from "./types";
import { paths } from "../router";
import Wrapper from "./Wrapper";
import Footer from "./Footer";
import MainPanel from "./MainPanel";
import Header from "./Header";
import Content from "./Content";
import { NavBar } from "../components/Nav";

class Layout extends React.Component<PLayout> {
  render = () => {
    const { children } = this.props;
    return (
      <Wrapper>
        <MainPanel>
          <Header>
            <NavBar paths={paths} />
          </Header>
          <Content>
            {/* page content */}
            {children}
          </Content>
        </MainPanel>
        <Footer />
      </Wrapper>
    );
  };
}

export default Layout;
