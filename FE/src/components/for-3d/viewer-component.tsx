import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CgSpinnerAlt } from "react-icons/cg";
import { useControls, folder, Leva } from "leva";
import { Html, useProgress } from "@react-three/drei";
import { CameraControls, Environment } from "@react-three/drei";

import Lights from "./Lights";
import { Model } from "./Model";
import { ViewContainerProps } from "../../types/types";

const ViewContainer: React.FC<ViewContainerProps> = ({
  scale,
  position,
  color,
  wireframe,
  wireframeThickness,
  normalTexture,
}: ViewContainerProps) => {
  return (
    <>
      <Model
        scale={scale}
        position={position}
        color={color}
        wireframe={wireframe}
        normalTexture={normalTexture}
        wireframeThickness={wireframeThickness}
      />
    </>
  );
};

const Tweaker = () => {
  const {
    scale,
    color,
    wireframe,
    position,
    wireframeThickness,
    normalTexture,
  } = useControls("Model", {
    transform: folder({
      scale: { value: 6, max: 25, min: 4 },
      position: [-0.01, -0.23, 0.17],
    }),
    material: folder({
      color: "red",
      normalTexture: false,
      wireframe: false,
      wireframeThickness: { value: 0.05, max: 0.25, min: 0.01 },
    }),
  });

  return (
    <ViewContainer
      scale={scale}
      color={color}
      wireframe={wireframe}
      position={position}
      wireframeThickness={wireframeThickness}
      normalTexture={normalTexture}
    ></ViewContainer>
  );
};

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      {progress !== 100 ? (
        <CgSpinnerAlt className="animate-spin h-32 w-32 text-orange-500" />
      ) : null}
    </Html>
  );
}

const ViewerComponent = () => {
  return (
    <div className="flex w-full h-full rounded-xl ">
      <Leva hidden />
      <Canvas className="rounded-xl">
        <Suspense fallback={<Loader />}>
          <CameraControls makeDefault />
          <Environment preset="sunset" background />

          <Lights />

          <Tweaker />

          {/* <BackDrop /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ViewerComponent;
