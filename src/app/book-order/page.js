"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingBackground from "@/components/book-order/BookingBackground";
import BookingHero from "@/components/book-order/BookingHero";
import BookingForm from "@/components/book-order/BookingForm";
import BookingSummary from "@/components/book-order/BookingSummary";
import BookingBenefits from "@/components/book-order/BookingBenefits";
import SuccessModal from "@/components/book-order/SuccessModal";
import Container from "@/components/common/Container";

export default function BookOrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    plan: "onetime",
    date: "",
    time: "",
    instructions: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        service: "",
        plan: "onetime",
        date: "",
        time: "",
        instructions: "",
      });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col relative" id="main-content">
        <BookingBackground />
        <BookingHero />

        <section className="py-12 relative z-10" aria-labelledby="booking-form-heading">
          <Container>
            <h2 id="booking-form-heading" className="sr-only">
              Booking Form
            </h2>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              <div className="w-full lg:w-7/12">
                <BookingForm
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                />
              </div>
              <div className="w-full lg:w-5/12 lg:sticky lg:top-28">
                <BookingSummary formData={formData} />
              </div>
            </div>
          </Container>
        </section>

        <BookingBenefits />
      </main>
      <Footer />

      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
