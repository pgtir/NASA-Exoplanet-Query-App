import { FixedSizeList as List } from "react-window";

const CustomMenuList = (props) => {
  const itemHeight = 45;
  const { options, children, maxHeight, getValue } = props;
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * itemHeight;
  
  return (
          <List
            height={maxHeight}
            itemCount={children.length}
            itemSize={itemHeight}
            initialScrollOffset={initialOffset}
          >
            {({ index, style }) => <div style={style}>{children[index]}</div>}
          </List>
  );
};

export default CustomMenuList;