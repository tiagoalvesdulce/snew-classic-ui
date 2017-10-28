import React from "react";
import ReactBody from "react-body";
import LoadingComponent from "./Loading";
import OrganicListingComponent from "./OrganicListing";
import SiteTableComponent from "./SiteTable";
import CommentAreaComponent from "./CommentArea";
import { optional } from "../util";

const Content = ({
  OrganicListing = OrganicListingComponent,
  SiteTable = SiteTableComponent,
  CommentArea = CommentAreaComponent,
  Loading = LoadingComponent,
  isLoading,
  listings
}) =>
  isLoading ? <Loading /> : (
    <div className="content" role="main" >
      <ReactBody className="listing-page" />
      {optional(OrganicListing, {})}
      <div className="spacer">
        {(listings || [])[0] ? (
          optional(SiteTable, { expanded: !!listings[1], noNav: !!listings[1], ...listings[0] })
        ): null}
        {(listings || 90)[1] ? (
          optional(CommentArea, { linkListing: listings[0], ...listings[1] })
        ): null}
      </div>
    </div>
  );

export default Content;
