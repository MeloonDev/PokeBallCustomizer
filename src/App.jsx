import { Environment, PresentationControls } from "@react-three/drei";
import { Suspense } from "react";
import { PokeBall } from "./PokeBall";

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
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <PokeBall rotation={[-0.1, 0, 0.1]} />
      </PresentationControls>
    </Suspense>
  );
}

export default App;
