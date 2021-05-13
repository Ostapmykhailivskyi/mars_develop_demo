import React, {createContext, useReducer} from "react";
import {node} from "prop-types";

const rovers = [
  {
    name: "Curiosity",
    cameras: ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"]
  }, {
    name: "Opportunity",
    cameras: ["ENTRY", "FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"]
  },
  {
    name: "Spirit",
    cameras: ["ENTRY", "FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"]
  }
];

const initState = {
  rovers,
  availableSols: [],
  availableCameras: [],
  selectedSol: "",
  selectedRover: "",
  selectedCamera: "",
  solData: []
};

const MarsContext = createContext();

function marsReducer(state, action) {
  switch (action.type) {
    case "selectRover": {
      const camerasOnRover = rovers.find(rover => rover.name === action.payload.name).cameras;
      let selectedCamera = state.selectedCamera;

      if (state.selectedCamera && !camerasOnRover.includes(state.selectedCamera)) {
        selectedCamera = "";
      }

      return {
        ...state,
        selectedRover: action.payload.name,
        selectedCamera,
        availableCameras: camerasOnRover,
        availableSols: [],
        selectedSol: "",
        photosData: action.payload.photosData
      };
    }
    case "selectCamera": {
      return {...state, selectedCamera: action.payload.camera, availableSols: action.payload.sols};
    }
    case "selectSol": {
      return {...state, selectedSol: action.payload.sol, solData: action.payload.solData};
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function useRoverContext() {
  const context = React.useContext(MarsContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}
MarsProvider.propTypes = {
  children: node
};
function MarsProvider({children}) {
  const [state, dispatch] = useReducer(marsReducer, initState);

  const value = {state, dispatch};
  return <MarsContext.Provider value={value}>{children}</MarsContext.Provider>;
}
export {MarsProvider, useRoverContext};