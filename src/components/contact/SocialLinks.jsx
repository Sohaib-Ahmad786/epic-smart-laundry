"use client";

import { motion } from "framer-motion";
import { Globe, Camera, Bird, MessageCircle } from "lucide-react";
import Link from "next/link";
import Container from "../common/Container";

const socials = [
  { icon: Globe, name: "Facebook", href: "#" },
  { icon: Camera, name: "Instagram", href: "#" },
  { icon: MessageCircle, name: "WhatsApp", href: "https://wa.me/1234567890" },
  { icon: Bird, name: "Twitter", href: "#" }
];

export default function SocialLinks() {
  return (
    <section className="py-12 relative z-10 bg-slate-50">
      <Container>
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-8">Connect With Us</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socials.map((social, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative"
              >
                <Link href={social.href} className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300">
                  <social.icon className="w-7 h-7 text-slate-600 group-hover:text-secondary transition-colors duration-300" />
                </Link>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
