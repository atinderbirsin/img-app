import React from "react";
import "./ImageList.css";
import ImgCard from "./ImgCard";

const ImageList = (props) => {
  const imgs = props.images;

  const images = imgs.map((img) => {
    return <ImgCard key={img.id} image={img} />;
  });

  return <div className="imgContainer">{images}</div>;
};

export default ImageList;
