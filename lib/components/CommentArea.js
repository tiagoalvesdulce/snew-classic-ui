import React from "react";
import LinkComponent from "./Link";
import CommentAreaTitleComponent from "./CommentAreaTitle";
import NestedListingComponent from "./NestedListing";

const CommentArea = ({
  Link = LinkComponent,
  NestedListing = NestedListingComponent,
  CommentAreaTitle = CommentAreaTitleComponent,
  name,
  replyTo,
  num_comments,
  commentsTitle,
  permalink,
  allChildren
}) => (
  <div className="commentarea">
    <CommentAreaTitle {...{ num_comments, commentsTitle }} />
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
    <NestedListing className="nestedlisting" {...{ name, replyTo, allChildren, showReplyForm: true }} />
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

