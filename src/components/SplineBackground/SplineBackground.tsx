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
        const worldX = (clientX / window.innerWidth) * 20 - 10;
        const worldY = -((clientY / window.innerHeight) * 20 - 10);

        // Update the object's position
        orb.current.position.x = worldX * 120;
        orb.current.position.y = worldY * 50;
        orb.current.scale.x = 4.5;
        orb.current.scale.y = 4.5;
      }
    };

    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Define media query

    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        // Mobile view
        window.removeEventListener("mousemove", handleMouseMove);
        if (orb.current) {
          orb.current.position.x = 120;
          orb.current.position.y = 100;
          orb.current.scale.x = 7;
          orb.current.scale.y = 7;
        }
      } else {
        // Desktop view

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }
    };

    // Initial check
    handleMediaChange(mediaQuery);

    // Add media query listener
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <SplineContainer>
      <Spline
        scene="https://prod.spline.design/xRP79IS-pmI6WBNv/scene.splinecode"
        onLoad={(spline) => {
          splineRef.current = spline;

          orb.current = spline.findObjectByName("ORB");
        }}
      />
    </SplineContainer>
  );
}
