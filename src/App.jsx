import {
  OrbitControls,
  Stage,
  Environment,
  ScrollControls,
  useScroll,
  useEnvironment,
  PresentationControls,
} from "@react-three/drei";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function App() {
  return (
    <Canvas
      gl={{ antialias: false, alpha: true }}
      camera={{position: [0, 256, 256]}}
    >
      <color attach="background" args={["#D6EBF6"]} />
      <ScrollControls pages={10}>
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={true} // Spin globally or by dragging the model
          cursor={false} // Whether to toggle cursor style on drag
          snap={true} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          polar={[-Math.PI / 4, Math.PI / 4]} // Vertical limits
          azimuth={[-Math.PI / 4, Math.PI / 4]} // Horizontal limits
          config={{ mass: 5, tension: 100, friction: 50 }} // Spring config
        >
        <Card />
        </PresentationControls>
      </ScrollControls>
      <ambientLight intensity={0.5}></ambientLight>
      <Environment preset="studio" environmentIntensity={0.25}/>
    </Canvas>
  );
}

function Card({ ...props }) {
  const { scene: scene1, nodes: nodes1 } = useGLTF("/room1.glb");
  const { scene: scene2, nodes: nodes2 } = useGLTF("/room2.glb");
  const { scene: scene3, nodes: nodes3 } = useGLTF("/room3.glb");
  const { scene: scene4, nodes: nodes4 } = useGLTF("/room4.glb");
  const { scene: scene5, nodes: nodes5 } = useGLTF("/room5.glb");
  const { scene: scene6, nodes: nodes6 } = useGLTF("/room6.glb");
  const { scene: scene7, nodes: nodes7 } = useGLTF("/room7.glb");
  const { scene: scene8, nodes: nodes8 } = useGLTF("/room8.glb");
  const { scene: scene9, nodes: nodes9 } = useGLTF("/room9.glb");
  const { scene: scene10, nodes: nodes10 } = useGLTF("/room10.glb");

  const room1 = useRef();
  const room2 = useRef();
  const room3 = useRef();
  const room4 = useRef();
  const room5 = useRef();
  const room6 = useRef();
  const room7 = useRef();
  const room8 = useRef();
  const room9 = useRef();
  const room10 = useRef();

  const texture = useEnvironment({preset: "studio"});
  useEffect(() => {
    const roomMat = new THREE.MeshPhysicalMaterial({
      ior: 1.3,
      opacity: 0,
      transparent: true,
      thickness: 5,
      metalness: 0,
      envMap: texture,
      clearcoat: 1,
      clearcoatRoughness: 0.25,
      envMapIntensity: 0.25,
      color: 0xD6EBF6,
    })
    room1.current.children[0].material = roomMat.clone();
    room2.current.children[0].material = roomMat.clone();
    room3.current.children[0].material = roomMat.clone();
    room4.current.children[0].material = roomMat.clone();
    room5.current.children[0].material = roomMat.clone();
    room6.current.children[0].material = roomMat.clone();
    room7.current.children[0].material = roomMat.clone();
    room8.current.children[0].material = roomMat.clone();
    room9.current.children[0].material = roomMat.clone();
    room10.current.children[0].material = roomMat.clone();
  })

  useLayoutEffect(() =>
    Object.values(nodes1).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    ),
    Object.values(nodes2).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    ),
    Object.values(nodes3).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    ),
    Object.values(nodes4).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    ),
    Object.values(nodes5).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    ),
    Object.values(nodes6).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    ),
    Object.values(nodes7).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    ),
    Object.values(nodes8).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    ),
    Object.values(nodes9).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    ),
    Object.values(nodes10).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    ),
  );

  const scroll = useScroll();
  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 10, 1 / 10);
    const r2 = scroll.range(1 / 10, 1 / 10);
    const r3 = scroll.range(2 / 10, 1 / 10);
    const r4 = scroll.range(3 / 10, 1 / 10);
    const r5 = scroll.range(4 / 10, 1 / 10);
    const r6 = scroll.range(5 / 10, 1 / 10);
    const r7 = scroll.range(6 / 10, 1 / 10);
    const r8 = scroll.range(7 / 10, 1 / 10);
    const r9 = scroll.range(8 / 10, 1 / 10);
    const r10 = scroll.range(9 / 10, 1 / 10);

    room1.current.children[0].material.opacity = 0.85;
    if (r1 < 1) {
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (256 * (1 - r1) + 128), delta)
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, (256 * (1 - r1) + 128), delta)
      room2.current.children[0].material.opacity = THREE.MathUtils.damp(room2.current.children[0].material.opacity, r1 * 2, 1, delta);
    }

    if (r2 < 1){
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (128 * (1 - r2) + 64), delta)
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, (128 * (1 - r2) + 64), delta)
      room3.current.children[0].material.opacity = THREE.MathUtils.damp(room3.current.children[0].material.opacity, r2 * 2, 1, delta);
    }

    if (r3 < 1){
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (64 * (1 - r3) + 32), delta)
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, (64 * (1 - r3) + 32), delta)
      room4.current.children[0].material.opacity = THREE.MathUtils.damp(room4.current.children[0].material.opacity, r3 * 2, 1, delta);
    }

    if (r4 < 1){
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (32 * (1 - r4) + 16), delta)
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, (32 * (1 - r4) + 16), delta)
      room5.current.children[0].material.opacity = THREE.MathUtils.damp(room5.current.children[0].material.opacity, r4 * 2, 1, delta);
    } 

    if (r5 < 1){
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (16 * (1 - r5) + 8), delta)
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, (16 * (1 - r5) + 8), delta)
      room6.current.children[0].material.opacity = THREE.MathUtils.damp(room6.current.children[0].material.opacity, r5 * 2, 1, delta);
    }

    if (r6 < 1){
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (8 * (1 - r6) + 4), delta)
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, (8 * (1 - r6) + 4), delta)
      room7.current.children[0].material.opacity = THREE.MathUtils.damp(room7.current.children[0].material.opacity, r6 * 2, 1, delta);
    }

    if (r7 < 1){
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (4 * (1 - r7) + 2), delta)
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, (4 * (1 - r7) + 2), delta)
      room8.current.children[0].material.opacity = THREE.MathUtils.damp(room8.current.children[0].material.opacity, r7 * 2, 1, delta);
    }

    if (r8 < 1){
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (2 * (1 - r8) + 1), delta)
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, (2 * (1 - r8) + 1), delta)
      room9.current.children[0].material.opacity = THREE.MathUtils.damp(room9.current.children[0].material.opacity, r8 * 2, 1, delta);
    }

    if (r9 < 1){
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (0.5 * (1 - r9) + 0.25), delta)
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, (0.5 * (1 - r9) + 0.25), delta)
      room10.current.children[0].material.opacity = THREE.MathUtils.damp(room10.current.children[0].material.opacity, r9 * 2, 1, delta);
    }

    if (r10 < 1){
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (0.25 * (1 - r10) + 0.125), delta)
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, (0.25 * (1 - r10) + 0.125), delta)
    }
    
  })

  return (
    <group>
      <primitive ref={room1} scale={256} object={scene1} {...props} />
      <primitive ref={room2} scale={128} object={scene2} {...props} />
      <primitive ref={room3} scale={64} object={scene3} {...props} />
      <primitive ref={room4} scale={32} object={scene4} {...props} />
      <primitive ref={room5} scale={16} object={scene5} {...props} />
      <primitive ref={room6} scale={8} object={scene6} {...props} />
      <primitive ref={room7} scale={4} object={scene7} {...props} />
      <primitive ref={room8} scale={2} object={scene8} {...props} />
      <primitive ref={room9} scale={1} object={scene9} {...props} />
      <primitive ref={room10} scale={0.5} object={scene10} {...props} />
    </group>
  );
}

useGLTF.preload("/room1.glb");
useGLTF.preload("/room2.glb");
useGLTF.preload("/room3.glb");
useGLTF.preload("/room4.glb");
useGLTF.preload("/room5.glb");
useGLTF.preload("/room6.glb");
useGLTF.preload("/room7.glb");
useGLTF.preload("/room8.glb");
useGLTF.preload("/room9.glb");
useGLTF.preload("/room10.glb");