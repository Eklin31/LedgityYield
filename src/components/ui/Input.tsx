import React, { ForwardedRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          "flex w-full rounded-xl border-2 border-border bg-accent px-3 h-[calc(2.9rem+3px)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground",
          className
        )}
        {...props}
      />
    );
  }
);

// Optionally set a display name for debugging purposes
Input.displayName = "Input";
