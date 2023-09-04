import { useState } from 'react';
import ProgressBar from './ProgressBar';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="App">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <div className="flex justify-between">
        <button onClick={prevStep} disabled={currentStep === 1}>
          Previous
        </button>
        <button onClick={nextStep} disabled={currentStep === totalSteps}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
