import React from "react";
import BreifcaseIcon from "../assets/BriefcaseIcon";
import BellIcon from "../assets/BellIcon";
function NavigationBar() {
  return (
    <div>
      <div className="flex justify-between items-center border-b-2 w-screen p-6 border-zinc-200">
        <div className="flex gap-5">
          <BreifcaseIcon />
          <div className="text-2xl font-bold">Remote Jobs</div>
        </div>
        <div className="flex items-center gap-4">
          <BellIcon width={20} height={20}/>
          <div>Profile</div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
