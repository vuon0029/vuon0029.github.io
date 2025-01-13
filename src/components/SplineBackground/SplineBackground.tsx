import { useEffect, useRef } from "react";
import Spline, { SPEObject } from "@splinetool/react-spline";
import styled from "styled-components";
import { Application } from "@splinetool/runtime";

const SplineContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Ensure it sits behind content */
`;

export default function App() {
  const orb = useRef<SPEObject | undefined>(undefined);
  const splineRef = useRef<Application | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (orb.current) {
        const { clientX, clientY } = event;

        // Convert screen coordinates to world coordinates
        const worldX = (clientX / window.innerWidth) * 20 - 10; // Scale based on world bounds
        const worldY = -((clientY / window.innerHeight) * 20 - 10); // Adjust scaling and invert Y

        // Update the object's position
        orb.current.position.x = worldX * 120;
        orb.current.position.y = worldY * 50;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <SplineContainer>
      <Spline
        scene="https://prod.spline.design/xRP79IS-pmI6WBNv/scene.splinecode"
        onLoad={(spline) => {
          splineRef.current = spline; // Store the Spline instance

          // Find the ORB object by name
          orb.current = spline.findObjectByName("ORB");
          if (orb.current) {
            console.log("ORB loaded:", orb.current);
          } else {
            console.error("ORB object not found");
          }
        }}
      />
    </SplineContainer>
  );
}
