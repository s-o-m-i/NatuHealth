'use client';

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const GetStarted = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const progressWidth = (currentStep - 1) * 50; // Assuming each step contributes 50% to progress

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep < 3 ? prevStep + 1 : prevStep);
  };

  return (
    <>
      <div className="home-container z-10 relative my-bg-color w-full min-h-screen bg-black px-10 text-white">
        <Navbar />
        <div className="roshni hidden sm:block -z-10 w-96 h-96 roshni-color absolute  left-0 top-36"></div>
        <div className="card-container mt-12 mb-24 flex items-center justify-center">
          <div className="selection-box  rounded-md card-bg-color sm:py-8 py-2 px-2 sm:px-12">
            {/* Progress bar */}
            <div className="w-full mb-5 progress-bg rounded-full h-3.5 dark:bg-gray-700">
              <div
                className="btn-bg-gradient h-3.5 rounded-full"
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>

            <h1 className="text-xl sm:text-4xl leading-snug font-medium">
              {currentStep === 1
                ? "Digging a little deeper, which of the following are you interested in exploring?"
                : currentStep === 2
                ? "Second step heading..."
                : "Third step heading..."}
            </h1>
            {/* Step buttons */}
            {currentStep === 1 && (
                <div className="options grid gap-5 sm:grid-cols-3 mt-5">
              <button onClick={nextStep} className="text-lg px-4 border border-purple-700 py-1 rounded-xl hover:bg-purple-600">
                Sleep
              </button>
              <button onClick={nextStep} className="text-lg px-4 border border-purple-700 py-1 rounded-xl hover:bg-purple-600">
                Hormones
              </button>
              <button onClick={nextStep} className="text-lg px-4 border border-purple-700 py-1 rounded-xl hover:bg-purple-600">
                Allergies
              </button>
              <button onClick={nextStep} className="text-lg px-4 border border-purple-700 py-1 rounded-xl hover:bg-purple-600">
                Nutrition
              </button>
              <button onClick={nextStep} className="text-lg px-4 border border-purple-700 py-1 rounded-xl hover:bg-purple-600">
                Allergies
              </button>
              <button onClick={nextStep} className="text-lg px-4 border border-purple-700 py-1 rounded-xl hover:bg-purple-600">
                Poop
              </button>
              <button onClick={nextStep} className="text-lg px-4 border border-purple-700 py-1 rounded-xl hover:bg-purple-600">
                Supplements
              </button>
              <button onClick={nextStep} className="text-lg px-4 border border-purple-700 py-1 rounded-xl hover:bg-purple-600">
                Vaccines
              </button>
              <button onClick={nextStep} className="text-lg px-4 border border-purple-700 py-1 rounded-xl hover:bg-purple-600">
                Sexual
              </button>
            </div>
            )}

            {currentStep === 2 && (
                <div className="options grid gap-5 sm:grid-cols-3 mt-5">
              <button onClick={nextStep} className="text-lg px-4 border border-purple-700 py-1 rounded-xl hover:bg-purple-600">
                Sleep
              </button>
              <button onClick={nextStep} className="text-lg px-4 border border-purple-700 py-1 rounded-xl hover:bg-purple-600">
                Hormones
              </button>
              <button onClick={nextStep} className="text-lg px-4 border border-purple-700 py-1 rounded-xl hover:bg-purple-600">
                Allergies
              </button>
              <button onClick={nextStep} className="text-lg px-4 border border-purple-700 py-1 rounded-xl hover:bg-purple-600">
                Nutrition
              </button>
            
            </div>
            )}

            {currentStep === 3 && (
              <div className="options grid gap-5 sm:grid-cols-3 mt-5">
                {/* Step 3 buttons */}
                {/* ... Your buttons for the third step ... */}
              </div>
            )}

            <div className="flex items-center justify-end mt-5">
              {currentStep < 3 ? (
                <button
                  onClick={nextStep}
                  className="bg-green-500 py-2 flex items-center  gap-2  px-10 rounded-full"
                >
                  Next
                  <img src="/rightarrow.png" alt="" />
                </button>
              ) : (
                <button
                  onClick={() => console.log("Submit clicked")}
                  className="bg-green-500 py-2 flex items-center  gap-2  px-10 rounded-full"
                >
                  Submit
                  <img src="/rightarrow.png" alt="" />
                </button>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default GetStarted;
