import { useGLTF } from "@react-three/drei";

export function PokeBall(props) {
  const { nodes, materials } = useGLTF("./model/PokeBall.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottom.geometry}
        material={materials.White}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Inside.geometry}
        material={materials.Black}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
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
        material={nodes.Emission.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top.geometry}
        material={materials.Red}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("./model/PokeBall.glb");
