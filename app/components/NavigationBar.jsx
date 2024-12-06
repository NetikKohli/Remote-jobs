import React from "react";
import BreifcaseIcon from "../assets/BriefcaseIcon";
import BellIcon from "../assets/BellIcon";
import Profile  from "../assets/Profile"; 

function NavigationBar() {
  return (
    <nav>
      <div className="flex justify-between items-center border-b-2 w-screen p-5 border-zinc-200">
        <div className="flex gap-5">
          <BreifcaseIcon />
          <div className="text-2xl font-bold">Remote Jobs</div>
        </div>
        <div className="flex items-center gap-4">
          <BellIcon width={20} height={20}/>
          <Profile width={30} height={30}/>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
