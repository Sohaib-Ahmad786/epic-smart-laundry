"use client";

import { useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Copy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SuccessModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const closeButtonRef = useRef(null);
  const orderId = useMemo(
    () => "ORD-" + Math.floor(100000 + Math.random() * 900000),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOpen]
  );

  // Focus trap: focus the close button when modal opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(orderId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = orderId;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md z-[101] bg-white rounded-[2rem] p-8 shadow-2xl flex flex-col items-center text-center overflow-hidden"
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
              aria-hidden="true"
            />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.15, stiffness: 200 }}
              className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </motion.div>

            <h3
              id="success-modal-title"
              className="text-2xl font-bold text-slate-800 mb-2"
            >
              Booking Successful!
            </h3>
            <p className="text-slate-600 mb-6">
              Your laundry pickup has been scheduled successfully. Our rider will
              contact you shortly.
            </p>

            <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1 text-left">
                  Order ID
                </p>
                <p className="font-mono font-bold text-slate-700 text-lg">
                  {orderId}
                </p>
              </div>
              <button
                onClick={copyToClipboard}
                className="p-2.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-500 hover:text-slate-800"
                aria-label={copied ? "Copied!" : "Copy order ID"}
              >
                {copied ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="w-full space-y-3">
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 active:scale-[0.98] transition-all"
              >
                Done
              </button>
              <Link
                href="/track-order"
                className="w-full py-4 bg-white text-slate-600 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 active:scale-[0.98] transition-all block text-center"
              >
                Track Your Order
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
