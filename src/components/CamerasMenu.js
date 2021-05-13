import React from "react";
import DropDown from "./DropdownTemplate";
import {useCount} from "./context";

const Cameras = () => {
  const {dispatch, state} = useCount()

  const handleCameraSelect = (camera) => {
    let sols = []
    state.photosData.forEach(obj => {
      if (obj.cameras.includes(camera)) sols.push(obj)
    })
    dispatch({type: 'selectCamera', payload: {camera, sols}})
  }

  return (
    <DropDown
      dependency={'rover'}
      placeholder={'Camera'}
      items={state.availableCameras}
      handleSelect={handleCameraSelect}
    />
  )
}

export default Cameras;