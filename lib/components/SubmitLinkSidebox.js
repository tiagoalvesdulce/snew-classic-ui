import React from "react";
import LinkComponent from "./Link";

const SubmitLinkSidebx = ({
  Link = LinkComponent,
  subreddit
}) => (
  <div className="spacer">
    <div className="sidebox submit submit-link">
      <div className="morelink">
        <Link
          className="login-required access-required"
          data-event-action="submit"
          data-event-detail="link"
          data-type="subreddit"
          href={`/r/${subreddit}/submit`}
          target="_top"
        >
          Submit a new link
        </Link>
        <div className="nub" />
      </div>
    </div>
  </div>
);

export default SubmitLinkSidebx;

