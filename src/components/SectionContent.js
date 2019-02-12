import React from "react";

const SectionContent = () => {
  return (
    <section>
      <h2>Content</h2>
      <p>Professional web technology references and guides:</p>
      <ul>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            JavaScript
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API">WebAPI</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP">HTTP</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Learn">
            Learn Web Development
          </a>{" "}
          — structured learning material for beginners
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions">
            WebExtension
          </a>{" "}
          references and tutorials
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Tools">
            Firefox Developer tools
          </a>{" "}
          guides
        </li>
      </ul>
    </section>
  );
};

export default SectionContent;
