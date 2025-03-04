"use client";
import * as React from "react";
import OnboardingImage from "./OnboardingImage";
import OnboardingDescription from "./OnboardingDescription";
import StartButton from "./StartButton";

function Onboarding() {
  return (
    <section className="flex overflow-hidden flex-col items-center px-6 pb-8 mx-auto w-full leading-8 text-center bg-orange-500 max-w-[480px] pt-[483px]">
      <OnboardingImage />
      <OnboardingDescription />
      <StartButton />
    </section>
  );
}

export default Onboarding;