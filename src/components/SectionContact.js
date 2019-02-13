import React from "react";

const SectionContact = () => {
  return (
    <section className="mdn-contact">
      <h2>Get in touch</h2>
      <p>
        If you have any questions about anything, you can contact us in one of
        the following ways:
      </p>
      <ul>
        <li>
          Ask direct questions to the MDN admins at{" "}
          <a href="mailto:mdn-admins@mozilla.org">mdn-admins@mozilla.org</a>
        </li>
        <li>
          For discussion points and more open ended questions, post on{" "}
          <a href="https://discourse.mozilla.org/c/mdn">our discourse forum</a>.
        </li>
        <li>
          If you have issues related to a specific repo, file issues against
          that repo.
        </li>
      </ul>
    </section>
  );
};

export default SectionContact;
