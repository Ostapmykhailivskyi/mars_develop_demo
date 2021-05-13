import React, {useEffect, useState} from "react";
import './App.css';
import {useCount} from "./components/context";
import Rovers from "./components/RoversMenu";
import Cameras from "./components/CamerasMenu";
import Sols from "./components/SolsMenu";
import Photos from "./components/Photos";
import Pagination from "./components/Pagination";

function App() {
  const {state} = useCount()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [currentPosts, setCurrentPosts] = useState([])

  useEffect(() => {
    const indexOfLastPost = currentPage * 25
    const indexOfFirstPost = indexOfLastPost - 25
    const posts = state.solData.slice(indexOfFirstPost, indexOfLastPost)
    setCurrentPosts(posts)
  }, [currentPage])

  useEffect(() => {
    if (!state.solData.length) return;
    const posts = state.solData.slice(0, 25)
    setTotalPages(Math.ceil(state.solData.length / 25))
    setCurrentPosts(posts)
  }, [state.selectedSol])

  const switchPage = (count) => {
    setCurrentPage(currentPage + count)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mars mission</h1>
      </header>
      <div className="Dropdowns">
          <Rovers/>
          <Cameras/>
          <Sols/>
        </div>
      <Photos
        photos={currentPosts}
      />
      <footer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          switchPage={switchPage}
        />
      </footer>
    </div>
  );
}

export default App;
