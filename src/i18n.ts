import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export interface LangMeta {
  code: string
  label: string
  dir: 'ltr' | 'rtl'
}

// Order here is the order shown in the language picker.
export const LANGUAGES: LangMeta[] = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'es', label: 'Español', dir: 'ltr' },
  { code: 'pt', label: 'Português', dir: 'ltr' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', dir: 'ltr' },
  { code: 'zh', label: '简体中文', dir: 'ltr' },
  { code: 'hi', label: 'हिन्दी', dir: 'ltr' },
  { code: 'ja', label: '日本語', dir: 'ltr' },
  { code: 'ru', label: 'Русский', dir: 'ltr' },
  { code: 'he', label: 'עברית', dir: 'rtl' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'fa', label: 'فارسی', dir: 'rtl' },
]

type Dict = {
  appName: string
  tagline: string
  hero: { sub: string }
  upload: { drop: string; browse: string; or: string; sample: string; formats: string }
  badges: { private: string; offline: string; free: string }
  analyzing: string
  report: {
    title: string
    stats: string
    restart: string
    share: string
    shareError?: string
    emptyTitle?: string
    emptyBody?: string
  }
  categories: {
    taste: string
    body: string
    fitness: string
    senses: string
    mind: string
    appearance: string
    sleep: string
  }
  error: { parse: string }
  disclaimer: string
  footer: { madeWith: string; openSource: string; notAffiliated: string }
}

const en: Dict = {
  appName: 'Genoscope',
  tagline: 'Your DNA, decoded on your device',
  hero: {
    sub: 'Upload your raw 23andMe or AncestryDNA file and see the traits hiding in your genome. It is read inside your browser tab. Open your Network panel and watch: nothing leaves your device, because there is no server to send it to.',
  },
  upload: {
    drop: 'Drop your DNA file here',
    browse: 'Choose file',
    or: 'or',
    sample: 'Try with sample data',
    formats: 'Works with 23andMe, AncestryDNA and MyHeritage raw files. Nothing is uploaded.',
  },
  badges: { private: '100% private', offline: 'Works offline', free: 'Free & open source' },
  analyzing: 'Reading your genome…',
  report: {
    title: 'Your genetic traits',
    stats: '{{variants}} variants read · {{matched}} traits decoded',
    restart: 'Analyze another file',
    share: 'Save as image',
    shareError: 'Could not create the image. Please try again.',
    emptyTitle: 'We read your file, but none of our trait markers were in it.',
    emptyBody:
      'That can happen with older chips or non-standard exports. Try a raw file from 23andMe, AncestryDNA or MyHeritage.',
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
    notAffiliated:
      'Not affiliated with, or endorsed by, 23andMe or AncestryDNA. All trademarks belong to their respective owners.',
  },
}

const es: Dict = {
  appName: 'Genoscope',
  tagline: 'Tu ADN, descifrado en tu dispositivo',
  hero: {
    sub: 'Sube tu archivo de 23andMe o AncestryDNA y descubre tus rasgos genéticos. Todo se ejecuta dentro de tu navegador: tu ADN nunca sale de tu dispositivo.',
  },
  upload: {
    drop: 'Arrastra aquí tu archivo de ADN',
    browse: 'Elegir archivo',
    or: 'o',
    sample: 'Probar con datos de ejemplo',
    formats: 'Compatible con 23andMe · AncestryDNA · MyHeritage — nada se sube nunca',
  },
  badges: { private: '100% privado', offline: 'Funciona sin conexión', free: 'Gratis y de código abierto' },
  analyzing: 'Leyendo tu genoma…',
  report: {
    title: 'Tus rasgos genéticos',
    stats: '{{variants}} variantes leídas · {{matched}} rasgos descifrados',
    restart: 'Analizar otro archivo',
    share: 'Guardar como imagen',
  },
  categories: {
    taste: 'Gusto',
    body: 'Cuerpo',
    fitness: 'Forma física',
    senses: 'Sentidos',
    mind: 'Mente',
    appearance: 'Apariencia',
    sleep: 'Sueño',
  },
  error: {
    parse:
      'No encontramos datos de ADN en ese archivo. Asegúrate de que sea una exportación en bruto (.txt o .csv) de 23andMe, AncestryDNA o MyHeritage.',
  },
  disclaimer:
    'Genoscope es solo para curiosidad y educación. No es un dispositivo médico y no ofrece consejos médicos, diagnósticos ni de salud. La genética es compleja: un solo marcador rara vez cuenta toda la historia.',
  footer: {
    madeWith: 'Funciona 100% en tu navegador · sin servidores, sin rastreo',
    openSource: 'Gratis y de código abierto en GitHub',
    notAffiliated:
      'No está afiliado ni respaldado por 23andMe o AncestryDNA. Todas las marcas pertenecen a sus respectivos dueños.',
  },
}

