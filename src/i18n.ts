import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const LANGUAGES = [
  { code: 'en', label: 'English', dir: 'ltr' as const },
  { code: 'he', label: 'עברית', dir: 'rtl' as const },
]

const resources = {
  en: {
    translation: {
      appName: 'Genoscope',
      tagline: 'Your DNA, decoded on your device',
      hero: {
        sub: 'Upload your 23andMe or AncestryDNA file and discover your genetic traits. Everything runs inside your browser — your DNA never leaves your device.',
      },
      upload: {
        drop: 'Drop your DNA file here',
        browse: 'Choose file',
        or: 'or',
        sample: 'Try with sample data',
        formats: 'Supports 23andMe · AncestryDNA · MyHeritage — nothing is ever uploaded',
      },
      badges: {
        private: '100% private',
        offline: 'Works offline',
        free: 'Free & open source',
      },
      analyzing: 'Reading your genome…',
      report: {
        title: 'Your genetic traits',
        stats: '{{variants}} variants read · {{matched}} traits decoded',
        restart: 'Analyze another file',
        share: 'Save as image',
        marker: 'Marker',
        source: 'Source',
      },
      categories: {
        taste: 'Taste',
        body: 'Body',
        fitness: 'Fitness',
        senses: 'Senses',
        mind: 'Mind',
        appearance: 'Appearance',
        sleep: 'Sleep',
      },
      error: {
        parse:
          "We couldn't find any DNA data in that file. Make sure it's a raw export (.txt or .csv) from 23andMe, AncestryDNA or MyHeritage.",
      },
      disclaimer:
        'Genoscope is for curiosity and education only. It is not a medical device and does not provide medical, diagnostic, or health advice. Genetics is complex — single markers rarely tell the whole story.',
      footer: {
        madeWith: 'Runs 100% in your browser · no servers, no tracking',
        openSource: 'Free & open source on GitHub',
      },
    },
  },
  he: {
    translation: {
      appName: 'Genoscope',
      tagline: 'ה‑DNA שלך, מפוענח על המכשיר שלך',
      hero: {
        sub: 'העלו את קובץ ה‑23andMe או AncestryDNA וגלו את התכונות הגנטיות שלכם. הכול רץ בתוך הדפדפן — ה‑DNA שלכם אף פעם לא עוזב את המכשיר.',
      },
      upload: {
        drop: 'גררו לכאן את קובץ ה‑DNA',
        browse: 'בחרו קובץ',
        or: 'או',
        sample: 'נסו עם נתוני דוגמה',
        formats: 'תומך ב‑23andMe · AncestryDNA · MyHeritage — שום דבר לא נשלח לשרת',
      },
      badges: {
        private: '100% פרטי',
        offline: 'עובד ללא אינטרנט',
        free: 'חינם וקוד פתוח',
      },
      analyzing: 'קורא את הגנום שלך…',
      report: {
        title: 'התכונות הגנטיות שלך',
        stats: '{{variants}} וריאנטים נקראו · {{matched}} תכונות פוענחו',
        restart: 'ניתוח קובץ אחר',
        share: 'שמירה כתמונה',
        marker: 'סמן',
        source: 'מקור',
      },
      categories: {
        taste: 'טעם',
        body: 'גוף',
        fitness: 'כושר',
        senses: 'חושים',
        mind: 'מוח',
        appearance: 'מראה',
        sleep: 'שינה',
      },
      error: {
        parse:
          'לא מצאנו נתוני DNA בקובץ. ודאו שזהו קובץ ייצוא גולמי (‎.txt או ‎.csv) מ‑23andMe, AncestryDNA או MyHeritage.',
      },
      disclaimer:
        'Genoscope נועד לסקרנות ולמידה בלבד. זהו אינו מכשיר רפואי ואינו מספק ייעוץ רפואי, אבחון או המלצות בריאות. הגנטיקה מורכבת — סמן בודד רק לעתים רחוקות מספר את כל הסיפור.',
      footer: {
        madeWith: 'רץ 100% בדפדפן שלך · בלי שרתים, בלי מעקב',
        openSource: 'חינם וקוד פתוח ב‑GitHub',
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export function applyDir(lang: string) {
  const meta = LANGUAGES.find((l) => l.code === lang)
  const dir = meta?.dir ?? 'ltr'
  document.documentElement.dir = dir
  document.documentElement.lang = lang
}

export default i18n
