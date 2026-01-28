import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Step1UserData } from "./step/Step1UserData";
import { Step2VerifyCode } from "./step/Step2VerifyCode";
import { Step3NewPassword } from "./step/Step3NewPassword";
import type { ForgotPasswordData } from "@/features/auth/forgot-password/model/types";

export const ForgotPasswordForm = () => {
  const [step, setStep] = useState(1);
  const [allData, setAllData] = useState<Partial<ForgotPasswordData>>({});
  const navigate = useNavigate();

  const handleNextStep = (stepData: Partial<ForgotPasswordData>) => {
    setAllData((prev) => ({ ...prev, ...stepData }));
    setStep((prev) => prev + 1);
  };

  const handleFinalSubmite = (finalData: Partial<ForgotPasswordData>) => {
    const fullData = { ...allData, ...finalData };

    console.log("Sending to server via RTK:", fullData);
    navigate("/sign-in");
  };

  return (
    <div>
      {step === 1 && <Step1UserData onNext={handleNextStep} />}
      {step === 2 && <Step2VerifyCode onNext={handleNextStep} />}
      {step === 3 && <Step3NewPassword onSubmit={handleFinalSubmite} />}
    </div>
  );
};
