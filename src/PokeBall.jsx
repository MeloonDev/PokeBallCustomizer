import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useColorsStore } from "./useColorsStore";

export function PokeBall(props) {
  //manipulate top colors
  const [topColors, setTopColors] = useState({ r: 0.855, g: 0.007, b: 0.007 });

  const topColor = useColorsStore((state) => state.activeColorTop);

  useEffect(() => {
    if (topColor === 1) {
      setTopColors({ r: 0.855, g: 0.007, b: 0.007 });
    } else if (topColor === 2) {
      setTopColors({ r: 0.044, g: 0.15, b: 0.6 });
    } else if (topColor === 3) {
      setTopColors({ r: 1, g: 0.4, b: 0 });
    } else {
      setTopColors({ r: 0.209, g: 0.03, b: 0.27 });
    }
  }, [topColor]);

  //manipulate inside colors
  const [insideColors, setInsideColors] = useState({ r: 0, g: 0, b: 0 });

  const insideColor = useColorsStore((state) => state.activeColorInside);

  useEffect(() => {
    if (insideColor === 1) {
      setInsideColors({ r: 0, g: 0, b: 0 });
    } else {
      setInsideColors({ r: 1, g: 1, b: 1 });
    }
  }, [insideColor]);

  //manipulate bottom colors
  const [bottomColors, setBottomColors] = useState({
    r: 0.871,
    g: 0.871,
    b: 0.871,
  });

  const bottomColor = useColorsStore((state) => state.activeColorBottom);

  useEffect(() => {
    if (bottomColor === 1) {
      setBottomColors({
        r: 0.871,
        g: 0.871,
        b: 0.871,
        metalness: 0,
        roughness: 0.2,
      });
    } else if (bottomColor === 2) {
      setBottomColors({
        r: 0.005,
        g: 0.005,
        b: 0.005,
        metalness: 0,
        roughness: 0.6,
      });
    } else if (bottomColor === 3) {
      setBottomColors({
        r: 0.287,
        g: 0.159,
        b: 0.034,
        metalness: 0.9,
        roughness: 0.1,
      });
    } else {
      setBottomColors({
        r: 0.223,
        g: 0.223,
        b: 0.223,
        metalness: 0,
        roughness: 0.5,
      });
    }
  }, [bottomColor]);

  //manipulate emission colors
  const [emissionColors, setEmissionColors] = useState({
    r: 0.8,
    g: 0.8,
    b: 0.8,
  });

  const emissionColor = useColorsStore((state) => state.activeColorEmission);

  useEffect(() => {
    if (emissionColor === 1) {
      setEmissionColors({ r: 0.2, g: 0, b: 0.2 });
    } else if (emissionColor === 2) {
      setEmissionColors({ r: 3, g: 0, b: 0 });
    } else if (emissionColor === 3) {
      setEmissionColors({ r: 0, g: 0, b: 1 });
    } else {
      setEmissionColors({ r: 1, g: 0, b: 1 });
    }
  }, [emissionColor]);

  //button clicker
  const [buttonSound] = useState(() => new Audio("./sound/button.mp3"));
  const button = useRef();
  const buttonClickHandler = (e) => {
    button.current.position.set(0, 0, -0.04);
    buttonSound.currentTime = 0;
    buttonSound.play();
    setTimeout(() => {
      button.current.position.set(0, 0, 0);
    }, 100);
  };

  const { nodes, materials } = useGLTF("./model/PokeBall.glb");
  console.log(materials);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottom.geometry}
        material={materials.BottomMaterial}
        material-color-r={bottomColors.r}
        material-color-g={bottomColors.g}
        material-color-b={bottomColors.b}
        material-metalness={bottomColors.metalness}
        material-roughness={bottomColors.roughness}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Inside.geometry}
        material={materials.InsideMaterial}
        material-color-r={insideColors.r}
        material-color-g={insideColors.g}
        material-color-b={insideColors.b}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        ref={button}
        onClick={buttonClickHandler}
        castShadow
        receiveShadow
        geometry={nodes.Button.geometry}
        material={materials.Metal}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Emission.geometry}
        material={materials.EmissionMaterial}
        material-color-r={emissionColors.r}
        material-color-g={emissionColors.g}
        material-color-b={emissionColors.b}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top.geometry}
        material={materials.TopMaterial}
        material-color-r={topColors.r}
        material-color-g={topColors.g}
        material-color-b={topColors.b}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("./model/PokeBall.glb");
