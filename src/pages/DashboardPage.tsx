import { useState } from "react";
import ChargingIcon from "../assets/icons/ChargingIcon";
import CustomizedButton from "../components/button";
import RefreshIcon from "../assets/icons/RefreshIcon";
import UploadIcon from "../assets/icons/UploadIcon";

const DashboardPage = () => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className="w-full h-[calc(100%-87px)] bg-[#161618] rounded-[5px] border-border-primary border pl-10 pr-9">
      <div className="flex justify-between w-full pt-10 text-white">
        <div className="flex items-center gap-[13px]">
          <div>
            <ChargingIcon className="text-white" />
          </div>
          <p className="text-[32px] tracking-normal">Charging Station</p>
        </div>
        <div className="flex items-center gap-3">
          <CustomizedButton
            className="h-10 w-10"
            icon={<RefreshIcon className="text-description"/>}
            onClick={() => setOpened(true)}
          />
          <CustomizedButton
            label="Edit Variables"
            className="h-10 px-2"
            onClick={() => setOpened(true)}
          />
          <CustomizedButton
            className="h-10 w-10"
            icon={<UploadIcon className=""/>}
            onClick={() => setOpened(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
