'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [visible, setVisible] = useState(true);
  const [timeString, setTimeString] = useState('');
  const loaderRef = useRef<HTMLDivElement>(null);

  const logMessages = [
    'Initializing portfolio core...',
    'Loading Space Grotesk & Inter typeface...',
    'Spinning up WebGL particle engine...',
    'Fetching developer stats from GitHub API...',
    'Compiling Tailwind CSS v4 design tokens...',
    'Applying glassmorphic interface layers...',
    'System ready. Launching GUHAN S workspace...',
  ];

  useEffect(() => {
    // Set time client-side to prevent hydration mismatch
    setTimeString(new Date().toLocaleTimeString());

    // 1. Log lines typewriter effect
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < logMessages.length) {
        setLogs((prev) => [...prev, logMessages[logIndex]]);
        logIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 280);

    // 2. Count loader percent
    let currentPercent = 0;
    const percentInterval = setInterval(() => {
      currentPercent += Math.floor(Math.random() * 8) + 3;
      if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(percentInterval);
        
        // Hide loader after reaching 100%
        setTimeout(() => {
          if (loaderRef.current) {
            gsap.to(loaderRef.current, {
              y: '-100%',
              opacity: 0,
              duration: 0.8,
              ease: 'power4.inOut',
              onComplete: () => {
                setVisible(false);
                onComplete();
              },
            });
          } else {
            setVisible(false);
            onComplete();
          }
        }, 400);
      }
      setPercent(currentPercent);
    }, 60);

    return () => {
      clearInterval(logInterval);
      clearInterval(percentInterval);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div ref={loaderRef} className="fixed inset-0 z-[100] flex flex-col justify-between p-8 md:p-16 bg-[#030611] select-none font-mono text-xs text-indigo-400">
      {/* Top Header */}
      <div className="flex justify-between items-center border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-[10px] text-gray-500 ml-2 tracking-widest">GUHAN_BOOT_CORE_V1.0</span>
        </div>
        <div className="text-gray-500 text-[10px]">
          {timeString || '00:00:00'}
        </div>
      </div>

      {/* Terminal Boot Log Output */}
      <div className="flex-1 my-12 overflow-y-auto flex flex-col justify-end gap-1.5 max-w-2xl">
        {logs.map((log, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-gray-600 select-none">[{index + 1}]</span>
            <span className="text-gray-300 font-mono tracking-wide leading-relaxed">
              {log}
            </span>
          </div>
        ))}
        {percent < 100 && (
          <div className="flex items-center gap-3">
            <span className="text-gray-600 select-none">[{logs.length + 1}]</span>
            <span className="text-cyan-400 font-mono tracking-wide leading-relaxed caret-blink">
              Running tasks...
            </span>
          </div>
        )}
      </div>

      {/* Bottom Counter */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-white/5 pt-6">
        <div className="w-full md:max-w-md">
          <div className="flex justify-between mb-2 text-gray-500 text-[10px] tracking-wider uppercase">
            <span>Core Build Compilation</span>
            <span>{percent}%</span>
          </div>
          {/* Progress bar */}
          <div className="h-1.5 w-full bg-white/[0.03] rounded-full overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-400 transition-all duration-75"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
        
        <div className="text-right">
          <span className="text-6xl font-bold tracking-tight text-white font-heading font-sans">
            {String(percent).padStart(3, '0')}
          </span>
          <span className="text-gray-600 ml-1 text-lg">%</span>
        </div>
      </div>
    </div>
  );
}
