import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { Html, OrbitControls, Stage, useProgress } from "@react-three/drei";
import { Environment } from "@react-three/drei";

import useModelModal from "../hooks/use-model-modal";
import { Model } from "./for-3d/Model";
import { ViewContainerProps } from "../types/types";
import useViewer from "../hooks/use-viewer";
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
  const fileToView = useViewer((state) => state.data);

  return (
    <>
      <Model
        modelUrl={fileToView[0]?.path}
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

const MainViewer = ({
  showLeva = true,
  hdri,
}: {
  showLeva: boolean;
  hdri: string;
}) => {
  return (
    <div
      className={`${
        showLeva ? "w-full h-screen" : "w-full h-full flex "
      } relative `}
    >
      <color attach="background" args={["skyblue"]} />
      <Canvas
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{
          position: [4, -1, 8],
          fov: 35,
          zoom: 0.65,
          near: 1,
          far: 5000,
        }}
        className={`${!showLeva && "rounded-lg"}`}
      >
        <Suspense fallback={<Loader />}>
          {/* APPLY FIX TO ENVIRONMENT: HDRI NOT WORKING */}

          <OrbitControls />
          <Stage environment={hdri} adjustCamera={1} shadows={false}>
            <Environment background preset={hdri} />
            <ViewContainer
              scale={undefined}
              position={[]}
              color={""}
              wireframe={false}
              wireframeThickness={undefined}
              normalTexture={false}
            />
          </Stage>
        </Suspense>
      </Canvas>
      <div className="absolute bottom-0 right-0 "></div>
    </div>
  );
};

export default MainViewer;
