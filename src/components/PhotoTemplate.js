import React from "react";

const Photo = ({src, alt}) => {
  return(
    <div className={"PhotoWrapper"}>
      <img src={src} alt={alt} width={'100%'}/>
    </div>
  )
}

export default Photo;