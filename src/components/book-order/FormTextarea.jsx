"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function FormTextarea({
  label,
  id,
  placeholder,
  required = false,
  error = "",
  value,
  onChange,
  rows = 4,
  className,
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
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
        aria-required={required}
        className={cn(
          "w-full rounded-xl bg-slate-50 border px-4 py-3.5 transition-all outline-none text-slate-800 text-sm resize-none",
          error
            ? "border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10"
            : "border-slate-200 focus:border-secondary focus:ring-4 focus:ring-secondary/10 hover:border-slate-300"
        )}
      />
      {error && (
        <motion.p
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
