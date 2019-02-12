import React from "react";

const ContentList = props => {
  return (
    <ul>
      {props.list.map((listItem, index) => {
        return <li key={index}>{listItem}</li>;
      })}
    </ul>
  );
};

export default ContentList;
