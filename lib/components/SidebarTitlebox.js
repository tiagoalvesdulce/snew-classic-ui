import React from "react";
import LinkComponent from "./Link";
import MarkdownComponent from "./Markdown";
import { optional } from "../util";

const SidebarTitlebox = ({
  Link = LinkComponent,
  Markdown = MarkdownComponent,
  subreddit,
  description,
  description_html,
  useStyle,
  subscribers,
  accounts_active_is_fuzzed,
  accounts_active,
  created_by,
  subredditData: data,
  setStyleEnabled,
  setStyleDisabled
}) => (
  <div className="spacer">
    <div className="titlebox">
      <h1 className="hover redditname">
        <Link className="hover" href={`/r/${subreddit}/`}>{subreddit}</Link>
      </h1>
      {subreddit ? (
        <span
          className="fancy-toggle-button subscribe-button toggle"
          data-sr_name={subreddit}
          style={{ display: "none !important" }}
        >
          <a
            className="option active remove login-required"
            tabIndex={100}
          >
            unsubscribe
          </a>
          <a className="option add">
            subscribe
          </a>
        </span>
      ): null}
      {subscribers ? (
        <span className="subscribers">
          <span className="number">{subscribers}</span> <span className="word">readers</span>
        </span>
      ) : null}
      {accounts_active ? (
        <p
          className={`users-online ${accounts_active_is_fuzzed ? "fuzzed" : ""}`}
          title="logged-in users viewing this subreddit in the past 15 minutes"
        >
          <span className="number">
            {accounts_active_is_fuzzed ? "~" : ""}
            {accounts_active}
          </span>{" "}
          <span className="word">users here now</span>
        </p>
      ) : null}
      {subreddit && subreddit !== "all" ? (
        <form className="toggle flairtoggle">
          <input
            checked={useStyle}
            onChange={useStyle ? setStyleDisabled : setStyleEnabled}
            id="flair_enabled"
            name="flair_enabled"
            type="checkbox"
          />
          <label htmlFor="flair_enabled">
            Enable custom subreddit stylesheet
          </label>
        </form>
      ) : null}
      {/*<div className="tagline">
        <a
          className="author may-blank"
        >
          go1dfish
        </a>
      </div>*/}
      <form
        action="#"
        className="usertext warn-on-unload"
        id="form-t4_5rve"
      >
        <input name="thing_id" type="hidden" />
        {optional(Markdown, {
          className: "usertext-body may-blank-within md-container",
          body: description,
          html: description_html
        })}
      </form>
      <div className="bottom">
        {created_by ? `created by ${created_by}` : null} <span className="age">
          a community for 12 years
        </span>
      </div>
      <div className="clear" />
    </div>
  </div>
);

export default SidebarTitlebox;
