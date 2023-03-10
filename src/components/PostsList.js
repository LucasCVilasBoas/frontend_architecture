import React from "react";
import { Post } from "./Post";

export function PostsList() {
  const posts = [
    {
      title: "[1] Mussum Ipsum, cacilds vidis litro abertis",
      description:
        "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo"
    },
    {
      title: "[2] Mussum Ipsum, cacilds vidis litro abertis",
      description:
        "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo"
    },
    {
      title: "[3] Mussum Ipsum, cacilds vidis litro abertis",
      description:
        "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo"
    }
  ];

  return (
    <section>
      {posts.map((post) => (
        <Post postTitle={post.title} description={post.description} />
      ))}
    </section>
  );
}
