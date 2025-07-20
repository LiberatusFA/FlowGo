# FlowGo Mobile App

A culturally-sensitive mobile health application designed specifically for South East London's diverse communities, helping women understand, track, and seek support for heavy menstrual bleeding.

## 🌍 Purpose

FlowGo bridges the healthcare gap for women from diverse cultural backgrounds by providing:

- **Multilingual health information** in 20+ languages including Bengali, Urdu, Arabic, Hindi, Punjabi, Gujarati, Turkish, Somali, Swahili, Yoruba, Twi, Wolof, Amharic, Tigrinya, Polish, French, Spanish, Portuguese, Italian, Romanian, and Russian
- **Symbol-only mode** for users with limited literacy or language barriers
- **NHS-approved medical information** about heavy menstrual bleeding translated into community languages
- **Local healthcare resource directory** for South East London
- **Community-driven sharing** to help women support each other

## ✨ Key Features

### 🏥 Learn About Heavy Periods
- Official NHS information about heavy menstrual bleeding
- Real-time translation preview - see health information in any supported language
- Expandable sections covering symptoms, when to see a doctor, and treatment options
- WhatsApp sharing with language selection to help friends learn in their native language

### 📊 Track Your Periods
- Visual symptom tracking with culturally-appropriate symbols
- Multi-language voice notes and text input
- Pain level and flow amount tracking
- Exportable reports for sharing with healthcare providers
- Historical period data visualization

### 🆘 Get Help Now
- Emergency services contact (999, NHS 111)
- Local GP surgeries and hospitals in South East London
- Crisis support hotlines
- Community resource directory
- One-tap emergency calling

### 🌐 Accessibility Features
- **Symbol-Only Mode**: Visual communication for users with language barriers
- **20+ Language Support**: Comprehensive translations for SE London's communities
- **Audio Support**: Text-to-speech capabilities (planned)
- **Right-to-Left Layout**: Proper RTL support for Arabic and Urdu (planned)
- **Offline Mode**: Works without internet connection (planned)

## 🎯 Target Communities

FlowGo serves South East London's diverse population, specifically designed for:

- **Asian Communities**: Bengali, Urdu, Arabic, Hindi, Punjabi, Gujarati, Turkish speakers
- **African Communities**: Somali, Swahili, Yoruba, Twi, Wolof, Amharic, Tigrinya speakers  
- **European Communities**: Polish, French, Spanish, Portuguese, Italian, Romanian, Russian speakers
- **Women with limited English proficiency**
- **Users with varying literacy levels**

## 🏗️ Technical Architecture

### Frontend
- **Next.js 15** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** for responsive design
- **Shadcn/UI** component library
- **Lucide React** icons

### Key Components
- `AppMascot`: SVG-based cultural mascot with mood expressions
- `BrandAmbassador`: Contextual guidance system
- `LanguageSelector`: Regional language grouping with native script display
- `NotificationCenter`: Healthcare appointment reminders
- Translation system with complete medical terminology coverage

### Data Management
- Local state management with React hooks
- Persistent period tracking data
- Exportable health records
- Community resource database

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/your-org/flowgo-app.git

# Navigate to project directory
cd flowgo-app

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

### Usage
1. **Language Selection**: Choose from 20+ languages grouped by region
2. **Symbol Mode**: Toggle symbol-only mode for visual communication
3. **Learn**: Access NHS health information with real-time translation
4. **Track**: Log symptoms using voice, text, or visual inputs
5. **Help**: Access emergency services and local healthcare resources

## 🌟 Unique Features

### Real-Time Translation Preview
When sharing health information, users can preview the content in their chosen language before sending, ensuring accuracy and cultural appropriateness.

### Cultural Sensitivity
- Respectful representation of diverse communities
- Culturally-appropriate medical terminology
- Community-specific resource recommendations
- Inclusive visual design with hijab-friendly mascot options

### Community Empowerment
- Peer-to-peer health information sharing
- Multi-generational accessibility (symbols + text)
- Local resource discovery
- Emergency support network

## 📱 Screens Overview

1. **Home Screen**: Main navigation with community support features
2. **Learn Screen**: NHS health information with translation capabilities
3. **Track Screen**: Comprehensive period and symptom tracking
4. **Help Screen**: Emergency contacts and local healthcare resources

## 🔮 Roadmap

- [ ] Audio pronunciation for all languages
- [ ] Offline translation capabilities
- [ ] Right-to-left layout support
- [ ] Community feedback system
- [ ] Automatic language detection
- [ ] Healthcare provider integration
- [ ] Community forum features
- [ ] Appointment booking integration

## 🤝 Contributing

FlowGo welcomes contributions from community members, healthcare professionals, and developers. Areas where we need help:

- **Translation accuracy** for medical terminology
- **Cultural sensitivity** review
- **Accessibility** improvements
- **Community resource** updates
- **User experience** testing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **NHS** for providing official health information
- **South East London communities** for cultural guidance
- **Healthcare professionals** for medical accuracy review
- **Translation contributors** from diverse language communities

## 📞 Support

For support, feedback, or community partnerships:
- Email: support@flowgo.health
- Community Forum: [community.flowgo.health](https://community.flowgo.health)
- Healthcare Partnerships: partnerships@flowgo.health

---

**FlowGo** - Empowering women's health through cultural understanding and community support.

*"Your health, your language, your community."*
