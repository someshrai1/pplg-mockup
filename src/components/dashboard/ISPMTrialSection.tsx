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
          <h2 className="text-xl text-[#b6bef6]">ISPM Trial</h2>
        </div>
        <p className="text-[#8d95bd] mb-6">
          Your Identity Security Posture Management trial overview
        </p>
        
        <div className="grid gap-4 md:grid-cols-5 mb-6">
          <div className="bg-[#232750] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">2,639</div>
            <div className="text-sm text-[#8d95bd] mb-1">Resources</div>
            <div className="text-sm text-orange-400">159 Potentially Risky</div>
          </div>
          <div className="bg-[#232750] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">48,035</div>
            <div className="text-sm text-[#8d95bd] mb-1">Identities</div>
            <div className="text-sm text-orange-400">1,588 Potentially Risky</div>
          </div>
          <div className="bg-[#232750] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">989</div>
            <div className="text-sm text-[#8d95bd] mb-1">Roles</div>
            <div className="text-sm text-orange-400">322 Potentially Risky</div>
          </div>
          <div className="bg-[#232750] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">12,281</div>
            <div className="text-sm text-[#8d95bd] mb-1">Accounts</div>
            <div className="text-sm text-orange-400">322 Potentially Risky</div>
          </div>
          <div className="bg-[#232750] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">4,310</div>
            <div className="text-sm text-[#8d95bd] mb-1">Entitlements</div>
            <div className="text-sm text-orange-400">101 Potentially Risky</div>
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
        <h3 className="text-xl text-[#b6bef6] mb-2">Continue to protect your organisation</h3>
        <p className="text-[#8d95bd] mb-6">
          Choose how you want to proceed with your ISPM trial
        </p>
        
        <div className="grid gap-4 md:grid-cols-3">
          {/* Buy Now Option - Most Attractive */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl p-5 text-left transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-green-400">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-white" />
                  <span className="font-medium text-white">Buy Now!</span>
                </div>
                <p className="text-sm text-green-100">
                  Already know what you need? Get a quote
                </p>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#181b30] border-[#2a2f5a]">
              <DialogHeader>
                <DialogTitle className="text-white">Buy Now!</DialogTitle>
              </DialogHeader>
              <TrialEndExperience3 trialData={trialData} />
            </DialogContent>
          </Dialog>

          {/* Connect with Sales Option - Medium Attractive */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-blue-600 hover:bg-blue-700 rounded-xl p-5 text-left transition-colors border border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-white" />
                  <span className="font-medium text-white">Connect with Sales</span>
                </div>
                <p className="text-sm text-blue-100">
                  Need help in choosing the right plan? Our sales team is here to assist you
                </p>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#181b30] border-[#2a2f5a]">
              <DialogHeader>
                <DialogTitle className="text-white">Connect with Sales</DialogTitle>
              </DialogHeader>
              <TrialEndExperience2 trialData={trialData} />
            </DialogContent>
          </Dialog>

          {/* Terminate Trial Option - Least Attractive */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-gray-600 hover:bg-gray-700 rounded-xl p-5 text-left transition-colors border border-gray-500">
                <div className="flex items-center gap-2 mb-2">
                  <Download className="h-5 w-5 text-gray-300" />
                  <span className="font-medium text-white">Terminate Trial</span>
                </div>
                <p className="text-sm text-gray-300">
                  Not extending yet? Let's backup your data before you go
                </p>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#181b30] border-[#2a2f5a]">
              <DialogHeader>
                <DialogTitle className="text-white">Terminate Trial</DialogTitle>
              </DialogHeader>
              <TrialEndExperience1 trialData={trialData} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}