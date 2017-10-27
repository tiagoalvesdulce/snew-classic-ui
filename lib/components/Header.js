import React from "react";
import SrHeaderAreaComponent from "./SrHeaderArea";
import HeaderBottomLeftComponent from "./HeaderBottomLeft";
import UserInfoComponent from "./UserInfo";
import { optional } from "../util";

const Header = ({
  SrHeaderArea = SrHeaderAreaComponent,
  HeaderBottomLeft = HeaderBottomLeftComponent,
  UserInfo = UserInfoComponent
}) => (
  <div id="header" role="banner">
    <a href="#content" id="jumpToContent" tabIndex={1}>
      jump to content
    </a>
    {optional(SrHeaderArea)}
    {optional(HeaderBottomLeft)}
    {optional(UserInfo)}
  </div>
);

export default Header;

