"use client";

import { CiCircleCheck } from "react-icons/ci";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess: React.FC<FormSuccessProps> = ({ message }) => {
  if (!message) {
    return null;
  }
  return (
    <div className="py-2 bg-emerald-500/15 text-emerald-500 text-sm flex items-center justify-center rounded-md gap-x-2">
      <CiCircleCheck className="w-4 h-4" />
      {message}
    </div>
  );
};
