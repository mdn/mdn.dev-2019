import React from "react";

import IconTwitter from "./IconTwitter";
import IconGithub from "./IconGithub";

const FooterWebDocs = () => {
  return (
    <div className="footer-group">
      <h2 className="footer-title">MDN Web Docs</h2>
      <ul className="footer-list">
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web">
            Web Technologies
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Learn">
            Learn Web Development
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/docs/MDN/About">
            About MDN Web Docs
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/MDN/Feedback">
            Feedback
          </a>
        </li>
        <li className="footer-social">
          <a href="https://twitter.com/mozdevnet">
            <IconTwitter />
          </a>
        </li>
        <li className="footer-social">
          <a href="https://github.com/mdn/">
            <IconGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterWebDocs;
