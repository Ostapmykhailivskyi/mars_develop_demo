import React from "react";
import PhotoTemplate from "./PhotoTemplate";
import {any} from "prop-types";

const Photos = ({photos}) => {
  if (!photos.length) {
    return (
      <div className={"emptyListTitle"}>
        <h1>
          Select Rover, Camera and Sol to browse photo from MARS
        </h1>
      </div>
    );
  }

  return(
    <div className={"PhotosList"}>
      {photos.map((obj) =>
        <PhotoTemplate
          key={obj.id}
          alt={obj.id}
          src={obj.img_src}
        />
      )}
    </div>
  );
};

Photos.propTypes = {
  photos: any
};

export default Photos;