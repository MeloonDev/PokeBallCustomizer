import { Canvas } from "@react-three/fiber";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Overlay from "./Overlay";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
      <App />
    </Canvas>
    <Overlay />
  </>
);