const pt: Dict = {
  appName: 'Genoscope',
  tagline: 'Seu DNA, decodificado no seu dispositivo',
  hero: {
    sub: 'Envie seu arquivo do 23andMe ou AncestryDNA e descubra suas características genéticas. Tudo roda dentro do seu navegador — seu DNA nunca sai do seu dispositivo.',
  },
  upload: {
    drop: 'Arraste seu arquivo de DNA aqui',
    browse: 'Escolher arquivo',
    or: 'ou',
    sample: 'Testar com dados de exemplo',
    formats: 'Compatível com 23andMe · AncestryDNA · MyHeritage — nada é enviado',
  },
  badges: { private: '100% privado', offline: 'Funciona offline', free: 'Grátis e de código aberto' },
  analyzing: 'Lendo seu genoma…',
  report: {
    title: 'Suas características genéticas',
    stats: '{{variants}} variantes lidas · {{matched}} características decodificadas',
    restart: 'Analisar outro arquivo',
    share: 'Salvar como imagem',
  },
  categories: {
    taste: 'Paladar',
    body: 'Corpo',
    fitness: 'Condicionamento',
    senses: 'Sentidos',
    mind: 'Mente',
    appearance: 'Aparência',
    sleep: 'Sono',
  },
  error: {
    parse:
      'Não encontramos dados de DNA nesse arquivo. Verifique se é uma exportação bruta (.txt ou .csv) do 23andMe, AncestryDNA ou MyHeritage.',
  },
  disclaimer:
    'O Genoscope é apenas para curiosidade e educação. Não é um dispositivo médico e não fornece aconselhamento médico, diagnóstico ou de saúde. A genética é complexa — um único marcador raramente conta a história toda.',
  footer: {
    madeWith: 'Roda 100% no seu navegador · sem servidores, sem rastreamento',
    openSource: 'Grátis e de código aberto no GitHub',
    notAffiliated:
      'Não é afiliado nem endossado pela 23andMe ou AncestryDNA. Todas as marcas pertencem aos seus respectivos donos.',
  },
}

const fr: Dict = {
  appName: 'Genoscope',
  tagline: 'Votre ADN, décodé sur votre appareil',
  hero: {
    sub: 'Importez votre fichier 23andMe ou AncestryDNA et découvrez vos traits génétiques. Tout s’exécute dans votre navigateur — votre ADN ne quitte jamais votre appareil.',
  },
  upload: {
    drop: 'Déposez votre fichier ADN ici',
    browse: 'Choisir un fichier',
    or: 'ou',
    sample: 'Essayer avec des données d’exemple',
    formats: 'Compatible avec 23andMe · AncestryDNA · MyHeritage — rien n’est jamais envoyé',
  },
  badges: { private: '100% privé', offline: 'Fonctionne hors ligne', free: 'Gratuit et open source' },
  analyzing: 'Lecture de votre génome…',
  report: {
    title: 'Vos traits génétiques',
    stats: '{{variants}} variants lus · {{matched}} traits décodés',
    restart: 'Analyser un autre fichier',
    share: 'Enregistrer en image',
  },
  categories: {
    taste: 'Goût',
    body: 'Corps',
    fitness: 'Forme',
    senses: 'Sens',
    mind: 'Esprit',
    appearance: 'Apparence',
    sleep: 'Sommeil',
  },
  error: {
    parse:
      'Nous n’avons trouvé aucune donnée ADN dans ce fichier. Assurez-vous qu’il s’agit d’un export brut (.txt ou .csv) de 23andMe, AncestryDNA ou MyHeritage.',
  },
  disclaimer:
    'Genoscope est destiné à la curiosité et à l’éducation uniquement. Ce n’est pas un dispositif médical et il ne fournit aucun conseil médical, diagnostic ou de santé. La génétique est complexe — un seul marqueur raconte rarement toute l’histoire.',
  footer: {
    madeWith: 'Fonctionne 100% dans votre navigateur · sans serveur, sans suivi',
    openSource: 'Gratuit et open source sur GitHub',
    notAffiliated:
      'Non affilié à 23andMe ou AncestryDNA, ni approuvé par eux. Toutes les marques appartiennent à leurs propriétaires respectifs.',
  },
}

