"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, MapPin, Share2, Volume2, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface LearnScreenProps {
  onBack: () => void
  symbolOnlyMode: boolean
}

export default function LearnScreen({ onBack, symbolOnlyMode }: LearnScreenProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const BrandAmbassador = () => (
    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-teal-50 to-purple-50 rounded-lg mb-4">
      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-purple-500 rounded-full flex items-center justify-center">
        <Heart className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        {!symbolOnlyMode ? (
          <p className="text-sm text-teal-700">"Let me help you understand what the NHS says about heavy periods..."</p>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-lg">👩‍⚕️</span>
            <span className="text-lg">➡️</span>
            <span className="text-lg">📚</span>
            <span className="text-lg">💧</span>
          </div>
        )}
      </div>
    </div>
  )

  const nhsInfo = [
    {
      id: "what-is-hmb",
      title: "What is Heavy Menstrual Bleeding?",
      symbol: "💧❓",
      content: [
        "Heavy periods are common but they're not normal",
        "If your period lasts longer than 7 days",
        "If you need to change protection every hour",
        "If you pass clots larger than a 10p coin",
        "If bleeding affects your daily life",
      ],
    },
    {
      id: "when-to-see-doctor",
      title: "When to See a Doctor",
      symbol: "👩‍⚕️⏰",
      content: [
        "Your periods suddenly become heavier than usual",
        "You're bleeding between periods",
        "You have severe period pain",
        "You feel tired or short of breath",
        "Your periods are affecting your quality of life",
      ],
    },
    {
      id: "treatment-options",
      title: "Treatment Options Available",
      symbol: "💊🏥",
      content: [
        "Hormonal treatments (pill, coil, injection)",
        "Non-hormonal medicines",
        "Minor surgical procedures",
        "Your doctor will discuss what's best for you",
        "Treatment can really help improve your life",
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
    {
      name: "Camberwell Library",
      type: "Library",
      symbol: "📚🏛️",
      address: "789 Camberwell Rd",
      phone: "020 7345 6789",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-xl font-bold text-teal-800">{symbolOnlyMode ? "📚💧" : "Learn About Heavy Periods"}</h1>
        </div>
      </div>

      <div className="p-4">
        <BrandAmbassador />

        {/* NHS Information Section */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {symbolOnlyMode ? "🏥" : "NHS"}
              </Badge>
              <CardTitle className="text-lg">{symbolOnlyMode ? "🏥📋" : "Official NHS Information"}</CardTitle>
            </div>
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

            {/* Share NHS Info */}
            <div className="pt-4 border-t">
              <Button className="w-full gap-2 bg-green-600 hover:bg-green-700">
                <Share2 className="w-4 h-4" />
                {symbolOnlyMode ? "📱💚" : "Share on WhatsApp"}
              </Button>
              {!symbolOnlyMode && (
                <p className="text-xs text-gray-500 mt-2 text-center">"Help your friends learn about women's health"</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Local Support Section */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-sage-600" />
              {symbolOnlyMode ? "📍🆘" : "Find Support Near You"}
            </CardTitle>
            {!symbolOnlyMode && <p className="text-sm text-gray-600">You're not alone - here's help in your area</p>}
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
                    {symbolOnlyMode ? "📞" : "Call"}
                  </Button>
                </div>
              </div>
            ))}

            {/* Share Local Resources */}
            <div className="pt-4 border-t">
              <Button variant="outline" className="w-full gap-2 text-green-600 border-green-200 bg-transparent">
                <Share2 className="w-4 h-4" />
                {symbolOnlyMode ? "📍📱" : "Share Local Support"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Audio Support */}
        <div className="mt-4 p-4 bg-purple-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Volume2 className="w-5 h-5 text-purple-600" />
            {!symbolOnlyMode && <span className="font-medium text-purple-800">Audio Support</span>}
          </div>
          <Button variant="outline" className="w-full gap-2 text-purple-600 border-purple-200 bg-transparent">
            <Volume2 className="w-4 h-4" />
            {symbolOnlyMode ? "🔊📚" : "Listen to Information"}
          </Button>
        </div>
      </div>
    </div>
  )
}
