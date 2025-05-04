"use client";
import { InteractiveShapeComponent } from "./components/InteractiveShape";

const shape = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];

const InteractiveShape = () => {
  return <InteractiveShapeComponent shape={shape} />;
};

export default InteractiveShape;
