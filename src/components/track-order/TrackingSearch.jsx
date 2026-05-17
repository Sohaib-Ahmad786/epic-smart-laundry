"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";
import { ButtonSpinner } from "../common/LoadingSpinner";

export default function TrackingSearch({ onSearch }) {
  const [orderId, setOrderId] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderId) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      onSearch(orderId);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="max-w-2xl mx-auto mb-16 relative z-10 px-4"
    >
      <form
        onSubmit={handleSubmit}
        className="relative group"
        role="search"
        aria-label="Track your order"
      >
        <div
          className="absolute -inset-1 bg-gradient-to-r from-secondary to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"
          aria-hidden="true"
        />
        <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 p-2 gap-2">
          <div className="hidden sm:flex pl-4 pr-2">
            <Search
              className="w-6 h-6 text-slate-400 group-focus-within:text-secondary transition-colors"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            placeholder="Enter Order ID (e.g. ORD-123456)"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value.toUpperCase())}
            className="flex-1 py-4 px-4 sm:px-2 outline-none text-slate-800 text-lg font-medium placeholder:text-slate-400 placeholder:font-normal placeholder:text-base uppercase bg-transparent"
            aria-label="Order ID"
          />
          <button
            type="submit"
            disabled={isSearching || !orderId}
            className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSearching ? (
              <>
                <ButtonSpinner />
                Searching
              </>
            ) : (
              "Track Order"
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
