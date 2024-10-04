import { useFrame } from '@react-three/fiber';
import { Sky, Stars } from '@react-three/drei';
import { useState, useRef } from 'react';

export const SkyCycle = () => {
  const [sunPosition, setSunPosition] = useState([0, 0, 0]); // Initial sun position
  const [starCount, setStarCount] = useState(5000); // Initial star count

  const timeElapsed = useRef(0);
  const currentStep = useRef(0); // To track which step we are in

  const steps = [
    [10, 0.1, 0],
    [10, 10, 10],
    [10, 50, 90],
    [10, 0.8, 120],
    [10, 1, 150],
  ];

  const transitionDelay = 10; // Delay of 2 seconds between each step

  useFrame((state, delta) => {
    timeElapsed.current += delta;

    if (timeElapsed.current > transitionDelay) {
        // Move to the next step after the delay
        
        if (currentStep.current < steps.length) {
            setSunPosition(steps[currentStep.current]);
            currentStep.current++;
        } else {
            // Reset the cycle to switch between night and day
            currentStep.current = 0;
            setStarCount((prev) => (prev === 5000 ? 0 : 5000));
            setSunPosition([0, 0, 0]); // Reset sun position
      }

      timeElapsed.current = 0; // Reset the time for the next delay
    }
  });

  return (
    <>
      <Sky sunPosition={sunPosition} turbidity={1} />
      <Stars count={starCount} />
    </>
  );
};
