import React, { useState, useEffect, useRef } from 'react';

// Figma-Style Selection Bounding Box with Corner Grab Handles and Dimension/Name Tag
export function SelectionFrame({ 
  children, 
  label = 'Frame', 
  active = false, 
  alwaysShow = false,
  className = '',
  tagColor = '#0d99ff'
}) {
  const [isHovered, setIsHovered] = useState(false);
  const showFrame = alwaysShow || active || isHovered;

  return (
    <div 
      className={`relative group transition-all duration-200 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showFrame && (
        <>
          {/* Blue Bounding Box Outline */}
          <div 
            className="absolute inset-0 pointer-events-none z-20 border-[1.5px] rounded-sm transition-opacity duration-200"
            style={{ borderColor: tagColor }}
          />

          {/* Top-Left Tag Label */}
          <div 
            className="absolute -top-[20px] left-[-1.5px] z-30 px-2 py-0.5 text-[10px] font-mono font-semibold text-white rounded-t-sm pointer-events-none flex items-center gap-1 shadow-sm"
            style={{ backgroundColor: tagColor }}
          >
            <span>{label}</span>
          </div>

          {/* 4 Corner Grab Handles */}
          <div 
            className="absolute -top-[3.5px] -left-[3.5px] w-[7px] height-[7px] bg-white border z-30 pointer-events-none rounded-[1px]"
            style={{ borderColor: tagColor }}
          />
          <div 
            className="absolute -top-[3.5px] -right-[3.5px] w-[7px] height-[7px] bg-white border z-30 pointer-events-none rounded-[1px]"
            style={{ borderColor: tagColor }}
          />
          <div 
            className="absolute -bottom-[3.5px] -left-[3.5px] w-[7px] height-[7px] bg-white border z-30 pointer-events-none rounded-[1px]"
            style={{ borderColor: tagColor }}
          />
          <div 
            className="absolute -bottom-[3.5px] -right-[3.5px] w-[7px] height-[7px] bg-white border z-30 pointer-events-none rounded-[1px]"
            style={{ borderColor: tagColor }}
          />
        </>
      )}
      {children}
    </div>
  );
}

// Hand-Drawn SVG Curved Arrow with Arrowhead and Colored Callout Tag
export function CalloutArrow({
  text,
  author = '',
  color = '#ff4d00',
  direction = 'down-right', // 'down-right', 'down-left', 'up-right', 'up-left', 'right', 'left'
  className = '',
  badgeClassName = ''
}) {
  return (
    <div className={`relative inline-flex flex-col items-center pointer-events-none z-20 ${className}`}>
      {/* Pill Badge with Text */}
      <div 
        className={`px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg flex items-center gap-1.5 whitespace-nowrap pointer-events-auto transition-transform hover:scale-105 ${badgeClassName}`}
        style={{ backgroundColor: color }}
      >
        {author && <span className="opacity-75 font-mono text-[10px]">{author}:</span>}
        <span>{text}</span>
      </div>

      {/* Curved SVG Arrow */}
      {direction === 'down-right' && (
        <svg width="44" height="34" viewBox="0 0 44 34" fill="none" className="overflow-visible -mt-0.5 translate-x-2">
          <path 
            d="M 6 2 Q 18 18 36 28" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M 28 28 L 38 29 L 35 20" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
        </svg>
      )}

      {direction === 'down-left' && (
        <svg width="44" height="34" viewBox="0 0 44 34" fill="none" className="overflow-visible -mt-0.5 -translate-x-2">
          <path 
            d="M 38 2 Q 26 18 8 28" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M 16 28 L 6 29 L 9 20" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
        </svg>
      )}

      {direction === 'up-right' && (
        <svg width="44" height="34" viewBox="0 0 44 34" fill="none" className="overflow-visible -mb-0.5 order-first translate-x-2">
          <path 
            d="M 6 30 Q 20 16 36 6" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M 28 5 L 38 5 L 36 15" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
        </svg>
      )}

      {direction === 'up-left' && (
        <svg width="44" height="34" viewBox="0 0 44 34" fill="none" className="overflow-visible -mb-0.5 order-first -translate-x-2">
          <path 
            d="M 38 30 Q 24 16 8 6" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M 16 5 L 6 5 L 8 15" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
        </svg>
      )}

      {direction === 'right' && (
        <svg width="50" height="20" viewBox="0 0 50 20" fill="none" className="overflow-visible absolute left-full top-1/2 -translate-y-1/2 ml-1">
          <path 
            d="M 2 10 Q 25 6 44 10" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M 36 5 L 45 10 L 36 15" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
        </svg>
      )}

      {direction === 'left' && (
        <svg width="50" height="20" viewBox="0 0 50 20" fill="none" className="overflow-visible absolute right-full top-1/2 -translate-y-1/2 mr-1">
          <path 
            d="M 48 10 Q 25 6 6 10" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M 14 5 L 5 10 L 14 15" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
        </svg>
      )}
    </div>
  );
}

// Live Collaborative Multiplayer Cursors Drifting Across the Viewport
export function MultiplayerCursors() {
  const [cursors, setCursors] = useState([
    { id: 1, name: 'Sarah (Recruiter)', color: '#ec4899', x: 18, y: 22, targetX: 20, targetY: 26 },
    { id: 2, name: 'Alex (Founding Eng)', color: '#06b6d4', x: 74, y: 16, targetX: 72, targetY: 20 },
    { id: 3, name: 'Priya (Design Lead)', color: '#a855f7', x: 82, y: 48, targetX: 78, targetY: 52 },
    { id: 4, name: 'David (Tech Lead)', color: '#10b981', x: 28, y: 72, targetX: 32, targetY: 68 },
  ]);

  // Gentle physics drifting animation for multiplayer cursors
  useEffect(() => {
    const interval = setInterval(() => {
      setCursors(prev => prev.map(c => {
        const dx = (Math.random() - 0.5) * 6;
        const dy = (Math.random() - 0.5) * 6;
        let newX = Math.max(5, Math.min(92, c.x + dx));
        let newY = Math.max(8, Math.min(92, c.y + dy));
        return { ...c, x: newX, y: newY };
      }));
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {cursors.map(c => (
        <div 
          key={c.id} 
          className="absolute transition-all duration-[2400ms] ease-out flex items-start gap-1"
          style={{ left: `${c.x}%`, top: `${c.y}%` }}
        >
          {/* Figma Cursor Arrow Icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill={c.color} className="drop-shadow-md">
            <path d="M5.65 2.15a1 1 0 0 0-1.65.7v18.3a1 1 0 0 0 1.63.78l5.22-4.35 3.32 7.3a1 1 0 0 0 1.34.5l3.2-1.46a1 1 0 0 0 .5-1.34l-3.3-7.26 6.33-.53a1 1 0 0 0 .75-1.63L6.37 2.37a1 1 0 0 0-.72-.22z"/>
          </svg>
          
          {/* User Name Pill */}
          <span 
            className="px-2 py-0.5 rounded-full text-[11px] font-semibold text-white shadow-lg whitespace-nowrap opacity-90 select-none"
            style={{ backgroundColor: c.color }}
          >
            {c.name}
          </span>
        </div>
      ))}
    </div>
  );
}

// Bottom Canvas Toolbar Dock (Replicating the Video Dock Exactly)
export function BottomCanvasDock({ activeTool, setActiveTool, zoom, setZoom }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-[#0d0f17]/90 border border-white/10 backdrop-blur-xl shadow-2xl">
      {/* Tool Selectors */}
      <div className="flex items-center gap-1 border-r border-white/10 pr-2">
        <button 
          onClick={() => setActiveTool('pointer')}
          title="Select Tool (V)"
          className={`p-1.5 rounded-lg text-xs font-mono transition-colors ${
            activeTool === 'pointer' ? 'bg-[#0d99ff] text-white shadow-sm' : 'text-slate-400 hover:text-white'
          }`}
        >
          <i className="fa-solid fa-arrow-pointer"></i>
        </button>
        <button 
          onClick={() => setActiveTool('hand')}
          title="Hand Tool (H)"
          className={`p-1.5 rounded-lg text-xs font-mono transition-colors ${
            activeTool === 'hand' ? 'bg-[#0d99ff] text-white shadow-sm' : 'text-slate-400 hover:text-white'
          }`}
        >
          <i className="fa-solid fa-hand"></i>
        </button>
      </div>

      {/* Live Multiplayer Status */}
      <div className="flex items-center gap-2 px-2 text-xs font-mono text-slate-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-semibold text-white tracking-wide">85 USERS LIVE</span>
      </div>

      {/* Zoom Control */}
      <div className="flex items-center gap-1 border-l border-white/10 pl-2 text-xs font-mono text-slate-400">
        <button 
          onClick={() => setZoom(prev => Math.max(80, prev - 10))}
          className="w-5 h-5 flex items-center justify-center rounded hover:bg-white/10 hover:text-white"
        >
          -
        </button>
        <span className="px-1 text-slate-200">{zoom}%</span>
        <button 
          onClick={() => setZoom(prev => Math.min(130, prev + 10))}
          className="w-5 h-5 flex items-center justify-center rounded hover:bg-white/10 hover:text-white"
        >
          +
        </button>
      </div>

      {/* Share Button with Toast */}
      <div className="border-l border-white/10 pl-2">
        <button 
          onClick={handleShare}
          className="px-3 py-1 rounded-full bg-[#ff4d00] hover:bg-[#ff5722] text-white text-xs font-semibold tracking-wide shadow-md transition-all active:scale-95 flex items-center gap-1.5"
        >
          <i className="fa-solid fa-share-nodes text-[10px]"></i>
          <span>{copied ? 'COPIED!' : 'SHARE'}</span>
        </button>
      </div>
    </div>
  );
}
