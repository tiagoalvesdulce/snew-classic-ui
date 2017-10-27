import React from "react";
import LinkComponent from "./Link";

const SubmitTextSidebox = ({
  Link = LinkComponent,
  subreddit
}) => (
  <div className="spacer">
    <div className="sidebox submit submit-text">
      <div className="morelink">
        <Link
          className="login-required access-required"
          data-event-action="submit"
          data-event-detail="self"
          data-type="subreddit"
          href={subreddit
            ? `https://voat.co/v/${subreddit}/submit`
            : "https://voat.co/submit"}
          target="_top"
        >
          Submit a new text post
        </Link>
        <div className="nub" />
      </div>
    </div>
  </div>
);

export default SubmitTextSidebox;

