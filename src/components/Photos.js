import React from 'react'
import {useCount} from "./context";
import PhotoTemplate from "./PhotoTemplate";

const Photos = ({photos}) => {
  if (!photos.length) {
    return (
      <div className={"emptyListTitle"}>
        <h1>
          Select Rover, Camera and Sol to browse photo from MARS
        </h1>
      </div>
    )
  }

  return(
    <div className={"PhotosList"}>
      {photos.map((obj) =>
        <PhotoTemplate
          key={obj.id}
          alt={obj.id}
          src={obj.img_src}
        />
        // <h4>
        //   {obj.id}
        // </h4>
      )}
    </div>
  )
}

export default Photos;