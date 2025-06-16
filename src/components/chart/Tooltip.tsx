import React from "react";
import { CircleHelp, CircleArrowUp } from "lucide-react";

type Props = {
  x: number; // Horizontal screen position of the tooltip
  y: number; // Vertical screen position of the tooltip
  value: number; // Numeric value to format and display
  visible: boolean; // Controls tooltip visibility
};

/**
 * ChartTooltip - A floating chart tooltip.
 * Displays a formatted value and a comparison message.
 */
export const ChartTooltip: React.FC<Props> = ({ x, y, value, visible }) => {
  const formatted = `$${(value / 1000).toFixed(2)}k`; // Format to "$xx.xxk"

  return (
    <div
      className={`fixed z-50 pointer-events-none transition-opacity duration-150 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <div className="text-white bg-background-surface p-5 rounded-md border border-border-secondary shadow-lg">
        {/* Top Row: Value + Help Icon */}
        <div className="flex justify-between items-center">
          <div className="text-[20px] font-semibold mb-1">{formatted}</div>
          <div className="text-[#888888]">
            <CircleHelp size={16} />
          </div>
        </div>

        {/* Bottom Row: Comparison Indicator */}
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
