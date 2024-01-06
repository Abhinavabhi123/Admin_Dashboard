import React from "react";
import { values } from "../Types";
import BottomBar from "./BottomBar";

const DataCard: React.FC<values> = ({ item, Icon }) => {
  return (
    <div className="w-[100%] md:h-[100%] h-28 flex flex-col justify-between items-center bg-black  rounded-lg pb-1 p-3">
      <div className="flex gap-1 w-full h-[30%]">
        <p className="text-[10px] text-white overflow-hidden">{item?.title}</p>
        {item?.Icon && typeof Icon === "function" ? (
          <div className="text-sm text-white tracking-wider">
            {" "}
            <Icon />
          </div>
        ) : null}   
      </div>
      <div className="w-full h-[30%] flex gap-1 justify-center items-center">
        <p className={`md:text-sm text-base text-wrap ${item?.color}`}>{item?.value}</p>
        {item?.currency && <p className="md:text-sm text-xs text-white">{item.currency}</p>}
      </div>
      {item?.footer ? (
        <div>
          {
            <BottomBar
              value={item?.footer?.value}
              Icon={item?.footer?.Icon}
              color={item?.footer?.color}
            />
          }
        </div>
      ) : (
        <div className="w-full h-4"></div>
      )}
    </div>
  );
};

export default DataCard;
