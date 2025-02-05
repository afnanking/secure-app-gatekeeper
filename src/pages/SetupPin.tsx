
import { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SetupPin = () => {
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleNumberClick = (number: string) => {
    if (pin.length < 4) {
      setPin(prev => prev + number);
    }
  };

  const handleDelete = () => {
    setPin(prev => prev.slice(0, -1));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center pt-20 px-6 animate-fade-in">
      <div className="w-full max-w-sm">
        <div className="flex justify-center space-x-4 mb-12">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">1</div>
          <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-white">2</div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-8">Set up a PIN</h1>

        <div className="flex justify-center space-x-4 mb-12">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${
                pin.length > index ? "bg-white" : "border-2 border-white"
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button
              key={number}
              onClick={() => handleNumberClick(number.toString())}
              className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-2xl font-semibold"
            >
              {number}
            </button>
          ))}
          <div className="col-start-2">
            <button
              onClick={() => handleNumberClick("0")}
              className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-2xl font-semibold"
            >
              0
            </button>
          </div>
          <div className="col-start-3">
            <button
              onClick={handleDelete}
              className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-12 w-full flex items-center justify-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <span>Switch to pattern</span>
        </button>
      </div>
    </div>
  );
};

export default SetupPin;
