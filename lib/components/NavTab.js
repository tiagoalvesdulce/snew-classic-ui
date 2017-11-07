import React from "react";
import LinkComponent from "./Link";

const NavTab = ({
  Link = LinkComponent,
  ...props
}) => (
  <li>
    <Link {...props} />
  </li>
);

export default NavTab;
