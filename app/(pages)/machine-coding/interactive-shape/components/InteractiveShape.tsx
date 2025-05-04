"use client";
import styles from "../styles.module.scss";
import { useEffect, useMemo, useState } from "react";

type InteractiveShapeProps = {
  shape: number[][];
};

export const InteractiveShapeComponent = ({ shape }: InteractiveShapeProps) => {
  const [selected, setSelected] = useState(new Set());
  const [deleting, setDeleting] = useState<boolean>(false);

  const boxes = useMemo(() => {
    return shape.flat(Infinity) as number[];
  }, [shape]);

  const nonHiddenBoxes = useMemo(() => {
    return boxes.reduce((acc, curr) => acc + curr, 0);
  }, [boxes]);

  const handleClick = (index: number) => {
    if (selected.has(index) || deleting) {
      return;
    }

    setSelected((prev) => {
      const newSelected = new Set(prev.add(index));
      return newSelected;
    });
  };

  useEffect(() => {
    if (selected.size >= nonHiddenBoxes) {
      // Need to remove selected one by one each 400 ms

      const values = Array.from(selected);

      function removeSelected() {
        if (values.length > 0) {
          const value = values.shift();

          setSelected((prev) => {
            const newSelected = new Set(prev);
            newSelected.delete(value);
            return newSelected;
          });

          setTimeout(() => {
            removeSelected();
          }, 400);
        } else {
          setDeleting(false);
        }
      }

      setTimeout(() => {
        setDeleting(true);
        removeSelected();
      }, 100);
    }
  }, [nonHiddenBoxes, selected]);

  return (
    <div className={styles.container}>
      <div className={styles.boxes}>
        {boxes.map((box, index) => {
          const isSelectedBox = selected.has(index);
          return (
            <div
              key={index}
              className={`${styles.box} ${box === 0 ? styles.hidden : ""} ${
                isSelectedBox ? styles.selected : ""
              }`}
              onClick={() => handleClick(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
