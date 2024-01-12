import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useControls, folder, Leva } from "leva";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { Html, Stage, useProgress } from "@react-three/drei";
import { CameraControls, ContactShadows, Environment } from "@react-three/drei";

import Lights from "../../components/for-3d/Lights";
import useModelModal from "../../hooks/use-model-modal";
import { Model } from "../../components/for-3d/Model";
import { ViewContainerProps } from "../../types/types";
import { Scene } from "three";
// import daPic from "../../../public/brown_photostudio_04_8k.hdr";

const ViewContainer = ({
  scale,
  position,
  color,
  wireframe,
  wireframeThickness,
  normalTexture,
}: ViewContainerProps) => {
  // @ts-ignore
  const modelUrl = useModelModal((state) => state.data?.modelUrl);

  return (
    <>
      <Model
        modelUrl={modelUrl}
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
      scale: { value: 5, max: 5, min: 4 },
      position: [0, -0.18, 0],
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

const Tweaker2 = () => {
  return (
    <ViewContainer
      scale={5}
      color={"red"}
      wireframe={false}
      position={[0, 0, 0]}
      wireframeThickness={0}
      normalTexture={false}
    ></ViewContainer>
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
            {progress.toLocaleString()} %
          </span>
        </div>
      ) : null}
    </Html>
  );
}

const Viewer = ({
  showLeva = true,
  wireframe = false,
  normal = false,
  color,
  hdri,
}: {
  showLeva: boolean;
  wireframe: boolean;
  normal: boolean;
  color: string;
  hdri: string;
}) => {
  return (
    <div
      className={`${
        showLeva ? "w-full h-screen" : "w-full h-full flex "
      } relative `}
    >
      <Canvas className={`${!showLeva && "rounded-lg"}`}>
        <Suspense fallback={<Loader />}>
          <CameraControls makeDefault />
          {/* APPLY FIX TO ENVIRONMENT: HDRI NOT WORKING */}

          <Environment
            background
            // files="/brown_photostudio_04_8k.hdr"
            // @ts-ignore
            preset={hdri}
          />

          <ContactShadows position-y={0.001} opacity={0.9} blur={3} />
          <Lights />

          {/* <BackDrop /> */}
          {showLeva ? (
            <Tweaker />
          ) : (
            <Model
              scale={6}
              color={color}
              wireframe={wireframe}
              position={[0, -0.18, 0]}
              wireframeThickness={0.08}
              normalTexture={normal}
            />
          )}
        </Suspense>
      </Canvas>
      <div className="absolute bottom-0 right-0 "></div>
    </div>
  );
};

export default Viewer;
