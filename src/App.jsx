import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
} from "@react-three/drei";
import { Suspense } from "react";
import ClickCounter from "./ClickCounter";
import { PokeBall } from "./PokeBall";

function App() {
  return (
    <Suspense>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={[512, 512]}
        shadow-normalBias={0.04}
        castShadow
      />
      <PresentationControls
        global
        config={{ mass: 2, tension: 1000 }}
        snap={{ mass: 4, tension: 500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 2, Math.PI / 3]}
      >
        <Float speed={3} rotationIntensity={1} floatIntensity={1}>
          <PokeBall rotation={[-0.1, 0, 0.1]} scale={0.8} />
          <Html scale={0.3} position={[1.1, 0.95, 0.7]} transform occlude>
            <ClickCounter />
          </Html>
        </Float>
      </PresentationControls>
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.9}
        scale={10}
        blur={2}
        far={4.5}
      />
    </Suspense>
  );
}

export default App;
