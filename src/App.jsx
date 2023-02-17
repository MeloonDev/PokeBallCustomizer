import { Environment, PresentationControls } from "@react-three/drei";
import { Suspense } from "react";

function App() {
  return (
    <Suspense>
      <color attach="background" args={["#2d4967"]} />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={[512, 512]}
        castShadow
      />
    </Suspense>
  );
}

export default App;
