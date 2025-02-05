
import { Lock, Search } from "lucide-react";
import { useState } from "react";

interface App {
  name: string;
  icon: string;
  description?: string;
  percentage?: number;
}

const AppList = () => {
  const [activeTab, setActiveTab] = useState("unlock");
  const [searchVisible, setSearchVisible] = useState(false);

  const apps: App[] = [
    { name: "Play Store", icon: "🏪", description: "Avoid unintentional installs/uninstalls", percentage: 95 },
    { name: "Settings", icon: "⚙️", description: "Avoid App Lock being forced to stop or uninstall", percentage: 95 },
    { name: "WhatsApp", icon: "💬", percentage: 92 },
    { name: "Facebook", icon: "📱" },
    { name: "YouTube", icon: "📺" },
    { name: "Chrome", icon: "🌐" },
  ];

  return (
    <div className="px-4 pb-6 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-4">
          <button
            className={`py-2 px-1 relative ${
              activeTab === "unlock" ? "text-white" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("unlock")}
          >
            Unlock
            {activeTab === "unlock" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500" />
            )}
          </button>
          <button
            className={`py-2 px-1 relative ${
              activeTab === "locked" ? "text-white" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("locked")}
          >
            Locked
            {activeTab === "locked" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500" />
            )}
          </button>
        </div>
        <button
          className="p-2 hover:bg-white/5 rounded-full transition-colors"
          onClick={() => setSearchVisible(!searchVisible)}
        >
          <Search className="w-5 h-5" />
        </button>
      </div>

      {searchVisible && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search apps..."
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
          />
        </div>
      )}

      <div className="space-y-4">
        {apps.map((app) => (
          <div
            key={app.name}
            className="flex items-center justify-between p-4 glass hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center text-2xl">
                {app.icon}
              </div>
              <div>
                <h3 className="font-semibold">{app.name}</h3>
                {app.description && (
                  <p className="text-sm text-gray-400">{app.description}</p>
                )}
                {app.percentage && (
                  <div className="flex items-center space-x-2 mt-1">
                    <Lock className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-400">
                      {app.percentage}%
                    </span>
                  </div>
                )}
              </div>
            </div>
            <Lock className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppList;
