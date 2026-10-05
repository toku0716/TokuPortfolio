import React from 'react';
import {
  Sparkles,
  BookOpen,
  Code2,
  Mail,
  HeartHandshake,
  Bot,
  Compass,
  MessageSquareText,
  Cpu,
  Layers,
  Terminal,
  Sparkle,
  CircleDot,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon, XTwitterIcon } from './Icons';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

const iconMap: Record<string, React.FC<any>> = {
  Sparkles,
  BookOpen,
  Code2,
  Mail,
  HeartHandshake,
  Bot,
  Compass,
  MessageSquareText,
  Cpu,
  Layers,
  Terminal,
  Sparkle,
  CircleDot,
  ExternalLink,
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = 'w-5 h-5', size }) => {
  const lower = name.toLowerCase();
  if (lower === 'github') {
    return <GithubIcon className={className} />;
  }
  if (lower === 'twitter' || lower === 'x') {
    return <XTwitterIcon className={className} />;
  }

  const IconComponent = iconMap[name] || iconMap[name.charAt(0).toUpperCase() + name.slice(1)] || CircleDot;
  return <IconComponent className={className} size={size} />;
};
