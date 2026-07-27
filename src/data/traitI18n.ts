// Localized trait content (names, outcome labels, descriptions).
// The canonical English lives in traits.ts. Add a language here to translate the
// report body; anything missing falls back to the English text automatically.
// Contributions of more languages are very welcome — see CONTRIBUTING in the README.

import type { Trait, TraitOutcome } from './traits'

interface LocalizedOutcome {
  label: string
  desc: string
}
interface LocalizedTrait {
  name: string
  outcomes: Record<string, LocalizedOutcome>
}
type LangText = Record<string, LocalizedTrait>

const he: LangText = {
  caffeine: {
    name: 'פירוק קפאין',
    outcomes: {
      fast: { label: 'מפרק מהיר', desc: 'הגוף שלך מפנה קפאין במהירות, אז אספרסו מאוחר יפריע לך פחות מלרוב.' },
      slow: { label: 'מפרק איטי', desc: 'הקפאין נשאר במערכת שלך זמן רב יותר, אז קפה של אחר הצהריים יכול להדהד עד הלילה.' },
    },
  },
  cilantro: {
    name: 'טעם הכוסברה',
    outcomes: {
      ok: { label: 'טעם רענן', desc: 'סביר שאתה נהנה מכוסברה כמו שהיא — בלי שום סבון.' },
      mild: { label: 'רמז של סבון', desc: 'אתה נושא עותק אחד של הגרסה שקשורה לטעם סבוני קל בכוסברה.' },
      soapy: { label: 'אזהרת סבון', desc: 'הגנים שלך קשורים לתפיסת כוסברה כסבונית. אתה לא מדמיין.' },
    },
  },
  bitter: {
    name: 'טעם מר (PTC)',
    outcomes: {
      taster: { label: 'טועם-על', desc: 'אתה תופס חומרים מרים בעוצמה — ברוקולי חי, קפה וירקות ירוקים כהים.' },
      medium: { label: 'טועם בינוני', desc: 'אתה קולט מרירות, אבל היא לא משתלטת. חיך מאוזן.' },
      nontaster: { label: 'לא-טועם', desc: 'חומרים מרים בקושי נרשמים אצלך — קדימה לכרוב ניצנים.' },
    },
  },
  lactose: {
    name: 'סבילות ללקטוז',
    outcomes: {
      tolerant: { label: 'ככל הנראה סביל', desc: 'הגנים שלך מרמזים שאתה ממשיך לעכל לקטוז בבגרות — מוצרי חלב נשארים ידידותיים.' },
      intolerant: { label: 'ככל הנראה לא-סביל', desc: 'הגרסה הזו נפוצה אצל מבוגרים שמפתחים רגישות ללקטוז עם הזמן.' },
    },
  },
  'alcohol-flush': {
    name: 'הסמקה מאלכוהול',
    outcomes: {
      noflush: { label: 'בלי הסמקה', desc: 'אתה נושא את הצורה הנפוצה של ALDH2 וספק אם תסמיק מאלכוהול.' },
      flush: { label: 'תגובת הסמקה', desc: 'עותק אחד של הגרסה יכול להביא פנים חמות ודופק מהיר מאלכוהול.' },
      strongflush: { label: 'הסמקה חזקה', desc: 'שני עותקים מפחיתים מאוד את פירוק האלכוהול — ההסמקה יכולה להיות עזה.' },
    },
  },
  earwax: {
    name: 'סוג שעוות אוזניים',
    outcomes: {
      wet: { label: 'שעווה רטובה', desc: 'אותו גן קשור ליותר ריח גוף — הסוג ה"דביק" והזיעתי של שעוות האוזניים.' },
      dry: { label: 'שעווה יבשה', desc: 'שעווה יבשה ומתקלפת, ובדרך כלל פחות ריח גוף. נפוצה במוצא מזרח-אסייתי.' },
    },
  },
  muscle: {
    name: 'סוג שריר',
    outcomes: {
      power: { label: 'מבנה של ספרינטר', desc: 'אתה מייצר אלפא-אקטינין-3 תקין — פרופיל השריר של כוח ומהירות.' },
      mixed: { label: 'רב-תכליתי', desc: 'שילוב של סיבי כוח וסבולת — גמיש בין ענפי ספורט.' },
      endurance: { label: 'נטייה לסבולת', desc: 'הגרסה ה"חסרה" שכיחה יותר אצל ספורטאי סבולת מובילים.' },
    },
  },
  'eye-color': {
    name: 'צבע עיניים',
    outcomes: {
      brown: { label: 'כנראה חום', desc: 'זהו הסמן הבודד החזק ביותר לעיניים חומות.' },
      mixed: { label: 'חום / דבש / ירוק', desc: 'עותק אחד מכל סוג — צבע העיניים נוטה לביניים וקשה יותר לחיזוי.' },
      blue: { label: 'כנראה כחול', desc: 'שני עותקים של הגרסה קשורים חזק לעיניים כחולות.' },
    },
  },
  chronotype: {
    name: 'אדם של בוקר או של לילה',
    outcomes: {
      morning: { label: 'ציפור בוקר', desc: 'גרסת ה-CLOCK שלך נוטה לאנרגיית בוקר ולשינה מוקדמת יותר.' },
      flexible: { label: 'איפשהו באמצע', desc: 'אין משיכה חזקה לאף כיוון — כנראה הלו"ז שלך מנצח את הגנים כאן.' },
      evening: { label: 'ינשוף לילה', desc: 'הגרסה הזו קשורה לערניות ערב ולשעת שינה טבעית מאוחרת יותר.' },
    },
  },
  asparagus: {
    name: 'ריח אספרגוס',
    outcomes: {
      smell: { label: 'אתה מריח את זה', desc: 'אתה מזהה את תוצרי האספרגוס המפורסמים שאחרים כלל לא מודעים אליהם.' },
      blind: { label: 'עיוור-ריח לאספרגוס', desc: 'סביר שאתה כלל לא מריח את אפקט האספרגוס. בר מזל.' },
    },
  },
  comt: {
    name: 'לוחם או דואג',
    outcomes: {
      warrior: { label: 'לוחם', desc: 'קשור לביצועים יציבים יותר תחת לחץ, במחיר מסוים של זיכרון במצב רגוע.' },
      balanced: { label: 'מאוזן', desc: 'עותק אחד מכל סוג — דרך אמצע בין חוסן לבין מיקוד חד.' },
      worrier: { label: 'דואג', desc: 'קשור לזיכרון וקשב טובים יותר במצב רגוע, אך רגישות גדולה יותר ללחץ.' },
    },
  },
  'photic-sneeze': {
    name: 'התעטשות מהשמש',
    outcomes: {
      sneeze: { label: 'מתעטש מהשמש', desc: 'רפלקס ההתעטשות מאור — יציאה לאור בהיר יכולה לגרום להתעטשות.' },
      nosneeze: { label: 'בלי התעטשות מהשמש', desc: 'אור בהיר לא גורם לך להתעטש — חסרה לך גרסת הרפלקס.' },
    },
  },
  'sweet-tooth': {
    name: 'חיבה למתוק',
    outcomes: {
      sweet: { label: 'חיבה גדולה למתוק', desc: 'גרסת ה-FGF21 הזו קשורה להעדפה גבוהה יותר לממתקים וסוכר.' },
      mild: { label: 'מתונה', desc: 'עותק אחד — אתה נהנה ממתוק אבל בדרך כלל יכול לוותר.' },
      low: { label: 'לא חובב מתוק', desc: 'קשור לדחף נמוך יותר לאוכל מתוק. כנראה מלוח מנצח.' },
    },
  },
  freckles: {
    name: 'נמשים ושיער אדום',
    outcomes: {
      none: { label: 'גרסה נפוצה', desc: 'אתה נושא את צורת ה-MC1R הנפוצה — סיכוי נמוך יותר לשיער אדום מהסמן הזה.' },
      carrier: { label: 'נשא שיער אדום', desc: 'עותק אחד של גרסת שיער אדום — לרוב נמשים ועור בהיר ורגיש לשמש.' },
      redhead: { label: 'גרסת שיער אדום', desc: 'שני עותקים של הגרסה קשורים חזק לשיער אדום ולנמשים.' },
    },
  },
  'deep-sleep': {
    name: 'עומק שינה',
    outcomes: {
      light: { label: 'שינה קלה יותר', desc: 'אתה נושא את הצורה הנפוצה — עומק השינה מעוצב כנראה יותר מהרגלים מאשר מהגן הזה.' },
      deep: { label: 'ישן עמוק', desc: 'גרסת ה-ADA הנדירה הזו קשורה ליותר שינה עמוקה ולחץ שינה חזק יותר.' },
    },
  },
  norovirus: {
    name: 'עמידות לנורו-וירוס',
    outcomes: {
      susceptible: { label: 'מפריש (רגיל)', desc: 'כמו רוב האנשים, אתה עלול לחלות בנורו-וירוס ה"הקאות החורף" הנפוץ.' },
      resistant: { label: 'עמיד לנורו-וירוס', desc: 'כלא-מפריש אתה עמיד גנטית לחיידק הקיבה הקלאסי של ספינות השייט.' },
    },
  },
  'violet-smell': {
    name: 'ריח סיגליות',
    outcomes: {
      sensitive: { label: 'אתה מריח סיגליות', desc: 'אתה רגיש מאוד לבטא-יונון — הניחוח המתוק והפרחוני של סיגליות.' },
      blind: { label: 'עיוור-ריח לסיגליות', desc: 'אתה בקושי מזהה את ריח הסיגליות, ובכמות גדולה עשוי לתפוס אותו כחמצמץ.' },
    },
  },
  blond: {
    name: 'סבירות לשיער בלונדיני',
    outcomes: {
      dark: { label: 'שיער כהה יותר', desc: 'חסרה לך הגרסה שקשורה לבלונד במַגבֵּר הפיגמנט הזה.' },
      mixed: { label: 'סיכוי מוגבר לבלונד', desc: 'עותק אחד של גרסת הבלונד — הוא מבהיר את השיער, במיוחד בילדות.' },
      blond: { label: 'קשור לבלונד', desc: 'שני עותקים של הגרסה נותנים את הסבירות הגבוהה ביותר לשיער בלונדיני טבעי.' },
    },
  },
  empathy: {
    name: 'נטייה לאמפתיה',
    outcomes: {
      high: { label: 'אמפתי מאוד', desc: 'גרסת קולטן האוקסיטוצין הזו קשורה, בממוצע, לאמפתיה גבוהה יותר.' },
      mid: { label: 'מאוזן', desc: 'עותק אחד מכל סוג — אמפתיה שנמצאת באמצע הטווח.' },
      low: { label: 'מופנם יותר', desc: 'קשור לאמפתיה התנהגותית מעט נמוכה יותר — אם כי החינוך חשוב הרבה יותר.' },
    },
  },
  memory: {
    name: 'זיכרון ולמידה',
    outcomes: {
      sharp: { label: 'Val/Val', desc: 'הפרשת BDNF תקינה, קשורה בממוצע לזיכרון עבודה מעט חזק יותר.' },
      mixed: { label: 'Val/Met', desc: 'עותק אחד מכל גרסת BDNF — פרופיל נפוץ ואמצעי.' },
      met: { label: 'Met/Met', desc: 'קשור לגיבוש זיכרון מעט שונה — ובחלק מהמחקרים לתגובת לחץ רגועה יותר.' },
    },
  },
  'alcohol-speed': {
    name: 'פירוק אלכוהול',
    outcomes: {
      fast: { label: 'מפרק מהיר', desc: 'אתה מפרק אלכוהול במהירות — לרוב "דייט זול" שמרגיש את זה מוקדם.' },
      typical: { label: 'מהירות רגילה', desc: 'צורת ה-ADH1B הנפוצה — האלכוהול מתפרק בקצב ממוצע.' },
    },
  },
  'caffeine-jitters': {
    name: 'רעד מקפאין',
    outcomes: {
      sensitive: { label: 'נוטה לרעד', desc: 'גרסת קולטן האדנוזין הזו קשורה ליותר חרדה ורעד מקפאין.' },
      mid: { label: 'איפשהו באמצע', desc: 'עותק אחד — קפאין עשוי לתדלק אותך מעט, אך לא תמיד.' },
      calm: { label: 'רגוע מקפאין', desc: 'הכי פחות סביר להרגיש חרדה או רעד מקפה חזק.' },
    },
  },
}

export const TRAIT_TEXT: Record<string, LangText> = { he }

export function localizeTraitName(trait: Trait, lang: string): string {
  return TRAIT_TEXT[lang]?.[trait.id]?.name ?? trait.name
}

export function localizeOutcome(
  trait: Trait,
  outcome: TraitOutcome,
  lang: string,
): { label: string; desc: string } {
  const o = TRAIT_TEXT[lang]?.[trait.id]?.outcomes?.[outcome.key]
  return { label: o?.label ?? outcome.label, desc: o?.desc ?? outcome.desc }
}
