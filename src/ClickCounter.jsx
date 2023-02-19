import { useStore } from "./useStore";

const ClickCounter = () => {
  //click counter
  const clicks = useStore((state) => state.clicks);
  //toggle visibility
  const clickerVisible = useStore((state) => state.clickerVisible);
  return (
    <div className="click-counter" style={{ opacity: clickerVisible ? 1 : 0 }}>
      <div>CLICK 👆</div>
      <div>{clicks}</div>
    </div>
  );
};
export default ClickCounter;
