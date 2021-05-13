import React from "react";
import DropDown from "./DropdownTemplate";
import {useRoverContext} from "../roversContext";

const Cameras = () => {
  const {dispatch, state} = useRoverContext();

  const handleCameraSelect = (camera) => {
    let sols = [];
    state.photosData.forEach(obj => {
      if (obj.cameras.includes(camera)) sols.push(obj);
    });
    dispatch({type: "selectCamera", payload: {camera, sols}});
  };

  return (
    <DropDown
      dependency={"rover"}
      placeholder={"Camera"}
      items={state.availableCameras}
      handleSelect={handleCameraSelect}
    />
  );
};

export default Cameras;