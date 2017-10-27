import React from "react";
import LinkComponent from "./Link";
import NestedListingComponent from "./NestedListing";

const CommentArea = ({
  Link = LinkComponent,
  NestedListing = NestedListingComponent,
  num_comments,
  permalink,
  allChildren
}) => (
  <div className="commentarea">
    <div className="panestack-title">
      <span className="title">all ({num_comments}) comments</span>
    </div>
    <div className="menuarea">
      <div className="spacer">
        <span className="dropdown-title lightdrop">sorted by:</span>
        <div className="dropdown lightdrop">
          <span className="selected">best</span>
        </div>
        <div className="drop-choices lightdrop">
          <Link
            className="choice"
            href={`{permalink}?sort=top`}
          >
            top
          </Link>
          <Link
            className="choice"
            href={`{permalink}?sort=new`}
          >
            new
          </Link>
          <Link
            className="choice"
            href={`{permalink}?sort=controversial`}
          >
            controversial
          </Link>
          <Link
            className="choice"
            href={`{permalink}?sort=old`}
          >
            old
          </Link>
          <Link
            className="choice"
            href={`{permalink}?sort=random`}
          >
            random
          </Link>
          <Link
            className="choice"
            href={`{permalink}?sort=qa`}
          >
            q&a
          </Link>
        </div>
      </div>
      <div className="spacer" />
    </div>
    <form
      className="usertext cloneable warn-on-unload"
      id="form-t5_mza2"
    >
      <input name="thing_id" type="hidden" defaultValue="t5_m" />
      <div className="usertext-edit md-container" style={{}}>
        <div className="md">
          <textarea
            cols={1}
            data-event-action="comment"
            data-type="link"
            name="text"
            rows={1}
            defaultValue={""}
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
          <Link
            className="reddiquette"
            href="/help/contentpolicy"
            tabIndex={100}
            target="_blank"
          >
            content policy
          </Link>
          <div className="usertext-buttons">
            <button className="save" type="submit">
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
            <a href="/wiki/commenting">the commenting wiki page</a> for more
            detailed help and solutions to common issues.
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
                  <span className="spaces">        </span>print "hello, world!"<br />
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
    </form>
    <NestedListing allChildren={allChildren} />
    <div className="gold-wrap cloneable-comment">
      <h1 className="gold-banner">
        <Link href="/gold">reddit gold</Link>
      </h1>
      <div className="fancy">
        <div className="fancy-inner">
          <div className="fancy-content">
            <div className="gold-form gold-payment">
              <button className="close-button">close</button>
              <div className="container">
                <h2 className="sidelines">
                  <span>In Summation</span>
                </h2>
                <div className="transaction-summary">
                  <p>
                    Want to say thanks to <em>%(recipient)s</em> for this
                    comment? Give them a month of{" "}
                    <Link href="/gold/about">reddit gold</Link>.
                  </p>
                  <div>
                    <blockquote>
                      <p>
                        By purchasing Reddit Gold, you agree to the{" "}
                        <Link href="/help/useragreement">Reddit User Agreement.</Link>
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <ul className="indent">
                <li>
                  <input
                    defaultChecked
                    id="signed-false"
                    name="signed"
                    type="checkbox"
                  />make my gift anonymous
                </li>
                <li>
                  <input id="message" name="message" type="checkbox" />include a
                  message
                </li>
                <li>
                  <textarea
                    className="hidden giftmessage"
                    cols={50}
                    id="giftmessage"
                    maxLength={500}
                    name="giftmessage"
                    placeholder="enter your message"
                    rows={3}
                    defaultValue={""}
                  />
                </li>
              </ul>
              <div className="buttons">
                <p>Please select a payment method.</p>
                <div className="note">
                  <p>
                    Give gold often? Consider{" "}
                    <Link href="/creddits">buying creddits to use</Link>, they're 40%
                    cheaper if purchased in a set of 12.
                  </p>
                  <p>
                    Would you like to{" "}
                    <Link href="/gilding">learn more about giving gold</Link>?
                  </p>
                </div>
              </div>
              <div className="throbber" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="gold-wrap cloneable-link">
      <h1 className="gold-banner">
        <Link href="/gold">reddit gold</Link>
      </h1>
      <div className="fancy">
        <div className="fancy-inner">
          <div className="fancy-content">
            <div className="gold-form gold-payment">
              <button className="close-button">close</button>
              <div className="container">
                <h2 className="sidelines">
                  <span>In Summation</span>
                </h2>
                <div className="transaction-summary">
                  <p>
                    Want to say thanks to <em>%(recipient)s</em> for this
                    submission? Give them a month of{" "}
                    <Link href="/gold/about">reddit gold</Link>.
                  </p>
                  <div>
                    <blockquote>
                      <p>
                        By purchasing Reddit Gold, you agree to the{" "}
                        <Link href="/help/useragreement">Reddit User Agreement.</Link>
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <ul className="indent">
                <li>
                  <input
                    defaultChecked
                    id="signed-false"
                    name="signed"
                    type="checkbox"
                  />make my gift anonymous
                </li>
                <li>
                  <input id="message" name="message" type="checkbox" />include a
                  message
                </li>
                <li>
                  <textarea
                    className="hidden giftmessage"
                    cols={50}
                    id="giftmessage"
                    maxLength={500}
                    name="giftmessage"
                    placeholder="enter your message"
                    rows={3}
                    defaultValue={""}
                  />
                </li>
              </ul>
              <div className="buttons">
                <p>Please select a payment method.</p>
                <div className="note">
                  <p>
                    Give gold often? Consider{" "}
                    <Link href="/creddits">buying creddits to use</Link>, they're 40%
                    cheaper if purchased in a set of 12.
                  </p>
                  <p>
                    Would you like to{" "}
                    <Link href="/gilding">learn more about giving gold</Link>?
                  </p>
                </div>
              </div>
              <div className="throbber" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CommentArea;

