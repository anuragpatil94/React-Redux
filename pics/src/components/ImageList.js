import React from "react";

const ImageList = props => {
  const images = props.images.map(({ alt_description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={alt_description} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
