import React from "react";

const SubmitPage = ({
  subreddit
}) => (
  <div className="content" role="main">
    <h1>
      submit to {subreddit ? <a href={`/r/${subreddit}/`}>{subreddit}</a> : "reddit"}
    </h1>
    <form
      action
      className="submit content warn-on-unload"
      id="newlink"
      method="post"
      onsubmit="return post_form(this, 'submit', linkstatus, null, true)"
    >
      <input name="uh" type="hidden" defaultValue="AaronSw" />
      <ul className="tabmenu formtab">
        <li className>
          <a className="link-button choice" >
            link
          </a>
        </li>
        <li className="selected">
          <a className="text-button choice" >
            text
          </a>
        </li>
      </ul>
      <div className="formtabs-content">
        <div className="spacer">
          <div
            className="infobar"
            id="link-desc"
            style={{ display: "none" }}
          >
            You are submitting a link. The key to a successful submission is
            interesting content and a descriptive title.
          </div>
          <div
            className="infobar"
            id="text-desc"
            style={{ display: "block" }}
          >
            You are submitting a text-based post. Speak your mind. A title is
            required, but expanding further in the text field is not. Beginning
            your title with "vote up if" is violation of intergalactic law.
          </div>
        </div>
        <div className="spacer">
          <div className="roundfield" id="title-field">
            <span className="title">title</span>
            <div className="roundfield-content">
              <textarea name="title" required rows={2} defaultValue={""} />
              <div
                className="error NO_TEXT field-title"
                style={{
                  display: "none"
                }}
              />
              <div
                className="error TOO_LONG field-title"
                style={{
                  display: "none"
                }}
              />
            </div>
          </div>
        </div>
        <div className="spacer">
          <div
            className="roundfield"
            id="url-field"
            style={{ display: "none" }}
          >
            <span className="title">url</span>
            <div className="roundfield-content">
              <input
                disabled="disabled"
                name="kind"
                type="hidden"
                defaultValue="link"
              />
              <input
                disabled="disabled"
                id="url"
                name="url"
                required
                type="url"
                defaultValue
              />
              <div
                className="error NO_URL field-url"
                style={{ display: "none" }}
              />
              <div
                className="error BAD_URL field-url"
                style={{ display: "none" }}
              />
              <div
                className="error DOMAIN_BANNED field-url"
                style={{ display: "none" }}
              />
              <div
                className="error ALREADY_SUB field-url"
                style={{ display: "none" }}
              />
              <div id="suggest-title">
                <button
                  disabled="disabled"
                  tabIndex={100}
                  type="button"
                >
                  suggest title
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer">
          <div
            className="roundfield"
            id="text-field"
            style={{
              display: "block"
            }}
          >
            <span className="title">text</span>{" "}
            <span className="little gray roundfield-description">
              (optional)
            </span>
            <div className="roundfield-content">
              <input name="kind" type="hidden" defaultValue="self" />
              <div className="usertext">
                <input name="thing_id" type="hidden" defaultValue />
                <div className="usertext-edit md-container" style={{}}>
                  <div className="md">
                    <textarea
                      className
                      cols={1}
                      name="text"
                      rows={1}
                    />
                  </div>
                  <div className="bottom-area">
                    <span className="help-toggle toggle" style={{}}>
                      <a
                        className="option active"
                        tabIndex={100}
                      >
                        formatting help
                      </a>
                      <a className="option">
                        hide help
                      </a>
                    </span>
                    <a
                      className="reddiquette"
                      href="/help/contentpolicy"
                      tabIndex={100}
                      target="_blank"
                    >
                      content policy
                    </a>
                    <div className="usertext-buttons">
                      <button
                        className="save"
                        style={{
                          display: "none"
                        }}
                        type="submit"
                      >
                        save
                      </button>
                      <button
                        className="cancel"
                        style={{
                          display: "none"
                        }}
                        type="button"
                      >
                        cancel
                      </button>
                    </div>
                  </div>
                  <div
                    className="markhelp"
                    style={{
                      display: "none"
                    }}
                  >
                    <p>
                      reddit uses a slightly-customized version of{" "}
                      <a href="http://daringfireball.net/projects/markdown/syntax">
                        Markdown
                      </a>{" "}
                      for formatting. See below for some basics, or check{" "}
                      <a href="/wiki/commenting">
                        the commenting wiki page
                      </a>{" "}
                      for more detailed help and solutions to common issues.
                    </p>
                    <table className="md">
                      <tbody>
                        <tr
                          style={{
                            backgroundColor: "#ffff99",
                            textAlign: "center"
                          }}
                        >
                          <td>
                            <em>you type:</em>
                          </td>
                          <td>
                            <em>you see:</em>
                          </td>
                        </tr>
                        <tr>
                          <td>*italics*</td>
                          <td>
                            <em>italics</em>
                          </td>
                        </tr>
                        <tr>
                          <td>**bold**</td>
                          <td>
                            <b>bold</b>
                          </td>
                        </tr>
                        <tr>
                          <td>[reddit!](https://reddit.com)</td>
                          <td>
                            <a href="https://reddit.com">reddit!</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            * item 1<br />
                            * item 2<br />
                            * item 3
                          </td>
                          <td>
                            <ul>
                              <li>item 1</li>
                              <li>item 2</li>
                              <li>item 3</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>> quoted text</td>
                          <td>
                            <blockquote>quoted text</blockquote>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Lines starting with four spaces<br />
                            are treated like code:<br />
                            <br />
                            <span className="spaces">    </span>if 1 * 2 != 3:<br />
                            <span className="spaces">        </span>print
                            "hello, world!"<br />
                          </td>
                          <td>
                            Lines starting with four spaces<br />
                            are treated like code:<br />
                            <pre>
                              if 1 * 2 != 3:<br />    print "hello, world!"{"\n"}
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <td>~~strikethrough~~</td>
                          <td>
                            <strike>strikethrough</strike>
                          </td>
                        </tr>
                        <tr>
                          <td>super^script</td>
                          <td>
                            super<sup>script</sup>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer">
          <div className="roundfield" id="reddit-field">
            <span className="title">choose a subreddit</span>
            <div className="roundfield-content">
              <div id="sr-autocomplete-area">
                <input
                  autoComplete="off"
                  id="sr-autocomplete"
                  name="sr"
                  onblur="hide_sr_name_list()"
                  onkeydown="return sr_name_down(event)"
                  onkeyup="sr_name_up(event)"
                  required
                  type="text"
                  defaultValue="pics"
                />
                <ul id="sr-drop-down">
                  <li
                    className="sr-name-row"
                    onmousedown="return sr_dropdown_mdown(this)"
                    onmouseover="highlight_reddit(this)"
                    onmouseup="sr_dropdown_mup(this)"
                  >
                    nothin
                  </li>
                </ul>
              </div>
              <div
                className="error SUBREDDIT_NOEXIST field-sr"
                style={{ display: "none" }}
              />
              <div
                className="error SUBREDDIT_NOTALLOWED field-sr"
                style={{ display: "none" }}
              />
              <div
                className="error SUBREDDIT_REQUIRED field-sr"
                style={{ display: "none" }}
              />
              <div id="suggested-reddits">
                <h3>your subscribed subreddits</h3>
                <ul>
                  <li>
                    <a tabIndex={100} >reddit.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer">
          <div className="submit_text roundfield">
            <h1>submitting to /r/</h1>
          </div>
        </div>
        <div className="spacer">
          <div className="roundfield">
            <span className="title">options</span>
            <div className="roundfield-content">
              <input
                defaultChecked="checked"
                className="nomargin"
                data-send-checked="true"
                id="sendreplies"
                name="sendreplies"
                type="checkbox"
              />
              <label htmlFor="sendreplies">send replies to my inbox</label>
            </div>
          </div>
        </div>
      </div>
      <div className="roundfield info-notice">
        please be mindful of reddit's{" "}
        <a href="/help/contentpolicy" target="_blank">
          content policy
        </a>{" "}
        and practice{" "}
        <a href="/wiki/reddiquette" target="_blank">
          good reddiquette
        </a>.
      </div>
      <input name="resubmit" type="hidden" defaultValue />
      <div className="spacer">
        <button className="btn" name="submit" type="submit" value="form">
          submit
        </button>
      </div>
    </form>
  </div>
);

export default SubmitPage;
