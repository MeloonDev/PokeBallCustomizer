import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useRef, useState } from "react";

export function PokeBall(props) {
  //leva
  const TopColor = useControls({
    r: 0.85,
    g: 0.007,
    b: 0.007,
  });

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
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Inside.geometry}
        material={materials.InsideMaterial}
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
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top.geometry}
        material={materials.TopMaterial}
        material-color-r={TopColor.r}
        material-color-g={TopColor.g}
        material-color-b={TopColor.b}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("./model/PokeBall.glb");
