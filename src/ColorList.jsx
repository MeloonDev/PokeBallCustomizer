import { BsCircleFill } from "react-icons/bs";

const ColorList = ({ id, isActive, onClick, color }) => {
  return (
    <li
      onClick={() => onClick(id)}
      className={isActive ? "active" : ""}
      style={{ color }}
    >
      <BsCircleFill />
    </li>
  );
};
export default ColorList;
