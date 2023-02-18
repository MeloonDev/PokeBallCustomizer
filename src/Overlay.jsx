import { useEffect, useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { BsMoon, BsSun } from "react-icons/bs";
import TopIcon from "./icons/TopIcon";
import InsideIcon from "./icons/InsideIcon";
import BottomIcon from "./icons/BottomIcon";
import EmissionIcon from "./icons/EmissionIcon";
import ListItem from "./ListItem";
import ColorList from "./ColorList";
import { useColorsStore } from "./useColorsStore";

const Overlay = () => {
  //night/day mode state
  const [dayMode, setDayMode] = useState(false);

  useEffect(() => {
    if (dayMode) {
      document.body.style.background = "#f2f2f2";
    } else {
      document.body.style.background = "#262626";
    }
  }, [dayMode]);

  //active element state
  const [active, setActive] = useState(null);
  const { activeColorTop, setActiveColorTop } = useColorsStore();
  const { activeColorInside, setActiveColorInside } = useColorsStore();
  const { activeColorBottom, setActiveColorBottom } = useColorsStore();
  const { activeColorEmission, setActiveColorEmission } = useColorsStore();

  //elements data
  const [menuData] = useState([
    { id: 1, icon: <TopIcon />, clicked: false },
    { id: 2, icon: <InsideIcon />, clicked: false },
    { id: 3, icon: <BottomIcon />, clicked: false },
    { id: 4, icon: <EmissionIcon />, clicked: false },
  ]);

  const [topColorData] = useState([
    { id: 1, color: "#ee1515" },
    { id: 2, color: "#3b82c4" },
    { id: 3, color: "#fdd23c" },
    { id: 4, color: "#7e308e" },
  ]);

  const [insideColorData] = useState([
    { id: 1, color: "#000" },
    { id: 2, color: "#fff" },
  ]);

  const [bottomColorData] = useState([
    { id: 1, color: "#f0f0f0" },
    { id: 2, color: "#0f0f0f" },
    { id: 3, color: "#926F34" },
    { id: 4, color: "#828282" },
  ]);

  const [emissionColorData] = useState([
    { id: 1, color: "#abe393" },
    { id: 2, color: "#fce694" },
    { id: 3, color: "#9ee4dd" },
    { id: 4, color: "#dfe3e1" },
  ]);

  //navigate trough the elements
  const navigate = (id) => {
    1;
    setActive(id);
  };
  const navigateActiveColorTop = (id) => {
    setActiveColorTop(id);
  };
  const navigateActiveColorInside = (id) => {
    setActiveColorInside(id);
  };
  const navigateActiveColorBottom = (id) => {
    setActiveColorBottom(id);
  };
  const navigateActiveColorEmission = (id) => {
    setActiveColorEmission(id);
  };

  //close color menu
  const closeColorMenu = () => {
    setActive(null);
  };

  return (
    <>
      <div className="title" style={{ color: dayMode ? "#262626" : "#f2f2f2" }}>
        <h1>PokeBall</h1>
        <h2>Customizer</h2>
      </div>
      <button
        onClick={() => {
          setDayMode(!dayMode);
        }}
        className={dayMode ? "day mode-btn" : "night mode-btn"}
        style={{ color: dayMode ? "#262626" : "#f2f2f2" }}
      >
        {dayMode ? <BsMoon /> : <BsSun />}
      </button>
      <div className="menu-container">
        <div className={active === 1 ? "show color-menu" : "color-menu"}>
          <ul>
            {topColorData.map((item) => (
              <ColorList
                {...item}
                key={item.id}
                isActive={activeColorTop === item.id}
                onClick={navigateActiveColorTop}
              />
            ))}
            <li className="close" onClick={closeColorMenu}>
              <RiCloseCircleFill />
            </li>
          </ul>
        </div>
        <div className={active === 2 ? "show color-menu" : "color-menu"}>
          <ul>
            {insideColorData.map((item) => (
              <ColorList
                {...item}
                key={item.id}
                isActive={activeColorInside === item.id}
                onClick={navigateActiveColorInside}
              />
            ))}
            <li className="close" onClick={closeColorMenu}>
              <RiCloseCircleFill />
            </li>
          </ul>
        </div>
        <div className={active === 3 ? "show color-menu" : "color-menu"}>
          <ul>
            {bottomColorData.map((item) => (
              <ColorList
                {...item}
                key={item.id}
                isActive={activeColorBottom === item.id}
                onClick={navigateActiveColorBottom}
              />
            ))}
            <li className="close" onClick={closeColorMenu}>
              <RiCloseCircleFill />
            </li>
          </ul>
        </div>
        <div className={active === 4 ? "show color-menu" : "color-menu"}>
          <ul>
            {emissionColorData.map((item) => (
              <ColorList
                {...item}
                key={item.id}
                isActive={activeColorEmission === item.id}
                onClick={navigateActiveColorEmission}
              />
            ))}
            <li className="close" onClick={closeColorMenu}>
              <RiCloseCircleFill />
            </li>
          </ul>
        </div>
        <div className={dayMode ? "day menu" : "menu"}>
          <ul>
            {menuData.map((item) => (
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
    </>
  );
};
export default Overlay;
