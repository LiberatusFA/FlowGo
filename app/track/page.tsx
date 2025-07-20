"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Heart, Mic, Clock, Droplets, Share2, Save, FileText, Volume2, Play } from "lucide-react"
import { useState } from "react"

interface TrackScreenProps {
  onBack: () => void
  symbolOnlyMode: boolean
}

export default function TrackScreen({ onBack, symbolOnlyMode }: TrackScreenProps) {
  const [selectedFlow, setSelectedFlow] = useState<string>("")
  const [selectedPain, setSelectedPain] = useState<number>(0)
  const [selectedDuration, setSelectedDuration] = useState<string>("")
  const [voiceInput, setVoiceInput] = useState<string>("")
  const [textInput, setTextInput] = useState<string>("")
  const [isRecording, setIsRecording] = useState(false)

  const BrandAmbassador = () => (
    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-teal-50 rounded-lg mb-4">
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full flex items-center justify-center">
        <Heart className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        {!symbolOnlyMode ? (
          <p className="text-sm text-purple-700">"Tracking helps you and your doctor understand your health better"</p>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-lg">📝</span>
            <span className="text-lg">➡️</span>
            <span className="text-lg">👩‍⚕️</span>
            <span className="text-lg">💪</span>
          </div>
        )}
      </div>
    </div>
  )

  const flowOptions = [
    { id: "light", symbol: "💧", label: "Light", color: "bg-blue-100 text-blue-800" },
    { id: "normal", symbol: "💧💧", label: "Normal", color: "bg-yellow-100 text-yellow-800" },
    { id: "heavy", symbol: "💧💧💧", label: "Heavy", color: "bg-red-100 text-red-800" },
  ]

  const painLevels = [
    { level: 1, symbol: "😊", label: "No Pain" },
    { level: 2, symbol: "🙂", label: "Mild" },
    { level: 3, symbol: "😐", label: "Moderate" },
    { level: 4, symbol: "😟", label: "Severe" },
    { level: 5, symbol: "😣", label: "Very Severe" },
  ]

  const durationOptions = [
    { id: "1-3", symbol: "⏰", label: "1-3 days" },
    { id: "4-7", symbol: "⏰⏰", label: "4-7 days" },
    { id: "8+", symbol: "⏰⏰⏰", label: "8+ days" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-xl font-bold text-purple-800">{symbolOnlyMode ? "📅💧" : "Track Your Periods"}</h1>
        </div>
      </div>

      <div className="p-4">
        <BrandAmbassador />

        {/* Quick Symptom Checker */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-purple-600" />
              {symbolOnlyMode ? "💧📊" : "Quick Symptom Checker"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Flow Amount */}
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <span className="text-lg">💧</span>
                {!symbolOnlyMode && "Flow Amount"}
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
                {!symbolOnlyMode && "Pain Level"}
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

            {/* Duration */}
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {!symbolOnlyMode && "Duration"}
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {durationOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant={selectedDuration === option.id ? "default" : "outline"}
                    className={`h-16 flex-col gap-1 ${selectedDuration === option.id ? "bg-purple-600" : ""}`}
                    onClick={() => setSelectedDuration(option.id)}
                  >
                    <span className="text-lg">{option.symbol}</span>
                    {!symbolOnlyMode && <span className="text-xs">{option.label}</span>}
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
              {symbolOnlyMode ? "🎤💬" : "Voice Input"}
            </CardTitle>
            {!symbolOnlyMode && <p className="text-sm text-gray-600">Speak in your own words - any language</p>}
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
                <span className="font-medium">{isRecording ? "Recording..." : "Tell us about your period"}</span>
              )}
            </Button>

            {voiceInput && (
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Volume2 className="w-4 h-4 text-gray-600" />
                  {!symbolOnlyMode && <span className="text-sm font-medium">Voice Recording</span>}
                </div>
                <p className="text-sm text-gray-700">{voiceInput}</p>
                <Button variant="outline" size="sm" className="mt-2 gap-2 bg-transparent">
                  <Play className="w-3 h-3" />
                  {symbolOnlyMode ? "▶️" : "Play Back"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Text Input Section */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-sage-600" />
              {symbolOnlyMode ? "✏️📝" : "Text Input"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder={symbolOnlyMode ? "✏️..." : "Describe your symptoms in your own words..."}
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              className="min-h-24 mb-4"
            />
            <div className="text-xs text-gray-500 mb-4">{textInput.length}/500 characters</div>
          </CardContent>
        </Card>

        {/* Summary & Export */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Save className="w-5 h-5 text-orange-600" />
              {symbolOnlyMode ? "💾📊" : "Summary & Export"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Summary */}
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <span className="text-lg">📋</span>
                {!symbolOnlyMode && "Your Tracking Summary"}
              </h4>
              <div className="space-y-2 text-sm">
                {selectedFlow && (
                  <div className="flex items-center gap-2">
                    <span>Flow: {flowOptions.find((f) => f.id === selectedFlow)?.symbol}</span>
                    {!symbolOnlyMode && <span>{flowOptions.find((f) => f.id === selectedFlow)?.label}</span>}
                  </div>
                )}
                {selectedPain > 0 && (
                  <div className="flex items-center gap-2">
                    <span>Pain: {painLevels.find((p) => p.level === selectedPain)?.symbol}</span>
                    {!symbolOnlyMode && <span>{painLevels.find((p) => p.level === selectedPain)?.label}</span>}
                  </div>
                )}
                {selectedDuration && (
                  <div className="flex items-center gap-2">
                    <span>Duration: {durationOptions.find((d) => d.id === selectedDuration)?.symbol}</span>
                    {!symbolOnlyMode && <span>{durationOptions.find((d) => d.id === selectedDuration)?.label}</span>}
                  </div>
                )}
              </div>
            </div>

            {/* Export Options */}
            <div className="space-y-2">
              <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
                <FileText className="w-4 h-4" />
                {symbolOnlyMode ? "👩‍⚕️📄" : "Share with Doctor"}
              </Button>

              <Button variant="outline" className="w-full gap-2 bg-transparent">
                <Save className="w-4 h-4" />
                {symbolOnlyMode ? "💾📱" : "Save to Phone"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Community Sharing */}
        <Card>
          <CardContent className="p-4">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg">👭</span>
                {!symbolOnlyMode && <span className="font-medium">Help Other Women</span>}
              </div>
              {!symbolOnlyMode && (
                <p className="text-sm text-gray-600">Share your tracking experience to encourage others</p>
              )}
              <Button variant="outline" className="w-full gap-2 text-green-600 border-green-200 bg-transparent">
                <Share2 className="w-4 h-4" />
                {symbolOnlyMode ? "📱💚👭" : "Share on WhatsApp"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
