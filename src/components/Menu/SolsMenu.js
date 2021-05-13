import React from "react";
import PropTypes, { number} from "prop-types";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ListSubheader from "@material-ui/core/ListSubheader";
import { useTheme } from "@material-ui/core/styles";
import { VariableSizeList } from "react-window";
import {makeStyles} from "@material-ui/core";
import SolMenuView from "./SolMenuView";
import {useRoverContext} from "../roversContext";
import {getDataFromNasa} from "../helpers";

const LISTBOX_PADDING = 0; // px

const renderRow = (props) => {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: style.top + LISTBOX_PADDING,
    },
  });
};

renderRow.propTypes = {
  data: {},
  index: number,
  style: {}
};

const SolMenu = () => {
  const {state, dispatch} = useRoverContext();


  const OuterElementContext = React.createContext({});

  const OuterElementType = React.forwardRef(function OuterElementType (props, ref){
    const outerProps = React.useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
  });

  const useResetCache = (data) => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (ref.current != null) {
        ref.current.resetAfterIndex(0, true);
      }
    }, [data]);
    return ref;
  };

  // Adapter for react-window
  const ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData = React.Children.toArray(children);
    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up("sm"), { noSsr: true });
    const itemCount = itemData.length;
    const itemSize = smUp ? 36 : 48;

    const getChildSize = (child) => {
      if (React.isValidElement(child) && child.type === ListSubheader) {
        return 48;
      }

      return itemSize;
    };

    const getHeight = () => {
      if (itemCount > 8) {
        return 8 * itemSize;
      }
      return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    const gridRef = useResetCache(itemCount);

    return (
      <div ref={ref}>
        <OuterElementContext.Provider value={other}>
          <VariableSizeList
            itemData={itemData}
            height={getHeight() + 2 * LISTBOX_PADDING}
            width="100%"
            ref={gridRef}
            outerElementType={OuterElementType}
            innerElementType="ul"
            itemSize={(index) => getChildSize(itemData[index])}
            overscanCount={5}
            itemCount={itemCount}
          >
            {renderRow}
          </VariableSizeList>
        </OuterElementContext.Provider>
      </div>
    );
  });

  ListboxComponent.propTypes = {
    children: PropTypes.node,
  };

  const renderGroup = (params) => [
    <ListSubheader key={params.key} component="div">
      {params.group}
    </ListSubheader>,
    params.children,
  ];

  const useStyles = makeStyles({
    listbox: {
      boxSizing: "border-box",
      "& ul": {
        padding: 0,
        margin: 0,
      },
    },
  });

  const handleSelect = async (e) => {
    const res = await getDataFromNasa(
      `rovers/${state.selectedRover}/photos?sol=${e.target.textContent}&camera=${state.selectedCamera}&`
    );
    dispatch({type: "selectSol", payload: {sol: e.target.textContent, solData: res.photos}});
  };

  return(
    <SolMenuView
      handleSelect={handleSelect}
      useStyles={useStyles}
      ListboxComponent={ListboxComponent}
      renderGroup={renderGroup}
    />
  );
};
export default SolMenu;