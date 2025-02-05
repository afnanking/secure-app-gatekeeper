
import { Vault, Eraser, Palette, Bell } from "lucide-react";

const QuickActions = () => {
  const actions = [
    { icon: <Vault className="w-6 h-6" />, label: "Vault", color: "bg-app-vault" },
    { icon: <Eraser className="w-6 h-6" />, label: "Remove junk", color: "bg-app-junk" },
    { icon: <Palette className="w-6 h-6" />, label: "Theme", color: "bg-app-theme" },
    { icon: <Bell className="w-6 h-6" />, label: "Notifications", color: "bg-app-notification" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 px-4 py-6 animate-fade-in">
      {actions.map(({ icon, label, color }) => (
        <div key={label} className="flex flex-col items-center space-y-2">
          <button className={`app-icon ${color}`}>
            {icon}
          </button>
          <span className="text-sm text-gray-300">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default QuickActions;
