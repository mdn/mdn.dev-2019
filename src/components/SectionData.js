import React from "react";

const SectionData = () => {
  return (
    <section>
      <h2>Data</h2>
      <p>
        We have a number of repos available at the{" "}
        <a href="https://github.com/mdn">github.com/mdn</a> org. Many of these
        repos contain examples associated with various parts of the MDN
        documentation, but we also have some key repos that store structured
        data related to our various functions. These are listed below.
      </p>
      <ul>
        <li>
          <a href="https://github.com/mdn/data">data</a> — this repo contains
          data related to web technology syntax, mainly CSS. It is used to
          generate formal syntax and information boxes on CSS reference pages,
          and is also used by other projects such as VSCode to generate
          in-editor help information.
        </li>
        <li>
          <a href="https://github.com/mdn/browser-compat-data">
            browser-compat-data
          </a>{" "}
          — this contains extensive browser compatibility data for all web
          technology features. This is used to generate the Browser
          compatibility tables seen on MDN Web Docs references pages, but is
          also used to generate contextual compat information in projects such
          as VScode and <a href="https://webhint.io">webhint.io</a>
        </li>
        <li>
          <a href="https://github.com/mdn/interactive-examples">
            interactive-examples
          </a>{" "}
          — this contains HTML, CSS, and JavaScript code examples, which along
          with the <a href="https://github.com/mdn/bob">BoB renderer</a> are
          used to generate the interactive examples seen at the top of HTML,
          CSS, and JavaScript reference pages. So for example:
          <ul>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input">
                HTML Input Element
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform">
                CSS transform property
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice">
                the Array.splice() function
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default SectionData;
