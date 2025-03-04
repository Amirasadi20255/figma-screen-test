import React from "react";

function StartButton() {
  return (
    <div className="self-stretch mt-28 text-lg font-bold text-orange-500 whitespace-nowrap">
      <button
        className="flex flex-col justify-center items-center px-6 py-2.5 w-full bg-white min-h-[50px] rounded-[50px]"
        aria-label="Start onboarding"
      >
        <span className="gap-2 self-stretch">Start</span>
        <div className="flex w-36 max-w-full min-h-0" />
      </button>
    </div>
  );
}

export default StartButton;