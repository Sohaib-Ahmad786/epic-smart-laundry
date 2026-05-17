"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrackingBackground from "@/components/track-order/TrackingBackground";
import TrackingHero from "@/components/track-order/TrackingHero";
import TrackingSearch from "@/components/track-order/TrackingSearch";
import OrderStatusCard from "@/components/track-order/OrderStatusCard";
import TrackingTimeline from "@/components/track-order/TrackingTimeline";
import DeliveryProgress from "@/components/track-order/DeliveryProgress";
import OrderDetails from "@/components/track-order/OrderDetails";
import TrackingBenefits from "@/components/track-order/TrackingBenefits";
import EmptyState from "@/components/common/EmptyState";
import Container from "@/components/common/Container";
import { motion, AnimatePresence } from "framer-motion";

export default function TrackOrderPage() {
  const [trackedOrder, setTrackedOrder] = useState(null);

  const handleSearch = (orderId) => {
    setTrackedOrder(orderId);
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col relative" id="main-content">
        <TrackingBackground />

        <div className="pb-12">
          <TrackingHero />
          <TrackingSearch onSearch={handleSearch} />

          <AnimatePresence mode="wait">
            {trackedOrder ? (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Container>
                  <OrderStatusCard orderId={trackedOrder} />

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    <TrackingTimeline />
                    <div className="flex flex-col gap-6">
                      <DeliveryProgress />
                      <OrderDetails />
                    </div>
                  </div>
                </Container>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Container>
                  <EmptyState
                    icon="search"
                    title="No Order Tracked Yet"
                    description="Enter your order ID above to see real-time tracking updates, delivery progress, and order details."
                    className="py-8"
                  />
                </Container>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <TrackingBenefits />
      </main>
      <Footer />
    </>
  );
}
