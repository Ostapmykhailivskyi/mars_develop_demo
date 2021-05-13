import React from 'react'
import {Button} from "@material-ui/core";

const Pagination = ({switchPage, currentPage, totalPages}) => {
  // console.log('currentPage', currentPage)
  // console.log('totalPages', totalPages)
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
  )
}

export default Pagination;