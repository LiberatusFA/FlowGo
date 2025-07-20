"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Phone, MapPin, Share2, AlertTriangle, Stethoscope, Users, Shield } from "lucide-react"

interface HelpScreenProps {
  onBack: () => void
  symbolOnlyMode: boolean
}

export default function HelpScreen({ onBack, symbolOnlyMode }: HelpScreenProps) {
  const BrandAmbassador = () => (
    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg mb-4">
      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
        <Heart className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        {!symbolOnlyMode ? (
          <p className="text-sm text-red-700">"Getting help is brave and important. You deserve good healthcare."</p>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-lg">💪</span>
            <span className="text-lg">🏥</span>
            <span className="text-lg">❤️</span>
            <span className="text-lg">✨</span>
          </div>
        )}
      </div>
    </div>
  )

  const emergencyServices = [
    {
      title: "Emergency Services",
      symbol: "🚨",
      number: "999",
      description: "Life-threatening emergencies",
      color: "bg-red-600 hover:bg-red-700",
      textColor: "text-white",
    },
    {
      title: "NHS 111",
      symbol: "🏥",
      number: "111",
      description: "Urgent but non-emergency care",
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-white",
    },
  ]

  const localServices = [
    {
      name: "Southwark Women's Health Clinic",
      type: "GP Surgery",
      symbol: "👩‍⚕️",
      phone: "020 7123 4567",
      address: "123 Old Kent Road, SE1 5LU",
      hours: "Mon-Fri 8:00-18:00",
    },
    {
      name: "King's College Hospital",
      type: "Hospital",
      symbol: "🏥",
      phone: "020 3299 9000",
      address: "Denmark Hill, SE5 9RS",
      hours: "24/7 Emergency",
    },
    {
      name: "Peckham Health Centre",
      type: "Health Centre",
      symbol: "🏢",
      phone: "020 7234 5678",
      address: "456 Peckham High St, SE15 5DP",
      hours: "Mon-Fri 8:00-20:00",
    },
  ]

  const crisisSupport = [
    {
      name: "Samaritans",
      symbol: "💚",
      phone: "116 123",
      description: "Free 24/7 emotional support",
    },
    {
      name: "Women's Aid",
      symbol: "🛡️",
      phone: "0808 2000 247",
      description: "Domestic violence support",
    },
    {
      name: "Mind Mental Health",
      symbol: "🧠",
      phone: "0300 123 3393",
      description: "Mental health support",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-xl font-bold text-red-800">{symbolOnlyMode ? "🆘📞" : "Get Help Now"}</h1>
        </div>
      </div>

      <div className="p-4">
        <BrandAmbassador />

        {/* Emergency Services */}
        <Card className="mb-6 border-red-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-red-800">
              <AlertTriangle className="w-5 h-5" />
              {symbolOnlyMode ? "🚨📞" : "Emergency Services"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {emergencyServices.map((service, index) => (
              <Button key={index} className={`w-full h-16 ${service.color} ${service.textColor}`}>
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

            {!symbolOnlyMode && (
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <h4 className="font-medium text-red-800 mb-2">When to call emergency services:</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Severe bleeding that won't stop</li>
                  <li>• Severe pain that prevents normal activities</li>
                  <li>• Signs of severe anemia (dizziness, fainting)</li>
                  <li>• Any life-threatening symptoms</li>
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Local GP Services */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-blue-600" />
              {symbolOnlyMode ? "👩‍⚕️🏥" : "Local Healthcare Services"}
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
                    {symbolOnlyMode ? "📞" : "Call"}
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
                    <p className="text-xs text-green-600">{service.hours}</p>
                  </div>
                )}
              </div>
            ))}

            <Button variant="outline" className="w-full gap-2 text-blue-600 border-blue-200 bg-transparent">
              <MapPin className="w-4 h-4" />
              {symbolOnlyMode ? "🗺️🔍" : "Find More GP Surgeries"}
            </Button>
          </CardContent>
        </Card>

        {/* Crisis Support */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-600" />
              {symbolOnlyMode ? "🛡️💚" : "Crisis Support"}
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
                  <div className="text-right">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Phone className="w-3 h-3" />
                      {support.phone}
                    </Button>
                  </div>
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
                {!symbolOnlyMode && <span className="font-medium">Help Your Community</span>}
              </div>
              {!symbolOnlyMode ? (
                <p className="text-sm text-gray-600">Share FlowGo with someone who needs healthcare support</p>
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
                {symbolOnlyMode ? "📱💚🆘" : "Share FlowGo on WhatsApp"}
              </Button>
              {!symbolOnlyMode && (
                <p className="text-xs text-gray-500">"Help other women in your community access healthcare"</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Emergency Access */}
        <div className="mt-4 p-4 bg-red-100 rounded-lg border-2 border-red-300">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              {!symbolOnlyMode && <span className="font-bold text-red-800">Emergency Quick Access</span>}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button className="bg-red-600 hover:bg-red-700 h-12">
                <Phone className="w-4 h-4 mr-2" />
                999
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 h-12">
                <Phone className="w-4 h-4 mr-2" />
                111
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
