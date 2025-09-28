import { RiskType } from '@/types';
import { arabic, english, french, street } from './languages';

export const risks = [
  {
    key: "electrical",
    icon: "/electronic.png",
    titles: {
      english: english.risks.electrical.title,
      arabic: arabic.risks.electrical.title,
      french: french.risks.electrical.title,
      street: street.risks.electrical.title,
    },
    subtitles: {
      english: english.risks.electrical.subtitle,
      arabic: arabic.risks.electrical.subtitle,
      french: french.risks.electrical.subtitle,
      street: street.risks.electrical.subtitle,
    }
  },
  {
    key: "mechanical",
    icon: "/mechanical.png",
    titles: {
      english: english.risks.mechanical.title,
      arabic: arabic.risks.mechanical.title,
      french: french.risks.mechanical.title,
      street: street.risks.mechanical.title,
    },
    subtitles: {
      english: english.risks.mechanical.subtitle,
      arabic: arabic.risks.mechanical.subtitle,
      french: french.risks.mechanical.subtitle,
      street: street.risks.mechanical.subtitle,
    }
  },
  {
    key: "chemical",
    icon: "/chemical.png",
    titles: {
      english: english.risks.chemical.title,
      arabic: arabic.risks.chemical.title,
      french: french.risks.chemical.title,
      street: street.risks.chemical.title,
    },
    subtitles: {
      english: english.risks.chemical.subtitle,
      arabic: arabic.risks.chemical.subtitle,
      french: french.risks.chemical.subtitle,
      street: street.risks.chemical.subtitle,
    }
  },
  {
    key: "noise",
    icon: "/noise.png",
    titles: {
      english: english.risks.noise.title,
      arabic: arabic.risks.noise.title,
      french: french.risks.noise.title,
      street: street.risks.noise.title,
    },
    subtitles: {
      english: english.risks.noise.subtitle,
      arabic: arabic.risks.noise.subtitle,
      french: french.risks.noise.subtitle,
      street: street.risks.noise.subtitle,
    }
  },
  {
    key: "fireExplosion",
    icon: "/fire_explosion.png",
    titles: {
      english: english.risks.fireExplosion.title,
      arabic: arabic.risks.fireExplosion.title,
      french: french.risks.fireExplosion.title,
      street: street.risks.fireExplosion.title,
    },
    subtitles: {
      english: english.risks.fireExplosion.subtitle,
      arabic: arabic.risks.fireExplosion.subtitle,
      french: french.risks.fireExplosion.subtitle,
      street: street.risks.fireExplosion.subtitle,
    }
  },
  {
    key: "falls",
    icon: "/falls.png",
    titles: {
      english: english.risks.falls.title,
      arabic: arabic.risks.falls.title,
      french: french.risks.falls.title,
      street: street.risks.falls.title,
    },
    subtitles: {
      english: english.risks.falls.subtitle,
      arabic: arabic.risks.falls.subtitle,
      french: french.risks.falls.subtitle,
      street: street.risks.falls.subtitle,
    }
  }
] as RiskType[];
