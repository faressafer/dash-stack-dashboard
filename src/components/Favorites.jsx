import React from "react";
import Banner from "./Banner";
import Card from "./Card";

const Favorites = () => {
  const cardCount = 8; // Total number of cards
  const cardsPerRow = 4; // Cards in each row

  return (
    <div className="ml-[240px] mt-[70px] p-6 border min-h-screen">
      <h1 className="text-[#202224] font-nunito-sans text-[32px] font-bold tracking-[-0.114px]">
        Favorites
      </h1>
      <div className="space-y-4">
        {[...Array(Math.ceil(cardCount / cardsPerRow))].map((_, rowIndex) => (
          <div key={rowIndex} className="flex space-x-4">
            {[...Array(cardsPerRow)].map((_, cardIndex) => {
              const cardKey = rowIndex * cardsPerRow + cardIndex;
              return cardKey < cardCount ? <Card key={cardKey} /> : null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
