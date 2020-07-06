import React from "react";

export default function footerArticle({title, text, url}) {
  return (
    <>
      <div className="media">
        <a href="/" className="pull-left">
          <img
            src={url}
            alt=""
            className="media-object"
            style={ { width: '64px', height: '64px', borderRadius: "3px"}}
          />
        </a>
        <div className="media-body">
            <h4 className="media-heading">{title.substr(0,20) + "..."}</h4>
            <p>{text.substr(0,60) + "..."}</p>
        </div>
      </div>
    </>
  );
}
