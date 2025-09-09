import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ISPMDashboard() {
  return (
    <div className="min-h-screen bg-[#181b30] text-white p-6">
      {/* Top Search Bar */}
      <div className="flex justify-between items-center mb-7">
        <Input 
          type="text" 
          placeholder="Start a conversation with Savi" 
          className="w-80 bg-[#262a40] border-none text-white placeholder-gray-400 rounded-lg p-3"
        />
        <div className="flex items-center gap-2 text-white">
          <i className="fas fa-user-circle text-xl"></i>
          <span>Kyle McGill</span>
        </div>
      </div>

      {/* Analytics Section */}
      <section className="mb-9">
        <div className="mb-5">
          <h2 className="text-xl text-[#b6bef6] mb-5">Insights & Analytics</h2>
          <div className="flex gap-6 mb-6">
            <div className="bg-[#22264c] rounded-xl p-5 min-w-[130px] min-h-[70px] text-center shadow-lg">
              <div className="text-2xl text-white">2,639</div>
              <div className="text-[#8d95bd] text-sm">Resources</div>
            </div>
            <div className="bg-[#22264c] rounded-xl p-5 min-w-[130px] min-h-[70px] text-center shadow-lg">
              <div className="text-2xl text-white">48,035</div>
              <div className="text-[#8d95bd] text-sm">Identities</div>
            </div>
            <div className="bg-[#22264c] rounded-xl p-5 min-w-[130px] min-h-[70px] text-center shadow-lg">
              <div className="text-2xl text-white">989</div>
              <div className="text-[#8d95bd] text-sm">Roles</div>
            </div>
            <div className="bg-[#22264c] rounded-xl p-5 min-w-[130px] min-h-[70px] text-center shadow-lg">
              <div className="text-2xl text-white">12,281</div>
              <div className="text-[#8d95bd] text-sm">Accounts</div>
            </div>
            <div className="bg-[#22264c] rounded-xl p-5 min-w-[130px] min-h-[70px] text-center shadow-lg">
              <div className="text-2xl text-white">4,310</div>
              <div className="text-[#8d95bd] text-sm">Entitlements</div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-[#1c2040] rounded-lg p-4 mb-6">
          <h4 className="text-[#e6e0ff] mb-3">Recommendations</h4>
          <ul className="space-y-3">
            <li className="flex justify-between items-center text-[#cedcff]">
              <span>11 Accounts with excessive permissions detected</span>
              <Button className="bg-[#574ed4] hover:bg-[#4a42c2] text-white px-5 py-1 rounded">Review</Button>
            </li>
            <li className="flex justify-between items-center text-[#cedcff]">
              <span>7 unused AWS access keys should be reviewed</span>
              <Button className="bg-[#574ed4] hover:bg-[#4a42c2] text-white px-5 py-1 rounded">Review</Button>
            </li>
            <li className="flex justify-between items-center text-[#cedcff]">
              <span>3 risk elevations for privileged users</span>
              <Button className="bg-[#574ed4] hover:bg-[#4a42c2] text-white px-5 py-1 rounded">Analyze</Button>
            </li>
            <li className="flex justify-between items-center text-[#cedcff]">
              <span>2 interactive service accounts detected</span>
              <Button className="bg-[#574ed4] hover:bg-[#4a42c2] text-white px-5 py-1 rounded">Analyze</Button>
            </li>
          </ul>
        </div>

        {/* Identity Insights */}
        <div className="flex gap-6 mb-6">
          <div className="bg-[#232750] rounded-lg p-4 min-w-[170px] shadow-lg">
            <div className="text-[#c3caef] text-sm">Duplicate Identities</div>
            <div className="flex items-center gap-3 my-2">
              <span className="text-xl text-white">20</span>
              <span className="text-[#67f1b5] text-sm">+22%</span>
            </div>
            <div className="w-full h-8 bg-gradient-to-r from-[#8166f9] to-[#2dd8ea] rounded"></div>
          </div>
          <div className="bg-[#232750] rounded-lg p-4 min-w-[170px] shadow-lg">
            <div className="text-[#c3caef] text-sm">Potential Orphan Accounts</div>
            <div className="flex items-center gap-3 my-2">
              <span className="text-xl text-white">24</span>
              <span className="text-[#67f1b5] text-sm">+15%</span>
            </div>
            <div className="w-full h-8 bg-gradient-to-r from-[#8166f9] to-[#2dd8ea] rounded"></div>
          </div>
          <div className="bg-[#232750] rounded-lg p-4 min-w-[170px] shadow-lg">
            <div className="text-[#c3caef] text-sm">Potential Entitlement Owners</div>
            <div className="flex items-center gap-3 my-2">
              <span className="text-xl text-white">17</span>
              <span className="text-[#67f1b5] text-sm">-6%</span>
            </div>
            <div className="w-full h-8 bg-gradient-to-r from-[#8166f9] to-[#2dd8ea] rounded"></div>
          </div>
          <div className="bg-[#232750] rounded-lg p-4 min-w-[170px] shadow-lg">
            <div className="text-[#c3caef] text-sm">Shared Service Accounts</div>
            <div className="flex items-center gap-3 my-2">
              <span className="text-xl text-white">12</span>
              <span className="text-[#67f1b5] text-sm">+19%</span>
            </div>
            <div className="w-full h-8 bg-gradient-to-r from-[#8166f9] to-[#2dd8ea] rounded"></div>
          </div>
        </div>

        {/* Risk Detection */}
        <div className="bg-[#232750] rounded-xl p-4 mb-6 min-w-[290px]">
          <h4 className="text-[#fadf79] mb-3">Risk Detection</h4>
          <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-radial from-[#8166f9] via-[#2dd8ea] to-[#232750]"></div>
          <div className="flex justify-between text-[#b1c6ff] text-sm">
            <span>Applications: 1,250</span>
            <span>Workloads: 937</span>
            <span>Identities: 61</span>
          </div>
        </div>
      </section>

      {/* Risk Insights Section */}
      <section className="bg-[#22264c] rounded-xl p-4">
        <div className="flex gap-4 mb-8">
          <Button className="bg-[#574ed4] text-white px-6 py-2 rounded font-bold">Access</Button>
          <Button className="bg-[#262a40] text-[#e3e6ff] px-6 py-2 rounded font-bold">Certifications</Button>
          <Button className="bg-[#262a40] text-[#e3e6ff] px-6 py-2 rounded font-bold">Request</Button>
          <Button className="bg-[#262a40] text-[#e3e6ff] px-6 py-2 rounded font-bold">Onboarding</Button>
        </div>

        <div className="grid grid-cols-4 gap-5">
          <div className="bg-[#191b33] rounded-xl p-5 min-h-[155px] shadow-lg">
            <h4 className="text-[#fadf79] mb-2 text-sm">Unused Access <span className="text-[#74e1ff]">+6%</span></h4>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8166f9] to-[#2dd8ea] flex items-center justify-center text-white text-center my-2">
              <div>
                <div className="text-lg">100</div>
                <div className="text-xs">accounts</div>
              </div>
            </div>
            <ul className="text-[#b6bef6] text-xs space-y-1 mt-3">
              <li>60 days + 55% (5 accounts)</li>
              <li>90 days + 20% (20 accounts)</li>
              <li>120 days + 20% (20 accounts)</li>
              <li>Over 6 months 5%</li>
            </ul>
          </div>

          <div className="bg-[#191b33] rounded-xl p-5 min-h-[155px] shadow-lg">
            <h4 className="text-[#fadf79] mb-2 text-sm">Guest Access for Critical Assets</h4>
            <div className="text-2xl text-white">31 <span className="text-[#74e1ff] text-sm">+15%</span></div>
          </div>

          <div className="bg-[#191b33] rounded-xl p-5 min-h-[155px] shadow-lg">
            <h4 className="text-[#fadf79] mb-2 text-sm">Unused Access</h4>
            <div className="text-2xl text-white">25 <span className="text-[#74e1ff] text-sm">+9%</span></div>
          </div>

          <div className="bg-[#191b33] rounded-xl p-5 min-h-[155px] shadow-lg">
            <h4 className="text-[#fadf79] mb-2 text-sm">Outlier Access</h4>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8166f9] to-[#2dd8ea] flex items-center justify-center text-white text-center my-2">
              <div>
                <div className="text-lg">1,021</div>
                <div className="text-xs">users</div>
              </div>
            </div>
            <div className="text-[#b6bef6] text-xs mt-2">Peer Match 425, 270, 126 users</div>
          </div>

          <div className="bg-[#191b33] rounded-xl p-5 min-h-[155px] shadow-lg">
            <h4 className="text-[#fadf79] mb-2 text-sm">Service Accounts for Critical Assets</h4>
            <div className="text-2xl text-white mb-2">29 <span className="text-[#74e1ff] text-sm">+22%</span></div>
            <div className="w-4/5 h-4 bg-gradient-to-r from-[#8166f9] to-[#fadf79] rounded mt-2"></div>
          </div>

          <div className="bg-[#191b33] rounded-xl p-5 min-h-[155px] shadow-lg">
            <h4 className="text-[#fadf79] mb-2 text-sm">Unused Access Per System</h4>
            <ul className="text-[#b6bef6] text-xs space-y-1 mt-3">
              <li>AWS 11 users</li>
              <li>Azure 24 users</li>
              <li>SAP 400 users</li>
            </ul>
          </div>

          <div className="bg-[#191b33] rounded-xl p-5 min-h-[155px] shadow-lg">
            <h4 className="text-[#fadf79] mb-2 text-sm">Dormant Users of Access to Vulnerable Assets</h4>
            <div className="text-[#e6e0ff] text-sm space-y-1 mt-3">
              <div>60+ Days 212 users</div>
              <div>6 months 35 users</div>
              <div>1 year 368 users</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}