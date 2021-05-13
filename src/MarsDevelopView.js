import React from "react";
import Rovers from "./components/Menu/RoversMenu";
import Cameras from "./components/Menu/CamerasMenu";
import Sols from "./components/Menu/SolsMenu";
import Photos from "./components/PhotoDisplayArea/Photos";
import Pagination from "./components/PhotoDisplayArea/Pagination";
import {number, array} from "prop-types";

const MarsDevelopView = ({currentPosts, currentPage, switchPage, totalPages}) => {
  return(
    <div className="App">
      <div className="App-header">
        <h1>Mars mission</h1>
      </div>
      <div className="Dropdowns">
        <Rovers/>
        <Cameras/>
        <Sols/>
      </div>
      <Photos
        photos={currentPosts}
      />
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          switchPage={switchPage}
        />
      </div>
    </div>
  );
};

MarsDevelopView.propTypes = {
  currentPosts: array,
  currentPage: number,
  switchPage: () => {},
  totalPages: number
};

export default MarsDevelopView;