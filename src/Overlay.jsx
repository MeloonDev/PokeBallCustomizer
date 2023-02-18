import { useState } from "react";
import TopIcon from "./icons/TopIcon";
import InsideIcon from "./icons/InsideIcon";
import BottomIcon from "./icons/BottomIcon";
import EmissionIcon from "./icons/EmissionIcon";
import ListItem from "./ListItem";

const Overlay = () => {
  const [active, setActive] = useState(null);

  const [data] = useState([
    { id: 1, icon: <TopIcon />, clicked: false },
    { id: 2, icon: <InsideIcon />, clicked: false },
    { id: 3, icon: <BottomIcon />, clicked: false },
    { id: 4, icon: <EmissionIcon />, clicked: false },
  ]);

  const navigate = (id) => {
    setActive(id);
  };

  return (
    <div className="menu-container">
      <div className="menu">
        <ul>
          {data.map((item) => (
            <ListItem
              {...item}
              key={item.id}
              isActive={active === item.id}
              onClick={navigate}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Overlay;
