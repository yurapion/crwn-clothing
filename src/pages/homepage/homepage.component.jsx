import React from "react";
import "./homepage.styles.scss";
import {HomePageContainer} from "./homepage.styles";

//import MenuItem from "../../components/menu-item/menu-item.component";
import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
