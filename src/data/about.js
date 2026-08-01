import { FiAward, FiStar, FiHeart, FiSmile } from 'react-icons/fi';
import { BiDiamond, BiSpa, BiSupport } from 'react-icons/bi';

export const aboutFeatures = [
  { id: 1, text: 'Certified Beauty Specialists', icon: FiAward },
  { id: 2, text: 'International Premium Products', icon: BiDiamond },
  { id: 3, text: 'Luxury Hygienic Environment', icon: FiStar },
  { id: 4, text: 'Personalized Beauty Consultation', icon: FiHeart },
];

export const whyChooseUsCards = [
  {
    id: 1,
    title: 'Luxury Products',
    description: 'Only trusted premium beauty brands are used.',
    icon: BiDiamond,
  },
  {
    id: 2,
    title: 'Expert Professionals',
    description: 'Certified stylists with years of experience.',
    icon: FiAward,
  },
  {
    id: 3,
    title: 'Luxury Spa Experience',
    description: 'Relaxing atmosphere designed for complete comfort.',
    icon: BiSpa,
  },
  {
    id: 4,
    title: 'Personalized Care',
    description: 'Every client receives customized beauty solutions.',
    icon: BiSupport,
  },
];

export const statistics = [
  { id: 1, number: 15, suffix: '+', label: 'Years Experience' },
  { id: 2, number: 8, suffix: 'K+', label: 'Happy Clients' },
  { id: 3, number: 30, suffix: '+', label: 'Beauty Services' },
  { id: 4, number: 98, suffix: '%', label: 'Client Satisfaction' },
];
