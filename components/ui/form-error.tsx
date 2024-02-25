"use client";

import { BiSolidError } from "react-icons/bi";

interface FormErrorProps {
  message?: string;
}

export const FormError: React.FC<FormErrorProps> = ({ message }) => {
  if (!message) {
    return null;
  }
  return (
    <div className="py-2 bg-destructive/15 text-destructive text-sm flex items-center justify-center rounded-md gap-x-2">
      <BiSolidError className="w-4 h-4" />
      {message}
    </div>
  );
};
