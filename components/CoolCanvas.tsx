import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";

function Box(props: any) {
  const ref = useRef();
  const [clicked, click] = useState(false);
  useFrame((state, delta) =>{
    ref.current.rotation.y+= 0.02
  } );
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
    >
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial color= "#90CDF4" />
    </mesh>
  );
}

const CoolCanvas = () => {
  return (
    <div style={{ height: "300px",width:"100%", margin: "auto 0px" }}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.6} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default CoolCanvas;
