import React from "react";
import { CircleHelp, CircleArrowUp } from "lucide-react";

type Props = {
  x: number;
  y: number;
  value: number;
  visible: boolean;
};

export const ChartTooltip: React.FC<Props> = ({ x, y, value, visible }) => {
  const formatted = `$${(value / 1000).toFixed(2)}k`;

  return (
    <div
      className={`z-50 fixed pointer-events-none transition-opacity duration-150 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <div className="text-white bg-[#222324] p-5 rounded-md border border-[#525252] shadow-lg">
        <div className="flex justify-between items-center">
          <div className="text-[20px] font-semibold mb-1">{formatted}</div>
          <div className="text-[#888888]">
            <CircleHelp size={16} />
          </div>
        </div>
        <div className="flex items-center text-[16px] text-gray-400 mt-2.5">
          <span className="mr-2.5">
            <CircleArrowUp color="#C8E972" />
          </span>
          4.6% above target
        </div>
      </div>
    </div>
  );
};

export default ChartTooltip;
