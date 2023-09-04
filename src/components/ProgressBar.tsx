interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const stepWidth = (currentStep / totalSteps) * 100;

  return (
    <div className="text-center relative before:h-1 before:bg-gray-400 before:absolute before:top-1/2 before:left-0 before:w-full before:-translate-y-1/2 before:-z-10">
      <div className="flex justify-between relative mb-7 w-80 max-w-full">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full ${
              index < currentStep ? 'border-blue-500' : 'border-gray-400'
            } border-4 border-gray-400 flex items-center justify-center text-gray-400 bg-white font-bold transition-all duration-300 ease-in-out  ${
              index === currentStep - 1 ? '' : ''
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="h-1 bg-blue-500 absolute top-1/2 left-0 w-0 -translate-y-1/2 -z-10 transition-all duration-300 ease-in-out " />
    </div>
  );
}

export default ProgressBar;
