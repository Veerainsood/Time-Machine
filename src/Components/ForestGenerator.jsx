import { TreeModel } from '../models/TreeModel';
import { Tree2Model } from '../models/Tree2';
import { Tree3Model } from '../models/Tree3';

export const ForestGen = () => {
  const trees = [];
  for (let index = 0; index < 20; index++) {
    var randomX = Math.random() * 50;
    var randomZ = Math.random() * 50;
    
    trees.push(
      <TreeModel key={`tree-${index}`} position={[randomX, 0, randomZ]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1]} />,
    );
    randomX = Math.random() * 50;
    randomZ = Math.random() * 50;

    trees.push(
        <Tree2Model key={`tree-${index}`} position={[randomX, 0, randomZ]} rotation={[0, Math.PI / 2, 0]} scale={[2, 2, 2]} />,
      );
    randomX = Math.random() * 50;
    randomZ = Math.random() * 50;
  
    trees.push(
        <Tree3Model key={`tree-${index}`} position={[randomX, 0, randomZ]} rotation={[0, Math.PI / 2, 0]} scale={[2, 2, 2]} />,
    );
  }
  return <>{trees}</>;  // Using React fragment to return multiple elements
};
