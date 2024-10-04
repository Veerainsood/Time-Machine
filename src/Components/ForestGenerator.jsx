import { useFrame } from '@react-three/fiber';
import { useState, useRef } from 'react';
import { Vector3 } from 'three';
import { TreeModel } from '../models/TreeModel';
import { Tree2Model } from '../models/Tree2';
import { Tree3Model } from '../models/Tree3';

const spawnDistance = 30; // Distance within which trees will spawn
const deleteDistance = 30; // Distance beyond which trees will be deleted

export const ForestGen = () => {
  const cameraPosition = useRef(new Vector3());
  const [spawnedTrees, setSpawnedTrees] = useState([]); // Store generated trees
  const treePositions = useRef([]); // Store tree positions

  // Generate random tree positions once
  if (treePositions.current.length <5) {
    treePositions.current = Array.from({ length: 60 }, (_, index) => ({
      type: index % 3 === 0 ? 'TreeModel' : index % 3 === 1 ? 'Tree2Model' : 'Tree3Model',
      position: [Math.random() * 40 - 50, 0, Math.random() * 40 - 50], // Random position within [-50, 50] range
      key: `tree-${index}`,
    }));
    
  }

  useFrame(({ camera }) => {
    // Update camera position in each frame
    cameraPosition.current.copy(camera.position);

    // Check for spawning and deleting trees
    const newSpawnedTrees = [];

    // Loop through tree positions and check if they should be spawned or deleted
    treePositions.current.forEach((tree) => {
      const treePosition = new Vector3(...tree.position);
      const distanceToCamera = cameraPosition.current.distanceTo(treePosition);

      // If within spawn distance and the tree is not already spawned
      if (distanceToCamera < spawnDistance && !spawnedTrees.some((t) => t.key === tree.key)) {
        newSpawnedTrees.push(tree); // Add the new tree to the list
      }
    });

    // Set the newly spawned trees and filter out trees that are too far
    setSpawnedTrees((prevTrees) =>
      prevTrees.filter((tree) => {
        const treePosition = new Vector3(...tree.position);
        return cameraPosition.current.distanceTo(treePosition) < deleteDistance;
      }).concat(newSpawnedTrees) // Add newly spawned trees
    );
  });

  // Function to render trees based on their type
  const renderTree = (type, position, key) => {
    switch (type) {
      case 'TreeModel':
        return <TreeModel key={key} position={position} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1]} />;
      case 'Tree2Model':
        return <Tree2Model key={key} position={position} rotation={[0, Math.PI / 2, 0]} scale={[2, 2, 2]} />;
      case 'Tree3Model':
        return <Tree3Model key={key} position={position} rotation={[0, Math.PI / 2, 0]} scale={[2, 2, 2]} />;
      default:
        return null;
    }
  };

  return (
    <>
      {spawnedTrees.map((tree) => renderTree(tree.type, tree.position, tree.key))}
    </>
  );
};
