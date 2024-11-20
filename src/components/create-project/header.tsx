import Image from "next/image";
import React from "react";
import ic_logo from "@/images/logo.svg";
import ProgressNav from "./progess";
import Link from "next/link";

const HeadCreateProject = ({
  currentStep,
  setCurrentStep,
}: {
  currentStep: number;
  setCurrentStep: (value: number) => void;
}) => {
  return (
    <main className="w-full h-[150px] relative z-50 lg:h-20 py-4 bg-[#000000] flex items-center">
      <section className="w-full px-4 lg:max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between">
        <section className="flex items-center gap-x-3 cursor-pointer">
          <figure>
            <Image src={ic_logo} alt="icon logo" width={32} height={32} />
          </figure>
          <span className="lg:text-xl text-[#fff] font-normal font-marbold">
            CELL PROTOCOL
          </span>
        </section>
        <div className="hidden lg:block">
          <ProgressNav
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </div>
              <div className="flex items-center justify-between mt-2">
                  <CircleProgress currentStep={currentStep} />
                  <Link href={`/`} className="cursor-pointer">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                      >
                          <rect
                              width="40"
                              height="40"
                              rx="10"
                              fill="url(#paint0_linear_51_1850)"
                              fill-opacity="0.2"
                          />
                          <rect
                              x="1"
                              y="1"
                              width="38"
                              height="38"
                              rx="9"
                              stroke="white"
                              stroke-opacity="0.2"
                              stroke-width="2"
                          />
                          <g opacity="0.3">
                              <path
                                  d="M15.7574 24.2431L24.2427 15.7578"
                                  stroke="#E0DDD9"
                                  stroke-width="2.4"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                              />
                              <path
                                  d="M15.7574 15.7579L24.2427 24.2432"
                                  stroke="#E0DDD9"
                                  stroke-width="2.4"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                              />
                          </g>
                          <defs>
                              <linearGradient
                                  id="paint0_linear_51_1850"
                                  x1="20"
                                  y1="0"
                                  x2="20"
                                  y2="40"
                                  gradientUnits="userSpaceOnUse"
                              >
                                  <stop offset="0.354974" stop-color="#737373" />
                                  <stop offset="1" stop-color="#D9D9D9" />
                              </linearGradient>
                          </defs>
                      </svg>
                  </Link>
              </div>
        
      </section>
    </main>
  );
};

export default HeadCreateProject;


const CircleProgress = ({ currentStep }: { currentStep: number }) => {
    
    const stepInfor = ['detail', 'links', 'media', 'resources', 'member', 'submitted']


    const totalSteps = 6

    // Calculate the progress percentage
    const progress = (currentStep / totalSteps) * 100;

    // Calculate the stroke dash properties
    const radius = 30;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="bg-black flex items-start gap-4 lg:hidden">
            <div className="relative">
                {/* Background circle */}
                <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    className="transform -rotate-90"
                >
                    <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        stroke="#333"
                        strokeWidth="8"
                        fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        stroke="#4ade80"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        style={{
                            strokeDasharray,
                            strokeDashoffset,
                            transition: 'stroke-dashoffset 0.5s ease'
                        }}
                    />
                </svg>
                {/* Step counter */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                    {currentStep}/{totalSteps}
                </div>
            </div>

            <div className="flex flex-col">
                <span className="text-gray-400 text-sm">Step {String(currentStep).padStart(2, '0')}</span>
                <span className="text-white text-2xl font-semibold capitalize">{stepInfor[currentStep -1]}</span>
            </div>
        </div>
    );
}