const de: Dict = {
  appName: 'Genoscope',
  tagline: 'Deine DNA, entschlüsselt auf deinem Gerät',
  hero: {
    sub: 'Lade deine 23andMe- oder AncestryDNA-Datei hoch und entdecke deine genetischen Merkmale. Alles läuft in deinem Browser — deine DNA verlässt nie dein Gerät.',
  },
  upload: {
    drop: 'Lege deine DNA-Datei hier ab',
    browse: 'Datei auswählen',
    or: 'oder',
    sample: 'Mit Beispieldaten testen',
    formats: 'Unterstützt 23andMe · AncestryDNA · MyHeritage — es wird nichts hochgeladen',
  },
  badges: { private: '100% privat', offline: 'Funktioniert offline', free: 'Kostenlos & Open Source' },
  analyzing: 'Dein Genom wird gelesen…',
  report: {
    title: 'Deine genetischen Merkmale',
    stats: '{{variants}} Varianten gelesen · {{matched}} Merkmale entschlüsselt',
    restart: 'Andere Datei analysieren',
    share: 'Als Bild speichern',
  },
  categories: {
    taste: 'Geschmack',
    body: 'Körper',
    fitness: 'Fitness',
    senses: 'Sinne',
    mind: 'Geist',
    appearance: 'Aussehen',
    sleep: 'Schlaf',
  },
  error: {
    parse:
      'In dieser Datei wurden keine DNA-Daten gefunden. Stelle sicher, dass es sich um einen Rohexport (.txt oder .csv) von 23andMe, AncestryDNA oder MyHeritage handelt.',
  },
  disclaimer:
    'Genoscope dient nur der Neugier und Bildung. Es ist kein Medizinprodukt und bietet keine medizinische, diagnostische oder gesundheitliche Beratung. Genetik ist komplex — einzelne Marker erzählen selten die ganze Geschichte.',
  footer: {
    madeWith: 'Läuft zu 100% in deinem Browser · keine Server, kein Tracking',
    openSource: 'Kostenlos & Open Source auf GitHub',
    notAffiliated:
      'Nicht mit 23andMe oder AncestryDNA verbunden oder von ihnen unterstützt. Alle Marken gehören ihren jeweiligen Eigentümern.',
  },
}

const zh: Dict = {
  appName: 'Genoscope',
  tagline: '你的 DNA，在你的设备上解读',
  hero: {
    sub: '上传你的 23andMe 或 AncestryDNA 文件，发现你的遗传特征。一切都在你的浏览器中运行——你的 DNA 永远不会离开你的设备。',
  },
  upload: {
    drop: '将 DNA 文件拖到这里',
    browse: '选择文件',
    or: '或',
    sample: '用示例数据试用',
    formats: '支持 23andMe · AncestryDNA · MyHeritage — 绝不上传任何内容',
  },
  badges: { private: '100% 私密', offline: '离线可用', free: '免费开源' },
  analyzing: '正在读取你的基因组…',
  report: {
    title: '你的遗传特征',
    stats: '已读取 {{variants}} 个变异 · 解读出 {{matched}} 项特征',
    restart: '分析另一个文件',
    share: '保存为图片',
  },
  categories: {
    taste: '味觉',
    body: '身体',
    fitness: '运动',
    senses: '感官',
    mind: '心智',
    appearance: '外貌',
    sleep: '睡眠',
  },
  error: {
    parse:
      '在该文件中未找到 DNA 数据。请确认这是来自 23andMe、AncestryDNA 或 MyHeritage 的原始导出文件（.txt 或 .csv）。',
  },
  disclaimer:
    'Genoscope 仅供好奇与学习之用。它不是医疗设备，也不提供任何医疗、诊断或健康建议。遗传学很复杂——单个标记很少能说明全部。',
  footer: {
    madeWith: '100% 在你的浏览器中运行 · 无服务器，无追踪',
    openSource: '在 GitHub 上免费开源',
    notAffiliated:
      '与 23andMe 或 AncestryDNA 无隶属或背书关系。所有商标归各自所有者所有。',
  },
}

