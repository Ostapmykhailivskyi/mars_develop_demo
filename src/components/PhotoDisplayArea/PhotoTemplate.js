import React from "react";
import {string} from "prop-types";

const Photo = ({src, alt}) => {
  return(
    <div className={"PhotoWrapper"}>
      <img src={src} alt={alt} width={"100%"}/>
    </div>
  );
};

Photo.propTypes = {
  src: string,
  alt: string
};

export default Photo;