import { ReactElement, useState } from "react";

export const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleNext = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return ++i;
    });
  };

  const handlePrevious = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return --i;
    });
  };

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    handleNext,
    handlePrevious,
    steps,
  };
};
