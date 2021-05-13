import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {useRoverContext} from "../roversContext";
import {Typography} from "@material-ui/core";
import {any} from "prop-types";

const SolMenuView = ({useStyles, handleSelect, renderGroup, ListboxComponent}) => {
  const classes = useStyles();
  const {state} = useRoverContext();

  return (
    <Autocomplete
      value={state.selectedSol}
      onChange={handleSelect}
      id="virtualize-demo"
      classes={classes}
      style={{ width: 100 }}
      disableListWrap
      ListboxComponent={ListboxComponent}
      renderGroup={renderGroup}
      options={state.availableSols.map((obj) => obj.sol.toString())}
      renderInput={(params) => <TextField label="Sol" {...params}/>}
      renderOption={(option) => <Typography noWrap>{option}</Typography>}
    />
  );
};
SolMenuView.propTypes = {
  useStyles: any,
  handleSelect: () => {},
  renderGroup: () => {},
  ListboxComponent: any
};
export default SolMenuView;