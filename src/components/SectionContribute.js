import React from "react";

const SectionContribute = () => {
  return (
    <section>
      <h2>Contribute!</h2>
      <p>
        Our source code is freely available to contribute to, and we’d love you
        to help us improve our platform, data, and content!
      </p>
      <p>
        For our data and platform code, you can find instructions on the
        relevant repos. Feel free to get up and running, and submit pull
        requests.
      </p>
      <p>
        You can edit any of our content pages by logging in and then pressing
        the edit button. MDN Web Docs uses GitHub login.If you’ve got a GitHub
        account, you can get an MDN account by{" "}
        <a href="https://developer.mozilla.org/en-US/docs/MDN/Contribute/Howto/Create_an_MDN_account">
          following these instructions
        </a>
        .
      </p>
      <p>
        You can find information on how to contribute to MDN content in our
        getting started guide.{" "}
        <a
          className="button"
          href="https://developer.mozilla.org/en-US/docs/MDN/Getting_started"
        >
          Start Contributing!
        </a>
      </p>
    </section>
  );
};

export default SectionContribute;
