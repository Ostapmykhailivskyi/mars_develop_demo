import React from "react";
import DropDown from "./DropdownTemplate";
import {useRoverContext} from "../roversContext";
import {getDataFromNasa} from "../helpers";

const Rovers = () => {
  const {dispatch, state} = useRoverContext();

  const handleRoverSelect = (name) => {
    getDataFromNasa(`manifests/${name}?`).then((data) => {
      dispatch({type: "selectRover", payload: {name, photosData: data.photo_manifest.photos}});
    });
  };

  return (
    <DropDown
      placeholder={"Rover"}
      items={state.rovers.map(rover => rover.name)}
      handleSelect={handleRoverSelect}
    />
  );
};

export default Rovers;