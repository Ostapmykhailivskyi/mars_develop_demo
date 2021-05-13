import React from "react";
import {Button} from "@material-ui/core";
import {func, number} from "prop-types";

const Pagination = ({switchPage, currentPage, totalPages}) => {
  return(
    <div className={"pageTurnButtons"}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => switchPage(-1)}
        disabled={currentPage === 1}
      >
        Back to previous page
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => switchPage(1)}
        disabled={currentPage === totalPages}
      >
        Load more
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  switchPage: func,
  currentPage: number,
  totalPages: number,
};

export default Pagination;