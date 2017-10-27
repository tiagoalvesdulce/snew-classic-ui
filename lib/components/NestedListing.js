import React from "react";
import ThingComponent from "./Thing";
import { optional } from "../util";

const NestedListing = ({
  Thing = ThingComponent,
  allChildren,
  ...props
}) => (
  <div className="sitetable nestedlisting" id="siteTable_t5_m">
    {allChildren.map((thing, idx) => [
      optional(Thing, { ...props, ...thing, key: thing.data.id, rank: idx + 1 }),
      <div className="clearleft" key={thing.data.id+"clear"} />
    ])}
  </div>
);

export default NestedListing;

