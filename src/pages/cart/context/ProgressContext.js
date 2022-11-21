import React, { createContext, useState } from 'react';
const StepContext = createContext();
function Provider({ children }) {
  const maxSteps = 4;
  const [step, setStep] = useState(1);
  const next = () => {
    // 沒錯誤才會到下一步
    if (step < maxSteps) setStep(step + 1);
  };
  const prev = () => {
    if (step > 1) setStep(step - 1);
  };
  return;
}
export { Provider };
export default StepContext;
