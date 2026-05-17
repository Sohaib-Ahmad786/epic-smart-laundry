import { CheckCircle2 } from "lucide-react";

export default function FeatureBadge({ text }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
      <span className="text-slate-600 text-sm font-medium">{text}</span>
    </li>
  );
}
