export interface SocialLink {
  id: string;
  title: string;
  url: string;
  description?: string;
  icon: string; // lucide icon name
  category: 'social' | 'code' | 'work' | 'blog' | 'contact';
  highlight?: boolean;
  badge?: string;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription?: string;
  category: 'web' | 'macos' | 'ai' | 'tool' | 'system';
  tags: string[];
  techStack: string[];
  features?: string[];
  demoUrl?: string;
  githubUrl?: string;
  iconName: string;
  accentColor: string;
  badge?: string;
  featured?: boolean;
  year: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface UserProfile {
  name: string;
  japaneseName: string;
  role: string;
  tagline: string;
  bio: string;
  avatarUrl: string;
  location: string;
  status: string;
  isAvailableForWork: boolean;
  email: string;
}
