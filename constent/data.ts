import { ConstructionsType, RiskType } from '@/types';
import { arabic, chinese, english, french, street } from './languages';

export const risks = [
  {
    key: "electrical",
    icon: "/electronic.png",
    titles: {
      english: english.risks.electrical.title,
      arabic: arabic.risks.electrical.title,
      french: french.risks.electrical.title,
      street: street.risks.electrical.title,
      chinese: chinese.risks.electrical.title
    },
    subtitles: {
      english: english.risks.electrical.subtitle,
      arabic: arabic.risks.electrical.subtitle,
      french: french.risks.electrical.subtitle,
      street: street.risks.electrical.subtitle,
      chinese: chinese.risks.electrical.subtitle
    },
    description: {
      english: english.risks.electrical.description,
      arabic: arabic.risks.electrical.description,
      french: french.risks.electrical.description,
      street: street.risks.electrical.description,
      chinese: chinese.risks.electrical.description
    },
    examples: {
      english: english.risks.electrical.examples,
      arabic: arabic.risks.electrical.examples,
      french: french.risks.electrical.examples,
      street: street.risks.electrical.examples,
      chinese: chinese.risks.electrical.examples
    },
    prevention: {
      description: {
        english: english.risks.electrical.prevention.description,
        arabic: arabic.risks.electrical.prevention.description,
        french: french.risks.electrical.prevention.description,
        street: street.risks.electrical.prevention.description,
        chinese: chinese.risks.electrical.prevention.description
      },
      examples: {
        english: english.risks.electrical.prevention.examples,
        arabic: arabic.risks.electrical.prevention.examples,
        french: french.risks.electrical.prevention.examples,
        street: street.risks.electrical.prevention.examples,
        chinese: chinese.risks.electrical.prevention.examples
      }
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
      chinese: chinese.risks.mechanical.title
    },
    subtitles: {
      english: english.risks.mechanical.subtitle,
      arabic: arabic.risks.mechanical.subtitle,
      french: french.risks.mechanical.subtitle,
      street: street.risks.mechanical.subtitle,
      chinese: chinese.risks.mechanical.subtitle
    },
    description: {
      english: english.risks.mechanical.description,
      arabic: arabic.risks.mechanical.description,
      french: french.risks.mechanical.description,
      street: street.risks.mechanical.description,
      chinese: chinese.risks.mechanical.description
    },
    examples: {
      english: english.risks.mechanical.examples,
      arabic: arabic.risks.mechanical.examples,
      french: french.risks.mechanical.examples,
      street: street.risks.mechanical.examples,
      chinese: chinese.risks.mechanical.examples
    },
    prevention: {
      description: {
        english: english.risks.mechanical.prevention.description,
        arabic: arabic.risks.mechanical.prevention.description,
        french: french.risks.mechanical.prevention.description,
        street: street.risks.mechanical.prevention.description,
        chinese: chinese.risks.mechanical.prevention.description
      },
      examples: {
        english: english.risks.mechanical.prevention.examples,
        arabic: arabic.risks.mechanical.prevention.examples,
        french: french.risks.mechanical.prevention.examples,
        street: street.risks.mechanical.prevention.examples,
        chinese: chinese.risks.mechanical.prevention.examples
      }
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
      chinese: chinese.risks.chemical.title
    },
    subtitles: {
      english: english.risks.chemical.subtitle,
      arabic: arabic.risks.chemical.subtitle,
      french: french.risks.chemical.subtitle,
      street: street.risks.chemical.subtitle,
      chinese: chinese.risks.chemical.subtitle
    },
    description: {
      english: english.risks.chemical.description,
      arabic: arabic.risks.chemical.description,
      french: french.risks.chemical.description,
      street: street.risks.chemical.description,
      chinese: chinese.risks.chemical.description
    },
    examples: {
      english: english.risks.chemical.examples,
      arabic: arabic.risks.chemical.examples,
      french: french.risks.chemical.examples,
      street: street.risks.chemical.examples,
      chinese: chinese.risks.chemical.examples
    },
    prevention: {
      description: {
        english: english.risks.chemical.prevention.description,
        arabic: arabic.risks.chemical.prevention.description,
        french: french.risks.chemical.prevention.description,
        street: street.risks.chemical.prevention.description,
        chinese: chinese.risks.chemical.prevention.description
      },
      examples: {
        english: english.risks.chemical.prevention.examples,
        arabic: arabic.risks.chemical.prevention.examples,
        french: french.risks.chemical.prevention.examples,
        street: street.risks.chemical.prevention.examples,
        chinese: chinese.risks.chemical.prevention.examples
      }
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
      chinese: chinese.risks.noise.title
    },
    subtitles: {
      english: english.risks.noise.subtitle,
      arabic: arabic.risks.noise.subtitle,
      french: french.risks.noise.subtitle,
      street: street.risks.noise.subtitle,
      chinese: chinese.risks.noise.subtitle
    },
    description: {
      english: english.risks.noise.description,
      arabic: arabic.risks.noise.description,
      french: french.risks.noise.description,
      street: street.risks.noise.description,
      chinese: chinese.risks.noise.description
    },
    examples: {
      english: english.risks.noise.examples,
      arabic: arabic.risks.noise.examples,
      french: french.risks.noise.examples,
      street: street.risks.noise.examples,
      chinese: chinese.risks.noise.examples
    },
    prevention: {
      description: {
        english: english.risks.noise.prevention.description,
        arabic: arabic.risks.noise.prevention.description,
        french: french.risks.noise.prevention.description,
        street: street.risks.noise.prevention.description,
        chinese: chinese.risks.noise.prevention.description
      },
      examples: {
        english: english.risks.noise.prevention.examples,
        arabic: arabic.risks.noise.prevention.examples,
        french: french.risks.noise.prevention.examples,
        street: street.risks.noise.prevention.examples,
        chinese: chinese.risks.noise.prevention.examples
      }
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
      chinese: chinese.risks.fireExplosion.title
    },
    subtitles: {
      english: english.risks.fireExplosion.subtitle,
      arabic: arabic.risks.fireExplosion.subtitle,
      french: french.risks.fireExplosion.subtitle,
      street: street.risks.fireExplosion.subtitle,
      chinese: chinese.risks.fireExplosion.subtitle
    },
    description: {
      english: english.risks.fireExplosion.description,
      arabic: arabic.risks.fireExplosion.description,
      french: french.risks.fireExplosion.description,
      street: street.risks.fireExplosion.description,
      chinese: chinese.risks.fireExplosion.description
    },
    examples: {
      english: english.risks.fireExplosion.examples,
      arabic: arabic.risks.fireExplosion.examples,
      french: french.risks.fireExplosion.examples,
      street: street.risks.fireExplosion.examples,
      chinese: chinese.risks.fireExplosion.examples
    },
    prevention: {
      description: {
        english: english.risks.fireExplosion.prevention.description,
        arabic: arabic.risks.fireExplosion.prevention.description,
        french: french.risks.fireExplosion.prevention.description,
        street: street.risks.fireExplosion.prevention.description,
        chinese: chinese.risks.fireExplosion.prevention.description
      },
      examples: {
        english: english.risks.fireExplosion.prevention.examples,
        arabic: arabic.risks.fireExplosion.prevention.examples,
        french: french.risks.fireExplosion.prevention.examples,
        street: street.risks.fireExplosion.prevention.examples,
        chinese: chinese.risks.fireExplosion.prevention.examples
      }
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
      chinese: chinese.risks.falls.title
    },
    subtitles: {
      english: english.risks.falls.subtitle,
      arabic: arabic.risks.falls.subtitle,
      french: french.risks.falls.subtitle,
      street: street.risks.falls.subtitle,
      chinese: chinese.risks.falls.subtitle
    },
    description: {
      english: english.risks.falls.description,
      arabic: arabic.risks.falls.description,
      french: french.risks.falls.description,
      street: street.risks.falls.description,
      chinese: chinese.risks.falls.description
    },
    examples: {
      english: english.risks.falls.examples,
      arabic: arabic.risks.falls.examples,
      french: french.risks.falls.examples,
      street: street.risks.falls.examples,
      chinese: chinese.risks.falls.examples
    },
    prevention: {
      description: {
        english: english.risks.falls.prevention.description,
        arabic: arabic.risks.falls.prevention.description,
        french: french.risks.falls.prevention.description,
        street: street.risks.falls.prevention.description,
        chinese: chinese.risks.falls.prevention.description
      },
      examples: {
        english: english.risks.falls.prevention.examples,
        arabic: arabic.risks.falls.prevention.examples,
        french: french.risks.falls.prevention.examples,
        street: street.risks.falls.prevention.examples,
        chinese: chinese.risks.falls.prevention.examples
      }
    }
  }
] as RiskType[];

