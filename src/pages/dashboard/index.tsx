import { useState } from "react";
import ChargingIcon from "../../assets/icons/ChargingIcon";
import Button from "../../components/button";
import RefreshIcon from "../../assets/icons/RefreshIcon";
import UploadIcon from "../../assets/icons/UploadIcon";
import SenarioResults from "./SenarioResults";
import { CircleHelp } from "lucide-react";
import EditVariables from "./EditVariables";
import ChartView from "../../components/chart";

const DashboardPage = () => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className="w-full min-h-full bg-[#161618] rounded-[5px] border-border-primary border px-5 md:pl-10 md:pr-9 pb-3">
      <div className="md:flex justify-between w-full pt-4 md:pt-8 text-white">
        {opened && <EditVariables />}
        <div className="flex items-center justify-center gap-[13px]">
          <div>
            <ChargingIcon className="text-white text-xs md:text-lg" />
          </div>
          <p className="text-xl md:text-2xl lg:text-[32px] tracking-normal">
            Charging Station
          </p>
        </div>
        <div className="flex items-center gap-3 mt-5 md:mt-0 justify-between md:justify-center">
          <Button
            className="h-10 w-10"
            icon={<RefreshIcon className="text-description" />}
            onClick={() => console.log("refresh")}
          />
          <Button
            label="Edit Variables"
            className="h-10 px-2"
            onClick={() => setOpened(true)}
          />
          <Button
            className="h-10 w-10"
            icon={<UploadIcon className="" />}
            onClick={() => console.log("upload")}
          />
        </div>
      </div>
      <SenarioResults />
      <div className="text-white grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6 mt-[30px]">
        <div className="xl:col-span-7 w-full h-full rounded-xl flex flex-col">
          <div className="mb-4">
            <h2 className="text-sm md:text-lg xl:text-2xl font-semibold">Graphs</h2>
          </div>

          <div className="flex-1 w-full h-full bg-[#222324] rounded-[5px] border border-[#525252]">
            <div className="flex justify-end pt-4 pr-6 md:pt-8 md:pr-12">
              <select className="bg-[#18181A80] text-white border border-neutral-600 rounded px-3 py-2 text-sm w-full sm:w-auto">
                <option>Unsatisfied Demand %</option>
              </select>
            </div>
            {/* <ChartView /> */}
          </div>
        </div>

        <div className="xl:col-span-5 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm md:text-lg xl:text-2xl font-semibold">
              Key Performance Indicators
            </h2>
            <button className="flex justify-center items-center gap-1 text-[14px] border border-neutral-600 h-8 w-[80px] md:w-[102px] rounded hover:bg-neutral-700">
              Variables <span className="text-[12px]">＋</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                label: "Infrastructure Units",
                description:
                  "This describes variable two and what the shown data means.",
                value: "€421.07",
              },
              {
                label: "Charging Growth",
                description:
                  "This describes variable two and what the shown data means.",
                value: "33.07",
              },
              {
                label: "Localization change",
                description:
                  "This describes variable two and what the shown data means.",
                value: "21.9%",
              },
              {
                label: "Fleet growth",
                description:
                  "This describes variable two and what the shown data means.",
                value: "7.03%",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-neutral-700 p-4 md:p-[30px] flex flex-col justify-between bg-[#222324]"
              >
                <div className="flex justify-between">
                  <p className="text-[12px] md:text-lg font-medium">{item.label}</p>
                  <span className="text-xs text-neutral-400 flex justify-end">
                    <CircleHelp />
                  </span>
                </div>
                <p className="text-description text-[8px]  md:text-[12px] leading-[150%] w-2/3">
                  {item.description}
                </p>
                <div className="text-xl md:text-[32px] font-semibold flex justify-end mt-4 md:mt-6 lg:mt-10">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
