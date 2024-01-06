import React from "react";

interface Values {
  value: string;
  Icon: React.FC | undefined;
  color: string;
}

export default function BottomBar({ value, Icon, color }: Values) {
  return (
    <div className="flex w-full">
      {Icon && <div className={`${color}`}>
        <Icon />
      </div> }
      <p className={`text-[10px] ${color}`}>{value}</p>
    </div>
  );
}
