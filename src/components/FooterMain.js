import React from "react";

const FooterMain = () => {
  return (
    <div className="footer-group">
      <a className="nav-footer-logo" href="./">
        MDN Web Docs
      </a>
      <ul className="legal">
        <li>
          <a href="https://www.mozilla.org/about/legal/terms/mozilla">Terms</a>
        </li>
        <li>
          <a href="https://www.mozilla.org/privacy/websites/">Privacy</a>
        </li>
        <li>
          <a href="https://www.mozilla.org/privacy/websites/#cookies">
            Cookies
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterMain;