const hi: Dict = {
  appName: 'Genoscope',
  tagline: 'आपका DNA, आपके डिवाइस पर डिकोड',
  hero: {
    sub: 'अपनी 23andMe या AncestryDNA फ़ाइल अपलोड करें और अपने आनुवंशिक गुण जानें। सब कुछ आपके ब्राउज़र में चलता है — आपका DNA कभी आपके डिवाइस से बाहर नहीं जाता।',
  },
  upload: {
    drop: 'अपनी DNA फ़ाइल यहाँ छोड़ें',
    browse: 'फ़ाइल चुनें',
    or: 'या',
    sample: 'नमूना डेटा से आज़माएँ',
    formats: '23andMe · AncestryDNA · MyHeritage समर्थित — कुछ भी अपलोड नहीं होता',
  },
  badges: { private: '100% निजी', offline: 'ऑफ़लाइन काम करता है', free: 'मुफ़्त और ओपन सोर्स' },
  analyzing: 'आपका जीनोम पढ़ा जा रहा है…',
  report: {
    title: 'आपके आनुवंशिक गुण',
    stats: '{{variants}} वेरिएंट पढ़े गए · {{matched}} गुण डिकोड हुए',
    restart: 'दूसरी फ़ाइल विश्लेषण करें',
    share: 'छवि के रूप में सहेजें',
  },
  categories: {
    taste: 'स्वाद',
    body: 'शरीर',
    fitness: 'फ़िटनेस',
    senses: 'इंद्रियाँ',
    mind: 'मन',
    appearance: 'रूप',
    sleep: 'नींद',
  },
  error: {
    parse:
      'उस फ़ाइल में कोई DNA डेटा नहीं मिला। सुनिश्चित करें कि यह 23andMe, AncestryDNA या MyHeritage से एक रॉ एक्सपोर्ट (.txt या .csv) है।',
  },
  disclaimer:
    'Genoscope केवल जिज्ञासा और शिक्षा के लिए है। यह कोई चिकित्सा उपकरण नहीं है और कोई चिकित्सा, निदान या स्वास्थ्य सलाह नहीं देता। आनुवंशिकी जटिल है — एक अकेला मार्कर शायद ही पूरी कहानी बताता है।',
  footer: {
    madeWith: '100% आपके ब्राउज़र में चलता है · कोई सर्वर नहीं, कोई ट्रैकिंग नहीं',
    openSource: 'GitHub पर मुफ़्त और ओपन सोर्स',
    notAffiliated:
      '23andMe या AncestryDNA से संबद्ध या समर्थित नहीं। सभी ट्रेडमार्क उनके संबंधित मालिकों के हैं।',
  },
}

const ja: Dict = {
  appName: 'Genoscope',
  tagline: 'あなたのDNAを、あなたの端末で解読',
  hero: {
    sub: '23andMe や AncestryDNA のファイルをアップロードして、あなたの遺伝的特徴を発見しましょう。すべてはブラウザ内で動作し、DNAが端末の外に出ることはありません。',
  },
  upload: {
    drop: 'DNAファイルをここにドロップ',
    browse: 'ファイルを選択',
    or: 'または',
    sample: 'サンプルデータで試す',
    formats: '23andMe · AncestryDNA · MyHeritage に対応 — 何もアップロードされません',
  },
  badges: { private: '100% プライベート', offline: 'オフラインで動作', free: '無料・オープンソース' },
  analyzing: 'ゲノムを読み込み中…',
  report: {
    title: 'あなたの遺伝的特徴',
    stats: '{{variants}} 個のバリアントを読み込み · {{matched}} 個の特徴を解読',
    restart: '別のファイルを分析',
    share: '画像として保存',
  },
  categories: {
    taste: '味覚',
    body: '身体',
    fitness: '運動',
    senses: '感覚',
    mind: '心',
    appearance: '外見',
    sleep: '睡眠',
  },
  error: {
    parse:
      'そのファイルにDNAデータが見つかりませんでした。23andMe、AncestryDNA、または MyHeritage の生データ（.txt または .csv）であることを確認してください。',
  },
  disclaimer:
    'Genoscope は好奇心と教育のためのものです。医療機器ではなく、医療・診断・健康に関する助言を提供するものではありません。遺伝学は複雑で、単一のマーカーが全体を語ることはほとんどありません。',
  footer: {
    madeWith: '100% ブラウザ内で動作 · サーバーなし、追跡なし',
    openSource: 'GitHub で無料・オープンソース',
    notAffiliated:
      '23andMe や AncestryDNA とは提携も推奨関係もありません。すべての商標は各所有者に帰属します。',
  },
}

