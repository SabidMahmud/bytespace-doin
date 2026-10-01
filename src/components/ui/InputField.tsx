import React, { InputHTMLAttributes } from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  labelRight?: React.ReactNode;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, id, labelRight, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor={id}
            className="font-sans font-medium text-sm leading-[16.8px] text-shuttle-gray-950"
          >
            {label}
          </label>
          {labelRight && <div>{labelRight}</div>}
        </div>
        <input
          id={id}
          ref={ref}
          className={`w-full h-13 px-6 py-3 bg-white border border-shuttle-gray-100 rounded-xl font-sans font-normal text-lg leading-[28.8px] text-shuttle-gray-950 placeholder-shuttle-gray-400 focus:outline-none focus:border-persian-blue-800 focus:ring-2 focus:ring-persian-blue-800/20 transition-all ${className}`}
          {...props}
        />
      </div>
    );
  }
);

InputField.displayName = "InputField";
