import { useState, useEffect } from "react";
import { Item } from "../../Types";

interface Values {
  items: Item;
}

export default function List({ items }: Values) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [items]);
  let extractedPrice = 0;
  if (!items?.percentage) {
    extractedPrice = items?.price ? parseInt(items.price.split(" ")[0]) : 0;
  } else {
    extractedPrice = items?.percentage ?? 0;
  }

  const pricePercentage = `${extractedPrice}%`;

  return (
    <div className="w-full h-8 bg-transparent flex items-center text-xs font-sans text-white p-4">
      <div className="md:w-[33%] h-full flex items-center justify-end pe-3">
        <p className="truncate w-20 text-end me-4">{items?.item}</p>
      </div>
      <div
        style={{width: pricePercentage}}
        className="h-full w-[33%] flex items-center transition-all duration-700 ease-in scale-110"
      >
        {isLoaded && (
          <span className={`w-[90%] h-2 ${items?.color} rounded-e-md`}></span>
        )}
      </div>
      <div className="w-[33%] h-full flex items-center justify-start">
        <p className="truncate">{items?.price}</p>
      </div>
    </div>
  );
}
