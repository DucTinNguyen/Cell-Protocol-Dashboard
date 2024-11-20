"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Figma, FileSignature } from "lucide-react";

interface NavItem {
  id: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface ProgressNavProps {
  items?: NavItem[];
  onStepChange?: (step: number) => void;
    initialStep?: number;
    currentStep: number;
    setCurrentStep: (step: number) => void;
}

const defaultItems: NavItem[] = [
  { id: 1, label: "Detail", isActive: false, isCompleted: true },
  { id: 2, label: "Links", isActive: true, isCompleted: false },
  { id: 3, label: "Media", isActive: false, isCompleted: false },
  { id: 4, label: "Resources", isActive: false, isCompleted: false },
  { id: 5, label: "Member", isActive: false, isCompleted: false },
];

const ProgressNav: React.FC<ProgressNavProps> = ({
  items = defaultItems,
  onStepChange,
    initialStep = 1,
    currentStep,
  setCurrentStep
}) => {
//   const [currentStep, setCurrentStep] = useState(initialStep);

  const updateStep = (newStep: number) => {
    if (newStep >= 1 && newStep <= items.length) {
      setCurrentStep(newStep);
      onStepChange?.(newStep);
    }
  };

  const handleNext = () => {
    updateStep(currentStep + 1);
  };

  const handlePrevious = () => {
    updateStep(currentStep - 1);
  };

  const handleStepClick = (id: number) => {
    updateStep(id);
  };

  const updatedItems = items.map((item) => ({
    ...item,
    isActive: item.id === currentStep,
    isCompleted: item.id < currentStep,
  }));

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Progress Bar */}
      <div className="flex items-center w-full bg-black p-4 gap-2 rounded-lg">
        {updatedItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <div
              className={`flex items-center gap-2 cursor-pointer ${
                item.isActive
                  ? "text-green-400"
                  : item.isCompleted
                  ? "text-green-400"
                  : "text-gray-400"
              }`}
              onClick={() => handleStepClick(item.id)}
            >
              <div
                className={`
                flex items-center justify-center
                w-8 h-8 rounded-full transition-colors duration-200
                ${
                  item.isCompleted
                    ? "bg-[#8CE339]"
                    : item.isActive
                    ? "bg-[#8CE339]"
                    : "bg-gray-700"
                }
                ${item.isActive && !item.isCompleted ? "text-[#000000]" : ""}
                ${!item.isActive && !item.isCompleted ? "text-[#C3C3C3]" : ""}
              `}
              >
                {item.isCompleted ? (
                  <svg
                    className="w-5 h-5 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  item.id
                )}
              </div>
                    <span className="hidden sm:inline text-[#798675] text-base font-semibold">
                {item.label}
                    </span>
                    {index < items.length - 1 && <figure>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10.796 9.99907L7.0835 6.28657L8.144 5.22607L12.917 9.99907L8.144 14.7721L7.0835 13.7116L10.796 9.99907Z" fill="#E0DDD9" />
                        </svg>
                </figure> }
            </div>

            {index < items.length - 1 && (
              <div className="flex-grow h-px bg-gray-700 mx-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressNav;
