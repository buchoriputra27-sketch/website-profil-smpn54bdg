import {
  Cross, Drum, Flag, Flower2, Goal, HeartPulse, Leaf, Music, Sparkles, Swords, Tent, Trophy, Volleyball,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  sparkles: Sparkles, flower: Flower2, heart: HeartPulse, leaf: Leaf,
  swords: Swords, drum: Drum, tent: Tent, music: Music, volleyball: Volleyball,
  flag: Flag, cross: Cross, goal: Goal, trophy: Trophy,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = MAP[name] ?? Sparkles;
  return <C className={className} aria-hidden />;
}
