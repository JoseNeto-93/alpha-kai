export interface Differential {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface StructureSlide {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  role: string;
  imageUrl: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isHighlighted: boolean;
  tagline: string;
}

export interface CounterItem {
  id: string;
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
}
