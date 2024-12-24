import React, { useState } from 'react'
import { Html } from '@react-three/drei';


const VirtualDpad = ({ onDirectionChange }) => {
    const [activeButtons, setActiveButtons] = useState({
      forward: false,
      backward: false,
      left: false,
      right: false
    });
  
    // Handle touch start
    const handleTouchStart = (direction) => {
      setActiveButtons(prev => ({ ...prev, [direction]: true }));
      onDirectionChange({ ...activeButtons, [direction]: true });
    };
  
    // Handle touch end
    const handleTouchEnd = (direction) => {
      setActiveButtons(prev => ({ ...prev, [direction]: false }));
      onDirectionChange({ ...activeButtons, [direction]: false });
    };
  
    const buttonClass = "w-12 h-12 bg-white/20 rounded-lg active:bg-white/40 backdrop-blur-sm touch-none";
    const activeButtonClass = "w-12 h-12 bg-white/40 rounded-lg backdrop-blur-sm touch-none";
  
    return (
        <Html>
            <div className="fixed bottom-8 left-8 select-none touch-none z-50">
                <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Up button */}
                <button
                    className={`absolute top-0 left-1/2 -translate-x-1/2 ${activeButtons.forward ? activeButtonClass : buttonClass}`}
                    onTouchStart={() => handleTouchStart('forward')}
                    onTouchEnd={() => handleTouchEnd('forward')}
                    aria-label="Move forward"
                >
                    <div className="w-full h-full flex items-center justify-center">
                    ▲
                    </div>
                </button>
        
                {/* Down button */}
                <button
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${activeButtons.backward ? activeButtonClass : buttonClass}`}
                    onTouchStart={() => handleTouchStart('backward')}
                    onTouchEnd={() => handleTouchEnd('backward')}
                    aria-label="Move backward"
                >
                    <div className="w-full h-full flex items-center justify-center">
                    ▼
                    </div>
                </button>
        
                {/* Left button */}
                <button
                    className={`absolute left-0 top-1/2 -translate-y-1/2 ${activeButtons.left ? activeButtonClass : buttonClass}`}
                    onTouchStart={() => handleTouchStart('left')}
                    onTouchEnd={() => handleTouchEnd('left')}
                    aria-label="Move left"
                >
                    <div className="w-full h-full flex items-center justify-center">
                    ◄
                    </div>
                </button>
        
                {/* Right button */}
                <button
                    className={`absolute right-0 top-1/2 -translate-y-1/2 ${activeButtons.right ? activeButtonClass : buttonClass}`}
                    onTouchStart={() => handleTouchStart('right')}
                    onTouchEnd={() => handleTouchEnd('right')}
                    aria-label="Move right"
                >
                    <div className="w-full h-full flex items-center justify-center">
                    ►
                    </div>
                </button>
                </div>
            </div>
      </Html>
    );
  };

export default VirtualDpad;