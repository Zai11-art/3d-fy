import {
  Environment,
  Float,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { Html } from "next/document";
import { useControls, folder, Leva } from "leva";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


interface ModelProps {
  scale: number;
  position: number[];
  color: string;
  wireframe: boolean;
}

const Model = ({ scale, position, color, wireframe }: ModelProps) => {
  const gltf = useLoader(GLTFLoader, "/food_apple_01_4k.glb");

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={scale}
        position={position}
        color={color}
        wireframe={wireframe}
      />
    </>
  );
};

const Tweaker = () => {
  const { scale, color, wireframe, position } = useControls("Model", {
    transform: folder({
      scale: { value: 50, step: 50, max: 100, min: 50 },
      position: [0, -2, 0],
    }),
    material: folder({
      color: "#fff",
      wireframe: true,
    }),
  });

  return (
    <Model
      scale={scale}
      color={color}
      wireframe={wireframe}
      position={position}
    ></Model>
  );
};

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      {progress !== 100 ? (
        <div className="flex items-center justify-center flex-col">
          <CgSpinnerTwoAlt className="animate-spin h-64 w-64 text-orange-500" />
          <span className="text-orange-500 text-center text-xl absolute">
            {progress} %
          </span>
        </div>
      ) : null}
    </Html>
  );
}

const ModelViewer = () => {
  return (
    <div className="rounded-xl md:w-full w-[98%] md:h-[full] sm:h-[300px] h-[250px] ">
      <Leva hidden />
      <Canvas className="rounded-xl">
        <OrbitControls />
        <Environment preset="sunset" background />

        <Float
          speed={1}
          rotationIntensity={1.3}
          position={[0, 0.1, 0]}
          floatIntensity={2}
        >
          <Tweaker />
        </Float>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
