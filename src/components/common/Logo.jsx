import Link from "next/link";
import { Waves } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Logo({ className, textClassName = "text-primary" }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      <div className="bg-gradient-to-br from-secondary to-blue-600 p-2 rounded-xl text-white shadow-lg shadow-secondary/20 group-hover:shadow-secondary/40 transition-all duration-300">
        <Waves className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
      </div>
      <span className={cn("font-bold text-xl md:text-2xl tracking-tight", textClassName)}>
        EPIC <span className="text-secondary font-extrabold">Smart</span> Laundry
      </span>
    </Link>
  );
}
