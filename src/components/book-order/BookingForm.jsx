"use client";

import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Package,
  ArrowRight,
} from "lucide-react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";
import { ButtonSpinner } from "../common/LoadingSpinner";

export default function BookingForm({
  formData,
  setFormData,
  onSubmit,
  isSubmitting,
}) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl border border-slate-100 relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      />

      <h3 className="text-2xl font-bold text-primary mb-8 relative z-10">
        Pickup Details
      </h3>

      <form onSubmit={onSubmit} className="space-y-6 relative z-10" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            id="name"
            label="Full Name"
            placeholder="John Doe"
            icon={User}
            required
            value={formData.name || ""}
            onChange={handleChange}
            autoComplete="name"
          />
          <FormInput
            id="phone"
            type="tel"
            label="Phone Number"
            placeholder="+92 300 0000000"
            icon={Phone}
            required
            value={formData.phone || ""}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            id="email"
            type="email"
            label="Email Address"
            placeholder="john@example.com"
            icon={Mail}
            required
            value={formData.email || ""}
            onChange={handleChange}
            autoComplete="email"
          />
          <FormInput
            id="address"
            label="Pickup Address"
            placeholder="Hostel/Room/House No..."
            icon={MapPin}
            required
            value={formData.address || ""}
            onChange={handleChange}
            autoComplete="street-address"
          />
        </div>

        <div className="border-t border-slate-100 my-6 pt-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormSelect
            id="service"
            label="Service Type"
            icon={Package}
            required
            options={[
              { label: "Wash & Iron", value: "wash-iron" },
              { label: "Dry Cleaning", value: "dry-cleaning" },
              { label: "Wash & Fold", value: "wash-fold" },
              { label: "Ironing Only", value: "ironing" },
              { label: "Express Service", value: "express" },
            ]}
            value={formData.service || ""}
            onChange={handleChange}
          />
          <FormSelect
            id="plan"
            label="Subscription Plan"
            icon={Package}
            required
            options={[
              { label: "One-Time Order", value: "onetime" },
              { label: "Student Package ($29/mo)", value: "student" },
              { label: "Hostel Package ($59/mo)", value: "hostel" },
              { label: "Employee Package ($99/mo)", value: "employee" },
            ]}
            value={formData.plan || ""}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            id="date"
            type="date"
            label="Pickup Date"
            icon={Calendar}
            required
            value={formData.date || ""}
            onChange={handleChange}
          />
          <FormSelect
            id="time"
            label="Pickup Time"
            icon={Clock}
            required
            options={[
              { label: "Morning (9 AM - 12 PM)", value: "morning" },
              { label: "Afternoon (12 PM - 4 PM)", value: "afternoon" },
              { label: "Evening (4 PM - 8 PM)", value: "evening" },
            ]}
            value={formData.time || ""}
            onChange={handleChange}
          />
        </div>

        <FormTextarea
          id="instructions"
          label="Special Instructions (Optional)"
          placeholder="Care instructions, specific pickup spot..."
          value={formData.instructions || ""}
          onChange={handleChange}
        />

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full py-4 mt-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <ButtonSpinner />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <span>Schedule Pickup Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
