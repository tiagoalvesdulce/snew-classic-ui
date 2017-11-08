import React from "react";
import LinkComponent from "./Link";
import NavTabComponent from "./NavTab";

const getProp = (listings, prop) => (
  listings &&
  listings[0] &&
  listings[0].allChildren &&
  listings[0].allChildren.length === 1 &&
  listings[0].allChildren[0] &&
  listings[0].allChildren[0].data &&
  listings[0].allChildren[0].data[prop]
);
const isCommentsPage = (listings) => listings && listings[1];
const getPermalink = (listings) => getProp(listings, "permalink");
const getDupesLink = (listings) => getPermalink(listings) && getPermalink(listings).replace("/comments/", "/duplicates/");

const HeaderBottomLeft = ({
  Link = LinkComponent,
  NavTab = NavTabComponent,
  subreddit="all",
  subredditData,
  useStyle,
  listings,
  numOtherDiscussions,
  ...props
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
    {isCommentsPage(listings) ? (
      <ul className="tabmenu">
        <NavTab href={getPermalink(listings)} {...{ Link, ...props }}>comments</NavTab>
        <NavTab href={getDupesLink(listings)} {...{ Link, ...props }}>
          other discussions
          {numOtherDiscussions && `(${numOtherDiscussions})`}
        </NavTab>
      </ul>
    ) : (
      <ul className="tabmenu">
        <NavTab href={`/r/${subreddit}/`} {...{ Link, ...props }}>hot</NavTab>
        <NavTab href={`/r/${subreddit}/new/`} {...{ Link, ...props }}>new</NavTab>
        <NavTab href={`/r/${subreddit}/rising/`} {...{ Link, ...props }}>rising</NavTab>
        <NavTab href={`/r/${subreddit}/controversial/`} {...{ Link, ...props }}>controversial</NavTab>
        <NavTab href={`/r/${subreddit}/top/`} {...{ Link, ...props }}>top</NavTab>
        <NavTab href={`/r/${subreddit}/gilded/`} {...{ Link, ...props }}>gilded</NavTab>
      </ul>
    )}
  </div>
);

export default HeaderBottomLeft;

