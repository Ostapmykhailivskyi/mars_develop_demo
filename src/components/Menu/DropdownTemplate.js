import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {func, string, any} from "prop-types";

const DropDown = (props) => {
  const handleChange = (e) => {
    props.handleSelect(e.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">{props.placeholder}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={handleChange}
        className="customDropdown"
      >
        {props.items.length === 0 ? <MenuItem disabled={true}>Please select {props.dependency} before</MenuItem> : null}
        {props.items.map((item) => <MenuItem value={item} key={item}>{item}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

DropDown.propTypes = {
  handleSelect: func,
  placeholder: string,
  items: any,
  dependency: string
};

export default DropDown;