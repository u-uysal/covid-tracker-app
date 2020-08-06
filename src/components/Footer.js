import React from "react";

export default function Footer() {
  return (
    <div id="contact" className="my-5 d-flex justify-content-center flex-wrap">
      <a
        href="mailto:ufuk.uysl5@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li>
          <i className="fa fa-envelope"></i>Gmail
        </li>
      </a>
      <a
        href="https://www.linkedin.com/in/ufuk-uysal-7044111a6/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin-square"></i> LinkedIn
      </a>
      <a
        href="https://github.com/u-uysal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-github"></i> Github
      </a>
      <a
        href="https://www.freecodecamp.org/ufuk_uysal"
        target="_blank"
        rel="noopener noreferrer"
      >
        (<i className="fa fa-fire"></i>) FreeCodeCamp
      </a>
      <a
        href="https://www.youtube.com/channel/UCm1tKKCDpcynlZYu-wVO36w"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-youtube"></i> Youtube
      </a>
      <a
        href="https://twitter.com/Ufuk_Uysl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-twitter"></i> Twitter
      </a>
    </div>
  );
}
