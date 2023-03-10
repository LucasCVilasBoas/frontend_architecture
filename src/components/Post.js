import React from "react";

export function Post({ postTitle, description }) {
  return (
    <article>
      <h2>{postTitle}</h2>
      <p>{description}</p>
    </article>
  );
}
