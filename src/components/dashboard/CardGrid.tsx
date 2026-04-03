"use client";

import { processCards } from "@/data/cards";
import CardItem from "./CardItem";
import CardConnector from "./CardConnector";

export default function CardGrid() {
  // Split cards into rows of 3 for the grid layout
  const rows = [];
  for (let i = 0; i < processCards.length; i += 3) {
    rows.push(processCards.slice(i, i + 3));
  }

  return (
    <div className="space-y-5">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-3 gap-10 relative">
          {row.map((card, colIndex) => {
            const globalIndex = rowIndex * 3 + colIndex;
            const isLastInRow = colIndex === row.length - 1;

            return (
              <div key={card.id} className="relative">
                <CardItem card={card} index={globalIndex} />
                {/* Horizontal connector — not on last card in row */}
                {!isLastInRow && <CardConnector direction="horizontal" />}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
