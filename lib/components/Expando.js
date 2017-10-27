import React from "react";
import MarkdownDefault from "./Markdown";
import { optional } from "../util";

const Expando = ({
  Markdown = MarkdownDefault,
  expanded,
  is_self,
  selftext: body,
  selftext_html: html
}) => (
  <div className="expando">
    {expanded ? (
      is_self ? optional(Markdown, { body, html }) : null
    ) : null}
  </div>
);

export default Expando;
