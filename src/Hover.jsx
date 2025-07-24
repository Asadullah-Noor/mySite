import React, { useState } from 'react';

const HoverCard = () => {
  const [hovered, setHovered] = useState(null);

  const cards = [
    { id: 1, title: 'HTML5', image: '/html.webp' },
    { id: 2, title: 'CSS3', image: '/css.webp' },
    { id: 3, title: 'JavaScript', image: '/javascript.webp' },
  ];

  return (
    <div className="w-[210px] h-[254px] bg-[#212121] flex gap-[5px] p-1.5 rounded-sm overflow-hidden">
      {cards.map((card, index) => (
        <div
          key={card.id}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={`h-full transition-all duration-500 ease-in-out
                      flex justify-center items-center 
                      rounded-sm cursor-pointer border border-pink-500 bg-[#212121]
                      ${hovered === null ? 'w-[70px]' : hovered === index ? 'w-[160px]' : 'w-[20px]'}`}
        >
          <span
            className={`transition-all duration-500 origin-left text-pink-400 uppercase tracking-wide text-xs
                        ${hovered === index ? 'rotate-0 px-2' : '-rotate-90 text-[10px]'}`}
          >
            {card.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HoverCard;
