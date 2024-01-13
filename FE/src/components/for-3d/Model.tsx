import { useGLTF, Wireframe } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    food_apple_01: THREE.Mesh;
  };
  materials: {
    food_apple_01: THREE.MeshStandardMaterial;
  };
};
export function Model(props) {
  const { nodes, materials } = useGLTF(props.modelUrl) as unknown as GLTFResult;
  console.log(nodes);

  const newValues = Object.entries(nodes).map(([key, value]) => ({
    [key]: value,
  }));
  console.log(newValues);

  // console.log(props.color);
  // console.log(props.wireframeThickness);
  // console.log(props.normalTexture);

  // CHECK POLYCOUNT HERE
  // console.log(nodes.food_apple_01.geometry.attributes.normal.count);
  return (
    <group {...props} dispose={null}>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.food_apple_01.geometry}
        material={materials.food_apple_01}
        scale={props.scale}
        position={props.position}

        // color={props.color}
      >
        {props.normalTexture && <meshNormalMaterial />}
        {props.wireframe && (
          <Wireframe
            stroke={props.color} // Color of the stroke
            strokeOpacity={1} // Opacity of the stroke
            thickness={props.wireframeThickness} // Thinkness of the lines
            backfaceStroke={"#0000ff"} // Color of the lines that are facing away from the camera
          />
        )}
      </mesh> */}
    </group>
  );
}

useGLTF.preload("/food_apple_01_4k.glb");
