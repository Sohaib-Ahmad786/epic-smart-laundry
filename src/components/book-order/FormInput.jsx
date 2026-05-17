"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function FormInput({
  label,
  id,
  type = "text",
  placeholder,
  icon: Icon,
  required = false,
  error = "",
  value,
  onChange,
  className,
  autoComplete,
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-700 flex items-center gap-1.5"
      >
        {label}
        {required && (
          <span className="text-rose-500" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <div className="relative group">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Icon
              className="w-5 h-5 text-slate-400 group-focus-within:text-secondary transition-colors"
              aria-hidden="true"
            />
          </div>
        )}
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-required={required}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "w-full rounded-xl bg-slate-50 border py-3.5 transition-all outline-none text-sm",
            Icon ? "pl-11 pr-4" : "px-4",
            error
              ? "border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10"
              : "border-slate-200 focus:border-secondary focus:ring-4 focus:ring-secondary/10 hover:border-slate-300"
          )}
        />
      </div>
      {error && (
        <motion.p
          id={`${id}-error`}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-rose-500 font-medium pl-1"
          role="alert"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
