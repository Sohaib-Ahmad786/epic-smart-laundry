"use client";

import Link from "next/link";
import {
  Globe,
  Camera,
  Bird,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../common/Logo";
import Container from "../common/Container";
import ScrollReveal from "../common/ScrollReveal";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Washing & Folding", href: "/services" },
  { name: "Ironing", href: "/services" },
  { name: "Dry Cleaning", href: "/services" },
  { name: "Shoe Cleaning", href: "/services" },
  { name: "Pickup & Delivery", href: "/services" },
];

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Bird, href: "#", label: "Twitter" },
  { icon: Camera, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer
      className="bg-primary text-slate-300 pt-20 pb-10 border-t border-slate-800"
      role="contentinfo"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <ScrollReveal animation="fadeUp" className="space-y-6">
            <div className="bg-white/5 inline-block p-2 rounded-xl">
              <Logo textClassName="text-white" />
            </div>
            <p className="text-slate-400 leading-relaxed text-sm max-w-xs">
              Premium laundry and dry cleaning services delivered right to your
              doorstep. Experience the luxury of perfectly cared-for clothes with
              EPIC Smart Laundry.
            </p>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5" role="list">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-secondary transition-colors inline-flex items-center gap-1 group text-sm"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <h3 className="text-white font-semibold text-lg mb-6">
              Our Services
            </h3>
            <ul className="space-y-3.5" role="list">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-secondary transition-colors inline-flex items-center gap-1 group text-sm"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal animation="fadeUp" delay={0.3}>
            <h3 className="text-white font-semibold text-lg mb-6">
              Contact Info
            </h3>
            <address className="not-italic">
              <ul className="space-y-4" role="list">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="w-5 h-5 text-secondary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-slate-400 text-sm">
                    123 Laundry Street, Smart City, SC 12345
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone
                    className="w-5 h-5 text-secondary shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+15551234567"
                    className="text-slate-400 text-sm hover:text-secondary transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail
                    className="w-5 h-5 text-secondary shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:hello@epiclaundry.com"
                    className="text-slate-400 text-sm hover:text-secondary transition-colors"
                  >
                    hello@epiclaundry.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle
                    className="w-5 h-5 text-accent shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 text-sm hover:text-accent transition-colors"
                  >
                    WhatsApp Available
                  </a>
                </li>
              </ul>
            </address>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} EPIC Smart Laundry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3" role="list" aria-label="Social media links">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-[18px] h-[18px]" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
