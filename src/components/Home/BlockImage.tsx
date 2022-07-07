import React from "react";

interface Props {
  imgId: number;
  size?: "lg";
}

const BlockImage: React.FC<Props> = ({ imgId, size }) => {
  const height = size ? "1200" : "360";
  return (
    <img src={`https://picsum.photos/id/${imgId}/600/${height}`} width="100%" />
  );
};

export default BlockImage;
