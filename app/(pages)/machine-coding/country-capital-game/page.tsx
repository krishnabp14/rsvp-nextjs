"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import _ from "lodash";

const data = {
  Afghanistan: "Kabul",
  Argentina: "Buenos Aires",
  Australia: "Canberra",
  Bangladesh: "Dhaka",
  Belgium: "Brussels",
  Brazil: "Brasília",
  Canada: "Ottawa",
  China: "Beijing",
  Denmark: "Copenhagen",
  Egypt: "Cairo",
  France: "Paris",
  Germany: "Berlin",
};

const CountryCapitalGame = () => {
  const [items, setItems] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [correctSelectionItems, setCurrentSelectionItems] = useState<string[]>(
    []
  );
  const [wrongSelectionItems, setWrongSelectionItems] = useState<string[]>([]);

  const handleSelect = (item: keyof typeof data) => {
    if (
      selectedItems.includes(item) ||
      correctSelectionItems.includes(item) ||
      wrongSelectionItems.includes(item)
    ) {
      return;
    }

    if (selectedItems.length === 0) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      const prevSelectedItem = selectedItems[0] as keyof typeof data;
      if (data[item] === prevSelectedItem || data[prevSelectedItem] === item) {
        setCurrentSelectionItems((prev) => [...prev, item]);
        setCurrentSelectionItems((prev) => [...prev, prevSelectedItem]);
        setTimeout(() => {
          setItems((prev) =>
            prev.filter((curr) => curr !== item && curr !== prevSelectedItem)
          );
          setCurrentSelectionItems([]);
          setSelectedItems([]);
        }, 400);
      } else {
        setWrongSelectionItems((prev) => [...prev, item]);
        setWrongSelectionItems((prev) => [...prev, prevSelectedItem]);
        setTimeout(() => {
          setWrongSelectionItems([]);
          setSelectedItems([]);
        }, 400);
      }
    }
  };

  function onMount() {
    const currentItems = [];

    for (const key in data) {
      const country = key as keyof typeof data;
      currentItems.push(country);
      currentItems.push(data[country]);
    }

    setItems(_.shuffle(currentItems));
  }

  useEffect(() => {
    onMount();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Country Capital Game</h1>
      {items.length > 0 ? (
        <div className={styles.items}>
          {items.map((item, index) => {
            const isSelected = selectedItems.includes(item);
            const isCorrectItem = correctSelectionItems.includes(item);
            const isWrongItem = wrongSelectionItems.includes(item);
            return (
              <div
                key={index}
                className={`${styles.item} ${
                  isCorrectItem ? styles.correct : ""
                } ${isWrongItem ? styles.wrong : ""} ${
                  isSelected ? styles.selected : ""
                }`}
                onClick={() => handleSelect(item as keyof typeof data)}
              >
                {item}
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.gameOver}>
          {" "}
          Game Over
          <button onClick={onMount}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default CountryCapitalGame;
