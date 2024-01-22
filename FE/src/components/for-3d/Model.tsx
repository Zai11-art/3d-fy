// import { useGLTF, Wireframe } from "@react-three/drei";
// import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// export function Model(props) {
//   const gltf = useLoader(GLTFLoader, props.modelUrl);
//   console.log(gltf);

//   return <primitive object={gltf.scene} />;
// }

// useGLTF.preload(props.modelUrl);

import { useGLTF, Wireframe } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useState, useEffect } from "react";
import { ObjectLoader } from "three";

// export function Model(props) {
//   const { nodes, materials } = useGLTF(
//     props.modelUrl ? props.modelUrl : "/food_apple_01_4k.glb"
//   ) as any;
//   console.log(nodes);
//   console.log(materials);

//   console.log(props.color);
//   console.log(props.wireframeThickness);
//   console.log(props.normalTexture);

//   // CHECK POLYCOUNT HERE
//   console.log(nodes.food_apple_01.geometry.attributes.normal.count);
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.food_apple_01.geometry}
//         material={materials.food_apple_01}
//         scale={props.scale}
//         position={props.position}

//         // color={props.color}
//       >
//         {props.normalTexture && <meshNormalMaterial />}
//         {props.wireframe && (
//           <Wireframe
//             stroke={props.color} // Color of the stroke
//             strokeOpacity={1} // Opacity of the stroke
//             thickness={props.wireframeThickness} // Thinkness of the lines
//             backfaceStroke={"#0000ff"} // Color of the lines that are facing away from the camera
//           />
//         )}
//       </mesh>
//     </group>
//   );
// }

// useGLTF.preload("/food_apple_01_4k.glb");

export function Model(props) {
  // console.log(props.modelUrl);

  // console.log(props.modelUrl.split(".")[1].toLowerCase() === "fbx");
  // const [model, setModel] = useState("");

  // useEffect(() => {
  //   setModel(gltf.scene);
  // }, [model]);

  // const fbx = useLoader(FBXLoader, props.modelUrl);
  let model;

  if (
    props.modelUrl.split(".")[1].toLowerCase() === "glb" ||
    props.modelUrl.split(".")[1].toLowerCase() === "gltf"
  ) {
    model = useLoader(GLTFLoader, props.modelUrl)?.scene;
  } else if (props.modelUrl.split(".")[1].toLowerCase() === "obj") {
    model = useLoader(ObjectLoader, props.modelUrl);
  } else if (props.modelUrl.split(".")[1].toLowerCase() === "fbx") {
    model = useLoader(FBXLoader, props.modelUrl);
  }

  return <primitive object={model} />;
}