export const directionVideos = [
  {
    title: {
      english: "A maintenance worker installs milling machine guards",
      french: "Un technicien de maintenance installe les protections de la machine de fraisage",
      arabic: "عامل صيانة يركب واقيات ماكينة الطحن",
      street: "عامل صيانة يركب واقيات ماكينة الطحن",
      chinese: "维修工安装铣床防护装置"
    },
    src: "Bridgeport Milling Machine Guards(360P).mp4",
  },
  {
    title: {
      english: "A simple explanation of how to enter confined spaces through a basic example",
      french: "Une explication simple sur la façon d’entrer dans des espaces confinés à travers un exemple basique",
      arabic: "شرح مبسط لكيفية الدخول إلى الأماكن المغلقة من خلال مثال مبسط",
      street: "شرح مبسط لكيفية الدخول إلى الأماكن المغلقة من خلال مثال مبسط",
      chinese: "通过一个简单示例说明如何进入受限空间"
    },
    src: "Confined space Safety(360P).mp4",
  },
  {
    title: {
      english: "A maintenance worker applies the loto concept to a machine",
      french: "Un ouvrier de maintenance applique le concept LOTO à une machine",
      arabic: "عامل صيانة يطبق مفهوم LOTO على احد الماكينات",
      street: "عامل صيانة يطبق مفهوم LOTO على احد الماكينات",
      chinese: "维修工对机器应用LOTO概念"
    },
    src: "log out tag out _loto _sparky _instrumentation _valves(360P).mp4"
  },
]


export const Socials = [
  {
    name: "Facebook",
    src: "/facebook.png",
    url: "https://www.facebook.com/profile.php?id=100006758537339",
  },
  {
    name: "website",
    src: "/website.png",
    url: "https://fareshouidi2.vercel.app/",
  },
  {
    name: "gmail",
    src: "/gmail.png",
    url: "https://myaccount.google.com/",
  }
];