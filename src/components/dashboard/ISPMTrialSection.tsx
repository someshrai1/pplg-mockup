import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TrialEndExperience1 } from "./trial-experiences/TrialEndExperience1";
import { TrialEndExperience2 } from "./trial-experiences/TrialEndExperience2";
import { TrialEndExperience3 } from "./trial-experiences/TrialEndExperience3";
import { Sparkles, Calendar, Download, TrendingUp, FileText } from "lucide-react";

export function ISPMTrialSection() {
  const trialData = {
    eventsAnalyzed: 15420,
    identitiesScanned: 842,
    aiInsights: 127,
    postureScore: 87
  };

  return (
    <div className="min-h-screen bg-[#181b30] text-white p-6 space-y-6">
      {/* Trial Status Card */}
      <div className="bg-[#22264c] rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-[#fadf79]" />
          <h2 className="text-xl text-[#b6bef6]">ISPM Status</h2>
        </div>
        <p className="text-[#8d95bd] mb-6">
          Your Identity Security Posture Management trial overview
        </p>
        
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <div className="bg-[#232750] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">{trialData.eventsAnalyzed.toLocaleString()}</div>
            <div className="text-sm text-[#8d95bd]">Events Analyzed</div>
          </div>
          <div className="bg-[#232750] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">{trialData.identitiesScanned}</div>
            <div className="text-sm text-[#8d95bd]">Identities Scanned</div>
          </div>
          <div className="bg-[#232750] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">{trialData.aiInsights}</div>
            <div className="text-sm text-[#8d95bd]">AI Insights</div>
          </div>
          <div className="bg-[#232750] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-[#67f1b5]">{trialData.postureScore}/100</div>
            <div className="text-sm text-[#8d95bd]">Posture Score</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-[#1c2040] rounded-lg border border-[#fadf79]/20">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-[#fadf79]" />
            <div>
              <div className="font-medium text-white">Trial Ending Soon</div>
              <div className="text-sm text-[#8d95bd]">Your ISPM trial expires in 3 days</div>
            </div>
          </div>
          <div className="bg-[#fadf79] text-[#181b30] px-3 py-1 rounded font-medium">
            3 Days Left
          </div>
        </div>
      </div>

      {/* Trial End Options */}
      <div className="bg-[#22264c] rounded-xl p-6 shadow-lg">
        <h3 className="text-xl text-[#b6bef6] mb-2">Trial End Options</h3>
        <p className="text-[#8d95bd] mb-6">
          Choose how you want to proceed with your ISPM trial
        </p>
        
        <div className="grid gap-4 md:grid-cols-3">
          {/* Connect with Sales Option */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-[#191b33] rounded-xl p-5 text-left hover:bg-[#1f2142] transition-colors border border-[#2a2f5a]">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-[#67f1b5]" />
                  <span className="font-medium text-white">Connect with Sales</span>
                </div>
                <p className="text-sm text-[#8d95bd]">
                  Need help in choosing the right plan? Our sales team is here to assist you
                </p>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#181b30] border-[#2a2f5a]">
              <DialogHeader>
                <DialogTitle className="text-white">Connect with Sales Team</DialogTitle>
              </DialogHeader>
              <TrialEndExperience2 trialData={trialData} />
            </DialogContent>
          </Dialog>

          {/* Request Quote Option */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-[#191b33] rounded-xl p-5 text-left hover:bg-[#1f2142] transition-colors border border-[#2a2f5a]">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-[#74e1ff]" />
                  <span className="font-medium text-white">Request a Quote</span>
                </div>
                <p className="text-sm text-[#8d95bd]">
                  Already know what you need? Get a quote
                </p>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#181b30] border-[#2a2f5a]">
              <DialogHeader>
                <DialogTitle className="text-white">Request Custom Quote</DialogTitle>
              </DialogHeader>
              <TrialEndExperience3 trialData={trialData} />
            </DialogContent>
          </Dialog>

          {/* Terminate Trial Option - Last */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-[#191b33] rounded-xl p-5 text-left hover:bg-[#1f2142] transition-colors border border-[#2a2f5a]">
                <div className="flex items-center gap-2 mb-2">
                  <Download className="h-5 w-5 text-[#ff6b6b]" />
                  <span className="font-medium text-white">Terminate Trial</span>
                </div>
                <p className="text-sm text-[#8d95bd]">
                  Not extending yet? Let's backup your data before you go
                </p>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#181b30] border-[#2a2f5a]">
              <DialogHeader>
                <DialogTitle className="text-white">Terminate Trial & Data Management</DialogTitle>
              </DialogHeader>
              <TrialEndExperience1 trialData={trialData} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}