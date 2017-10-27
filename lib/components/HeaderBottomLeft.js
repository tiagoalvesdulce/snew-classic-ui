import React from "react";
import LinkComponent from "./Link";

const HeaderBottomLeft = ({
  Link = LinkComponent,
  subreddit,
  subredditData,
  useStyle
}) => (
  <div id="header-bottom-left">
    {useStyle && subredditData && subredditData.header_img ? (
      <Link href="/">
        <img
          id="header-img"
          src={subredditData.header_img}
          alt={subredditData.display_name}
        />
      </Link>
    ) : (
      <Link
        className="default-header"
        href="/"
        id="header-img"
      >
        snew
      </Link>
    )} {subreddit ? <span className="hover pagename redditname">
      <Link href={`/r/${subreddit}/`}>{subreddit}</Link>
    </span> : null}
    <ul className="tabmenu">
      <li className="selected">
        <Link className="choice" href={`/r/${subreddit}/`}>
          hot
        </Link>
      </li>
      <li>
        <Link className="choice" href={`/r/${subreddit}/new/`}>
          new
        </Link>
      </li>
      <li>
        <Link className="choice" href={`/r/${subreddit}/rising/`}>
          rising
        </Link>
      </li>
      <li>
        <Link className="choice" href={`/r/${subreddit}/controversial/`}>
          controversial
        </Link>
      </li>
      <li>
        <Link className="choice" href={`/r/${subreddit}/top/`}>
          top
        </Link>
      </li>
      <li>
        <Link className="choice" href={`/r/${subreddit}/gilded/`}>
          gilded
        </Link>
      </li>
      {/*<li>
        <Link className="choice" href={`/r/${subreddit}/ads/`}>
          promoted
        </Link>
      </li>*/}
    </ul>
  </div>
);

export default HeaderBottomLeft;

