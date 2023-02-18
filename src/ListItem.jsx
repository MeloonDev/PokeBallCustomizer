const ListItem = ({ id, isActive, icon, onClick }) => {
  return (
    <li onClick={() => onClick(id)} className={isActive ? "active" : ""}>
      {icon}
    </li>
  );
};
export default ListItem;
