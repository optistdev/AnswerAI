import { useState } from "react";
import ChargingIcon from "../assets/icons/ChargingIcon";
import CustomizedButton from "../components/button";
import RefreshIcon from "../assets/icons/RefreshIcon";
import UploadIcon from "../assets/icons/UploadIcon";
import SparklesIcon from "../assets/icons/SparklesIcon";
import { ChevronDown, ChevronUp } from "lucide-react";
import DotsIcon from "../assets/icons/DotsIcon";

const DashboardPage = () => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className="w-full h-full bg-[#161618] rounded-[5px] border-border-primary border pl-10 pr-9">
      <div className="md:flex justify-between w-full pt-4 md:pt-10 text-white">
        <div className="flex items-center justify-center gap-[13px]">
          <div>
            <ChargingIcon className="text-white text-xs md:text-lg" />
          </div>
          <p className="text-2xl md:text-[32px] tracking-normal">
            Charging Station
          </p>
        </div>
        <div className="flex items-center gap-3 mt-3 md:mt-0 justify-between md:justify-center">
          <CustomizedButton
            className="h-10 w-10"
            icon={<RefreshIcon className="text-description" />}
            onClick={() => console.log("refresh")}
          />
          <CustomizedButton
            label="Edit Variables"
            className="h-10 px-2"
            onClick={() => setOpened(true)}
          />
          <CustomizedButton
            className="h-10 w-10"
            icon={<UploadIcon className="" />}
            onClick={() => console.log("upload")}
          />
        </div>
      </div>
      <SenarioResults />
    </div>
  );
};

const results = [
  "The best found configuratioin based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.",
  "The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.",
];

const SenarioResults = () => {
  const [show, setShow] = useState<boolean>(true);
  return (
    <div className="pt-4 md:pt-10 flex flex-col transition-all duration-500">
      <div className="flex justify-between">
        <div className="flex justify-between gap-2.5 items-center">
          <SparklesIcon className="text-[#DAFD7F]" />
          <p className="text-xl md:text-2xl text-[#DCFF7F]">Best Scenario Results</p>
        </div>
        <CustomizedButton
          className="rounded-full border-[#C8E972] border w-11 h-[34px] "
          icon={
            show ? (
              <ChevronUp className="text-[#C8E972]" />
            ) : (
              <ChevronDown className="text-[#C8E972]" />
            )
          }
          onClick={() => setShow(!show)}
        />
      </div>
      <div className="flex flex-col gap-2.5 pt-5">
        {show &&
          results.length &&
          results.map((item: string, index: number) => (
            <div
              key={`${item}-${index}`}
              className="flex justify-between items-center text-[#C8E972] border-[#C8E972] border-[0.5px] rounded-[6px] py-4 px-6"
            >
              <p>{item}</p>
              <CustomizedButton className="" onClick={() => console.log("")} icon={<DotsIcon className="text-[#C8E972]" />}/>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DashboardPage;

