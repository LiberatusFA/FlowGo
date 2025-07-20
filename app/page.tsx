"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Globe,
  Volume2,
  VolumeX,
  BookOpen,
  Calendar,
  Phone,
  Settings,
  ChevronRight,
  Users,
  ArrowLeft,
  MapPin,
  Share2,
  ChevronDown,
  ChevronUp,
  Droplets,
  Mic,
  Save,
  FileText,
  AlertTriangle,
  Stethoscope,
  Shield,
  Plus,
  Minus,
  TrendingUp,
  CalendarDays,
  Bell,
} from "lucide-react"

// Complete translations for all languages
const translations = {
  en: {
    greeting: "Hello! I'm Amara, your health companion",
    tagline: "Your Go-to place to understand your Flow",
    notification: "It's been 2 weeks since your last appointment. Consider updating your doctor about your symptoms.",
    shareLanguage: "Choose language to share in:",
    appointmentReminder: "Appointment Reminder",
    symbolOnlyMode: "Symbol-Only Mode",

    // Navigation
    learnAboutPeriods: "Learn About Heavy Periods",
    understandSymptoms: "Understand your symptoms",
    trackPeriods: "Track Your Periods",
    logSymptomsOverTime: "Log symptoms over time",
    getHelpNow: "Get Help Now",
    emergencyHealthcareSupport: "Emergency & healthcare support",

    // Community
    communitySupport: "Community Support",
    shareWithCommunity: "Share FlowGo with friends and family to help build a supportive community.",
    shareOnWhatsApp: "Share on WhatsApp",
    helpYourCommunity: "Help Your Community",
    shareFlowGoSupport: "Share FlowGo with someone who needs healthcare support",

    // Emergency
    emergency: "Emergency",
    call999: "Call 999",
    callDoctor: "Call Doctor",
    dismiss: "Dismiss",

    // Learn Screen
    officialInformation: "Official Information",
    whatIsHMB: "What is Heavy Menstrual Bleeding?",
    whenToSeeDoctor: "When to See a Doctor",
    findSupportNearYou: "Find Support Near You",
    youreNotAlone: "You're not alone - here's help in your area",
    call: "Call",
    helpFriendsLearn: "Help your friends learn about women's health in their language",

    // Track Screen
    currentCycleDay: "Current Cycle Day",
    dayOfCycle: "Day of cycle",
    todaysSymptoms: "Today's Symptoms",
    flowAmount: "Flow Amount",
    light: "Light",
    normal: "Normal",
    heavy: "Heavy",
    painLevel: "Pain Level",
    noPain: "No Pain",
    mild: "Mild",
    moderate: "Moderate",
    severe: "Severe",
    verySevere: "Very Severe",
    voiceNotes: "Voice Notes",
    speakInOwnWords: "Speak in your own words - any language",
    recording: "Recording...",
    recordVoiceNote: "Record voice note",
    writtenNotes: "Written Notes",
    howFeelingToday: "How are you feeling today? Any other symptoms?",
    characters: "characters",
    saveTodaysLog: "Save Today's Log",
    periodHistory: "Your Period History",
    day: "Day",
    exportShare: "Export & Share",
    shareWithDoctor: "Share with Doctor",

    // Help Screen
    emergencyServices: "Emergency Services",
    lifeThreatening: "Life-threatening emergencies",
    urgentNonEmergency: "Urgent but non-emergency care",
    localHealthcareServices: "Local Healthcare Services",
    crisisSupport: "Crisis Support",
    freeEmotionalSupport: "Free 24/7 emotional support",
    domesticViolenceSupport: "Domestic violence support",

    // NHS Information
    heavyPeriodsCommon: "Heavy periods are common but they're not normal",
    periodLonger7Days: "If your period lasts longer than 7 days",
    changeProtectionHourly: "If you need to change protection every hour",
    clotsLarger10p: "If you pass clots larger than a 10p coin",
    bleedingAffectsLife: "If bleeding affects your daily life",
    periodsHeavierUsual: "Your periods suddenly become heavier than usual",
    bleedingBetweenPeriods: "You're bleeding between periods",
    severePeriodPain: "You have severe period pain",
    tiredShortBreath: "You feel tired or short of breath",
    affectingQualityLife: "Your periods are affecting your quality of life",
    healthcareProfessional: "A healthcare professional can discuss treatment options with you",
  },
  bn: {
    greeting: "হ্যালো! আমি আমারা, আপনার স্বাস্থ্য সহচর",
    tagline: "আপনার ফ্লো বুঝতে আপনার প্রিয় জায়গা",
    notification: "আপনার শেষ অ্যাপয়েন্টমেন্টের ২ সপ্তাহ হয়ে গেছে। আপনার ডাক্তারকে আপনার লক্ষণ সম্পর্কে আপডেট করার কথা বিবেচনা করুন।",
    shareLanguage: "শেয়ার করার ভাষা বেছে নিন:",
    appointmentReminder: "অ্যাপয়েন্টমেন্ট রিমাইন্ডার",
    symbolOnlyMode: "শুধুমাত্র প্রতীক মোড",

    learnAboutPeriods: "ভারী পিরিয়ড সম্পর্কে জানুন",
    understandSymptoms: "আপনার লক্ষণগুলি বুঝুন",
    trackPeriods: "আপনার পিরিয়ড ট্র্যাক করুন",
    logSymptomsOverTime: "সময়ের সাথে লক্ষণ লগ করুন",
    getHelpNow: "এখনই সাহায্য নিন",
    emergencyHealthcareSupport: "জরুরি ও স্বাস্থ্যসেবা সহায়তা",

    communitySupport: "কমিউনিটি সাপোর্ট",
    shareWithCommunity: "একটি সহায়ক কমিউনিটি তৈরি করতে বন্ধু এবং পরিবারের সাথে FlowGo শেয়ার করুন।",
    shareOnWhatsApp: "হোয়াটসঅ্যাপে শেয়ার করুন",
    helpYourCommunity: "আপনার কমিউনিটিকে সাহায্য করুন",
    shareFlowGoSupport: "যার স্বাস্থ্যসেবা সহায়তা প্রয়োজন তার সাথে FlowGo শেয়ার করুন",

    emergency: "জরুরি",
    call999: "৯৯৯ কল করুন",
    callDoctor: "ডাক্তারকে কল করুন",
    dismiss: "বাতিল করুন",

    officialInformation: "অফিসিয়াল তথ্য",
    whatIsHMB: "ভারী মাসিক রক্তপাত কী?",
    whenToSeeDoctor: "কখন ডাক্তার দেখাবেন",
    findSupportNearYou: "আপনার কাছাকাছি সহায়তা খুঁজুন",
    youreNotAlone: "আপনি একা নন - এখানে আপনার এলাকায় সাহায্য আছে",
    call: "কল করুন",
    helpFriendsLearn: "আপনার বন্ধুদের তাদের ভাষায় নারী স্বাস্থ্য সম্পর্কে জানতে সাহায্য করুন",

    currentCycleDay: "বর্তমান চক্রের দিন",
    dayOfCycle: "চক্রের দিন",
    todaysSymptoms: "আজকের লক্ষণ",
    flowAmount: "প্রবাহের পরিমাণ",
    light: "হালকা",
    normal: "স্বাভাবিক",
    heavy: "ভারী",
    painLevel: "ব্যথার মাত্রা",
    noPain: "কোন ব্যথা নেই",
    mild: "হালকা",
    moderate: "মাঝারি",
    severe: "তীব্র",
    verySevere: "অত্যন্ত তীব্র",
    voiceNotes: "ভয়েস নোট",
    speakInOwnWords: "আপনার নিজের ভাষায় কথা বলুন - যেকোনো ভাষা",
    recording: "রেকর্ড করা হচ্ছে...",
    recordVoiceNote: "ভয়েস নোট রেকর্ড করুন",
    writtenNotes: "লিখিত নোট",
    howFeelingToday: "আজ আপনি কেমন অনুভব করছেন? অন্য কোন লক্ষণ?",
    characters: "অক্ষর",
    saveTodaysLog: "আজকের লগ সেভ করুন",
    periodHistory: "আপনার পিরিয়ডের ইতিহাস",
    day: "দিন",
    exportShare: "এক্সপোর্ট ও শেয়ার",
    shareWithDoctor: "ডাক্তারের সাথে শেয়ার করুন",

    emergencyServices: "জরুরি সেবা",
    lifeThreatening: "জীবন-হুমকিপূর্ণ জরুরি অবস্থা",
    urgentNonEmergency: "জরুরি কিন্তু অ-জরুরি যত্ন",
    localHealthcareServices: "স্থানীয় স্বাস্থ্যসেবা",
    crisisSupport: "সংকট সহায়তা",
    freeEmotionalSupport: "বিনামূল্যে ২৪/৭ মানসিক সহায়তা",
    domesticViolenceSupport: "পারিবারিক সহিংসতা সহায়তা",

    heavyPeriodsCommon: "ভারী পিরিয়ড সাধারণ কিন্তু স্বাভাবিক নয়",
    periodLonger7Days: "যদি আপনার পিরিয়ড ৭ দিনের বেশি স্থায়ী হয়",
    changeProtectionHourly: "যদি আপনাকে প্রতি ঘন্টায় সুরক্ষা পরিবর্তন করতে হয়",
    clotsLarger10p: "যদি আপনি ১০ পেন্স মুদ্রার চেয়ে বড় জমাট রক্ত পাস করেন",
    bleedingAffectsLife: "যদি রক্তপাত আপনার দৈনন্দিন জীবনকে প্রভাবিত করে",
    periodsHeavierUsual: "আপনার পিরিয়ড হঠাৎ স্বাভাবিকের চেয়ে ভারী হয়ে যায়",
    bleedingBetweenPeriods: "পিরিয়ডের মধ্যে রক্তপাত হচ্ছে",
    severePeriodPain: "আপনার তীব্র পিরিয়ডের ব্যথা আছে",
    tiredShortBreath: "আপনি ক্লান্ত বা শ্বাসকষ্ট অনুভব করছেন",
    affectingQualityLife: "আপনার পিরিয়ড আপনার জীবনযাত্রার মানকে প্রভাবিত করছে",
    healthcareProfessional: "একজন স্বাস্থ্যসেবা পেশাদার আপনার সাথে চিকিৎসার বিকল্পগুলি নিয়ে আলোচনা করতে পারেন",
  },
  ur: {
    greeting: "ہیلو! میں امارا ہوں، آپ کی صحت کی ساتھی",
    tagline: "اپنے فلو کو سمجھنے کے لیے آپ کی پسندیدہ جگہ",
    notification:
      "آپ کی آخری اپائنٹمنٹ کو 2 ہفتے ہو گئے ہیں۔ اپنے ڈاکٹر کو اپنی علامات کے بارے میں اپڈیٹ کرنے پر غور کریں۔",
    shareLanguage: "شیئر کرنے کی زبان منتخب کریں:",
    appointmentReminder: "اپائنٹمنٹ یاد دہانی",
    symbolOnlyMode: "صرف علامت موڈ",

    learnAboutPeriods: "بھاری ماہواری کے بارے میں جانیں",
    understandSymptoms: "اپنی علامات کو سمجھیں",
    trackPeriods: "اپنی ماہواری کو ٹریک کریں",
    logSymptomsOverTime: "وقت کے ساتھ علامات لاگ کریں",
    getHelpNow: "ابھی مدد حاصل کریں",
    emergencyHealthcareSupport: "ہنگامی اور صحت کی دیکھ بھال کی مدد",

    communitySupport: "کمیونٹی سپورٹ",
    shareWithCommunity: "ایک معاون کمیونٹی بنانے میں مدد کے لیے دوستوں اور خاندان کے ساتھ FlowGo شیئر کریں۔",
    shareOnWhatsApp: "واٹس ایپ پر شیئر کریں",
    helpYourCommunity: "اپنی کمیونٹی کی مدد کریں",
    shareFlowGoSupport: "FlowGo کو کسی ایسے شخص کے ساتھ شیئر کریں جسے صحت کی مدد درکار ہے",

    emergency: "ہنگامی",
    call999: "999 کال کریں",
    callDoctor: "ڈاکٹر کو کال کریں",
    dismiss: "مسترد کریں",

    officialInformation: "سرکاری معلومات",
    whatIsHMB: "بھاری ماہانہ خون بہنا کیا ہے؟",
    whenToSeeDoctor: "ڈاکٹر کو کب دکھانا ہے",
    findSupportNearYou: "اپنے قریب مدد تلاش کریں",
    youreNotAlone: "آپ اکیلے نہیں ہیں - یہاں آپ کے علاقے میں مدد ہے",
    call: "کال کریں",
    helpFriendsLearn: "اپنے دوستوں کو ان کی زبان میں خواتین کی صحت کے بارے میں جاننے میں مدد کریں",

    currentCycleDay: "موجودہ سائیکل کا دن",
    dayOfCycle: "سائیکل کا دن",
    todaysSymptoms: "آج کی علامات",
    flowAmount: "بہاؤ کی مقدار",
    light: "ہلکا",
    normal: "عام",
    heavy: "بھاری",
    painLevel: "درد کی سطح",
    noPain: "کوئی درد نہیں",
    mild: "ہلکا",
    moderate: "اوسط",
    severe: "شدید",
    verySevere: "بہت شدید",
    voiceNotes: "آواز کے نوٹس",
    speakInOwnWords: "اپنے الفاظ میں بولیں - کوئی بھی زبان",
    recording: "ریکارڈ ہو رہا ہے...",
    recordVoiceNote: "آواز کا نوٹ ریکارڈ کریں",
    writtenNotes: "تحریری نوٹس",
    howFeelingToday: "آج آپ کیسا محسوس کر رہے ہیں؟ کوئی اور علامات؟",
    characters: "حروف",
    saveTodaysLog: "آج کا لاگ محفوظ کریں",
    periodHistory: "آپ کی ماہواری کی تاریخ",
    day: "دن",
    exportShare: "ایکسپورٹ اور شیئر",
    shareWithDoctor: "ڈاکٹر کے ساتھ شیئر کریں",

    emergencyServices: "ہنگامی خدمات",
    lifeThreatening: "جان کو خطرہ والی ہنگامی صورتحال",
    urgentNonEmergency: "فوری لیکن غیر ہنگامی دیکھ بھال",
    localHealthcareServices: "مقامی صحت کی خدمات",
    crisisSupport: "بحرانی مدد",
    freeEmotionalSupport: "مفت 24/7 جذباتی مدد",
    domesticViolenceSupport: "گھریلو تشدد کی مدد",

    heavyPeriodsCommon: "بھاری ماہواری عام ہے لیکن یہ معمول نہیں",
    periodLonger7Days: "اگر آپ کی ماہواری 7 دن سے زیادہ رہے",
    changeProtectionHourly: "اگر آپ کو ہر گھنٹے تحفظ تبدیل کرنا پڑے",
    clotsLarger10p: "اگر آپ 10 پینس کے سکے سے بڑے لوتھڑے نکالتے ہیں",
    bleedingAffectsLife: "اگر خون بہنا آپ کی روزمرہ زندگی کو متاثر کرے",
    periodsHeavierUsual: "آپ کی ماہواری اچانک معمول سے زیادہ بھاری ہو جائے",
    bleedingBetweenPeriods: "ماہواری کے درمیان خون بہہ رہا ہے",
    severePeriodPain: "آپ کو شدید ماہواری کا درد ہے",
    tiredShortBreath: "آپ تھکاوٹ یا سانس کی قلت محسوس کرتے ہیں",
    affectingQualityLife: "آپ کی ماہواری آپ کی زندگی کے معیار کو متاثر کر رہی ہے",
    healthcareProfessional: "ایک صحت کی دیکھ بھال کرنے والا پیشہ ور آپ کے ساتھ علاج کے اختیارات پر بحث کر سکتا ہے",
  },
  ar: {
    greeting: "مرحباً! أنا أمارا، رفيقتك الصحية",
    tagline: "مكانك المفضل لفهم دورتك الشهرية",
    notification: "لقد مر أسبوعان منذ موعدك الأخير. فكري في تحديث طبيبك حول أعراضك.",
    shareLanguage: "اختاري اللغة للمشاركة:",
    appointmentReminder: "تذكير بالموعد",
    symbolOnlyMode: "وضع الرموز فقط",

    learnAboutPeriods: "تعلمي عن الدورة الشهرية الغزيرة",
    understandSymptoms: "افهمي أعراضك",
    trackPeriods: "تتبعي دورتك الشهرية",
    logSymptomsOverTime: "سجلي الأعراض مع الوقت",
    getHelpNow: "احصلي على المساعدة الآن",
    emergencyHealthcareSupport: "دعم الطوارئ والرعاية الصحية",

    communitySupport: "دعم المجتمع",
    shareWithCommunity: "شاركي FlowGo مع الأصدقاء والعائلة للمساعدة في بناء مجتمع داعم.",
    shareOnWhatsApp: "شاركي على واتساب",
    helpYourCommunity: "ساعدي مجتمعك",
    shareFlowGoSupport: "شاركي FlowGo مع شخص يحتاج إلى دعم صحي",

    emergency: "طوارئ",
    call999: "اتصلي بـ 999",
    callDoctor: "اتصلي بالطبيب",
    dismiss: "تجاهل",

    officialInformation: "معلومات رسمية",
    whatIsHMB: "ما هو النزيف الشهري الغزير؟",
    whenToSeeDoctor: "متى تراجعين الطبيب",
    findSupportNearYou: "اعثري على الدعم بالقرب منك",
    youreNotAlone: "لست وحدك - إليك المساعدة في منطقتك",
    call: "اتصلي",
    helpFriendsLearn: "ساعدي صديقاتك على تعلم صحة المرأة بلغتهن",

    currentCycleDay: "يوم الدورة الحالي",
    dayOfCycle: "يوم من الدورة",
    todaysSymptoms: "أعراض اليوم",
    flowAmount: "كمية التدفق",
    light: "خفيف",
    normal: "طبيعي",
    heavy: "غزير",
    painLevel: "مستوى الألم",
    noPain: "لا ألم",
    mild: "خفيف",
    moderate: "متوسط",
    severe: "شديد",
    verySevere: "شديد جداً",
    voiceNotes: "ملاحظات صوتية",
    speakInOwnWords: "تحدثي بكلماتك - أي لغة",
    recording: "جاري التسجيل...",
    recordVoiceNote: "سجلي ملاحظة صوتية",
    writtenNotes: "ملاحظات مكتوبة",
    howFeelingToday: "كيف تشعرين اليوم؟ أي أعراض أخرى؟",
    characters: "حرف",
    saveTodaysLog: "احفظي سجل اليوم",
    periodHistory: "تاريخ دورتك الشهرية",
    day: "يوم",
    exportShare: "تصدير ومشاركة",
    shareWithDoctor: "شاركي مع الطبيب",

    emergencyServices: "خدمات الطوارئ",
    lifeThreatening: "حالات طوارئ تهدد الحياة",
    urgentNonEmergency: "رعاية عاجلة غير طارئة",
    localHealthcareServices: "خدمات الرعاية الصحية المحلية",
    crisisSupport: "دعم الأزمات",
    freeEmotionalSupport: "دعم عاطفي مجاني 24/7",
    domesticViolenceSupport: "دعم العنف المنزلي",

    heavyPeriodsCommon: "الدورة الغزيرة شائعة لكنها ليست طبيعية",
    periodLonger7Days: "إذا استمرت دورتك أكثر من 7 أيام",
    changeProtectionHourly: "إذا كنت تحتاجين لتغيير الحماية كل ساعة",
    clotsLarger10p: "إذا كنت تمررين جلطات أكبر من عملة 10 بنسات",
    bleedingAffectsLife: "إذا كان النزيف يؤثر على حياتك اليومية",
    periodsHeavierUsual: "دورتك أصبحت فجأة أغزر من المعتاد",
    bleedingBetweenPeriods: "تنزفين بين الدورات",
    severePeriodPain: "لديك ألم شديد في الدورة",
    tiredShortBreath: "تشعرين بالتعب أو ضيق التنفس",
    affectingQualityLife: "دورتك تؤثر على جودة حياتك",
    healthcareProfessional: "يمكن لأخصائي الرعاية الصحية مناقشة خيارات العلاج معك",
  },
  hi: {
    greeting: "नमस्ते! मैं अमारा हूं, आपकी स्वास्थ्य साथी",
    tagline: "अपने फ्लो को समझने के लिए आपकी पसंदीदा जगह",
    notification: "आपकी अंतिम अपॉइंटमेंट को 2 सप्ताह हो गए हैं। अपने डॉक्टर को अपने लक्षणों के बारे में अपडेट करने पर विचार करें।",
    shareLanguage: "साझा करने की भाषा चुनें:",
    appointmentReminder: "अपॉइंटमेंट रिमाइंडर",
    symbolOnlyMode: "केवल प्रतीक मोड",

    learnAboutPeriods: "भारी पीरियड्स के बारे में जानें",
    understandSymptoms: "अपने लक्षणों को समझें",
    trackPeriods: "अपने पीरियड्स को ट्रैक करें",
    logSymptomsOverTime: "समय के साथ लक्षणों को लॉग करें",
    getHelpNow: "अभी मदद लें",
    emergencyHealthcareSupport: "आपातकालीन और स्वास्थ्य सेवा सहायता",

    communitySupport: "सामुदायिक सहायता",
    shareWithCommunity: "एक सहायक समुदाय बनाने में मदद के लिए दोस्तों और परिवार के साथ FlowGo साझा करें।",
    shareOnWhatsApp: "व्हाट्सऐप पर साझा करें",
    helpYourCommunity: "अपने समुदाय की मदद करें",
    shareFlowGoSupport: "FlowGo को किसी ऐसे व्यक्ति के साथ साझा करें जिसे स्वास्थ्य सहायता की आवश्यकता है",

    emergency: "आपातकाल",
    call999: "999 पर कॉल करें",
    callDoctor: "डॉक्टर को कॉल करें",
    dismiss: "खारिज करें",

    officialInformation: "आधिकारिक जानकारी",
    whatIsHMB: "भारी मासिक धर्म रक्तस्राव क्या है?",
    whenToSeeDoctor: "डॉक्टर को कब दिखाना है",
    findSupportNearYou: "अपने पास सहायता खोजें",
    youreNotAlone: "आप अकेली नहीं हैं - यहाँ आपके क्षेत्र में मदद है",
    call: "कॉल करें",
    helpFriendsLearn: "अपनी सहेलियों को उनकी भाषा में महिला स्वास्थ्य के बारे में जानने में मदद करें",

    currentCycleDay: "वर्तमान चक्र दिवस",
    dayOfCycle: "चक्र का दिन",
    todaysSymptoms: "आज के लक्षण",
    flowAmount: "प्रवाह की मात्रा",
    light: "हल्का",
    normal: "सामान्य",
    heavy: "भारी",
    painLevel: "दर्द का स्तर",
    noPain: "कोई दर्द नहीं",
    mild: "हल्का",
    moderate: "मध्यम",
    severe: "गंभीर",
    verySevere: "बहुत गंभीर",
    voiceNotes: "वॉयस नोट्स",
    speakInOwnWords: "अपने शब्दों में बोलें - कोई भी भाषा",
    recording: "रिकॉर्डिंग...",
    recordVoiceNote: "वॉयस नोट रिकॉर्ड करें",
    writtenNotes: "लिखित नोट्स",
    howFeelingToday: "आज आप कैसा महसूस कर रहे हैं? कोई अन्य लक्षण?",
    characters: "अक्षर",
    saveTodaysLog: "आज का लॉग सेव करें",
    periodHistory: "आपके पीरियड का इतिहास",
    day: "दिन",
    exportShare: "निर्यात और साझा करें",
    shareWithDoctor: "डॉक्टर के साथ साझा करें",

    emergencyServices: "आपातकालीन सेवाएं",
    lifeThreatening: "जीवन-घातक आपातकाल",
    urgentNonEmergency: "तत्काल लेकिन गैर-आपातकालीन देखभाल",
    localHealthcareServices: "स्थानीय स्वास्थ्य सेवाएं",
    crisisSupport: "संकट सहायता",
    freeEmotionalSupport: "मुफ्त 24/7 भावनात्मक सहायता",
    domesticViolenceSupport: "घरेलू हिंसा सहायता",

    heavyPeriodsCommon: "भारी पीरियड्स आम हैं लेकिन सामान्य नहीं",
    periodLonger7Days: "यदि आपका पीरियड 7 दिन से अधिक रहता है",
    changeProtectionHourly: "यदि आपको हर घंटे सुरक्षा बदलनी पड़ती है",
    clotsLarger10p: "यदि आप 10 पेंस के सिक्के से बड़े थक्के पास करते हैं",
    bleedingAffectsLife: "यदि रक्तस्राव आपके दैनिक जीवन को प्रभावित करता है",
    periodsHeavierUsual: "आपके पीरियड्स अचानक सामान्य से भारी हो गए हैं",
    bleedingBetweenPeriods: "पीरियड्स के बीच रक्तस्राव हो रहा है",
    severePeriodPain: "आपको गंभीर पीरियड दर्द है",
    tiredShortBreath: "आप थकान या सांस की कमी महसूस करते हैं",
    affectingQualityLife: "आपके पीरियड्स आपके जीवन की गुणवत्ता को प्रभावित कर रहे हैं",
    healthcareProfessional: "एक स्वास्थ्य सेवा पेशेवर आपके साथ उपचार विकल्पों पर चर्चा कर सकता है",
  },
  pa: {
    greeting: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਅਮਾਰਾ ਹਾਂ, ਤੁਹਾਡੀ ਸਿਹਤ ਦੀ ਸਾਥੀ",
    tagline: "ਆਪਣੇ ਫਲੋ ਨੂੰ ਸਮਝਣ ਲਈ ਤੁਹਾਡੀ ਪਸੰਦੀਦਾ ਜਗ੍ਹਾ",
    notification: "ਤੁਹਾਡੀ ਆਖਰੀ ਮੁਲਾਕਾਤ ਨੂੰ 2 ਹਫ਼ਤੇ ਹੋ ਗਏ ਹਨ। ਆਪਣੇ ਡਾਕਟਰ ਨੂੰ ਆਪਣੇ ਲੱਛਣਾਂ ਬਾਰੇ ਅਪਡੇਟ ਕਰਨ ਬਾਰੇ ਸੋਚੋ।",
    shareLanguage: "ਸਾਂਝਾ ਕਰਨ ਦੀ ਭਾਸ਼ਾ ਚੁਣੋ:",
    appointmentReminder: "ਮੁਲਾਕਾਤ ਰਿਮਾਈਂਡਰ",
    symbolOnlyMode: "ਸਿਰਫ਼ ਨਿਸ਼ਾਨ ਮੋਡ",

    learnAboutPeriods: "ਭਾਰੀ ਪੀਰੀਅਡਸ ਬਾਰੇ ਸਿੱਖੋ",
    understandSymptoms: "ਆਪਣੇ ਲੱਛਣਾਂ ਨੂੰ ਸਮਝੋ",
    trackPeriods: "ਆਪਣੇ ਪੀਰੀਅਡਸ ਨੂੰ ਟਰੈਕ ਕਰੋ",
    logSymptomsOverTime: "ਸਮੇਂ ਦੇ ਨਾਲ ਲੱਛਣਾਂ ਨੂੰ ਲਾਗ ਕਰੋ",
    getHelpNow: "ਹੁਣੇ ਮਦਦ ਲਓ",
    emergencyHealthcareSupport: "ਐਮਰਜੈਂਸੀ ਅਤੇ ਸਿਹਤ ਸੇਵਾ ਸਹਾਇਤਾ",

    communitySupport: "ਕਮਿਊਨਿਟੀ ਸਪੋਰਟ",
    shareWithCommunity: "ਇੱਕ ਸਹਾਇਕ ਕਮਿਊਨਿਟੀ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਲਈ ਦੋਸਤਾਂ ਅਤੇ ਪਰਿਵਾਰ ਨਾਲ FlowGo ਸਾਂਝਾ ਕਰੋ।",
    shareOnWhatsApp: "ਵਟਸਐਪ 'ਤੇ ਸਾਂਝਾ ਕਰੋ",
    helpYourCommunity: "ਆਪਣੀ ਕਮਿਊਨਿਟੀ ਦੀ ਮਦਦ ਕਰੋ",
    shareFlowGoSupport: "FlowGo ਨੂੰ ਕਿਸੇ ਅਜਿਹੇ ਵਿਅਕਤੀ ਨਾਲ ਸਾਂਝਾ ਕਰੋ ਜਿਸ ਨੂੰ ਸਿਹਤ ਸਹਾਇਤਾ ਦੀ ਲੋੜ ਹੈ",

    emergency: "ਐਮਰਜੈਂਸੀ",
    call999: "999 ਕਾਲ ਕਰੋ",
    callDoctor: "ਡਾਕਟਰ ਨੂੰ ਕਾਲ ਕਰੋ",
    dismiss: "ਰੱਦ ਕਰੋ",

    officialInformation: "ਅਧਿਕਾਰਿਕ ਜਾਣਕਾਰੀ",
    whatIsHMB: "ਭਾਰੀ ਮਾਸਿਕ ਖੂਨ ਵਗਣਾ ਕੀ ਹੈ?",
    whenToSeeDoctor: "ਡਾਕਟਰ ਨੂੰ ਕਦੋਂ ਮਿਲਣਾ ਹੈ",
    findSupportNearYou: "ਆਪਣੇ ਨੇੜੇ ਸਹਾਇਤਾ ਲੱਭੋ",
    youreNotAlone: "ਤੁਸੀਂ ਇਕੱਲੇ ਨਹੀਂ ਹੋ - ਇੱਥੇ ਤੁਹਾਡੇ ਖੇਤਰ ਵਿੱਚ ਮਦਦ ਹੈ",
    call: "ਕਾਲ ਕਰੋ",
    helpFriendsLearn: "ਆਪਣੇ ਦੋਸਤਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਦੀ ਭਾਸ਼ਾ ਵਿੱਚ ਔਰਤਾਂ ਦੀ ਸਿਹਤ ਬਾਰੇ ਸਿੱਖਣ ਵਿੱਚ ਮਦਦ ਕਰੋ",

    currentCycleDay: "ਮੌਜੂਦਾ ਚੱਕਰ ਦਿਨ",
    dayOfCycle: "ਚੱਕਰ ਦਾ ਦਿਨ",
    todaysSymptoms: "ਅੱਜ ਦੇ ਲੱਛਣ",
    flowAmount: "ਵਹਾਅ ਦੀ ਮਾਤਰਾ",
    light: "ਹਲਕਾ",
    normal: "ਸਾਧਾਰਨ",
    heavy: "ਭਾਰੀ",
    painLevel: "ਦਰਦ ਦਾ ਪੱਧਰ",
    noPain: "ਕੋਈ ਦਰਦ ਨਹੀਂ",
    mild: "ਹਲਕਾ",
    moderate: "ਮੱਧਮ",
    severe: "ਗੰਭੀਰ",
    verySevere: "ਬਹੁਤ ਗੰਭੀਰ",
    voiceNotes: "ਆਵਾਜ਼ ਨੋਟਸ",
    speakInOwnWords: "ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਬੋਲੋ - ਕੋਈ ਵੀ ਭਾਸ਼ਾ",
    recording: "ਰਿਕਾਰਡਿੰਗ...",
    recordVoiceNote: "ਆਵਾਜ਼ ਨੋਟ ਰਿਕਾਰਡ ਕਰੋ",
    writtenNotes: "ਲਿਖਤੀ ਨੋਟਸ",
    howFeelingToday: "ਅੱਜ ਤੁਸੀਂ ਕਿਵੇਂ ਮਹਿਸੂਸ ਕਰ ਰਹੇ ਹੋ? ਕੋਈ ਹੋਰ ਲੱਛਣ?",
    characters: "ਅੱਖਰ",
    saveTodaysLog: "ਅੱਜ ਦਾ ਲਾਗ ਸੇਵ ਕਰੋ",
    periodHistory: "ਤੁਹਾਡੇ ਪੀਰੀਅਡ ਦਾ ਇਤਿਹਾਸ",
    day: "ਦਿਨ",
    exportShare: "ਐਕਸਪੋਰਟ ਅਤੇ ਸਾਂਝਾ ਕਰੋ",
    shareWithDoctor: "ਡਾਕਟਰ ਨਾਲ ਸਾਂਝਾ ਕਰੋ",

    emergencyServices: "ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ",
    lifeThreatening: "ਜਾਨ ਨੂੰ ਖ਼ਤਰਾ ਵਾਲੀਆਂ ਐਮਰਜੈਂਸੀਆਂ",
    urgentNonEmergency: "ਤੁਰੰਤ ਪਰ ਗੈਰ-ਐਮਰਜੈਂਸੀ ਦੇਖਭਾਲ",
    localHealthcareServices: "ਸਥਾਨਕ ਸਿਹਤ ਸੇਵਾਵਾਂ",
    crisisSupport: "ਸੰਕਟ ਸਹਾਇਤਾ",
    freeEmotionalSupport: "ਮੁਫ਼ਤ 24/7 ਭਾਵਨਾਤਮਕ ਸਹਾਇਤਾ",
    domesticViolenceSupport: "ਘਰੇਲੂ ਹਿੰਸਾ ਸਹਾਇਤਾ",

    heavyPeriodsCommon: "ਭਾਰੀ ਪੀਰੀਅਡਸ ਆਮ ਹਨ ਪਰ ਸਾਧਾਰਨ ਨਹੀਂ",
    periodLonger7Days: "ਜੇ ਤੁਹਾਡਾ ਪੀਰੀਅਡ 7 ਦਿਨਾਂ ਤੋਂ ਜ਼ਿਆਦਾ ਰਹਿੰਦਾ ਹੈ",
    changeProtectionHourly: "ਜੇ ਤੁਹਾਨੂੰ ਹਰ ਘੰਟੇ ਸੁਰੱਖਿਆ ਬਦਲਣੀ ਪੈਂਦੀ ਹੈ",
    clotsLarger10p: "ਜੇ ਤੁਸੀਂ 10 ਪੈਂਸ ਦੇ ਸਿੱਕੇ ਤੋਂ ਵੱਡੇ ਗਤਲੇ ਪਾਸ ਕਰਦੇ ਹੋ",
    bleedingAffectsLife: "ਜੇ ਖੂਨ ਵਗਣਾ ਤੁਹਾਡੀ ਰੋਜ਼ਾਨਾ ਜ਼ਿੰਦਗੀ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਦਾ ਹੈ",
    periodsHeavierUsual: "ਤੁਹਾਡੇ ਪੀਰੀਅਡਸ ਅਚਾਨਕ ਆਮ ਨਾਲੋਂ ਭਾਰੀ ਹੋ ਗਏ ਹਨ",
    bleedingBetweenPeriods: "ਪੀਰੀਅਡਸ ਦੇ ਵਿਚਕਾਰ ਖੂਨ ਵਗ ਰਿਹਾ ਹੈ",
    severePeriodPain: "ਤੁਹਾਨੂੰ ਗੰਭੀਰ ਪੀਰੀਅਡ ਦਰਦ ਹੈ",
    tiredShortBreath: "ਤੁਸੀਂ ਥਕਾਵਟ ਜਾਂ ਸਾਹ ਦੀ ਕਮੀ ਮਹਿਸੂਸ ਕਰਦੇ ਹੋ",
    affectingQualityLife: "ਤੁਹਾਡੇ ਪੀਰੀਅਡਸ ਤੁਹਾਡੀ ਜ਼ਿੰਦਗੀ ਦੀ ਗੁਣਵੱਤਾ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰ ਰਹੇ ਹਨ",
    healthcareProfessional: "ਇੱਕ ਸਿਹਤ ਸੇਵਾ ਪੇਸ਼ੇਵਰ ਤੁਹਾਡੇ ਨਾਲ ਇਲਾਜ ਦੇ ਵਿਕਲਪਾਂ 'ਤੇ ਚਰਚਾ ਕਰ ਸਕਦਾ ਹੈ",
  },
  gu: {
    greeting: "નમસ્તે! હું અમારા છું, તમારી આરોગ્ય સાથી",
    tagline: "તમારા ફ્લોને સમજવા માટે તમારું પસંદીદા સ્થાન",
    notification: "તમારી છેલ્લી મુલાકાતને 2 અઠવાડિયા થઈ ગયા છે. તમારા ડૉક્ટરને તમારા લક્ષણો વિશે અપડેટ કરવાનું વિચારો.",
    shareLanguage: "શેર કરવાની ભાષા પસંદ કરો:",
    appointmentReminder: "મુલાકાત રિમાઇન્ડર",
    symbolOnlyMode: "માત્ર પ્રતીક મોડ",

    learnAboutPeriods: "ભારે પીરિયડ્સ વિશે જાણો",
    understandSymptoms: "તમારા લક્ષણોને સમજો",
    trackPeriods: "તમારા પીરિયડ્સને ટ્રેક કરો",
    logSymptomsOverTime: "સમય સાથે લક્ષણોને લોગ કરો",
    getHelpNow: "હવે મદદ મેળવો",
    emergencyHealthcareSupport: "કટોકટી અને આરોગ્ય સેવા સહાય",

    communitySupport: "સમુદાય સહાય",
    shareWithCommunity: "સહાયક સમુદાય બનાવવામાં મદદ માટે મિત્રો અને પરિવાર સાથે FlowGo શેર કરો.",
    shareOnWhatsApp: "વોટ્સએપ પર શેર કરો",
    helpYourCommunity: "તમારા સમુદાયની મદદ કરો",
    shareFlowGoSupport: "FlowGo ને કોઈ એવી વ્યક્તિ સાથે શેર કરો જેને આરોગ્ય સહાયની જરૂર છે",

    emergency: "કટોકટી",
    call999: "999 પર કૉલ કરો",
    callDoctor: "ડૉક્ટરને કૉલ કરો",
    dismiss: "બરતરફ કરો",

    officialInformation: "સત્તાવાર માહિતી",
    whatIsHMB: "ભારે માસિક રક્તસ્રાવ શું છે?",
    whenToSeeDoctor: "ડૉક્ટરને ક્યારે મળવું",
    findSupportNearYou: "તમારી નજીક સહાય શોધો",
    youreNotAlone: "તમે એકલા નથી - અહીં તમારા વિસ્તારમાં મદદ છે",
    call: "કૉલ કરો",
    helpFriendsLearn: "તમારા મિત્રોને તેમની ભાષામાં મહિલા આરોગ્ય વિશે શીખવામાં મદદ કરો",

    currentCycleDay: "વર્તમાન ચક્ર દિવસ",
    dayOfCycle: "ચક્રનો દિવસ",
    todaysSymptoms: "આજના લક્ષણો",
    flowAmount: "પ્રવાહની માત્રા",
    light: "હળવું",
    normal: "સામાન્ય",
    heavy: "ભારે",
    painLevel: "દુખાવાનું સ્તર",
    noPain: "કોઈ દુખાવો નથી",
    mild: "હળવું",
    moderate: "મધ્યમ",
    severe: "ગંભીર",
    verySevere: "ખૂબ ગંભીર",
    voiceNotes: "વૉઇસ નોટ્સ",
    speakInOwnWords: "તમારા પોતાના શબ્દોમાં બોલો - કોઈપણ ભાષા",
    recording: "રેકોર્ડિંગ...",
    recordVoiceNote: "વૉઇસ નોટ રેકોર્ડ કરો",
    writtenNotes: "લેખિત નોટ્સ",
    howFeelingToday: "આજે તમે કેવું અનુભવો છો? કોઈ અન્ય લક્ષણો?",
    characters: "અક્ષરો",
    saveTodaysLog: "આજનો લોગ સેવ કરો",
    periodHistory: "તમારા પીરિયડનો ઇતિહાસ",
    day: "દિવસ",
    exportShare: "નિકાસ અને શેર",
    shareWithDoctor: "ડૉક્ટર સાથે શેર કરો",

    emergencyServices: "કટોકટી સેવાઓ",
    lifeThreatening: "જીવલેણ કટોકટીઓ",
    urgentNonEmergency: "તાત્કાલિક પરંતુ બિન-કટોકટી સંભાળ",
    localHealthcareServices: "સ્થાનિક આરોગ્ય સેવાઓ",
    crisisSupport: "કટોકટી સહાય",
    freeEmotionalSupport: "મફત 24/7 ભાવનાત્મક સહાય",
    domesticViolenceSupport: "ઘરેલું હિંસા સહાય",

    heavyPeriodsCommon: "ભારે પીરિયડ્સ સામાન્ય છે પરંતુ સાધારણ નથી",
    periodLonger7Days: "જો તમારો પીરિયડ 7 દિવસથી વધુ ચાલે",
    changeProtectionHourly: "જો તમારે દર કલાકે સુરક્ષા બદલવી પડે",
    clotsLarger10p: "જો તમે 10 પેન્સના સિક્કા કરતા મોટા ગંઠાઈ પસાર કરો",
    bleedingAffectsLife: "જો રક્તસ્રાવ તમારા દૈનિક જીવનને અસર કરે",
    periodsHeavierUsual: "તમારા પીરિયડ્સ અચાનક સામાન્ય કરતા ભારે થઈ ગયા છે",
    bleedingBetweenPeriods: "પીરિયડ્સ વચ્ચે રક્તસ્રાવ થઈ રહ્યો છે",
    severePeriodPain: "તમને ગંભીર પીરિયડ દુખાવો છે",
    tiredShortBreath: "તમે થાક અથવા શ્વાસ લેવામાં તકલીફ અનુભવો છો",
    affectingQualityLife: "તમારા પીરિયડ્સ તમારા જીવનની ગુણવત્તાને અસર કરી રહ્યા છે",
    healthcareProfessional: "આરોગ્ય સંભાળ વ્યાવસાયિક તમારી સાથે સારવારના વિકલ્પો પર ચર્ચા કરી શકે છે",
  },
  tr: {
    greeting: "Merhaba! Ben Amara, sağlık arkadaşınız",
    tagline: "Akışınızı anlamak için başvuracağınız yer",
    notification: "Son randevunuzdan 2 hafta geçti. Doktorunuzu semptomlarınız hakkında bilgilendirmeyi düşünün.",
    shareLanguage: "Paylaşım dilini seçin:",
    appointmentReminder: "Randevu Hatırlatıcısı",
    symbolOnlyMode: "Sadece Sembol Modu",

    learnAboutPeriods: "Ağır Adet Dönemleri Hakkında Öğrenin",
    understandSymptoms: "Semptomlarınızı anlayın",
    trackPeriods: "Adet Dönemlerinizi Takip Edin",
    logSymptomsOverTime: "Zaman içinde semptomları kaydedin",
    getHelpNow: "Şimdi Yardım Alın",
    emergencyHealthcareSupport: "Acil durum ve sağlık hizmeti desteği",

    communitySupport: "Topluluk Desteği",
    shareWithCommunity:
      "Destekleyici bir topluluk oluşturmaya yardımcı olmak için FlowGo'yu arkadaşlarınız ve ailenizle paylaşın.",
    shareOnWhatsApp: "WhatsApp'ta Paylaş",
    helpYourCommunity: "Topluluğunuza Yardım Edin",
    shareFlowGoSupport: "FlowGo'yu sağlık desteğine ihtiyacı olan biriyle paylaşın",

    emergency: "Acil Durum",
    call999: "999'u Arayın",
    callDoctor: "Doktoru Arayın",
    dismiss: "Kapat",

    officialInformation: "Resmi Bilgiler",
    whatIsHMB: "Ağır Adet Kanaması Nedir?",
    whenToSeeDoctor: "Doktora Ne Zaman Gidilmeli",
    findSupportNearYou: "Yakınınızda Destek Bulun",
    youreNotAlone: "Yalnız değilsiniz - bölgenizde yardım var",
    call: "Ara",
    helpFriendsLearn: "Arkadaşlarınızın kendi dillerinde kadın sağlığı hakkında öğrenmelerine yardımcı olun",

    currentCycleDay: "Mevcut Döngü Günü",
    dayOfCycle: "Döngü günü",
    todaysSymptoms: "Bugünün Semptomları",
    flowAmount: "Akış Miktarı",
    light: "Hafif",
    normal: "Normal",
    heavy: "Ağır",
    painLevel: "Ağrı Seviyesi",
    noPain: "Ağrı Yok",
    mild: "Hafif",
    moderate: "Orta",
    severe: "Şiddetli",
    verySevere: "Çok Şiddetli",
    voiceNotes: "Ses Notları",
    speakInOwnWords: "Kendi kelimelerinizle konuşun - herhangi bir dil",
    recording: "Kaydediliyor...",
    recordVoiceNote: "Ses notu kaydet",
    writtenNotes: "Yazılı Notlar",
    howFeelingToday: "Bugün nasıl hissediyorsunuz? Başka semptomlar var mı?",
    characters: "karakter",
    saveTodaysLog: "Bugünün Kaydını Kaydet",
    periodHistory: "Adet Geçmişiniz",
    day: "Gün",
    exportShare: "Dışa Aktar ve Paylaş",
    shareWithDoctor: "Doktorla Paylaş",

    emergencyServices: "Acil Servisler",
    lifeThreatening: "Yaşamı tehdit eden acil durumlar",
    urgentNonEmergency: "Acil ama acil olmayan bakım",
    localHealthcareServices: "Yerel Sağlık Hizmetleri",
    crisisSupport: "Kriz Desteği",
    freeEmotionalSupport: "Ücretsiz 24/7 duygusal destek",
    domesticViolenceSupport: "Aile içi şiddet desteği",

    heavyPeriodsCommon: "Ağır adetler yaygındır ama normal değildir",
    periodLonger7Days: "Adetiniz 7 günden uzun sürerse",
    changeProtectionHourly: "Her saat koruma değiştirmeniz gerekirse",
    clotsLarger10p: "10 kuruşluk paradan büyük pıhtılar geçirirseniz",
    bleedingAffectsLife: "Kanama günlük yaşamınızı etkilerse",
    periodsHeavierUsual: "Adetleriniz aniden normalden daha ağır hale geldi",
    bleedingBetweenPeriods: "Adetler arasında kanama oluyor",
    severePeriodPain: "Şiddetli adet ağrınız var",
    tiredShortBreath: "Yorgunluk veya nefes darlığı hissediyorsunuz",
    affectingQualityLife: "Adetleriniz yaşam kalitenizi etkiliyor",
    healthcareProfessional: "Bir sağlık uzmanı sizinle tedavi seçeneklerini tartışabilir",
  },
  so: {
    greeting: "Salaan! Waxaan ahay Amara, saaxiibkaaga caafimaadka",
    tagline: "Meeshaada ugu fiican ee aad ku fahanto socodkaaga",
    notification:
      "Waxaa soo dhaafay 2 toddobaad tan iyo ballanqaadkaagii ugu dambeeyay. Ka fiirso in aad dhakhtarkaaga u sheegto calaamaadkaaga.",
    shareLanguage: "Dooro luqadda aad ku wadaagi doonto:",
    appointmentReminder: "Xusuusin Ballanqaad",
    symbolOnlyMode: "Hab Calaamado Keliya",

    learnAboutPeriods: "Ku Baro Caadada Culus",
    understandSymptoms: "Faham calaamaadkaaga",
    trackPeriods: "La Socod Caadadaada",
    logSymptomsOverTime: "Diiwaangeli calaamadaha waqti ka dib",
    getHelpNow: "Caawimaad Hadda Hel",
    emergencyHealthcareSupport: "Taageero degdeg ah iyo daryeel caafimaad",

    communitySupport: "Taageero Bulsho",
    shareWithCommunity: "La wadaag FlowGo asxaabtaada iyo qoyskaba si aad u dhisto bulsho taageero leh.",
    shareOnWhatsApp: "Ku Wadaag WhatsApp",
    helpYourCommunity: "Caawin Bulshada",
    shareFlowGoSupport: "La wadaag FlowGo qof u baahan taageero caafimaad",

    emergency: "Degdeg",
    call999: "Wac 999",
    callDoctor: "Wac Dhakhtarka",
    dismiss: "Iska daa",

    officialInformation: "Macluumaad Rasmi ah",
    whatIsHMB: "Waa maxay Dhiig-bixitaanka Caadada ee Culusta?",
    whenToSeeDoctor: "Goorma aad dhakhtarka la kulanto",
    findSupportNearYou: "Hel taageero kugu dhow",
    youreNotAlone: "Ma keligaa tahay - halkan waxaa jira caawimaad aagaaga ku taal",
    call: "Wac",
    helpFriendsLearn: "Caawin saaxiibbadaada inay ku bartaan caafimaadka dumarka luqaddooda",

    currentCycleDay: "Maalinta Wareegga Hadda",
    dayOfCycle: "Maalinta wareegga",
    todaysSymptoms: "Calaamadaha Maanta",
    flowAmount: "Tirada Socodka",
    light: "Fudud",
    normal: "Caadi",
    heavy: "Culus",
    painLevel: "Heerka Xanuunka",
    noPain: "Xanuun ma jiro",
    mild: "Fudud",
    moderate: "Dhexdhexaad",
    severe: "Daran",
    verySevere: "Aad u Daran",
    voiceNotes: "Qoraalada Codka",
    speakInOwnWords: "Ku hadal erayadaada - luqad kasta",
    recording: "Waa la duubayaa...",
    recordVoiceNote: "Duub qoraal cod",
    writtenNotes: "Qoraalada Qoran",
    howFeelingToday: "Sidee maanta u dareemaysaa? Calaamado kale ma jiraan?",
    characters: "xarfo",
    saveTodaysLog: "Kaydi Diiwaanka Maanta",
    periodHistory: "Taariikhda Caadadaada",
    day: "Maalin",
    exportShare: "Soo Saar oo Wadaag",
    shareWithDoctor: "Kala Wadaag Dhakhtarka",

    emergencyServices: "Adeegyada Degdegga",
    lifeThreatening: "Xaaladaha degdegga ee noloshada khatar ku ah",
    urgentNonEmergency: "Daryeel degdeg ah laakiin aan degdeg ahayn",
    localHealthcareServices: "Adeegyada Caafimaadka Maxalliga",
    crisisSupport: "Taageero Dhibaato",
    freeEmotionalSupport: "Taageero dareen bilaash ah 24/7",
    domesticViolenceSupport: "Taageero rabshadaha guriga",

    heavyPeriodsCommon: "Caadada culusta waa caadi laakiin ma aha mid normal",
    periodLonger7Days: "Haddii caadadaadu ka badan tahay 7 maalmood",
    changeProtectionHourly: "Haddii aad u baahan tahay inaad saacad walba ilaalinta beddesho",
    clotsLarger10p: "Haddii aad soo saarto xinjiro ka weyn 10 pence",
    bleedingAffectsLife: "Haddii dhiig-bixitaanku saameyn ku yeesho nolol maalmeedkaaga",
    periodsHeavierUsual: "Caadadaadu si lama filaan ah uga culusday sidii caadiga ahayd",
    bleedingBetweenPeriods: "Dhiig-bixitaan ayaa dhex marta caadadaha",
    severePeriodPain: "Waxaad qabaa xanuun caadada oo daran",
    tiredShortBreath: "Waxaad dareemaysaa daal ama neefsasho dhib",
    affectingQualityLife: "Caadadaadu waxay saameyn ku leedahay tayada noloshada",
    healthcareProfessional: "Takhaasusle caafimaad ayaa kula doodi kara doorashada daawaynta",
  },
  sw: {
    greeting: "Hujambo! Mimi ni Amara, mwenzako wa afya",
    tagline: "Mahali pako pa kwenda kuelewa mtiririko wako",
    notification: "Imepita wiki 2 tangu miadi yako ya mwisho. Fikiria kumjulisha daktari wako kuhusu dalili zako.",
    shareLanguage: "Chagua lugha ya kushiriki:",
    appointmentReminder: "Kikumbusho cha Miadi",
    symbolOnlyMode: "Hali ya Alama Tu",

    learnAboutPeriods: "Jifunze Kuhusu Hedhi Nzito",
    understandSymptoms: "Elewa dalili zako",
    trackPeriods: "Fuatilia Hedhi Zako",
    logSymptomsOverTime: "Rekodi dalili kwa muda",
    getHelpNow: "Pata Msaada Sasa",
    emergencyHealthcareSupport: "Msaada wa dharura na huduma za afya",

    communitySupport: "Msaada wa Jamii",
    shareWithCommunity: "Shiriki FlowGo na marafiki na familia ili kusaidia kujenga jamii inayosaidia.",
    shareOnWhatsApp: "Shiriki kwenye WhatsApp",
    helpYourCommunity: "Saidia Jamii Yako",
    shareFlowGoSupport: "Shiriki FlowGo na mtu anayehitaji msaada wa afya",

    emergency: "Dharura",
    call999: "Piga 999",
    callDoctor: "Mpigie Daktari",
    dismiss: "Ondoa",

    officialInformation: "Taarifa Rasmi",
    whatIsHMB: "Ni Nini Kutokwa Damu Nyingi za Hedhi?",
    whenToSeeDoctor: "Wakati wa Kumwona Daktari",
    findSupportNearYou: "Pata Msaada Karibu Nawe",
    youreNotAlone: "Huko peke yako - hapa kuna msaada katika eneo lako",
    call: "Piga",
    helpFriendsLearn: "Saidia marafiki zako kujifunza kuhusu afya ya wanawake katika lugha yao",

    currentCycleDay: "Siku ya Mzunguko wa Sasa",
    dayOfCycle: "Siku ya mzunguko",
    todaysSymptoms: "Dalili za Leo",
    flowAmount: "Kiasi cha Mtiririko",
    light: "Nyepesi",
    normal: "Kawaida",
    heavy: "Nzito",
    painLevel: "Kiwango cha Maumivu",
    noPain: "Hakuna Maumivu",
    mild: "Nyepesi",
    moderate: "Wastani",
    severe: "Kali",
    verySevere: "Kali Sana",
    voiceNotes: "Maelezo ya Sauti",
    speakInOwnWords: "Sema kwa maneno yako - lugha yoyote",
    recording: "Inarekodi...",
    recordVoiceNote: "Rekodi maelezo ya sauti",
    writtenNotes: "Maelezo Yaliyoandikwa",
    howFeelingToday: "Unahisije leo? Dalili zingine zipo?",
    characters: "herufi",
    saveTodaysLog: "Hifadhi Rekodi ya Leo",
    periodHistory: "Historia ya Hedhi Yako",
    day: "Siku",
    exportShare: "Hamisha na Shiriki",
    shareWithDoctor: "Shiriki na Daktari",

    emergencyServices: "Huduma za Dharura",
    lifeThreatening: "Dharura zinazotishia maisha",
    urgentNonEmergency: "Huduma za haraka lakini si za dharura",
    localHealthcareServices: "Huduma za Afya za Mtaani",
    crisisSupport: "Msaada wa Machafuko",
    freeEmotionalSupport: "Msaada wa kihisia bila malipo 24/7",
    domesticViolenceSupport: "Msaada wa unyanyasaji wa nyumbani",

    heavyPeriodsCommon: "Hedhi nzito ni za kawaida lakini si za asili",
    periodLonger7Days: "Ikiwa hedhi yako inadumu zaidi ya siku 7",
    changeProtectionHourly: "Ikiwa unahitaji kubadilisha ulinzi kila saa",
    clotsLarger10p: "Ikiwa unapita maganda makubwa kuliko sarafu ya peni 10",
    bleedingAffectsLife: "Ikiwa kutokwa damu kunaathiri maisha yako ya kila siku",
    periodsHeavierUsual: "Hedhi zako zimekuwa nzito zaidi kuliko kawaida ghafla",
    bleedingBetweenPeriods: "Unatokwa damu kati ya hedhi",
    severePeriodPain: "Una maumivu makali ya hedhi",
    tiredShortBreath: "Unahisi uchovu au upungufu wa pumzi",
    affectingQualityLife: "Hedhi zako zinaathiri ubora wa maisha yako",
    healthcareProfessional: "Mtaalamu wa afya anaweza kujadili chaguo za matibabu nawe",
  },
  yo: {
    greeting: "Bawo! Emi ni Amara, alabaṣepọ ilera rẹ",
    tagline: "Ibi ti o fẹ lọ lati loye ṣiṣan rẹ",
    notification: "O ti pẹ ọsẹ meji lati ipade rẹ ti o kẹhin. Ronu lati sọ fun dokita rẹ nipa awọn ami aisan rẹ.",
    shareLanguage: "Yan ede lati pin:",
    appointmentReminder: "Olurannileti Ipade",
    symbolOnlyMode: "Ipo Ami Nikan",

    learnAboutPeriods: "Kọ Nipa Awọn Nkan Wuwo",
    understandSymptoms: "Loye awọn ami aisan rẹ",
    trackPeriods: "Tọpa Awọn Nkan Rẹ",
    logSymptomsOverTime: "Kọ awọn ami aisan ni akoko pupọ",
    getHelpNow: "Gba Iranlọwọ Bayi",
    emergencyHealthcareSupport: "Iranlọwọ pajawiri ati itọju ilera",

    communitySupport: "Atilẹyin Agbegbe",
    shareWithCommunity: "Pin FlowGo pẹlu awọn ọrẹ ati ebi lati ṣe iranlọwọ lati kọ agbegbe atilẹyin.",
    shareOnWhatsApp: "Pin lori WhatsApp",
    helpYourCommunity: "Ran Agbegbe Rẹ Lọwọ",
    shareFlowGoSupport: "Pin FlowGo pẹlu ẹnikan ti o nilo atilẹyin ilera",

    emergency: "Pajawiri",
    call999: "Pe 999",
    callDoctor: "Pe Dokita",
    dismiss: "Kọ silẹ",

    officialInformation: "Alaye Osise",
    whatIsHMB: "Kini Ṣiṣan Ẹjẹ Oṣu Ti o Wuwo?",
    whenToSeeDoctor: "Igba Ti A O Ri Dokita",
    findSupportNearYou: "Wa Atilẹyin Nitosi Rẹ",
    youreNotAlone: "Iwọ ko wa nikan - eyi ni iranlọwọ ni agbegbe rẹ",
    call: "Pe",
    helpFriendsLearn: "Ran awọn ọrẹ rẹ lọwọ lati kọ nipa ilera obinrin ni ede wọn",

    currentCycleDay: "Ọjọ Iyipo Lọwọlọwọ",
    dayOfCycle: "Ọjọ iyipo",
    todaysSymptoms: "Awọn Ami Aisan Oni",
    flowAmount: "Iwọn Ṣiṣan",
    light: "Fẹẹrẹ",
    normal: "Deede",
    heavy: "Wuwo",
    painLevel: "Ipele Irora",
    noPain: "Ko si Irora",
    mild: "Fẹẹrẹ",
    moderate: "Aarin",
    severe: "Nla",
    verySevere: "Nla Pupọ",
    voiceNotes: "Awọn Akọsilẹ Ohun",
    speakInOwnWords: "Sọrọ ni awọn ọrọ tirẹ - ede eyikeyi",
    recording: "N gbasilẹ...",
    recordVoiceNote: "Gbasilẹ akọsilẹ ohun",
    writtenNotes: "Awọn Akọsilẹ Kikọ",
    howFeelingToday: "Bawo ni o ṣe rilara loni? Awọn ami aisan miiran wa?",
    characters: "awọn lẹta",
    saveTodaysLog: "Fi Akọsilẹ Oni Pamọ",
    periodHistory: "Itan Nkan Rẹ",
    day: "Ọjọ",
    exportShare: "Gbe Jade ati Pin",
    shareWithDoctor: "Pin Pẹlu Dokita",

    emergencyServices: "Awọn Iṣẹ Pajawiri",
    lifeThreatening: "Awọn pajawiri ti o lewu si aye",
    urgentNonEmergency: "Itọju kiakia ṣugbọn ti kii ṣe pajawiri",
    localHealthcareServices: "Awọn Iṣẹ Itọju Ilera Agbegbe",
    crisisSupport: "Atilẹyin Wahala",
    freeEmotionalSupport: "Atilẹyin ẹdun ọfẹ 24/7",
    domesticViolenceSupport: "Atilẹyin iwa-ipa ile",

    heavyPeriodsCommon: "Awọn nkan wuwo jẹ wọpọ ṣugbọn wọn ko deede",
    periodLonger7Days: "Ti nkan rẹ ba gba ju ọjọ 7 lọ",
    changeProtectionHourly: "Ti o ba nilo lati yi aabo pada ni wakati kọọkan",
    clotsLarger10p: "Ti o ba kọja awọn didì ti o tobi ju owo peni 10 lọ",
    bleedingAffectsLife: "Ti ṣiṣan ẹjẹ ba ni ipa lori igbesi aye ojoojumọ rẹ",
    periodsHeavierUsual: "Awọn nkan rẹ ti di wuwo ju bi o ti maa n ṣe lọ lojiji",
    bleedingBetweenPeriods: "Ẹjẹ n ṣan laarin awọn nkan",
    severePeriodPain: "O ni irora nkan nla",
    tiredShortBreath: "O rilara arẹ tabi aiṣeemi",
    affectingQualityLife: "Awọn nkan rẹ n ni ipa lori didara igbesi aye rẹ",
    healthcareProfessional: "Alamọdaju itọju ilera le jiroro awọn aṣayan itọju pẹlu rẹ",
  },
  tw: {
    greeting: "Akwaaba! Me yɛ Amara, wo akwahosan boafoɔ",
    tagline: "Baabi a wobɛkɔ ate wo flow ase",
    notification: "Nnawɔtwe mmienu adi firi wo hyiamu a etwa no. Susuw ho sɛ wobɛka wo nsɛnkyerɛnne akyerɛ wo dɔkota.",
    shareLanguage: "Yi kasa a wobɛde akyɛ:",
    appointmentReminder: "Hyiamu Nkaebɔ",
    symbolOnlyMode: "Nsɛnkyerɛnne Nko Ara Kwan",

    learnAboutPeriods: "Sua Ɔbaa Duru Ho",
    understandSymptoms: "Te wo nsɛnkyerɛnne ase",
    trackPeriods: "Di Wo Ɔbaa Akyi",
    logSymptomsOverTime: "Kyerɛw nsɛnkyerɛnne wɔ berɛ mu",
    getHelpNow: "Nya Mmoa Seesei",
    emergencyHealthcareSupport: "Ntɛm mmoa ne akwahosan mmoa",

    communitySupport: "Mpɔtam Mmoa",
    shareWithCommunity: "Fa FlowGo kyɛ w'adamfo ne wo fiefoɔ na boa ma wɔnkyekye mpɔtam a ɛboa.",
    shareOnWhatsApp: "Fa kɔ WhatsApp so",
    helpYourCommunity: "Boa Wo Mpɔtam",
    shareFlowGoSupport: "Fa FlowGo kyɛ obi a ɔhia akwahosan mmoa",

    emergency: "Ntɛm",
    call999: "Frɛ 999",
    callDoctor: "Frɛ Dɔkota",
    dismiss: "Yi fi hɔ",

    officialInformation: "Amrado Nsɛm",
    whatIsHMB: "Ɛdeɛn ne Ɔbaa Mogya Duru?",
    whenToSeeDoctor: "Berɛ a Wobɛhunu Dɔkota",
    findSupportNearYou: "Hwehwɛ Mmoa Wo Nkyɛn",
    youreNotAlone: "Wonko - mmoa wɔ wo mpɔtam hɔ",
    call: "Frɛ",
    helpFriendsLearn: "Boa w'adamfo ma wɔnsua mmaa akwahosan wɔ wɔn kasa mu",

    currentCycleDay: "Seesei Afahyɛ Da",
    dayOfCycle: "Afahyɛ da",
    todaysSymptoms: "Ɛnnɛ Nsɛnkyerɛnne",
    flowAmount: "Nsuo Dodow",
    light: "Mmerɛw",
    normal: "Amanne",
    heavy: "Duru",
    painLevel: "Ɛyea Kɛse",
    noPain: "Ɛyea Biara Nni Hɔ",
    mild: "Mmerɛw",
    moderate: "Mfinimfini",
    severe: "Den",
    verySevere: "Den Paa",
    voiceNotes: "Nne Nkrataa",
    speakInOwnWords: "Ka wo ankasa nsɛm - kasa biara",
    recording: "Ɛrekɔ so...",
    recordVoiceNote: "Kyerɛw nne nkrataa",
    writtenNotes: "Nkrataa a Wɔatwerɛ",
    howFeelingToday: "Ɛdeɛn na wote ɛnnɛ? Nsɛnkyerɛnne foforɔ bi wɔ hɔ?",
    characters: "nkyerɛwde",
    saveTodaysLog: "Kora Ɛnnɛ Nkrataa",
    periodHistory: "Wo Ɔbaa Abakɔsɛm",
    day: "Da",
    exportShare: "Yi Kɔ Akyiri na Kyɛ",
    shareWithDoctor: "Kyɛ Dɔkota",

    emergencyServices: "Ntɛm Nnwuma",
    lifeThreatening: "Ntɛm a ɛde nkwa si asiane mu",
    urgentNonEmergency: "Ntɛm nanso ɛnyɛ ntɛm hwehwɛ",
    localHealthcareServices: "Mpɔtam Akwahosan Nnwuma",
    crisisSupport: "Ɔhaw Mmoa",
    freeEmotionalSupport: "Adwene mmoa a ɛnni ka 24/7",
    domesticViolenceSupport: "Fie basabasayɛ mmoa",

    heavyPeriodsCommon: "Ɔbaa duru yɛ amanne nanso ɛnyɛ amanne",
    periodLonger7Days: "Sɛ wo ɔbaa kɔ so kyɛ nna 7",
    changeProtectionHourly: "Sɛ ɛsɛ sɛ wosesa banbɔ dɔnhwerew biara",
    clotsLarger10p: "Sɛ wufa mogya akɛse a ɛso sen peni 10 sika no",
    bleedingAffectsLife: "Sɛ mogya no ka wo da biara asetra",
    periodsHeavierUsual: "Wo ɔbaa ayɛ duru sen kane no prɛko pɛ",
    bleedingBetweenPeriods: "Mogya retu wɔ ɔbaa ntam",
    severePeriodPain: "Wowɔ ɔbaa ɛyea a emu yɛ den",
    tiredShortBreath: "Wote brɛ anaasɛ ahome yɛ den",
    affectingQualityLife: "Wo ɔbaa reka wo asetra pa no",
    healthcareProfessional: "Akwahosan nimdefoɔ betumi ne wo akasa afa ayaresa akwan ho",
  },
  wo: {
    greeting: "Salaam! Maa ngi Amara, sa yaram boroom",
    tagline: "Sa bopp bu baax ngir xam sa flow",
    notification: "Ñaari ayubés nañu wax ci sa rendez-vous bu mujj. Xalaat ni nga wax sa doktooru ci sa simptom yi.",
    shareLanguage: "Tann làkk bu nga bëgg jox:",
    appointmentReminder: "Rendez-vous bu Xalatiku",
    symbolOnlyMode: "Mood yu Màkk ak Tëj rekk",

    learnAboutPeriods: "Jàng ci Règles yu Gëna",
    understandSymptoms: "Xam sa simptom yi",
    trackPeriods: "Topp sa Règles yi",
    logSymptomsOverTime: "Bind simptom yi ci waxtu",
    getHelpNow: "Am Ndimbal Léegi",
    emergencyHealthcareSupport: "Ndimbal bu gaaw ak soins de santé",

    communitySupport: "Ndimbal Réew",
    shareWithCommunity: "Jox FlowGo ak sa xarit yi ak sa mbokk mi ngir dimali jëfandikoo réew bu ndimbal.",
    shareOnWhatsApp: "Jox ci WhatsApp",
    helpYourCommunity: "Dimali Sa Réew",
    shareFlowGoSupport: "Jox FlowGo ak ku nekk ndimbal yaram",

    emergency: "Gaaw",
    call999: "Woo 999",
    callDoctor: "Woo Doktooru",
    dismiss: "Jël",

    officialInformation: "Xibaar yu Ofisiel",
    whatIsHMB: "Lan la Règles yu Gëna?",
    whenToSeeDoctor: "Kañ ngay gis Doktooru",
    findSupportNearYou: "Wut ndimbal ci sa kaw",
    youreNotAlone: "Du kenn rekk - ndimbal am ci sa kaw",
    call: "Woo",
    helpFriendsLearn: "Dimali sa xarit yi ngir jàng ci yaram jigéen ci seen làkk",

    currentCycleDay: "Bés bu Cycle bi léegi",
    dayOfCycle: "Bés bu cycle",
    todaysSymptoms: "Simptom yu Tay",
    flowAmount: "Limu Flow",
    light: "Yomb",
    normal: "Normal",
    heavy: "Gëna",
    painLevel: "Niveau bu Metit",
    noPain: "Metit amul",
    mild: "Yomb",
    moderate: "Diggu",
    severe: "Gëna",
    verySevere: "Gëna Lool",
    voiceNotes: "Notes bu Baat",
    speakInOwnWords: "Wax ci sa baat - làkk lenn",
    recording: "Dafa ngi enregistrer...",
    recordVoiceNote: "Enregistrer note bu baat",
    writtenNotes: "Notes yu Bind",
    howFeelingToday: "Naka nga feel tay? Simptom yeneen am?",
    characters: "màkk",
    saveTodaysLog: "Kayit Log bu Tay",
    periodHistory: "Taariix sa Règles",
    day: "Bés",
    exportShare: "Export ak Jox",
    shareWithDoctor: "Jox ak Doktooru",

    emergencyServices: "Services bu Gaaw",
    lifeThreatening: "Gaaw yu nekk ci doom",
    urgentNonEmergency: "Soins yu gaaw waaye du gaaw",
    localHealthcareServices: "Services Yaram yu Kaw",
    crisisSupport: "Ndimbal Crise",
    freeEmotionalSupport: "Ndimbal émotionnel bu amul xaalis 24/7",
    domesticViolenceSupport: "Ndimbal violence domestique",

    heavyPeriodsCommon: "Règles yu gëna des na waaye du normal",
    periodLonger7Days: "Su sa règles doon ci 7 bés yi",
    changeProtectionHourly: "Su war nga soppi protection ci waxtu bu nekk",
    clotsLarger10p: "Su jëfee caillots yu gëna ci 10 pence",
    bleedingAffectsLife: "Su saignement bi jafe sa bés bu nekk",
    periodsHeavierUsual: "Sa règles yi gëna nañu ci lu ñu des",
    bleedingBetweenPeriods: "Saignement am ci biir règles yi",
    severePeriodPain: "Am nga metit bu gëna ci règles",
    tiredShortBreath: "Dafa nga sore walla am problème respiration",
    affectingQualityLife: "Sa règles yi dañuy jafe qualité sa bés",
    healthcareProfessional: "Professionnel yaram mën na ak yow waxtaan ci options traitement",
  },
  am: {
    greeting: "ሰላም! እኔ አማራ ነኝ፣ የጤና አጋርሽ",
    tagline: "የፍሰትሽን ለመረዳት የምትሄጂበት ቦታ",
    notification: "ከመጨረሻ ቀጠሮሽ 2 ሳምንት አልፏል። ዶክተርሽን ስለ ምልክቶችሽ ማሳወቅ አስቢ።",
    shareLanguage: "ለማጋራት ቋንቋ ምረጪ:",
    appointmentReminder: "የቀጠሮ ማስታወሻ",
    symbolOnlyMode: "የምልክት ብቻ ሁነታ",

    learnAboutPeriods: "ስለ ከባድ ወር አበባ ተማሪ",
    understandSymptoms: "ምልክቶችሽን ተረጂ",
    trackPeriods: "ወር አበባሽን ተከታተይ",
    logSymptomsOverTime: "በጊዜ ሂደት ምልክቶችን መዝግቢ",
    getHelpNow: "አሁን እርዳታ ውሰጂ",
    emergencyHealthcareSupport: "የአደጋ ጊዜ እና የጤና አገልግሎት ድጋፍ",

    communitySupport: "የማህበረሰብ ድጋፍ",
    shareWithCommunity: "ድጋፍ ሰጪ ማህበረሰብ ለመገንባት FlowGo ን ከጓደኞችሽ እና ከቤተሰብሽ ጋር አጋሪ።",
    shareOnWhatsApp: "በWhatsApp አጋሪ",
    helpYourCommunity: "ማህበረሰብሽን እርጂ",
    shareFlowGoSupport: "FlowGo ን ከጤና ድጋፍ ከሚፈልግ ሰው ጋር አጋሪ",

    emergency: "አደጋ",
    call999: "999 ደውይ",
    callDoctor: "ዶክተርን ደውይ",
    dismiss: "አስወግጂ",

    officialInformation: "ይፋዊ መረጃ",
    whatIsHMB: "ከባድ የወር አበባ ደም መፍሰስ ምንድን ነው?",
    whenToSeeDoctor: "ዶክተርን መቼ ማየት እንዳለብሽ",
    findSupportNearYou: "በአቅራቢያሽ ድጋፍ አግኚ",
    youreNotAlone: "ብቻሽን አይደለሽም - በአካባቢሽ እርዳታ አለ",
    call: "ደውይ",
    helpFriendsLearn: "ጓደኞችሽ በቋንቋቸው ስለ ሴቶች ጤና እንዲማሩ እርጂያቸው",

    currentCycleDay: "የአሁኑ ዑደት ቀን",
    dayOfCycle: "የዑደት ቀን",
    todaysSymptoms: "የዛሬ ምልክቶች",
    flowAmount: "የፍሰት መጠን",
    light: "ቀላል",
    normal: "መደበኛ",
    heavy: "ከባድ",
    painLevel: "የህመም ደረጃ",
    noPain: "ህመም የለም",
    mild: "ቀላል",
    moderate: "መካከለኛ",
    severe: "ከባድ",
    verySevere: "በጣም ከባድ",
    voiceNotes: "የድምጽ ማስታወሻዎች",
    speakInOwnWords: "በራስሽ ቃላት ተናገሪ - ማንኛውም ቋንቋ",
    recording: "እየቀረጸ...",
    recordVoiceNote: "የድምጽ ማስታወሻ ቅረጺ",
    writtenNotes: "የተጻፉ ማስታወሻዎች",
    howFeelingToday: "ዛሬ እንዴት ትሰማለሽ? ሌሎች ምልክቶች አሉ?",
    characters: "ቁምፊዎች",
    saveTodaysLog: "የዛሬን ምዝገባ አስቀምጪ",
    periodHistory: "የወር አበባሽ ታሪክ",
    day: "ቀን",
    exportShare: "ላኪ እና አጋሪ",
    shareWithDoctor: "ከዶክተር ጋር አጋሪ",

    emergencyServices: "የአደጋ ጊዜ አገልግሎቶች",
    lifeThreatening: "ሕይወት አደጋ ላይ የሚጥሉ አደጋዎች",
    urgentNonEmergency: "አስቸኳይ ግን አደጋ ያልሆነ እንክብካቤ",
    localHealthcareServices: "የአካባቢ ጤና አገልግሎቶች",
    crisisSupport: "የቀውስ ድጋፍ",
    freeEmotionalSupport: "ነጻ 24/7 ስሜታዊ ድጋፍ",
    domesticViolenceSupport: "የቤት ውስጥ ሁከት ድጋፍ",

    heavyPeriodsCommon: "ከባድ ወር አበባ የተለመደ ነው ግን መደበኛ አይደለም",
    periodLonger7Days: "ወር አበባሽ ከ7 ቀናት በላይ ከቆየ",
    changeProtectionHourly: "በየሰዓቱ መከላከያ መቀየር ከፈለግሽ",
    clotsLarger10p: "ከ10 ፔንስ ሳንቲም የበለጠ ትላልቅ የደም መጨናነቅ ካለፈ",
    bleedingAffectsLife: "ደም መፍሰስ በዕለት ተዕለት ሕይወትሽ ላይ ተጽዕኖ ካሳደረ",
    periodsHeavierUsual: "ወር አበባሽ በድንገት ከመደበኛው የበለጠ ከባድ ሆነ",
    bleedingBetweenPeriods: "በወር አበባዎች መካከል ደም እየፈሰሰ ነው",
    severePeriodPain: "ከባድ የወር አበባ ህመም አለሽ",
    tiredShortBreath: "ድካም ወይም የመተንፈስ ችግር ትሰማለሽ",
    affectingQualityLife: "ወር አበባሽ በሕይወትሽ ጥራት ላይ ተጽዕኖ እያሳደረ ነው",
    healthcareProfessional: "የጤና አጠባበቅ ባለሙያ ከሽ ጋር የሕክምና አማራጮችን መወያየት ይችላል",
  },
  ti: {
    greeting: "ሰላም! ኣነ ኣማራ እየ፣ ናይ ጥዕና መሓዛኺ",
    tagline: "ናይ ፍሰትኪ ንምርዳእ እትኸዲሉ ቦታ",
    notification: "ካብ መወዳእታ ቀጠሮኺ 2 ሰሙን ሓሊፉ። ሓኪምኪ ብዛዕባ ምልክታትኪ ምሕባር ሓስቢ።",
    shareLanguage: "ንምክፋል ቋንቋ ምረጺ:",
    appointmentReminder: "ናይ ቀጠሮ መዘኻኸሪ",
    symbolOnlyMode: "ናይ ምልክት ጥራይ ኩነታት",

    learnAboutPeriods: "ብዛዕባ ከቢድ ወርሒ ተማሃሪ",
    understandSymptoms: "ምልክታትኪ ተረዲ",
    trackPeriods: "ወርሒኺ ተኸታተሊ",
    logSymptomsOverTime: "ብግዜ ምልክታት ምዝገባ",
    getHelpNow: "ሕጂ ሓገዝ ረኺቢ",
    emergencyHealthcareSupport: "ናይ ህጹጽ ኩነታት ከምኡ'ውን ናይ ጥዕና ሓገዝ",

    communitySupport: "ናይ ሕብረተሰብ ደገፍ",
    shareWithCommunity: "ደጋፊ ሕብረተሰብ ንምህናጽ FlowGo ምስ ኣዕሩኽትኪ ከምኡ'ውን ስድራቤትኪ ኣካፍሊ።",
    shareOnWhatsApp: "ኣብ WhatsApp ኣካፍሊ",
    helpYourCommunity: "ሕብረተሰብኪ ሓግዚ",
    shareFlowGoSupport: "FlowGo ምስ ናይ ጥዕና ደገፍ ዘድልዮ ሰብ ኣካፍሊ",

    emergency: "ህጹጽ",
    call999: "999 ደውሊ",
    callDoctor: "ሓኪም ደውሊ",
    dismiss: "ኣወግዲ",

    officialInformation: "ወግዓዊ ሓበሬታ",
    whatIsHMB: "ከቢድ ወርሓዊ ደም ምፍሳስ እንታይ እዩ?",
    whenToSeeDoctor: "ሓኪም መዓስ ክትርእዮ",
    findSupportNearYou: "ኣብ ጥቓኺ ደገፍ ረኺቢ",
    youreNotAlone: "በይንኺ ኣይኮንክን - ኣብ ከባቢኺ ሓገዝ ኣሎ",
    call: "ደውሊ",
    helpFriendsLearn: "ኣዕሩኽትኪ ብቋንቋኦም ብዛዕባ ጥዕና ኣንስቲ ክመሃራ ሓግዝየን",

    currentCycleDay: "ናይ ሕጂ ዑደት መዓልቲ",
    dayOfCycle: "ናይ ዑደት መዓልቲ",
    todaysSymptoms: "ናይ ሎሚ ምልክታት",
    flowAmount: "መጠን ፍሰት",
    light: "ቀሊል",
    normal: "ንቡር",
    heavy: "ከቢድ",
    painLevel: "ደረጃ ቃንዛ",
    noPain: "ቃንዛ የለን",
    mild: "ቀሊል",
    moderate: "ማእከላይ",
    severe: "ከቢድ",
    verySevere: "ኣዝዩ ከቢድ",
    voiceNotes: "ናይ ድምጺ መዘኻኸሪታት",
    speakInOwnWords: "ብናትኪ ቃላት ተዛረቢ - ዝኾነ ቋንቋ",
    recording: "ይምዝገብ ኣሎ...",
    recordVoiceNote: "ናይ ድምጺ መዘኻኸሪ ምዝገባ",
    writtenNotes: "ዝተጻሕፉ መዘኻኸሪታት",
    howFeelingToday: "ሎሚ ከመይ ትስምዒ? ካልኦት ምልክታት ኣለዉ?",
    characters: "ፊደላት",
    saveTodaysLog: "ናይ ሎሚ ምዝገባ ዓቅቢ",
    periodHistory: "ናይ ወርሒኺ ታሪኽ",
    day: "መዓልቲ",
    exportShare: "ኣውጻእ ከምኡ'ውን ኣካፍል",
    shareWithDoctor: "ምስ ሓኪም ኣካፍል",

    emergencyServices: "ናይ ህጹጽ ኩነታት ኣገልግሎታት",
    lifeThreatening: "ንህይወት ሓደጋ ዘስዕቡ ህጹጽ ኩነታት",
    urgentNonEmergency: "ህጹጽ ግን ዘይህጹጽ ክንክን",
    localHealthcareServices: "ናይ ከባቢ ጥዕና ኣገልግሎታት",
    crisisSupport: "ናይ ቅልውላው ደገፍ",
    freeEmotionalSupport: "ናጻ 24/7 ስምዒታዊ ደገፍ",
    domesticViolenceSupport: "ናይ ገዛ ውሽጢ ዓመጽ ደገፍ",

    heavyPeriodsCommon: "ከቢድ ወርሒ ልሙድ እዩ ግን ንቡር ኣይኮነን",
    periodLonger7Days: "ወርሒኺ ካብ 7 መዓልቲ ንላዕሊ እንተኸይዱ",
    changeProtectionHourly: "ኣብ ሰዓት ሰዓት ምክልኻል ክትቅይሪ እንተኸይድኪ",
    clotsLarger10p: "ካብ 10 ፔንስ ሳንቲም ዝዓበዩ ደም ጽሕጊታት እንተሓሊፍኪ",
    bleedingAffectsLife: "ደም ምፍሳስ ኣብ መዓልታዊ ህይወትኪ ጽልዋ እንተገይሩ",
    periodsHeavierUsual: "ወርሒኺ ብሃንደበት ካብ ልሙድ ዝበዝሐ ከቢድ ኮይኑ",
    bleedingBetweenPeriods: "ኣብ መንጎ ወርሒ ደም ይፍስስ ኣሎ",
    severePeriodPain: "ከቢድ ናይ ወርሒ ቃንዛ ኣለኪ",
    tiredShortBreath: "ድኻም ወይ ናይ ምስትንፋስ ጸገም ትስምዒ",
    affectingQualityLife: "ወርሒኺ ኣብ ጽሬት ህይወትኪ ጽልዋ ይገብር ኣሎ",
    healthcareProfessional: "ናይ ጥዕና ክንክን ሞያዊ ምስኪ ብዛዕባ ናይ ሕክምና ኣማራጺታት ክዛተ ይኽእል",
  },
  pl: {
    greeting: "Cześć! Jestem Amara, twoja towarzyszka zdrowia",
    tagline: "Twoje miejsce do zrozumienia miesiączki",
    notification: "Minęły 2 tygodnie od twojej ostatniej wizyty. Rozważ poinformowanie lekarza o swoich objawach.",
    shareLanguage: "Wybierz język do udostępnienia:",
    appointmentReminder: "Przypomnienie o Wizycie",
    symbolOnlyMode: "Tryb Tylko Symboli",

    learnAboutPeriods: "Dowiedz się o Obfitych Miesiączkach",
    understandSymptoms: "Zrozum swoje objawy",
    trackPeriods: "Śledź Swoje Miesiączki",
    logSymptomsOverTime: "Rejestruj objawy w czasie",
    getHelpNow: "Uzyskaj Pomoc Teraz",
    emergencyHealthcareSupport: "Wsparcie w nagłych wypadkach i opiece zdrowotnej",

    communitySupport: "Wsparcie Społeczności",
    shareWithCommunity: "Udostępnij FlowGo znajomym i rodzinie, aby pomóc w budowaniu wspierającej społeczności.",
    shareOnWhatsApp: "Udostępnij na WhatsApp",
    helpYourCommunity: "Pomóż Swojej Społeczności",
    shareFlowGoSupport: "Udostępnij FlowGo komuś, kto potrzebuje wsparcia zdrowotnego",

    emergency: "Nagły Wypadek",
    call999: "Zadzwoń 999",
    callDoctor: "Zadzwoń do Lekarza",
    dismiss: "Odrzuć",

    officialInformation: "Oficjalne Informacje",
    whatIsHMB: "Czym są Obfite Krwawienia Miesiączkowe?",
    whenToSeeDoctor: "Kiedy Udać się do Lekarza",
    findSupportNearYou: "Znajdź Wsparcie w Pobliżu",
    youreNotAlone: "Nie jesteś sama - oto pomoc w twojej okolicy",
    call: "Zadzwoń",
    helpFriendsLearn: "Pomóż przyjaciółkom nauczyć się o zdrowiu kobiet w ich języku",

    currentCycleDay: "Aktualny Dzień Cyklu",
    dayOfCycle: "Dzień cyklu",
    todaysSymptoms: "Dzisiejsze Objawy",
    flowAmount: "Ilość Krwawienia",
    light: "Lekkie",
    normal: "Normalne",
    heavy: "Obfite",
    painLevel: "Poziom Bólu",
    noPain: "Brak Bólu",
    mild: "Łagodny",
    moderate: "Umiarkowany",
    severe: "Silny",
    verySevere: "Bardzo Silny",
    voiceNotes: "Notatki Głosowe",
    speakInOwnWords: "Mów własnymi słowami - w dowolnym języku",
    recording: "Nagrywanie...",
    recordVoiceNote: "Nagraj notatkę głosową",
    writtenNotes: "Notatki Pisemne",
    howFeelingToday: "Jak się dziś czujesz? Jakieś inne objawy?",
    characters: "znaków",
    saveTodaysLog: "Zapisz Dzisiejszy Dziennik",
    periodHistory: "Historia Twoich Miesiączek",
    day: "Dzień",
    exportShare: "Eksportuj i Udostępnij",
    shareWithDoctor: "Udostępnij Lekarzowi",

    emergencyServices: "Służby Ratunkowe",
    lifeThreatening: "Zagrażające życiu sytuacje awaryjne",
    urgentNonEmergency: "Pilna, ale nie awaryjna opieka",
    localHealthcareServices: "Lokalne Usługi Zdrowotne",
    crisisSupport: "Wsparcie w Kryzysie",
    freeEmotionalSupport: "Bezpłatne wsparcie emocjonalne 24/7",
    domesticViolenceSupport: "Wsparcie w przypadku przemocy domowej",

    heavyPeriodsCommon: "Obfite miesiączki są częste, ale nie normalne",
    periodLonger7Days: "Jeśli twoja miesiączka trwa dłużej niż 7 dni",
    changeProtectionHourly: "Jeśli musisz zmieniać ochronę co godzinę",
    clotsLarger10p: "Jeśli wydalasz skrzepy większe niż moneta 10 pensów",
    bleedingAffectsLife: "Jeśli krwawienie wpływa na twoje codzienne życie",
    periodsHeavierUsual: "Twoje miesiączki nagle stały się obfitsze niż zwykle",
    bleedingBetweenPeriods: "Krwawisz między miesiączkami",
    severePeriodPain: "Masz silny ból miesiączkowy",
    tiredShortBreath: "Czujesz się zmęczona lub masz duszności",
    affectingQualityLife: "Twoje miesiączki wpływają na jakość twojego życia",
    healthcareProfessional: "Specjalista opieki zdrowotnej może omówić z tobą opcje leczenia",
  },
  fr: {
    greeting: "Bonjour! Je suis Amara, votre compagne de santé",
    tagline: "Votre endroit de référence pour comprendre vos règles",
    notification:
      "Cela fait 2 semaines depuis votre dernier rendez-vous. Pensez à informer votre médecin de vos symptômes.",
    shareLanguage: "Choisissez la langue de partage:",
    appointmentReminder: "Rappel de rendez-vous",
    symbolOnlyMode: "Mode Symboles Uniquement",

    learnAboutPeriods: "Apprendre sur les Règles Abondantes",
    understandSymptoms: "Comprendre vos symptômes",
    trackPeriods: "Suivre vos Règles",
    logSymptomsOverTime: "Enregistrer les symptômes dans le temps",
    getHelpNow: "Obtenir de l'Aide Maintenant",
    emergencyHealthcareSupport: "Support d'urgence et de soins de santé",

    communitySupport: "Support Communautaire",
    shareWithCommunity:
      "Partagez FlowGo avec vos amis et votre famille pour aider à construire une communauté solidaire.",
    shareOnWhatsApp: "Partager sur WhatsApp",
    helpYourCommunity: "Aidez Votre Communauté",
    shareFlowGoSupport: "Partagez FlowGo avec quelqu'un qui a besoin d'un soutien médical",

    emergency: "Urgence",
    call999: "Appeler le 999",
    callDoctor: "Appeler le Médecin",
    dismiss: "Ignorer",

    officialInformation: "Informations Officielles",
    whatIsHMB: "Qu'est-ce que les Saignements Menstruels Abondants?",
    whenToSeeDoctor: "Quand Consulter un Médecin",
    findSupportNearYou: "Trouver du Soutien Près de Vous",
    youreNotAlone: "Vous n'êtes pas seule - voici de l'aide dans votre région",
    call: "Appeler",
    helpFriendsLearn: "Aidez vos amies à apprendre sur la santé des femmes dans leur langue",

    currentCycleDay: "Jour Actuel du Cycle",
    dayOfCycle: "Jour du cycle",
    todaysSymptoms: "Symptômes d'Aujourd'hui",
    flowAmount: "Quantité de Flux",
    light: "Léger",
    normal: "Normal",
    heavy: "Abondant",
    painLevel: "Niveau de Douleur",
    noPain: "Pas de Douleur",
    mild: "Léger",
    moderate: "Modéré",
    severe: "Sévère",
    verySevere: "Très Sévère",
    voiceNotes: "Notes Vocales",
    speakInOwnWords: "Parlez dans vos propres mots - n'importe quelle langue",
    recording: "Enregistrement...",
    recordVoiceNote: "Enregistrer une note vocale",
    writtenNotes: "Notes Écrites",
    howFeelingToday: "Comment vous sentez-vous aujourd'hui? D'autres symptômes?",
    characters: "caractères",
    saveTodaysLog: "Sauvegarder le Journal d'Aujourd'hui",
    periodHistory: "Votre Historique des Règles",
    day: "Jour",
    exportShare: "Exporter et Partager",
    shareWithDoctor: "Partager avec le Médecin",

    emergencyServices: "Services d'Urgence",
    lifeThreatening: "Urgences mettant la vie en danger",
    urgentNonEmergency: "Soins urgents mais non urgents",
    localHealthcareServices: "Services de Santé Locaux",
    crisisSupport: "Soutien de Crise",
    freeEmotionalSupport: "Soutien émotionnel gratuit 24/7",
    domesticViolenceSupport: "Soutien contre la violence domestique",

    heavyPeriodsCommon: "Les règles abondantes sont courantes mais pas normales",
    periodLonger7Days: "Si vos règles durent plus de 7 jours",
    changeProtectionHourly: "Si vous devez changer de protection toutes les heures",
    clotsLarger10p: "Si vous passez des caillots plus gros qu'une pièce de 10 pence",
    bleedingAffectsLife: "Si les saignements affectent votre vie quotidienne",
    periodsHeavierUsual: "Vos règles sont soudainement devenues plus abondantes que d'habitude",
    bleedingBetweenPeriods: "Vous saignez entre les règles",
    severePeriodPain: "Vous avez des douleurs menstruelles sévères",
    tiredShortBreath: "Vous vous sentez fatiguée ou essoufflée",
    affectingQualityLife: "Vos règles affectent votre qualité de vie",
    healthcareProfessional: "Un professionnel de la santé peut discuter des options de traitement avec vous",
  },
  es: {
    greeting: "¡Hola! Soy Amara, tu compañera de salud",
    tagline: "Tu lugar de referencia para entender tu flujo",
    notification: "Han pasado 2 semanas desde tu última cita. Considera informar a tu médico sobre tus síntomas.",
    shareLanguage: "Elige el idioma para compartir:",
    appointmentReminder: "Recordatorio de Cita",
    symbolOnlyMode: "Modo Solo Símbolos",

    learnAboutPeriods: "Aprende sobre Períodos Abundantes",
    understandSymptoms: "Entiende tus síntomas",
    trackPeriods: "Rastrea tus Períodos",
    logSymptomsOverTime: "Registra síntomas a lo largo del tiempo",
    getHelpNow: "Obtén Ayuda Ahora",
    emergencyHealthcareSupport: "Apoyo de emergencia y atención médica",

    communitySupport: "Apoyo Comunitario",
    shareWithCommunity: "Comparte FlowGo con amigos y familia para ayudar a construir una comunidad de apoyo.",
    shareOnWhatsApp: "Compartir en WhatsApp",
    helpYourCommunity: "Ayuda a tu Comunidad",
    shareFlowGoSupport: "Comparte FlowGo con alguien que necesite apoyo médico",

    emergency: "Emergencia",
    call999: "Llamar al 999",
    callDoctor: "Llamar al Médico",
    dismiss: "Descartar",

    officialInformation: "Información Oficial",
    whatIsHMB: "¿Qué es el Sangrado Menstrual Abundante?",
    whenToSeeDoctor: "Cuándo Ver a un Médico",
    findSupportNearYou: "Encuentra Apoyo Cerca de Ti",
    youreNotAlone: "No estás sola - aquí hay ayuda en tu área",
    call: "Llamar",
    helpFriendsLearn: "Ayuda a tus amigas a aprender sobre la salud femenina en su idioma",

    currentCycleDay: "Día Actual del Ciclo",
    dayOfCycle: "Día del ciclo",
    todaysSymptoms: "Síntomas de Hoy",
    flowAmount: "Cantidad de Flujo",
    light: "Ligero",
    normal: "Normal",
    heavy: "Abundante",
    painLevel: "Nivel de Dolor",
    noPain: "Sin Dolor",
    mild: "Leve",
    moderate: "Moderado",
    severe: "Severo",
    verySevere: "Muy Severo",
    voiceNotes: "Notas de Voz",
    speakInOwnWords: "Habla con tus propias palabras - cualquier idioma",
    recording: "Grabando...",
    recordVoiceNote: "Grabar nota de voz",
    writtenNotes: "Notas Escritas",
    howFeelingToday: "¿Cómo te sientes hoy? ¿Algún otro síntoma?",
    characters: "caracteres",
    saveTodaysLog: "Guardar Registro de Hoy",
    periodHistory: "Tu Historial de Períodos",
    day: "Día",
    exportShare: "Exportar y Compartir",
    shareWithDoctor: "Compartir con el Médico",

    emergencyServices: "Servicios de Emergencia",
    lifeThreatening: "Emergencias que amenazan la vida",
    urgentNonEmergency: "Atención urgente pero no de emergencia",
    localHealthcareServices: "Servicios de Salud Locales",
    crisisSupport: "Apoyo en Crisis",
    freeEmotionalSupport: "Apoyo emocional gratuito 24/7",
    domesticViolenceSupport: "Apoyo contra la violencia doméstica",

    heavyPeriodsCommon: "Los períodos abundantes son comunes pero no normales",
    periodLonger7Days: "Si tu período dura más de 7 días",
    changeProtectionHourly: "Si necesitas cambiar la protección cada hora",
    clotsLarger10p: "Si pasas coágulos más grandes que una moneda de 10 peniques",
    bleedingAffectsLife: "Si el sangrado afecta tu vida diaria",
    periodsHeavierUsual: "Tus períodos se volvieron repentinamente más abundantes de lo usual",
    bleedingBetweenPeriods: "Estás sangrando entre períodos",
    severePeriodPain: "Tienes dolor menstrual severo",
    tiredShortBreath: "Te sientes cansada o con falta de aire",
    affectingQualityLife: "Tus períodos están afectando tu calidad de vida",
    healthcareProfessional: "Un profesional de la salud puede discutir opciones de tratamiento contigo",
  },
  pt: {
    greeting: "Olá! Eu sou Amara, sua companheira de saúde",
    tagline: "Seu lugar de referência para entender seu fluxo",
    notification: "Passaram-se 2 semanas desde sua última consulta. Considere informar seu médico sobre seus sintomas.",
    shareLanguage: "Escolha o idioma para compartilhar:",
    appointmentReminder: "Lembrete de Consulta",
    symbolOnlyMode: "Modo Apenas Símbolos",

    learnAboutPeriods: "Aprenda sobre Períodos Intensos",
    understandSymptoms: "Entenda seus sintomas",
    trackPeriods: "Acompanhe seus Períodos",
    logSymptomsOverTime: "Registre sintomas ao longo do tempo",
    getHelpNow: "Obtenha Ajuda Agora",
    emergencyHealthcareSupport: "Suporte de emergência e cuidados de saúde",

    communitySupport: "Apoio Comunitário",
    shareWithCommunity: "Compartilhe FlowGo com amigos e família para ajudar a construir uma comunidade de apoio.",
    shareOnWhatsApp: "Compartilhar no WhatsApp",
    helpYourCommunity: "Ajude sua Comunidade",
    shareFlowGoSupport: "Compartilhe FlowGo com alguém que precisa de apoio médico",

    emergency: "Emergência",
    call999: "Ligar para 999",
    callDoctor: "Ligar para o Médico",
    dismiss: "Dispensar",

    officialInformation: "Informações Oficiais",
    whatIsHMB: "O que é Sangramento Menstrual Intenso?",
    whenToSeeDoctor: "Quando Ver um Médico",
    findSupportNearYou: "Encontre Apoio Perto de Você",
    youreNotAlone: "Você não está sozinha - aqui está ajuda em sua área",
    call: "Ligar",
    helpFriendsLearn: "Ajude suas amigas a aprender sobre saúde feminina em seu idioma",

    currentCycleDay: "Dia Atual do Ciclo",
    dayOfCycle: "Dia do ciclo",
    todaysSymptoms: "Sintomas de Hoje",
    flowAmount: "Quantidade de Fluxo",
    light: "Leve",
    normal: "Normal",
    heavy: "Intenso",
    painLevel: "Nível de Dor",
    noPain: "Sem Dor",
    mild: "Leve",
    moderate: "Moderado",
    severe: "Severo",
    verySevere: "Muito Severo",
    voiceNotes: "Notas de Voz",
    speakInOwnWords: "Fale com suas próprias palavras - qualquer idioma",
    recording: "Gravando...",
    recordVoiceNote: "Gravar nota de voz",
    writtenNotes: "Notas Escritas",
    howFeelingToday: "Como você se sente hoje? Algum outro sintoma?",
    characters: "caracteres",
    saveTodaysLog: "Salvar Registro de Hoje",
    periodHistory: "Seu Histórico de Períodos",
    day: "Dia",
    exportShare: "Exportar e Compartilhar",
    shareWithDoctor: "Compartilhar com o Médico",

    emergencyServices: "Serviços de Emergência",
    lifeThreatening: "Emergências que ameaçam a vida",
    urgentNonEmergency: "Cuidados urgentes mas não de emergência",
    localHealthcareServices: "Serviços de Saúde Locais",
    crisisSupport: "Apoio em Crise",
    freeEmotionalSupport: "Apoio emocional gratuito 24/7",
    domesticViolenceSupport: "Apoio contra violência doméstica",

    heavyPeriodsCommon: "Períodos intensos são comuns mas não normais",
    periodLonger7Days: "Se seu período durar mais de 7 dias",
    changeProtectionHourly: "Se você precisar trocar a proteção a cada hora",
    clotsLarger10p: "Se você passar coágulos maiores que uma moeda de 10 pence",
    bleedingAffectsLife: "Se o sangramento afetar sua vida diária",
    periodsHeavierUsual: "Seus períodos ficaram repentinamente mais intensos que o usual",
    bleedingBetweenPeriods: "Você está sangrando entre os períodos",
    severePeriodPain: "Você tem dor menstrual severa",
    tiredShortBreath: "Você se sente cansada ou com falta de ar",
    affectingQualityLife: "Seus períodos estão afetando sua qualidade de vida",
    healthcareProfessional: "Um profissional de saúde pode discutir opções de tratamento com você",
  },
  it: {
    greeting: "Ciao! Sono Amara, la tua compagna di salute",
    tagline: "Il tuo posto di riferimento per capire il tuo flusso",
    notification:
      "Sono passate 2 settimane dal tuo ultimo appuntamento. Considera di informare il tuo medico sui tuoi sintomi.",
    shareLanguage: "Scegli la lingua per condividere:",
    appointmentReminder: "Promemoria Appuntamento",
    symbolOnlyMode: "Modalità Solo Simboli",

    learnAboutPeriods: "Impara sui Periodi Abbondanti",
    understandSymptoms: "Comprendi i tuoi sintomi",
    trackPeriods: "Traccia i tuoi Periodi",
    logSymptomsOverTime: "Registra i sintomi nel tempo",
    getHelpNow: "Ottieni Aiuto Ora",
    emergencyHealthcareSupport: "Supporto di emergenza e assistenza sanitaria",

    communitySupport: "Supporto della Comunità",
    shareWithCommunity: "Condividi FlowGo con amici e famiglia per aiutare a costruire una comunità di supporto.",
    shareOnWhatsApp: "Condividi su WhatsApp",
    helpYourCommunity: "Aiuta la tua Comunità",
    shareFlowGoSupport: "Condividi FlowGo con qualcuno che ha bisogno di supporto sanitario",

    emergency: "Emergenza",
    call999: "Chiama 999",
    callDoctor: "Chiama il Medico",
    dismiss: "Ignora",

    officialInformation: "Informazioni Ufficiali",
    whatIsHMB: "Cos'è il Sanguinamento Mestruale Abbondante?",
    whenToSeeDoctor: "Quando Vedere un Medico",
    findSupportNearYou: "Trova Supporto Vicino a Te",
    youreNotAlone: "Non sei sola - ecco aiuto nella tua zona",
    call: "Chiama",
    helpFriendsLearn: "Aiuta le tue amiche a imparare sulla salute femminile nella loro lingua",

    currentCycleDay: "Giorno Attuale del Ciclo",
    dayOfCycle: "Giorno del ciclo",
    todaysSymptoms: "Sintomi di Oggi",
    flowAmount: "Quantità di Flusso",
    light: "Leggero",
    normal: "Normale",
    heavy: "Abbondante",
    painLevel: "Livello di Dolore",
    noPain: "Nessun Dolore",
    mild: "Lieve",
    moderate: "Moderato",
    severe: "Severo",
    verySevere: "Molto Severo",
    voiceNotes: "Note Vocali",
    speakInOwnWords: "Parla con le tue parole - qualsiasi lingua",
    recording: "Registrando...",
    recordVoiceNote: "Registra nota vocale",
    writtenNotes: "Note Scritte",
    howFeelingToday: "Come ti senti oggi? Altri sintomi?",
    characters: "caratteri",
    saveTodaysLog: "Salva il Registro di Oggi",
    periodHistory: "La tua Storia dei Periodi",
    day: "Giorno",
    exportShare: "Esporta e Condividi",
    shareWithDoctor: "Condividi con il Medico",

    emergencyServices: "Servizi di Emergenza",
    lifeThreatening: "Emergenze che minacciano la vita",
    urgentNonEmergency: "Cure urgenti ma non di emergenza",
    localHealthcareServices: "Servizi Sanitari Locali",
    crisisSupport: "Supporto in Crisi",
    freeEmotionalSupport: "Supporto emotivo gratuito 24/7",
    domesticViolenceSupport: "Supporto per violenza domestica",

    heavyPeriodsCommon: "I periodi abbondanti sono comuni ma non normali",
    periodLonger7Days: "Se il tuo periodo dura più di 7 giorni",
    changeProtectionHourly: "Se devi cambiare protezione ogni ora",
    clotsLarger10p: "Se passi coaguli più grandi di una moneta da 10 pence",
    bleedingAffectsLife: "Se il sanguinamento influisce sulla tua vita quotidiana",
    periodsHeavierUsual: "I tuoi periodi sono diventati improvvisamente più abbondanti del solito",
    bleedingBetweenPeriods: "Stai sanguinando tra i periodi",
    severePeriodPain: "Hai dolore mestruale severo",
    tiredShortBreath: "Ti senti stanca o hai il fiato corto",
    affectingQualityLife: "I tuoi periodi stanno influenzando la qualità della tua vita",
    healthcareProfessional: "Un professionista sanitario può discutere le opzioni di trattamento con te",
  },
  ro: {
    greeting: "Salut! Sunt Amara, însoțitoarea ta de sănătate",
    tagline: "Locul tău de referință pentru a-ți înțelege fluxul",
    notification:
      "Au trecut 2 săptămâni de la ultima ta programare. Consideră să-ți informezi medicul despre simptomele tale.",
    shareLanguage: "Alege limba pentru partajare:",
    appointmentReminder: "Memento Programare",
    symbolOnlyMode: "Mod Doar Simboluri",

    learnAboutPeriods: "Învață despre Perioadele Abundente",
    understandSymptoms: "Înțelege-ți simptomele",
    trackPeriods: "Urmărește-ți Perioadele",
    logSymptomsOverTime: "Înregistrează simptomele în timp",
    getHelpNow: "Obține Ajutor Acum",
    emergencyHealthcareSupport: "Suport de urgență și îngrijire medicală",

    communitySupport: "Suport Comunitar",
    shareWithCommunity:
      "Partajează FlowGo cu prietenii și familia pentru a ajuta la construirea unei comunități de sprijin.",
    shareOnWhatsApp: "Partajează pe WhatsApp",
    helpYourCommunity: "Ajută-ți Comunitatea",
    shareFlowGoSupport: "Partajează FlowGo cu cineva care are nevoie de suport medical",

    emergency: "Urgență",
    call999: "Sună la 999",
    callDoctor: "Sună Medicul",
    dismiss: "Respinge",

    officialInformation: "Informații Oficiale",
    whatIsHMB: "Ce sunt Sângerările Menstruale Abundente?",
    whenToSeeDoctor: "Când să Vezi un Medic",
    findSupportNearYou: "Găsește Suport Lângă Tine",
    youreNotAlone: "Nu ești singură - iată ajutor în zona ta",
    call: "Sună",
    helpFriendsLearn: "Ajută-ți prietenele să învețe despre sănătatea femeilor în limba lor",

    currentCycleDay: "Ziua Actuală a Ciclului",
    dayOfCycle: "Ziua ciclului",
    todaysSymptoms: "Simptomele de Azi",
    flowAmount: "Cantitatea de Flux",
    light: "Ușor",
    normal: "Normal",
    heavy: "Abundent",
    painLevel: "Nivelul Durerii",
    noPain: "Fără Durere",
    mild: "Ușor",
    moderate: "Moderat",
    severe: "Sever",
    verySevere: "Foarte Sever",
    voiceNotes: "Note Vocale",
    speakInOwnWords: "Vorbește cu propriile cuvinte - orice limbă",
    recording: "Se înregistrează...",
    recordVoiceNote: "Înregistrează notă vocală",
    writtenNotes: "Note Scrise",
    howFeelingToday: "Cum te simți azi? Alte simptome?",
    characters: "caractere",
    saveTodaysLog: "Salvează Jurnalul de Azi",
    periodHistory: "Istoricul Perioadelor Tale",
    day: "Zi",
    exportShare: "Exportă și Partajează",
    shareWithDoctor: "Partajează cu Medicul",

    emergencyServices: "Servicii de Urgență",
    lifeThreatening: "Urgențe care pun viața în pericol",
    urgentNonEmergency: "Îngrijire urgentă dar nu de urgență",
    localHealthcareServices: "Servicii Medicale Locale",
    crisisSupport: "Suport în Criză",
    freeEmotionalSupport: "Suport emoțional gratuit 24/7",
    domesticViolenceSupport: "Suport pentru violența domestică",

    heavyPeriodsCommon: "Perioadele abundente sunt comune dar nu normale",
    periodLonger7Days: "Dacă perioada ta durează mai mult de 7 zile",
    changeProtectionHourly: "Dacă trebuie să schimbi protecția în fiecare oră",
    clotsLarger10p: "Dacă elimini cheaguri mai mari decât o monedă de 10 pence",
    bleedingAffectsLife: "Dacă sângerarea îți afectează viața de zi cu zi",
    periodsHeavierUsual: "Perioadele tale au devenit brusc mai abundente decât de obicei",
    bleedingBetweenPeriods: "Sângerezi între perioade",
    severePeriodPain: "Ai dureri menstruale severe",
    tiredShortBreath: "Te simți obosită sau ai respirația scurtă",
    affectingQualityLife: "Perioadele tale îți afectează calitatea vieții",
    healthcareProfessional: "Un profesionist medical poate discuta opțiunile de tratament cu tine",
  },
  ru: {
    greeting: "Привет! Я Амара, ваш спутник здоровья",
    tagline: "Ваше место для понимания вашего цикла",
    notification:
      "Прошло 2 недели с вашего последнего приема. Подумайте о том, чтобы сообщить врачу о ваших симптомах.",
    shareLanguage: "Выберите язык для обмена:",
    appointmentReminder: "Напоминание о Приеме",
    symbolOnlyMode: "Режим Только Символы",

    learnAboutPeriods: "Узнайте об Обильных Месячных",
    understandSymptoms: "Поймите ваши симптомы",
    trackPeriods: "Отслеживайте ваши Месячные",
    logSymptomsOverTime: "Записывайте симптомы со временем",
    getHelpNow: "Получить Помощь Сейчас",
    emergencyHealthcareSupport: "Экстренная помощь и медицинская поддержка",

    communitySupport: "Поддержка Сообщества",
    shareWithCommunity: "Поделитесь FlowGo с друзьями и семьей, чтобы помочь построить поддерживающее сообщество.",
    shareOnWhatsApp: "Поделиться в WhatsApp",
    helpYourCommunity: "Помогите Вашему Сообществу",
    shareFlowGoSupport: "Поделитесь FlowGo с кем-то, кому нужна медицинская поддержка",

    emergency: "Экстренная ситуация",
    call999: "Звонить 999",
    callDoctor: "Звонить Врачу",
    dismiss: "Отклонить",

    officialInformation: "Официальная Информация",
    whatIsHMB: "Что такое Обильные Менструальные Кровотечения?",
    whenToSeeDoctor: "Когда Обратиться к Врачу",
    findSupportNearYou: "Найдите Поддержку Рядом с Вами",
    youreNotAlone: "Вы не одиноки - вот помощь в вашем районе",
    call: "Звонить",
    helpFriendsLearn: "Помогите подругам узнать о женском здоровье на их языке",

    currentCycleDay: "Текущий День Цикла",
    dayOfCycle: "День цикла",
    todaysSymptoms: "Сегодняшние Симптомы",
    flowAmount: "Количество Выделений",
    light: "Легкие",
    normal: "Нормальные",
    heavy: "Обильные",
    painLevel: "Уровень Боли",
    noPain: "Нет Боли",
    mild: "Легкая",
    moderate: "Умеренная",
    severe: "Сильная",
    verySevere: "Очень Сильная",
    voiceNotes: "Голосовые Заметки",
    speakInOwnWords: "Говорите своими словами - на любом языке",
    recording: "Запись...",
    recordVoiceNote: "Записать голосовую заметку",
    writtenNotes: "Письменные Заметки",
    howFeelingToday: "Как вы себя чувствуете сегодня? Есть другие симптомы?",
    characters: "символов",
    saveTodaysLog: "Сохранить Сегодняшний Журнал",
    periodHistory: "История Ваших Месячных",
    day: "День",
    exportShare: "Экспорт и Обмен",
    shareWithDoctor: "Поделиться с Врачом",

    emergencyServices: "Службы Экстренного Реагирования",
    lifeThreatening: "Угрожающие жизни чрезвычайные ситуации",
    urgentNonEmergency: "Срочная, но не экстренная помощь",
    localHealthcareServices: "Местные Медицинские Услуги",
    crisisSupport: "Кризисная Поддержка",
    freeEmotionalSupport: "Бесплатная эмоциональная поддержка 24/7",
    domesticViolenceSupport: "Поддержка при домашнем насилии",

    heavyPeriodsCommon: "Обильные месячные распространены, но не нормальны",
    periodLonger7Days: "Если ваши месячные длятся дольше 7 дней",
    changeProtectionHourly: "Если вам нужно менять защиту каждый час",
    clotsLarger10p: "Если вы выделяете сгустки больше монеты в 10 пенсов",
    bleedingAffectsLife: "Если кровотечение влияет на вашу повседневную жизнь",
    periodsHeavierUsual: "Ваши месячные внезапно стали обильнее обычного",
    bleedingBetweenPeriods: "У вас кровотечение между месячными",
    severePeriodPain: "У вас сильная менструальная боль",
    tiredShortBreath: "Вы чувствуете усталость или одышку",
    affectingQualityLife: "Ваши месячные влияют на качество жизни",
    healthcareProfessional: "Медицинский работник может обсудить с вами варианты лечения",
  },
}

