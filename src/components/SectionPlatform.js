import React from "react";

const SectionPlatform = () => {
  return (
    <section>
      <h2>Platform</h2>
      <p>
        The platform that powers MDN Web Docs is called Kuma, based on Django,
        and is stored in the{" "}
        <a href="https://github.com/mozilla/kuma">github.com/mozilla/kuma</a>{" "}
        repo.
      </p>
      <p>
        Kuma has a macro system based on Node.js called KumaScript, which is
        used to implement sidebars and other common features on MDN Web Docs
        pages.
      </p>
      <p>
        You can find documentation on how Kuma and KumaScript work, and how to
        test them locally, at{" "}
        <a href="https://kuma.readthedocs.io/en/stable/">
          https://kuma.readthedocs.io/en/stable/
        </a>
      </p>
    </section>
  );
};

export default SectionPlatform;
