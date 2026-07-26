// Curated database of well-established, "fun" genetic traits.
// Sources are public (SNPedia). This is for education/curiosity — NOT medical advice.
//
// Each trait maps a genotype (order-independent; matcher also tries the complementary
// strand) to a result. Genotypes are written with alleles in alphabetical order.

export type Tone = 'violet' | 'teal' | 'amber' | 'rose'

export interface TraitOutcome {
  key: string
  label: string
  desc: string
  tone: Tone
}

export interface Trait {
  id: string
  category: 'taste' | 'body' | 'fitness' | 'senses' | 'mind' | 'appearance' | 'sleep'
  emoji: string
  name: string
  gene: string
  rsid: string
  ref: string
  /** canonical (alphabetically-sorted) genotype -> outcome key */
  genotypes: Record<string, string>
  outcomes: Record<string, TraitOutcome>
}

export const TRAITS: Trait[] = [
  {
    id: 'caffeine',
    category: 'body',
    emoji: '☕',
    name: 'Caffeine metabolism',
    gene: 'CYP1A2',
    rsid: 'rs762551',
    ref: 'https://www.snpedia.com/index.php/Rs762551',
    genotypes: { AA: 'fast', AC: 'slow', CC: 'slow' },
    outcomes: {
      fast: {
        key: 'fast',
        label: 'Fast metabolizer',
        desc: 'Your body clears caffeine quickly — that late espresso may bother you less than most.',
        tone: 'teal',
      },
      slow: {
        key: 'slow',
        label: 'Slow metabolizer',
        desc: 'Caffeine lingers longer in your system, so an afternoon coffee can echo into the night.',
        tone: 'amber',
      },
    },
  },
  {
    id: 'cilantro',
    category: 'taste',
    emoji: '🌿',
    name: 'Cilantro taste',
    gene: 'OR6A2',
    rsid: 'rs72921001',
    ref: 'https://www.snpedia.com/index.php/Rs72921001',
    genotypes: { AA: 'ok', AC: 'mild', CC: 'soapy' },
    outcomes: {
      ok: {
        key: 'ok',
        label: 'Tastes fresh',
        desc: 'You most likely enjoy cilantro as the herb it is — no soap in sight.',
        tone: 'teal',
      },
      mild: {
        key: 'mild',
        label: 'A hint of soap',
        desc: 'You carry one copy of the variant linked to a faint soapy note in cilantro.',
        tone: 'violet',
      },
      soapy: {
        key: 'soapy',
        label: 'Soap alert',
        desc: 'Your genes are linked to perceiving cilantro as soapy. You are not imagining it.',
        tone: 'rose',
      },
    },
  },
  {
    id: 'bitter',
    category: 'taste',
    emoji: '😖',
    name: 'Bitter taste (PTC)',
    gene: 'TAS2R38',
    rsid: 'rs713598',
    ref: 'https://www.snpedia.com/index.php/Rs713598',
    genotypes: { CC: 'taster', CG: 'medium', GG: 'nontaster' },
    outcomes: {
      taster: {
        key: 'taster',
        label: 'Super taster',
        desc: 'You strongly perceive bitter compounds — think raw broccoli, coffee and dark greens.',
        tone: 'violet',
      },
      medium: {
        key: 'medium',
        label: 'Medium taster',
        desc: 'You pick up bitterness, but it does not overwhelm. A balanced palate.',
        tone: 'teal',
      },
      nontaster: {
        key: 'nontaster',
        label: 'Non-taster',
        desc: 'Bitter compounds barely register for you — bring on the Brussels sprouts.',
        tone: 'amber',
      },
    },
  },
  {
    id: 'lactose',
    category: 'body',
    emoji: '🥛',
    name: 'Lactose tolerance',
    gene: 'MCM6',
    rsid: 'rs4988235',
    ref: 'https://www.snpedia.com/index.php/Rs4988235',
    genotypes: { AA: 'tolerant', AG: 'tolerant', GG: 'intolerant' },
    outcomes: {
      tolerant: {
        key: 'tolerant',
        label: 'Likely lactase-persistent',
        desc: 'Your genes suggest you keep digesting lactose into adulthood — dairy stays friendly.',
        tone: 'teal',
      },
      intolerant: {
        key: 'intolerant',
        label: 'Likely lactase non-persistent',
        desc: 'This variant is common in adults who become sensitive to lactose over time.',
        tone: 'amber',
      },
    },
  },
  {
    id: 'alcohol-flush',
    category: 'body',
    emoji: '🍷',
    name: 'Alcohol flush',
    gene: 'ALDH2',
    rsid: 'rs671',
    ref: 'https://www.snpedia.com/index.php/Rs671',
    genotypes: { GG: 'noflush', AG: 'flush', AA: 'strongflush' },
    outcomes: {
      noflush: {
        key: 'noflush',
        label: 'No flush',
        desc: 'You carry the common form of ALDH2 and are unlikely to flush from alcohol.',
        tone: 'teal',
      },
      flush: {
        key: 'flush',
        label: 'Flush reaction',
        desc: 'One copy of the variant means alcohol may bring a warm face and a fast heartbeat.',
        tone: 'rose',
      },
      strongflush: {
        key: 'strongflush',
        label: 'Strong flush',
        desc: 'Two copies strongly reduce alcohol breakdown — flushing can be intense.',
        tone: 'rose',
      },
    },
  },
  {
    id: 'earwax',
    category: 'body',
    emoji: '👂',
    name: 'Earwax type',
    gene: 'ABCC11',
    rsid: 'rs17822931',
    ref: 'https://www.snpedia.com/index.php/Rs17822931',
    genotypes: { CC: 'wet', CT: 'wet', TT: 'dry' },
    outcomes: {
      wet: {
        key: 'wet',
        label: 'Wet earwax',
        desc: 'The same gene links to more body odor — the sweatier, "sticky" earwax type.',
        tone: 'violet',
      },
      dry: {
        key: 'dry',
        label: 'Dry earwax',
        desc: 'Flaky, dry earwax and typically less body odor. Common in East Asian ancestry.',
        tone: 'teal',
      },
    },
  },
  {
    id: 'muscle',
    category: 'fitness',
    emoji: '💪',
    name: 'Muscle type',
    gene: 'ACTN3',
    rsid: 'rs1815739',
    ref: 'https://www.snpedia.com/index.php/Rs1815739',
    genotypes: { CC: 'power', CT: 'mixed', TT: 'endurance' },
    outcomes: {
      power: {
        key: 'power',
        label: 'Sprinter build',
        desc: 'You make functional alpha-actinin-3 — the "power/sprint" muscle profile.',
        tone: 'violet',
      },
      mixed: {
        key: 'mixed',
        label: 'All-rounder',
        desc: 'A mix of power and endurance fibers — versatile across sports.',
        tone: 'teal',
      },
      endurance: {
        key: 'endurance',
        label: 'Endurance leaning',
        desc: 'The "deficiency" variant is over-represented in elite endurance athletes.',
        tone: 'amber',
      },
    },
  },
  {
    id: 'eye-color',
    category: 'appearance',
    emoji: '👁️',
    name: 'Eye color',
    gene: 'HERC2',
    rsid: 'rs12913832',
    ref: 'https://www.snpedia.com/index.php/Rs12913832',
    genotypes: { GG: 'brown', AG: 'mixed', AA: 'blue' },
    outcomes: {
      brown: {
        key: 'brown',
        label: 'Likely brown',
        desc: 'This is the strongest single marker for brown eyes.',
        tone: 'amber',
      },
      mixed: {
        key: 'mixed',
        label: 'Brown / hazel / green',
        desc: 'One copy of each — eye color leans intermediate and harder to call.',
        tone: 'teal',
      },
      blue: {
        key: 'blue',
        label: 'Likely blue',
        desc: 'Two copies of the variant are strongly associated with blue eyes.',
        tone: 'violet',
      },
    },
  },
  {
    id: 'chronotype',
    category: 'sleep',
    emoji: '🌙',
    name: 'Morning vs night person',
    gene: 'CLOCK',
    rsid: 'rs1801260',
    ref: 'https://www.snpedia.com/index.php/Rs1801260',
    genotypes: { TT: 'morning', CT: 'flexible', CC: 'evening' },
    outcomes: {
      morning: {
        key: 'morning',
        label: 'Early bird',
        desc: 'Your CLOCK variant leans toward morning energy and earlier sleep.',
        tone: 'amber',
      },
      flexible: {
        key: 'flexible',
        label: 'Somewhere in between',
        desc: 'No strong pull either way — your schedule likely wins over your genes here.',
        tone: 'teal',
      },
      evening: {
        key: 'evening',
        label: 'Night owl',
        desc: 'This variant is linked to eveningness and a later natural bedtime.',
        tone: 'violet',
      },
    },
  },
  {
    id: 'asparagus',
    category: 'senses',
    emoji: '🌱',
    name: 'Asparagus smell',
    gene: 'OR2M7',
    rsid: 'rs4481887',
    ref: 'https://www.snpedia.com/index.php/Rs4481887',
    genotypes: { AA: 'smell', AG: 'smell', GG: 'blind' },
    outcomes: {
      smell: {
        key: 'smell',
        label: 'You can smell it',
        desc: 'You detect the famous asparagus metabolites others are blissfully unaware of.',
        tone: 'violet',
      },
      blind: {
        key: 'blind',
        label: 'Asparagus-anosmic',
        desc: 'You likely cannot smell the asparagus effect at all. Lucky you.',
        tone: 'teal',
      },
    },
  },
  {
    id: 'comt',
    category: 'mind',
    emoji: '🧠',
    name: 'Warrior or Worrier',
    gene: 'COMT',
    rsid: 'rs4680',
    ref: 'https://www.snpedia.com/index.php/Rs4680',
    genotypes: { GG: 'warrior', AG: 'balanced', AA: 'worrier' },
    outcomes: {
      warrior: {
        key: 'warrior',
        label: 'Warrior',
        desc: 'Linked to steadier performance under stress, at some cost to memory under calm.',
        tone: 'violet',
      },
      balanced: {
        key: 'balanced',
        label: 'Balanced',
        desc: 'One of each variant — a middle ground between resilience and sharp focus.',
        tone: 'teal',
      },
      worrier: {
        key: 'worrier',
        label: 'Worrier',
        desc: 'Linked to better memory and attention when calm, but more stress sensitivity.',
        tone: 'amber',
      },
    },
  },
  {
    id: 'photic-sneeze',
    category: 'senses',
    emoji: '🤧',
    name: 'Sun sneezing',
    gene: 'ZEB2',
    rsid: 'rs10427255',
    ref: 'https://www.snpedia.com/index.php/Rs10427255',
    genotypes: { CC: 'sneeze', CT: 'sneeze', TT: 'nosneeze' },
    outcomes: {
      sneeze: {
        key: 'sneeze',
        label: 'Sun sneezer',
        desc: 'The "photic sneeze reflex" — stepping into bright light can trigger a sneeze.',
        tone: 'violet',
      },
      nosneeze: {
        key: 'nosneeze',
        label: 'No sun sneeze',
        desc: 'Bright light does not make you sneeze — you lack the reflex variant.',
        tone: 'teal',
      },
    },
  },
  {
    id: 'hair-curl',
    category: 'appearance',
    emoji: '💇',
    name: 'Hair texture',
    gene: 'TCHH',
    rsid: 'rs11803731',
    ref: 'https://www.snpedia.com/index.php/Rs11803731',
    genotypes: { TT: 'straight', AT: 'mixed', AA: 'curly' },
    outcomes: {
      straight: {
        key: 'straight',
        label: 'Straighter hair',
        desc: 'This variant is associated with straighter hair in people of European descent.',
        tone: 'teal',
      },
      mixed: {
        key: 'mixed',
        label: 'In between',
        desc: 'One copy of the straight-hair variant — texture tends to land in the middle.',
        tone: 'violet',
      },
      curly: {
        key: 'curly',
        label: 'Wavier / curlier',
        desc: 'You lack the straight-hair variant, which leans toward more wave or curl.',
        tone: 'amber',
      },
    },
  },
  {
    id: 'sweet-tooth',
    category: 'taste',
    emoji: '🍬',
    name: 'Sweet tooth',
    gene: 'FGF21',
    rsid: 'rs838133',
    ref: 'https://www.snpedia.com/index.php/Rs838133',
    genotypes: { AA: 'sweet', AG: 'mild', GG: 'low' },
    outcomes: {
      sweet: {
        key: 'sweet',
        label: 'Big sweet tooth',
        desc: 'This FGF21 variant is associated with a higher preference for sweets and sugar.',
        tone: 'rose',
      },
      mild: {
        key: 'mild',
        label: 'Moderate',
        desc: 'One copy — you enjoy sweets but can usually take them or leave them.',
        tone: 'teal',
      },
      low: {
        key: 'low',
        label: 'Not a sweet fan',
        desc: 'Associated with a lower drive for sweet foods. Savory probably wins.',
        tone: 'violet',
      },
    },
  },
  {
    id: 'freckles',
    category: 'appearance',
    emoji: '🧑‍🦰',
    name: 'Freckles & red hair',
    gene: 'MC1R',
    rsid: 'rs1805007',
    ref: 'https://www.snpedia.com/index.php/Rs1805007',
    genotypes: { CC: 'none', CT: 'carrier', TT: 'redhead' },
    outcomes: {
      none: {
        key: 'none',
        label: 'Common variant',
        desc: 'You carry the common MC1R form — lower odds of red hair from this marker.',
        tone: 'teal',
      },
      carrier: {
        key: 'carrier',
        label: 'Red-hair carrier',
        desc: 'One copy of a red-hair variant — often means freckling and fair, sun-sensitive skin.',
        tone: 'amber',
      },
      redhead: {
        key: 'redhead',
        label: 'Red-hair variant',
        desc: 'Two copies of this variant are strongly linked to red hair and freckles.',
        tone: 'rose',
      },
    },
  },
  {
    id: 'deep-sleep',
    category: 'sleep',
    emoji: '😴',
    name: 'Sleep depth',
    gene: 'ADA',
    rsid: 'rs73598374',
    ref: 'https://www.snpedia.com/index.php/Rs73598374',
    genotypes: { GG: 'light', AG: 'deep', AA: 'deep' },
    outcomes: {
      light: {
        key: 'light',
        label: 'Lighter sleeper',
        desc: 'You carry the common form — sleep depth is likely shaped more by habits than this gene.',
        tone: 'teal',
      },
      deep: {
        key: 'deep',
        label: 'Deep sleeper',
        desc: 'This rarer ADA variant is linked to more slow-wave (deep) sleep and stronger sleep pressure.',
        tone: 'violet',
      },
    },
  },
]
