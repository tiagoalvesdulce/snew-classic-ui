import React from "react";
import ThingComponent from "./Thing";
import NavButtonsComponent from "./NavButtons";
import { optional } from "../util";

const SiteTable = ({
  Thing = ThingComponent,
  NavButtons = NavButtonsComponent,
  allChildren,
  noNav,
  expanded,
  rank=1
}) => (
  <div className="sitetable linklisting" id="siteTable">
    {(allChildren || []).map((thing) => [
      optional(Thing, {
        ...thing,
        expanded,
        key: thing.data.id || "unknown",
        data: {
          ...thing.data
        }
      }),
      <div className="clearleft" key={(thing.data.id || "unknown") +"clear"} />
    ])}
    {noNav ? null : optional(NavButtons)}
  </div>
);

export default SiteTable;
