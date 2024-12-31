import { Canvas } from '@react-three/fiber'
import React, {useState,Suspense} from 'react'
import { Stats, Environment, Html, KeyboardControls, PerspectiveCamera } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Loader from './Loader'
import ImagePlane from './ImagePlane'
import HumanModel from './ModelComponents/HumanModel'
import ShowroomModel from './ModelComponents/ShowRoomModel'
import CameraController from './CameraComponents/CameraController'
import CameraLookAround from './CameraComponents/CameraLookAround'
import CameraControllerDpad from './CameraComponents/CameraControllerDpad'
import VirtualDpad from './CameraComponents/VirtualDpad'


function PlantScene() {
  const [mobileControls, setMobileControls] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false
  });

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const [showroomBoundary, setShowroomBoundary] = useState(null);
  const [isMoving, setIsMoving] = useState(false);

  // Callback to set boundary in ShowroomModel
  const setBoundary = (boundary) => {
    setShowroomBoundary(boundary);
  };

  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}>
      {/* <Canvas style={{ height: '100vh', width: '100vw' }} 
      //camera={{ fov: 75, position: [100, 10, -8], near: 0.0001, far: 1000 }}
        //shadows={false} // 10. Disable shadows for performance
        gl={{ 
          powerPreference: "high-performance",
          antialias: true, 
          // stencil: false,
          // depth: true,
          logarithmicDepthBuffer: true,
        }}
        //performance={{ min: 0.5 }}
      > */}
      <PerspectiveCamera makeDefault fov={50} position={[100, 10, -8]} rotation={[0, Math.PI / 2, 0]} />
      {/* <GlobalCanvas scaleMultiplier={0.01} /> */}
        {/* <PerformanceOptimizer /> */}
        <Perf position="top-left" />
        <CameraLookAround />
        {/* <CameraController showroomBoundary={showroomBoundary} /> */}
        {/* <CameraControllerDpad mobileControls={mobileControls} /> */}
        <directionalLight position={[1, 10, 1]}/>
        <Environment preset="warehouse" />
        <Stats position="top-right" />
        <Suspense fallback={<Loader />}>
          <ShowroomModel setBoundary={setBoundary} />
          {showroomBoundary && (
            <CameraController showroomBoundary={showroomBoundary} setMovementActive={setIsMoving} />
          )}

          {showroomBoundary && (
            <CameraControllerDpad mobileControls={mobileControls} showroomBoundary={showroomBoundary} />
          )}

          <HumanModel isMoving={isMoving}/>

          {/* White circular floor */}
          <ImagePlane position={[34, 7, -80]} machineName={"ACE-01"} />
          <mesh position={[30, 1, -80]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white" />
          </mesh>

          <ImagePlane position={[-5, 7, -46]} machineName={"ACE-02"} />
          <mesh position={[-10, 1, -45]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white" />
          </mesh>

          <ImagePlane position={[-30, 7, -46]} machineName={"ACE-03"} />
          <mesh position={[-35, 1, -45]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white" />
          </mesh>

          <ImagePlane position={[45, 7, 28]} machineName={"ACE-04"} />
          {/* White circular floor */}
          <mesh position={[40, 1, 28]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white" receiveShadow />
          </mesh>

          <ImagePlane position={[13, 7, 30]} machineName={"ACE-05"}/>
          <mesh position={[10, 1, 28]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>


          <ImagePlane position={[-16, 7, 30]} machineName={"ACE-06"}/>
          <mesh position={[-20, 1, 28]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>


          <ImagePlane position={[-22, 7, 70]} machineName={"ACE-07"}/>
          <mesh position={[-25, 1, 70]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white" />
          </mesh>


          <ImagePlane position={[-22, 7, 100]} machineName={"ACE-08"}/>
          <mesh position={[-25, 1, 100]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white" />
          </mesh>


          <ImagePlane position={[-22, 7, 130]} machineName={"ACE-09"}/>
          <mesh position={[-25, 1, 130]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white" />
          </mesh>

          <ImagePlane position={[-22, 7, 160]} machineName={"ACE-10"}/>
          <mesh position={[-25, 1, 160]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white" />
          </mesh>

          <ImagePlane position={[28, 7, 80]} machineName={"ACE-11"}/>
          <mesh position={[25, 1, 80]} rotation={[0, 0, 0]} receiveShadow> 
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white" />
          </mesh>

          <ImagePlane position={[52, 7, -55]} machineName={"ACE-12"}/>
          <mesh position={[50, 1, -55]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white" receiveShadow/>
          </mesh>


          <ImagePlane position={[43, 7, -107]}  machineName={"ACE-13"}/>
          <mesh position={[40, 1, -108]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>
          
          <ImagePlane position={[12, 7, -107]}  machineName={"ACE-14"}/>
          <mesh position={[10, 1, -108]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>


          <ImagePlane position={[-18, 7, -107]}  machineName={"ACE-15"}/>
          <mesh position={[-20, 1, -108]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

          
          <ImagePlane position={[-180, 7, 25]} machineName={"ACE-16"}/>
          <mesh position={[-182, 1, 24]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

          <ImagePlane position={[-160, 7, 25]} machineName={"ACE-17"} />
          <mesh position={[-162, 1, 24]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

          <ImagePlane position={[-140, 7, 25]} machineName={"ACE-18"} />
          <mesh position={[-142, 1, 24]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

          <ImagePlane position={[-110, 7, 25]}  machineName={"ACE-19"}/>
          <mesh position={[-112, 1, 24]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

          <ImagePlane position={[-90, 7, 25]} machineName={"ACE-20"} />
          <mesh position={[-92, 1, 24]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

          <ImagePlane position={[-90,7, 56]} machineName={"ACE-21"}/>
          <mesh position={[-92, 1, 57]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

          <ImagePlane position={[-90, 7, 96]}  machineName={"ACE-22"}/>
          <mesh position={[-92, 1, 96]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

          <ImagePlane position={[-90, 7, 76]} machineName={"ACE-23"}/>
          <mesh position={[-92, 1, 76]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

          <ImagePlane position={[-80, 7, -48]} machineName={"ACE-24"}/>
          <mesh position={[-82, 1, -48]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

          <ImagePlane position={[-80, 7, -86]} machineName={"ACE-25"}/>
          <mesh position={[-82, 1, -86]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

          <ImagePlane position={[-80, 7, -107]} machineName={"ACE-26"}/>
          <mesh position={[-82, 1, -107]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

          <ImagePlane position={[-100, 7, -50]} machineName={"ACE-27"}/>
          <mesh position={[-104, 1, -48]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

          <ImagePlane position={[-121, 7, -50]} machineName={"ACE-28"}/>
          <mesh position={[-125, 1, -48]} rotation={[0, 0, 0]} receiveShadow>
            {/* <circleGeometry args={[100, 64]} /> */}
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

          <ImagePlane position={[-142, 7, -50]} machineName={"ACE-29"}/>
          <mesh position={[-146, 1, -48]} rotation={[0, 0, 0]} receiveShadow>
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

          <ImagePlane position={[-162, 7, -50]} machineName={"ACE-30"}/>
          <mesh position={[-167, 1, -48]} rotation={[0, 0, 0]} receiveShadow>
            <cylinderGeometry args={[10, 10, 1, 64]} />
            <meshStandardMaterial color="white"  receiveShadow/>
          </mesh>

        </Suspense>
      {/* </Canvas> */}
      {isMobile && <VirtualDpad onDirectionChange={setMobileControls} />}
    </KeyboardControls>
  )
}

export default PlantScene
