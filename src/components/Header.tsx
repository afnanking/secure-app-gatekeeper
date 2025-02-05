
import { UserCircle2, Settings } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">
          App Lock
          <div className="h-1 w-16 bg-orange-500 mt-1 rounded-full" />
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <UserCircle2 className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <Settings className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Header;
