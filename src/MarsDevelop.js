import React, {useEffect, useState} from "react";
import "./App.css";
import {useRoverContext} from "./components/roversContext";
import MarsDevelopView from "./MarsDevelopView";

function MarsDevelop() {
  const {state} = useRoverContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);

  useEffect(() => {
    const indexOfLastPost = currentPage * 25;
    const indexOfFirstPost = indexOfLastPost - 25;
    const posts = state.solData.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPosts(posts);
  }, [currentPage]);

  useEffect(() => {
    if (!state.solData.length) return;
    const posts = state.solData.slice(0, 25);
    setTotalPages(Math.ceil(state.solData.length / 25));
    setCurrentPosts(posts);
  }, [state.selectedSol]);

  const switchPage = (count) => {
    setCurrentPage(currentPage + count);
  };

  return (
    <MarsDevelopView
      currentPosts={currentPosts}
      currentPage={currentPage}
      totalPages={totalPages}
      switchPage={switchPage}
    />
  );
}

export default MarsDevelop;
