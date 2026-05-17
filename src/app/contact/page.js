import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactBackground from "@/components/contact/ContactBackground";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import WhatsAppCard from "@/components/contact/WhatsAppCard";
import GoogleMapSection from "@/components/contact/GoogleMapSection";
import SocialLinks from "@/components/contact/SocialLinks";
import BusinessHours from "@/components/contact/BusinessHours";
import ContactCTA from "@/components/contact/ContactCTA";
import Container from "@/components/common/Container";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with EPIC Smart Laundry. 24/7 WhatsApp support, instant chat, easy pickup scheduling. We'd love to hear from you!",
  alternates: {
    canonical: "https://epicsmartlaundry.com/contact",
  },
  openGraph: {
    title: "Contact Us — EPIC Smart Laundry",
    description:
      "Get in touch with us. 24/7 WhatsApp support and easy pickup scheduling.",
    url: "https://epicsmartlaundry.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col relative" id="main-content">
        <ContactBackground />
        <ContactHero />

        {/* Contact Info + Form Combined Section */}
        <section className="py-12 relative z-10" aria-labelledby="contact-form-heading">
          <Container>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
              <div className="w-full lg:w-5/12 pt-4">
                <div className="mb-12">
                  <h2
                    id="contact-form-heading"
                    className="text-3xl md:text-4xl font-bold text-primary mb-4"
                  >
                    Get In Touch
                  </h2>
                  <p className="text-lg text-slate-600">
                    Have questions about our services or pricing? We&apos;re here to
                    help.
                  </p>
                </div>
                <ContactInfo />
              </div>
              <div className="w-full lg:w-7/12">
                <ContactForm />
              </div>
            </div>
          </Container>
        </section>

        <WhatsAppCard />
        <GoogleMapSection />
        <BusinessHours />
        <SocialLinks />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