const ru: Dict = {
  appName: 'Genoscope',
  tagline: 'Ваша ДНК, расшифрованная на вашем устройстве',
  hero: {
    sub: 'Загрузите файл 23andMe или AncestryDNA и узнайте свои генетические черты. Всё работает внутри браузера — ваша ДНК никогда не покидает устройство.',
  },
  upload: {
    drop: 'Перетащите сюда файл ДНК',
    browse: 'Выбрать файл',
    or: 'или',
    sample: 'Попробовать на примере',
    formats: 'Поддерживает 23andMe · AncestryDNA · MyHeritage — ничего не загружается',
  },
  badges: { private: '100% приватно', offline: 'Работает офлайн', free: 'Бесплатно и с открытым кодом' },
  analyzing: 'Читаем ваш геном…',
  report: {
    title: 'Ваши генетические черты',
    stats: 'Прочитано вариантов: {{variants}} · Расшифровано черт: {{matched}}',
    restart: 'Проанализировать другой файл',
    share: 'Сохранить как изображение',
  },
  categories: {
    taste: 'Вкус',
    body: 'Тело',
    fitness: 'Спорт',
    senses: 'Чувства',
    mind: 'Разум',
    appearance: 'Внешность',
    sleep: 'Сон',
  },
  error: {
    parse:
      'В этом файле не найдено данных ДНК. Убедитесь, что это необработанный экспорт (.txt или .csv) из 23andMe, AncestryDNA или MyHeritage.',
  },
  disclaimer:
    'Genoscope создан только для любопытства и обучения. Это не медицинское устройство, и он не даёт медицинских, диагностических или оздоровительных советов. Генетика сложна — один маркер редко рассказывает всю историю.',
  footer: {
    madeWith: 'Работает на 100% в вашем браузере · без серверов и отслеживания',
    openSource: 'Бесплатно и с открытым кодом на GitHub',
    notAffiliated:
      'Не связан с 23andMe или AncestryDNA и не одобрен ими. Все товарные знаки принадлежат их владельцам.',
  },
}

const he: Dict = {
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
  badges: { private: '100% פרטי', offline: 'עובד ללא אינטרנט', free: 'חינם וקוד פתוח' },
  analyzing: 'קורא את הגנום שלך…',
  report: {
    title: 'התכונות הגנטיות שלך',
    stats: '{{variants}} וריאנטים נקראו · {{matched}} תכונות פוענחו',
    restart: 'ניתוח קובץ אחר',
    share: 'שמירה כתמונה',
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
    notAffiliated:
      'איננו משויך ל‑23andMe או AncestryDNA ואינו מאושר על ידם. כל הסימנים המסחריים שייכים לבעליהם.',
  },
}

const ar: Dict = {
  appName: 'Genoscope',
  tagline: 'حمضك النووي، مُفكَّك على جهازك',
  hero: {
    sub: 'ارفع ملف 23andMe أو AncestryDNA واكتشف سماتك الوراثية. كل شيء يعمل داخل متصفحك — حمضك النووي لا يغادر جهازك أبدًا.',
  },
  upload: {
    drop: 'أفلِت ملف الحمض النووي هنا',
    browse: 'اختر ملفًا',
    or: 'أو',
    sample: 'جرّب ببيانات تجريبية',
    formats: 'يدعم 23andMe · AncestryDNA · MyHeritage — لا يُرفع أي شيء أبدًا',
  },
  badges: { private: 'خاص 100%', offline: 'يعمل دون اتصال', free: 'مجاني ومفتوح المصدر' },
  analyzing: 'جارٍ قراءة جينومك…',
  report: {
    title: 'سماتك الوراثية',
    stats: 'تمت قراءة {{variants}} متغيرًا · فُكّت {{matched}} سمة',
    restart: 'تحليل ملف آخر',
    share: 'حفظ كصورة',
  },
  categories: {
    taste: 'التذوق',
    body: 'الجسم',
    fitness: 'اللياقة',
    senses: 'الحواس',
    mind: 'العقل',
    appearance: 'المظهر',
    sleep: 'النوم',
  },
  error: {
    parse:
      'لم نعثر على أي بيانات حمض نووي في هذا الملف. تأكد من أنه تصدير خام (‎.txt أو ‎.csv) من 23andMe أو AncestryDNA أو MyHeritage.',
  },
  disclaimer:
    'Genoscope مخصص للفضول والتعليم فقط. إنه ليس جهازًا طبيًا ولا يقدّم نصائح طبية أو تشخيصية أو صحية. علم الوراثة معقّد — نادرًا ما يروي مؤشر واحد القصة كاملة.',
  footer: {
    madeWith: 'يعمل 100% داخل متصفحك · بلا خوادم، بلا تتبّع',
    openSource: 'مجاني ومفتوح المصدر على GitHub',
    notAffiliated:
      'غير تابع لـ 23andMe أو AncestryDNA ولا معتمد منهما. جميع العلامات التجارية ملك لأصحابها.',
  },
}

