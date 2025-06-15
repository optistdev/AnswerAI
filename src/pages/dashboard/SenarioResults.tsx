import { useState } from "react";
import SparklesIcon from "../../assets/icons/SparklesIcon";
import { ChevronDown, ChevronUp } from "lucide-react";
import DotsIcon from "../../assets/icons/DotsIcon";
import Button from "../../components/button";

const results = [
  "The best found configuratioin based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.",
  "The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.",
];



const SenarioResults = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <div className="pt-4 md:pt-8 flex flex-col">
      <div className="flex justify-between">
        <div className="flex justify-between gap-2.5 items-center">
          <SparklesIcon className="text-[#DAFD7F]" />
          <p className="text-xl md:text-2xl text-[#DCFF7F]">
            Best Scenario Results
          </p>
        </div>
        <Button
          className="rounded-full border-[#C8E972] border w-11 h-[34px]"
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

      {/* Results section */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          show ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2.5 pt-5">
          {results.length > 0 &&
            results.map((result: string, index: number) => (
              <div
                key={`${result}-${index}`}
                className="flex justify-between items-center text-[#C8E972] border-[#C8E972] border-[0.5px] rounded-[6px] py-4 px-6"
              >
                <p>{result}</p>
                <Button
                  className="border-none bg-inherit"
                  onClick={() => console.log("")}
                  icon={<DotsIcon className="text-[#C8E972]" />}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SenarioResults;