export default function FlowGoApp() {
  const [currentScreen, setCurrentScreen] = useState("home")
  const [symbolOnlyMode, setSymbolOnlyMode] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(true)
  const [language, setLanguage] = useState("en")
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [selectedFlow, setSelectedFlow] = useState<string>("")
  const [selectedPain, setSelectedPain] = useState<number>(0)
  const [selectedDuration, setSelectedDuration] = useState<string>("")
  const [textInput, setTextInput] = useState<string>("")
  const [isRecording, setIsRecording] = useState(false)
  const [currentDay, setCurrentDay] = useState(1)
  const [periodLogs, setPeriodLogs] = useState<any[]>([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [hasUnreadNotification, setHasUnreadNotification] = useState(true)
  const [showShareLanguageMenu, setShowShareLanguageMenu] = useState(false)
  const [shareLanguage, setShareLanguage] = useState("en")

  const languageMenuRef = useRef<HTMLDivElement>(null)

  // Get current translation
  const t = translations[language as keyof typeof translations] || translations.en

  // Get share language translation for NHS info display
  const shareT = translations[shareLanguage as keyof typeof translations] || translations.en

  // Close language menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setShowLanguageMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Sync share language with main language
  useEffect(() => {
    setShareLanguage(language)
  }, [language])

  // SE London diverse languages - African, Asian, and European
  const languages = [
    { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", region: "European" },

    // Asian Languages
    { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: "🇧🇩", region: "Asian" },
    { code: "ur", name: "Urdu", nativeName: "اردو", flag: "🇵🇰", region: "Asian" },
    { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", region: "Asian" },
    { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", region: "Asian" },
    { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", flag: "🇮🇳", region: "Asian" },
    { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", flag: "🇮🇳", region: "Asian" },
    { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷", region: "Asian" },

    // African Languages
    { code: "so", name: "Somali", nativeName: "Soomaali", flag: "🇸🇴", region: "African" },
    { code: "sw", name: "Swahili", nativeName: "Kiswahili", flag: "🇰🇪", region: "African" },
    { code: "yo", name: "Yoruba", nativeName: "Yorùbá", flag: "🇳🇬", region: "African" },
    { code: "tw", name: "Twi", nativeName: "Twi", flag: "🇬🇭", region: "African" },
    { code: "wo", name: "Wolof", nativeName: "Wolof", flag: "🇸🇳", region: "African" },
    { code: "am", name: "Amharic", nativeName: "አማርኛ", flag: "🇪🇹", region: "African" },
    { code: "ti", name: "Tigrinya", nativeName: "ትግርኛ", flag: "🇪🇷", region: "African" },

    // European Languages
    { code: "pl", name: "Polish", nativeName: "Polski", flag: "🇵🇱", region: "European" },
    { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", region: "European" },
    { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", region: "European" },
    { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹", region: "European" },
    { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", region: "European" },
    { code: "ro", name: "Romanian", nativeName: "Română", flag: "🇷🇴", region: "European" },
    { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺", region: "European" },
  ]

  // Group languages by region for better organization
  const groupedLanguages = languages.reduce(
    (acc, lang) => {
      if (!acc[lang.region]) {
        acc[lang.region] = []
      }
      acc[lang.region].push(lang)
      return acc
    },
    {} as Record<string, typeof languages>,
  )

  // App Mascot Component using SVG
  const AppMascot = ({
    mood = "happy",
    gesture = "wave",
    size = "md",
    className = "",
  }: { mood?: string; gesture?: string; size?: string; className?: string }) => {
    const sizeClasses = {
      sm: "w-8 h-8",
      md: "w-12 h-12",
      lg: "w-16 h-16",
      xl: "w-24 h-24",
    }

    const moodExpressions = {
      happy: {
        eyes: "M10,10 C10,11 11,11 11,10",
        mouth: "M8,14 C10,16 14,16 16,14",
      },
      caring: {
        eyes: "M10,10 C11,11 11,10",
        mouth: "M8,14 C11,15 13,15 16,14",
      },
      supportive: {
        eyes: "M10,10 C11,11 11,10",
        mouth: "M8,14 C11,15.5 13,15.5 16,14",
      },
      listening: {
        eyes: "M10,10 C11,11 11,10",
        mouth: "M8,14 C11,14 13,14 16,14",
      },
      encouraging: {
        eyes: "M10,10 C11,11 11,10",
        mouth: "M8,14 C11,16 13,16 16,14",
      },
    }

    const gestureElements = {
      wave: (
        <g transform="translate(18, 0)">
          <path
            d="M2,8 C3,5 5,4 6,6 C7,8 6,10 5,12"
            stroke="#F9A8D4"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      ),
      point: (
        <g transform="translate(18, 10)">
          <path d="M0,0 L6,0" stroke="#F9A8D4" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
      ),
      heart: (
        <g transform="translate(18, 6)">
          <path
            d="M0,2 C0,0 2,-1 3,0.5 C4,-1 6,0 6,2 C6,4 3,6 3,6 C3,6 0,4 0,2 Z"
            fill="#F43F5E"
            stroke="#F43F5E"
            strokeWidth="0.5"
          />
        </g>
      ),
      thumbsup: (
        <g transform="translate(18, 8)">
          <path
            d="M0,4 L2,4 L2,0 L0,0 L0,4 Z M2,1 C2,1 3,0 4,0 C5,0 6,1 6,2 C6,4 4,5 2,4"
            fill="#F9A8D4"
            stroke="#F472B6"
            strokeWidth="0.5"
          />
        </g>
      ),
      hands: (
        <g transform="translate(18, 8)">
          <path
            d="M0,2 C1,1 2,1 3,2 M3,2 C4,1 5,1 6,2"
            stroke="#F9A8D4"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      ),
    }

    const currentMood = moodExpressions[mood as keyof typeof moodExpressions] || moodExpressions.happy
    const currentGesture = gestureElements[gesture as keyof typeof gestureElements]

    return (
      <div className={`${sizeClasses[size as keyof typeof sizeClasses]} ${className}`}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background circle */}
          <circle cx="12" cy="12" r="12" fill="url(#mascot-gradient)" />

          {/* Face */}
          <circle cx="12" cy="12" r="8" fill="#FECDD3" />

          {/* Hijab/Hair option */}
          <path
            d="M4,12 C4,7 7,4 12,4 C17,4 20,7 20,12 C20,12 20,7 12,7 C4,7 4,12 4,12 Z"
            fill="#7E22CE"
            opacity="0.8"
          />

          {/* Eyes */}
          <path
            d={currentMood.eyes}
            stroke="#7E22CE"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            transform="translate(2, 0)"
          />
          <path
            d={currentMood.eyes}
            stroke="#7E22CE"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            transform="translate(6, 0)"
          />

          {/* Mouth */}
          <path d={currentMood.mouth} stroke="#7E22CE" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Gesture */}
          {currentGesture}

          {/* Gradient definition */}
          <defs>
            <linearGradient id="mascot-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0D9488" />
              <stop offset="1" stopColor="#7E22CE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }

  const BrandAmbassador = ({
    message,
    symbols,
    mood = "happy",
    gesture = "wave",
    showNHSLogo = false,
  }: { message: string; symbols: string; mood?: string; gesture?: string; showNHSLogo?: boolean }) => {
    return (
      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-teal-50 to-purple-50 rounded-lg mb-6 relative">
        <AppMascot mood={mood} gesture={gesture} size="md" />
        <div className="flex-1">
          {!symbolOnlyMode ? (
            <div>
              <p className="font-medium text-teal-800">{t.greeting}</p>
              <p className="text-sm text-teal-600">{t.tagline}</p>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-2xl">{symbols}</div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {audioEnabled && (
            <Button variant="ghost" size="sm" className="text-teal-600">
              <Volume2 className="w-4 h-4" />
            </Button>
          )}
          {showNHSLogo && <img src="/nhs-logo.png" alt="NHS" className="h-8 object-contain" />}
        </div>
      </div>
    )
  }

  const LanguageSelector = () => (
    <div className="relative" ref={languageMenuRef}>
      <Button
        variant="outline"
        size="sm"
        className="gap-2 bg-transparent min-w-[120px]"
        onClick={(e) => {
          e.stopPropagation()
          setShowLanguageMenu(!showLanguageMenu)
        }}
      >
        <Globe className="w-4 h-4" />
        {!symbolOnlyMode && <span className="text-xs">{languages.find((l) => l.code === language)?.name}</span>}
        <span>{languages.find((l) => l.code === language)?.flag}</span>
      </Button>

      {showLanguageMenu && (
        <div className="absolute top-full left-0 mt-1 w-72 bg-white border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {Object.entries(groupedLanguages).map(([region, langs]) => (
            <div key={region}>
              {/* Region Header */}
              <div className="px-4 py-2 bg-gray-100 border-b">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {region} Languages
                  </span>
                  {region === "African" && <span className="text-sm">🌍</span>}
                  {region === "Asian" && <span className="text-sm">🌏</span>}
                  {region === "European" && <span className="text-sm">🌍</span>}
                </div>
              </div>

              {/* Languages in this region */}
              {langs.map((lang) => (
                <button
                  key={lang.code}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 border-b last:border-b-0"
                  onClick={(e) => {
                    e.stopPropagation()
                    setLanguage(lang.code)
                    setShowLanguageMenu(false)
                  }}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{lang.name}</div>
                    <div
                      className="text-xs text-gray-500"
                      style={{
                        fontFamily: ["Noto Sans", "Arial Unicode MS", "sans-serif"].join(","),
                        direction: ["ar", "ur"].includes(lang.code) ? "rtl" : "ltr",
                      }}
                    >
                      {lang.nativeName}
                    </div>
                  </div>
                  {language === lang.code && <div className="w-2 h-2 bg-teal-500 rounded-full"></div>}
                </button>
              ))}
            </div>
          ))}

          {/* Footer note */}
          <div className="px-4 py-3 bg-gray-50 border-t">
            <p className="text-xs text-gray-500 text-center">🌍 Serving South East London's diverse communities</p>
          </div>
        </div>
      )}
    </div>
  )

  const NotificationCenter = () => {
    return (
      <div className="relative">
        <Button
          variant="outline"
          size="sm"
          className="relative bg-transparent"
          onClick={() => {
            setShowNotifications(!showNotifications)
            setHasUnreadNotification(false)
          }}
        >
          <Bell className="w-4 h-4" />
          {hasUnreadNotification && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">1</span>
            </div>
          )}
        </Button>

        {showNotifications && (
          <div className="absolute top-full right-0 mt-1 w-80 bg-white border rounded-lg shadow-lg z-50">
            <div className="p-4 border-b">
              <h3 className="font-medium text-gray-800">{t.appointmentReminder}</h3>
            </div>
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700 mb-3">{t.notification}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Phone className="w-3 h-3 mr-1" />
                      {symbolOnlyMode ? "📞" : t.callDoctor}
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setShowNotifications(false)}>
                      {symbolOnlyMode ? "❌" : t.dismiss}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  const MainNavButton = ({
    icon: Icon,
    title,
    subtitle,
    symbolOnly,
    color,
    onClick,
  }: {
    icon: any
    title: string
    subtitle: string
    symbolOnly: string
    color: string
    onClick: () => void
  }) => (
    <Button
      onClick={onClick}
      className={`w-full h-auto p-6 ${color} hover:opacity-90 transition-all duration-200 transform hover:scale-105`}
      variant="default"
    >
      <div className="flex items-center gap-4 w-full">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 text-left">
          {symbolOnlyMode ? (
            <div className="text-2xl text-white">{symbolOnly}</div>
          ) : (
            <>
              <h3 className="font-semibold text-white text-lg">{title}</h3>
              <p className="text-white/80 text-sm">{subtitle}</p>
            </>
          )}
        </div>
        <ChevronRight className="w-5 h-5 text-white/60" />
      </div>
    </Button>
  )

  const HomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <AppMascot mood="happy" gesture="wave" size="sm" />
            <h1 className="text-2xl font-bold text-teal-800">FlowGo</h1>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <NotificationCenter />

            {/* Audio Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setAudioEnabled(!audioEnabled)}
              className={audioEnabled ? "text-teal-600" : "text-gray-400"}
            >
              {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </Button>

            {/* Settings */}
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Symbol-Only Mode Toggle - Always show text */}
        <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-lg">🔤</span>
            <span className="text-sm font-medium">{t.symbolOnlyMode}</span>
          </div>
          <Button
            variant={symbolOnlyMode ? "default" : "outline"}
            size="sm"
            onClick={() => setSymbolOnlyMode(!symbolOnlyMode)}
            className={symbolOnlyMode ? "bg-purple-600" : ""}
          >
            {symbolOnlyMode ? "ON" : "OFF"}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        <BrandAmbassador
          message="Take action. Take control. FlowGo."
          symbols="💪🩺📱"
          mood="caring"
          gesture="heart"
          showNHSLogo={true}
        />

        {/* Main Navigation Buttons */}
        <div className="space-y-4">
          <MainNavButton
            icon={BookOpen}
            title={t.learnAboutPeriods}
            subtitle={t.understandSymptoms}
            symbolOnly="📚🩸❓"
            color="bg-gradient-to-r from-teal-500 to-teal-600"
            onClick={() => setCurrentScreen("learn")}
          />

          <MainNavButton
            icon={Calendar}
            title={t.trackPeriods}
            subtitle={t.logSymptomsOverTime}
            symbolOnly="📅🩸📊"
            color="bg-gradient-to-r from-purple-500 to-purple-600"
            onClick={() => setCurrentScreen("track")}
          />

          <MainNavButton
            icon={Phone}
            title={t.getHelpNow}
            subtitle={t.emergencyHealthcareSupport}
            symbolOnly="📞🏥🆘"
            color="bg-gradient-to-r from-red-500 to-orange-500"
            onClick={() => setCurrentScreen("help")}
          />
        </div>

        {/* Community Support Section */}
        <Card className="mt-6 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-green-600" />
              {!symbolOnlyMode ? (
                <h3 className="font-medium text-green-800">{t.communitySupport}</h3>
              ) : (
                <span className="text-xl">👥💚</span>
              )}
            </div>
            {!symbolOnlyMode ? (
              <p className="text-sm text-green-600 mb-3">{t.shareWithCommunity}</p>
            ) : (
              <div className="flex gap-2 mb-3">
                <span className="text-lg">📱</span>
                <span className="text-lg">➡️</span>
                <span className="text-lg">👭</span>
                <span className="text-lg">💪</span>
              </div>
            )}
            <Button variant="outline" className="w-full gap-2 text-green-600 border-green-200 bg-transparent">
              <span className="text-lg">📱</span>
              {!symbolOnlyMode && t.shareOnWhatsApp}
            </Button>
          </CardContent>
        </Card>

        {/* Emergency Quick Access */}
        <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">🚨</span>
            {!symbolOnlyMode && <span className="font-medium text-red-800">{t.emergency}</span>}
          </div>
          <Button className="w-full bg-red-600 hover:bg-red-700">
            <Phone className="w-4 h-4 mr-2" />
            {symbolOnlyMode ? "999" : t.call999}
          </Button>
        </div>
      </div>
    </div>
  )

  const LearnScreen = () => {
    // Use shareT (share language translation) for NHS info display
    const nhsInfo = [
      {
        id: "what-is-hmb",
        title: shareT.whatIsHMB,
        symbol: "🩸❓",
        content: [
          shareT.heavyPeriodsCommon || "Heavy periods are common but they're not normal",
          shareT.periodLonger7Days || "If your period lasts longer than 7 days",
          shareT.changeProtectionHourly || "If you need to change protection every hour",
          shareT.clotsLarger10p || "If you pass clots larger than a 10p coin",
          shareT.bleedingAffectsLife || "If bleeding affects your daily life",
        ],
      },
      {
        id: "when-to-see-doctor",
        title: shareT.whenToSeeDoctor,
        symbol: "👩‍⚕️⏰",
        content: [
          shareT.periodsHeavierUsual || "Your periods suddenly become heavier than usual",
          shareT.bleedingBetweenPeriods || "You're bleeding between periods",
          shareT.severePeriodPain || "You have severe period pain",
          shareT.tiredShortBreath || "You feel tired or short of breath",
          shareT.affectingQualityLife || "Your periods are affecting your quality of life",
          shareT.healthcareProfessional || "A healthcare professional can discuss treatment options with you",
        ],
      },
    ]

    const communityResources = [
      {
        name: "Peckham Community Centre",
        type: "Community Centre",
        symbol: "🏢👥",
        address: "123 Peckham High St",
        phone: "020 7123 4567",
      },
      {
        name: "Southwark Women's Health Clinic",
        type: "GP Surgery",
        symbol: "🏥👩‍⚕️",
        address: "456 Old Kent Rd",
        phone: "020 7234 5678",
      },
    ]

    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-teal-50">
        {/* Header */}
        <div className="bg-white shadow-sm p-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setCurrentScreen("home")}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <AppMascot mood="encouraging" gesture="point" size="sm" />
            <h1 className="text-xl font-bold text-teal-800">{symbolOnlyMode ? "📚🩸" : t.learnAboutPeriods}</h1>
          </div>
        </div>

        <div className="p-4">
          <BrandAmbassador
            message="Let me help you understand what the NHS says about heavy periods..."
            symbols="👩‍⚕️➡️📚🩸"
            mood="supportive"
            gesture="hands"
          />

          {/* NHS Information Section */}
          <Card className="mb-6">
            <CardHeader className="pb-3 flex justify-between items-center">
              <CardTitle className="text-lg">{symbolOnlyMode ? "🏥📋" : shareT.officialInformation}</CardTitle>
              <img src="/nhs-logo.png" alt="NHS" className="h-8 object-contain" />
            </CardHeader>
            <CardContent className="space-y-4">
              {nhsInfo.map((section) => (
                <div key={section.id} className="border rounded-lg">
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-4 h-auto"
                    onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{section.symbol}</span>
                      {!symbolOnlyMode && <span className="font-medium text-left">{section.title}</span>}
                    </div>
                    {expandedSection === section.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>

                  {expandedSection === section.id && (
                    <div className="px-4 pb-4">
                      <ul className="space-y-2">
                        {section.content.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              {/* Share NHS Info with Language Selection */}
              <div className="pt-4 border-t">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{t.shareLanguage}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowShareLanguageMenu(!showShareLanguageMenu)}
                      className="gap-2"
                    >
                      <Globe className="w-3 h-3" />
                      {languages.find((l) => l.code === shareLanguage)?.flag}
                      <ChevronDown className="w-3 h-3" />
                    </Button>
                  </div>

                  {showShareLanguageMenu && (
                    <div className="border rounded-lg max-h-40 overflow-y-auto">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-2 border-b last:border-b-0"
                          onClick={() => {
                            setShareLanguage(lang.code)
                            setShowShareLanguageMenu(false)
                          }}
                        >
                          <span>{lang.flag}</span>
                          <span className="text-sm">{lang.name}</span>
                          {shareLanguage === lang.code && (
                            <div className="w-2 h-2 bg-teal-500 rounded-full ml-auto"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}

                  <Button className="w-full gap-2 bg-green-600 hover:bg-green-700">
                    <Share2 className="w-4 h-4" />
                    {symbolOnlyMode
                      ? "📱💚"
                      : `${shareT.shareOnWhatsApp} (${languages.find((l) => l.code === shareLanguage)?.name})`}
                  </Button>
                  {!symbolOnlyMode && <p className="text-xs text-gray-500 text-center">{shareT.helpFriendsLearn}</p>}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Local Support Section */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                {symbolOnlyMode ? "📍🆘" : t.findSupportNearYou}
              </CardTitle>
              {!symbolOnlyMode && <p className="text-sm text-gray-600">{t.youreNotAlone}</p>}
            </CardHeader>
            <CardContent className="space-y-4">
              {communityResources.map((resource, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{resource.symbol}</span>
                        {!symbolOnlyMode && <h3 className="font-medium">{resource.name}</h3>}
                      </div>
                      {!symbolOnlyMode && (
                        <>
                          <p className="text-sm text-gray-600 mb-1">{resource.type}</p>
                          <p className="text-sm text-gray-500">{resource.address}</p>
                          <p className="text-sm text-blue-600">{resource.phone}</p>
                        </>
                      )}
                    </div>
                    <Button variant="outline" size="sm">
                      {symbolOnlyMode ? "📞" : t.call}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const TrackScreen = () => {
    const flowOptions = [
      { id: "light", symbol: "🩸", label: t.light, color: "bg-blue-100" },
      { id: "normal", symbol: "🩸🩸", label: t.normal, color: "bg-yellow-100" },
      { id: "heavy", symbol: "🩸🩸🩸", label: t.heavy, color: "bg-red-100" },
    ]

    const painLevels = [
      { level: 1, symbol: "😊", label: t.noPain },
      { level: 2, symbol: "🙂", label: t.mild },
      { level: 3, symbol: "😐", label: t.moderate },
      { level: 4, symbol: "😟", label: t.severe },
      { level: 5, symbol: "😣", label: t.verySevere },
    ]

    const addDailyLog = () => {
      const newLog = {
        day: currentDay,
        flow: selectedFlow,
        pain: selectedPain,
        duration: selectedDuration,
        notes: textInput,
        timestamp: new Date().toISOString(),
      }
      setPeriodLogs([...periodLogs, newLog])
      // Reset form
      setSelectedFlow("")
      setSelectedPain(0)
      setTextInput("")
    }

    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
        {/* Header */}
        <div className="bg-white shadow-sm p-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setCurrentScreen("home")}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <AppMascot mood="listening" gesture="thumbsup" size="sm" />
            <h1 className="text-xl font-bold text-purple-800">{symbolOnlyMode ? "📅🩸" : t.trackPeriods}</h1>
          </div>
        </div>

        <div className="p-4">
          <BrandAmbassador
            message="Tracking helps you and your doctor understand your health better"
            symbols="📝➡️👩‍⚕️💪"
            mood="encouraging"
            gesture="thumbsup"
          />

          {/* Current Cycle Day Selector */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-purple-600" />
                {symbolOnlyMode ? "📅#️⃣" : t.currentCycleDay}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentDay(Math.max(1, currentDay - 1))}
                  disabled={currentDay <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">{currentDay}</div>
                  {!symbolOnlyMode && <div className="text-sm text-gray-600">{t.dayOfCycle}</div>}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentDay(Math.min(35, currentDay + 1))}
                  disabled={currentDay >= 35}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Symptom Checker */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-purple-600" />
                {symbolOnlyMode ? "🩸📊" : t.todaysSymptoms}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Flow Amount */}
              <div>
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-lg">🩸</span>
                  {!symbolOnlyMode && t.flowAmount}
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {flowOptions.map((option) => (
                    <Button
                      key={option.id}
                      variant={selectedFlow === option.id ? "default" : "outline"}
                      className={`h-16 flex-col gap-1 ${selectedFlow === option.id ? "bg-purple-600" : ""}`}
                      onClick={() => setSelectedFlow(option.id)}
                    >
                      <span className="text-lg">{option.symbol}</span>
                      {!symbolOnlyMode && <span className="text-xs">{option.label}</span>}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Pain Level */}
              <div>
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-lg">😊</span>
                  {!symbolOnlyMode && t.painLevel}
                </h3>
                <div className="grid grid-cols-5 gap-1">
                  {painLevels.map((pain) => (
                    <Button
                      key={pain.level}
                      variant={selectedPain === pain.level ? "default" : "outline"}
                      className={`h-16 flex-col gap-1 ${selectedPain === pain.level ? "bg-purple-600" : ""}`}
                      onClick={() => setSelectedPain(pain.level)}
                    >
                      <span className="text-lg">{pain.symbol}</span>
                      {!symbolOnlyMode && <span className="text-xs">{pain.label}</span>}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Voice Input Section */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Mic className="w-5 h-5 text-teal-600" />
                {symbolOnlyMode ? "🎤💬" : t.voiceNotes}
              </CardTitle>
              {!symbolOnlyMode && <p className="text-sm text-gray-600">{t.speakInOwnWords}</p>}
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className={`w-full h-16 gap-3 ${
                  isRecording ? "bg-red-600 hover:bg-red-700" : "bg-teal-600 hover:bg-teal-700"
                }`}
                onClick={() => setIsRecording(!isRecording)}
              >
                <Mic className={`w-6 h-6 ${isRecording ? "animate-pulse" : ""}`} />
                {symbolOnlyMode ? (
                  <span className="text-xl">{isRecording ? "🔴" : "🎤"}</span>
                ) : (
                  <span className="font-medium">{isRecording ? t.recording : t.recordVoiceNote}</span>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Text Input Section */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-600" />
                {symbolOnlyMode ? "✏️📝" : t.writtenNotes}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder={symbolOnlyMode ? "✏️..." : t.howFeelingToday}
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                className="min-h-24 mb-4"
              />
              <div className="text-xs text-gray-500 mb-4">
                {textInput.length}/500 {t.characters}
              </div>
            </CardContent>
          </Card>

          {/* Save Daily Log */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <Button
                onClick={addDailyLog}
                className="w-full gap-2 bg-purple-600 hover:bg-purple-700"
                disabled={!selectedFlow && selectedPain === 0}
              >
                <Save className="w-4 h-4" />
                {symbolOnlyMode ? "💾📅" : t.saveTodaysLog}
              </Button>
            </CardContent>
          </Card>

          {/* Period History */}
          {periodLogs.length > 0 && (
            <Card className="mb-6">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                  {symbolOnlyMode ? "📊📅" : t.periodHistory}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {periodLogs
                    .slice(-7)
                    .reverse()
                    .map((log, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">
                            {t.day} {log.day}
                          </span>
                          <span className="text-xs text-gray-500">{new Date(log.timestamp).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          {log.flow && (
                            <span className="flex items-center gap-1">
                              {flowOptions.find((f) => f.id === log.flow)?.symbol}
                              {!symbolOnlyMode && flowOptions.find((f) => f.id === log.flow)?.label}
                            </span>
                          )}
                          {log.pain > 0 && (
                            <span className="flex items-center gap-1">
                              {painLevels.find((p) => p.level === log.pain)?.symbol}
                              {!symbolOnlyMode && painLevels.find((p) => p.level === log.pain)?.label}
                            </span>
                          )}
                        </div>
                        {log.notes && <p className="text-xs text-gray-600 mt-2">{log.notes}</p>}
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Summary & Export */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Save className="w-5 h-5 text-orange-600" />
                {symbolOnlyMode ? "💾📊" : t.exportShare}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
                <FileText className="w-4 h-4" />
                {symbolOnlyMode ? "👩‍⚕️📄" : t.shareWithDoctor}
              </Button>

              <Button variant="outline" className="w-full gap-2 text-green-600 border-green-200 bg-transparent">
                <Share2 className="w-4 h-4" />
                {symbolOnlyMode ? "📱💚👭" : t.shareOnWhatsApp}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const HelpScreen = () => {
    const emergencyServices = [
      {
        title: t.emergencyServices,
        symbol: "🚨",
        number: "999",
        description: t.lifeThreatening,
        color: "bg-red-600 hover:bg-red-700",
      },
      {
        title: "NHS 111",
        symbol: "🏥",
        number: "111",
        description: t.urgentNonEmergency,
        color: "bg-blue-600 hover:bg-blue-700",
      },
    ]

    const localServices = [
      {
        name: "Southwark Women's Health Clinic",
        type: "GP Surgery",
        symbol: "👩‍⚕️",
        phone: "020 7123 4567",
        address: "123 Old Kent Road, SE1 5LU",
      },
      {
        name: "King's College Hospital",
        type: "Hospital",
        symbol: "🏥",
        phone: "020 3299 9000",
        address: "Denmark Hill, SE5 9RS",
      },
    ]

    const crisisSupport = [
      {
        name: "Samaritans",
        symbol: "💚",
        phone: "116 123",
        description: t.freeEmotionalSupport,
      },
      {
        name: "Women's Aid",
        symbol: "🛡️",
        phone: "0808 2000 247",
        description: t.domesticViolenceSupport,
      },
    ]

    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
        {/* Header */}
        <div className="bg-white shadow-sm p-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setCurrentScreen("home")}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <AppMascot mood="supportive" gesture="hands" size="sm" />
            <h1 className="text-xl font-bold text-red-800">{symbolOnlyMode ? "🆘📞" : t.getHelpNow}</h1>
          </div>
        </div>

        <div className="p-4">
          <BrandAmbassador
            message="Getting help is brave and important. You deserve good healthcare."
            symbols="💪🏥❤️✨"
            mood="caring"
            gesture="heart"
          />

          {/* Emergency Services */}
          <Card className="mb-6 border-red-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-red-800">
                <AlertTriangle className="w-5 h-5" />
                {symbolOnlyMode ? "🚨📞" : t.emergencyServices}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {emergencyServices.map((service, index) => (
                <Button key={index} className={`w-full h-16 ${service.color} text-white`}>
                  <div className="flex items-center gap-4 w-full">
                    <span className="text-2xl">{service.symbol}</span>
                    <div className="flex-1 text-left">
                      {!symbolOnlyMode ? (
                        <>
                          <div className="font-bold text-lg">{service.title}</div>
                          <div className="text-sm opacity-90">{service.description}</div>
                        </>
                      ) : (
                        <div className="text-2xl font-bold">{service.number}</div>
                      )}
                    </div>
                    <div className="text-2xl font-bold">{service.number}</div>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Local GP Services */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-blue-600" />
                {symbolOnlyMode ? "👩‍⚕️🏥" : t.localHealthcareServices}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {localServices.map((service, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-blue-50">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{service.symbol}</span>
                      {!symbolOnlyMode && (
                        <div>
                          <h3 className="font-medium">{service.name}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {service.type}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Phone className="w-3 h-3" />
                      {symbolOnlyMode ? "📞" : t.call}
                    </Button>
                  </div>
                  {!symbolOnlyMode && (
                    <div className="text-sm text-gray-600 space-y-1">
                      <p className="flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        {service.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        {service.address}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Crisis Support */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-600" />
                {symbolOnlyMode ? "🛡️💚" : t.crisisSupport}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {crisisSupport.map((support, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{support.symbol}</span>
                      {!symbolOnlyMode && (
                        <div>
                          <h3 className="font-medium">{support.name}</h3>
                          <p className="text-sm text-gray-600">{support.description}</p>
                        </div>
                      )}
                    </div>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Phone className="w-3 h-3" />
                      {support.phone}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Community Empowerment */}
          <Card>
            <CardContent className="p-4">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  {!symbolOnlyMode && <span className="font-medium">{t.helpYourCommunity}</span>}
                </div>
                {!symbolOnlyMode ? (
                  <p className="text-sm text-gray-600">{t.shareFlowGoSupport}</p>
                ) : (
                  <div className="flex justify-center gap-2">
                    <span className="text-lg">📱</span>
                    <span className="text-lg">➡️</span>
                    <span className="text-lg">👭</span>
                    <span className="text-lg">🏥</span>
                  </div>
                )}
                <Button className="w-full gap-2 bg-green-600 hover:bg-green-700">
                  <Share2 className="w-4 h-4" />
                  {symbolOnlyMode ? "📱💚🆘" : `${t.shareOnWhatsApp} FlowGo`}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Screen Router
  const renderScreen = () => {
    switch (currentScreen) {
      case "learn":
        return <LearnScreen />
      case "track":
        return <TrackScreen />
      case "help":
        return <HelpScreen />
      default:
        return <HomeScreen />
    }
  }

  return <div className="max-w-md mx-auto bg-white min-h-screen">{renderScreen()}</div>
}