const fa: Dict = {
  appName: 'Genoscope',
  tagline: 'دی‌ان‌ای شما، روی دستگاه خودتان رمزگشایی می‌شود',
  hero: {
    sub: 'فایل 23andMe یا AncestryDNA خود را بارگذاری کنید و ویژگی‌های ژنتیکی‌تان را کشف کنید. همه چیز درون مرورگر شما اجرا می‌شود — دی‌ان‌ای شما هرگز دستگاه‌تان را ترک نمی‌کند.',
  },
  upload: {
    drop: 'فایل دی‌ان‌ای را اینجا رها کنید',
    browse: 'انتخاب فایل',
    or: 'یا',
    sample: 'با داده‌های نمونه امتحان کنید',
    formats: 'از 23andMe · AncestryDNA · MyHeritage پشتیبانی می‌کند — هیچ‌چیز بارگذاری نمی‌شود',
  },
  badges: { private: '۱۰۰٪ خصوصی', offline: 'آفلاین کار می‌کند', free: 'رایگان و متن‌باز' },
  analyzing: 'در حال خواندن ژنوم شما…',
  report: {
    title: 'ویژگی‌های ژنتیکی شما',
    stats: '{{variants}} واریانت خوانده شد · {{matched}} ویژگی رمزگشایی شد',
    restart: 'تحلیل فایل دیگر',
    share: 'ذخیره به‌صورت تصویر',
  },
  categories: {
    taste: 'چشایی',
    body: 'بدن',
    fitness: 'تناسب اندام',
    senses: 'حواس',
    mind: 'ذهن',
    appearance: 'ظاهر',
    sleep: 'خواب',
  },
  error: {
    parse:
      'هیچ داده دی‌ان‌ای در آن فایل پیدا نشد. مطمئن شوید که یک خروجی خام (‎.txt یا ‎.csv) از 23andMe، AncestryDNA یا MyHeritage است.',
  },
  disclaimer:
    'Genoscope تنها برای کنجکاوی و آموزش است. این یک دستگاه پزشکی نیست و هیچ توصیه پزشکی، تشخیصی یا سلامتی ارائه نمی‌دهد. ژنتیک پیچیده است — یک نشانگر تنها به‌ندرت همه ماجرا را می‌گوید.',
  footer: {
    madeWith: '۱۰۰٪ در مرورگر شما اجرا می‌شود · بدون سرور، بدون ردیابی',
    openSource: 'رایگان و متن‌باز در GitHub',
    notAffiliated:
      'وابسته به 23andMe یا AncestryDNA نیست و مورد تأیید آن‌ها هم نیست. همه نشان‌های تجاری متعلق به صاحبان‌شان است.',
  },
}

const resources = {
  en: { translation: en },
  es: { translation: es },
  pt: { translation: pt },
  fr: { translation: fr },
  de: { translation: de },
  zh: { translation: zh },
  hi: { translation: hi },
  ja: { translation: ja },
  ru: { translation: ru },
  he: { translation: he },
  ar: { translation: ar },
  fa: { translation: fa },
}

const STORAGE_KEY = 'genoscope-lang'

function detectInitialLang(): string {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && LANGUAGES.some((l) => l.code === saved)) return saved
  } catch {
    /* localStorage may be unavailable */
  }
  const prefs =
    typeof navigator !== 'undefined'
      ? (navigator.languages ?? [navigator.language]).map((l) => l.slice(0, 2).toLowerCase())
      : []
  for (const code of prefs) {
    if (LANGUAGES.some((l) => l.code === code)) return code
  }
  return 'en'
}

i18n.use(initReactI18next).init({
  resources,
  lng: detectInitialLang(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export function applyDir(lang: string) {
  const meta = LANGUAGES.find((l) => l.code === lang)
  document.documentElement.dir = meta?.dir ?? 'ltr'
  document.documentElement.lang = lang
}

export function setLanguage(lang: string) {
  i18n.changeLanguage(lang)
  applyDir(lang)
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* ignore */
  }
}

export default i18n
