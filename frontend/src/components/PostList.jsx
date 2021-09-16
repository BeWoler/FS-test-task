import React from "react";

const PostList = ({ content }) => {
  return (
    <ul>
      {content.map((contents) => {
        return (
          <li key={contents._id}>
            <p>{contents.breedId}</p>
            <img src={contents.img} alt={contents._id} />
            <p>{contents.title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
