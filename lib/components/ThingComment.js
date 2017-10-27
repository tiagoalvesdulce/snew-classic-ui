import React from "react";
import LinkComponent from "./Link";
import SiteTableComponent from "./SiteTable";
import MarkdownComponent from "./Markdown";

const getChildComments = replies => replies ? replies.data ? replies.data.children || [] : [] : [];

const ThingComment = ({
  SiteTable = SiteTableComponent,
  Markdown = MarkdownComponent,
  Link = LinkComponent,
  Timestamp = ({ created_utc }) => created_utc,
  author,
  score,
  downs,
  ups,
  body,
  body_html,
  permalink,
  replies,
  banned_by,
  created,
  created_utc
}) => (
  <div
    className={`thing id-t1_h1 noncollapsed comment ${banned_by ? "spam" : null}`}
    data-author={author}
    data-author-fullname="t2_19"
    data-fullname="t1_h1"
    data-subreddit="pics"
    data-subreddit-fullname="t4_5"
    data-type="comment"
    id="thing_t1_h1"
  >
    <p className="parent">
      <a name="h1" />
    </p>
    <div className="midcol unvoted">
      <div
        aria-label="upvote"
        className="arrow up login-required access-required"
        data-event-action="upvote"
        role="button"
        tabIndex={0}
      />
      <div
        aria-label="downvote"
        className="arrow down login-required access-required"
        data-event-action="downvote"
        role="button"
        tabIndex={0}
      />
    </div>
    <div className="entry unvoted">
      <p className="tagline">
        <a
          className="expand"
        >
          [–]
        </a>
        <a
          className="author may-blank id-t2_19"
          href={`https://reddit.local/user/${author}`}
        >
          {author}
        </a>
        <span className="score dislikes">{downs} points</span>
        <span className="score unvoted">{score} point</span>
        <span className="score likes">{ups} points</span> <Timestamp {...{ created, created_utc }} /> <a className="numchildren" >
          {replies ? `(${replies.data.children})` : null}
        </a>
      </p>
      <form
        action="#"
        className="usertext warn-on-unload"
        id="form-t1_h1835"
      >
        <input name="thing_id" type="hidden" defaultValue="t1_h1" />
        <Markdown body={body} html={body_html} className="usertext-body may-blank-within md-container" />
      </form>
      <ul className="flat-list buttons">
        <li className="first">
          <a
            className="bylink"
            data-event-action="permalink"
            href={permalink}
            rel="nofollow"
          >
            permalink
          </a>
        </li>
        <li className="comment-save-button save-button">
          <a title="archive">save</a>
        </li>
        <li className="report-button">
          <a
            className="action-thing reportbtn access-required"
            data-event-action="report"
          >
            report
          </a>
        </li>
        <li className="give-gold-button">
          <a
            className="give-gold login-required access-required"
            data-event-action="gild"
            href="/gold?goldtype=gift&months=1&thing=t1_h1"
            title="give reddit gold in appreciation of this post."
          >
            give gold
          </a>
        </li>
        <li className="reply-button">
          <a
            className="access-required"
            data-event-action="comment"
          >
            reply
          </a>
        </li>
        {banned_by ? <li title="[removed]"><b>[censored by moderators]</b></li> : null}
      </ul>
      <div className="reportform report-t1_h1" />
    </div>
    <div className="child">
      <SiteTable noNav className="listing" id="siteTable_t1_" allChildren={getChildComments(replies)} />
    </div>
    <div className="clearleft" />
  </div>
);

export default ThingComment;

