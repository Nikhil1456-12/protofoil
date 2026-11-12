import React, { useState, useEffect } from 'react';

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
            className="absolute -top-[3.5px] -left-[3.5px] w-[7px] h-[7px] bg-white border z-30 pointer-events-none rounded-[1px]"
            style={{ borderColor: tagColor }}
          />
          <div 
            className="absolute -top-[3.5px] -right-[3.5px] w-[7px] h-[7px] bg-white border z-30 pointer-events-none rounded-[1px]"
            style={{ borderColor: tagColor }}
          />
          <div 
            className="absolute -bottom-[3.5px] -left-[3.5px] w-[7px] h-[7px] bg-white border z-30 pointer-events-none rounded-[1px]"
            style={{ borderColor: tagColor }}
          />
          <div 
            className="absolute -bottom-[3.5px] -right-[3.5px] w-[7px] h-[7px] bg-white border z-30 pointer-events-none rounded-[1px]"
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
  color = '#ff4500',
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
        {author && <span className="opacity-80 font-mono text-[10px]">{author}:</span>}
        <span>{text}</span>
      </div>

      {/* Curved SVG Arrow */}
      {direction === 'down-right' && (
        <svg width="48" height="36" viewBox="0 0 48 36" fill="none" className="overflow-visible -mt-0.5 translate-x-2">
          <path 
            d="M 6 2 Q 20 20 40 30" 
            stroke={color} 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            fill="none" 
            className="animate-draw-arrow"
          />
          <path 
            d="M 30 30 L 42 31 L 38 20" 
            stroke={color} 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
        </svg>
      )}

      {direction === 'down-left' && (
        <svg width="48" height="36" viewBox="0 0 48 36" fill="none" className="overflow-visible -mt-0.5 -translate-x-2">
          <path 
            d="M 42 2 Q 28 20 8 30" 
            stroke={color} 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            fill="none" 
            className="animate-draw-arrow"
          />
          <path 
            d="M 18 30 L 6 31 L 10 20" 
            stroke={color} 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
        </svg>
      )}

      {direction === 'up-right' && (
        <svg width="48" height="36" viewBox="0 0 48 36" fill="none" className="overflow-visible -mb-0.5 order-first translate-x-2">
          <path 
            d="M 6 32 Q 22 18 40 6" 
            stroke={color} 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            fill="none" 
            className="animate-draw-arrow"
          />
          <path 
            d="M 30 5 L 42 5 L 39 16" 
            stroke={color} 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
        </svg>
      )}

      {direction === 'up-left' && (
        <svg width="48" height="36" viewBox="0 0 48 36" fill="none" className="overflow-visible -mb-0.5 order-first -translate-x-2">
          <path 
            d="M 42 32 Q 26 18 8 6" 
            stroke={color} 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            fill="none" 
            className="animate-draw-arrow"
          />
          <path 
            d="M 18 5 L 6 5 L 9 16" 
            stroke={color} 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
        </svg>
      )}

      {direction === 'right' && (
        <svg width="54" height="22" viewBox="0 0 54 22" fill="none" className="overflow-visible absolute left-full top-1/2 -translate-y-1/2 ml-1">
          <path 
            d="M 2 11 Q 28 6 48 11" 
            stroke={color} 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            fill="none" 
            className="animate-draw-arrow"
          />
          <path 
            d="M 38 5 L 49 11 L 38 17" 
            stroke={color} 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
        </svg>
      )}

      {direction === 'left' && (
        <svg width="54" height="22" viewBox="0 0 54 22" fill="none" className="overflow-visible absolute right-full top-1/2 -translate-y-1/2 mr-1">
          <path 
            d="M 52 11 Q 26 6 6 11" 
            stroke={color} 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            fill="none" 
            className="animate-draw-arrow"
          />
          <path 
            d="M 16 5 L 5 11 L 16 17" 
            stroke={color} 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
        </svg>
      )}
    </div>
  );
}

// Swarm Rebuild Autonomous Cursors
export function SwarmRebuildCursors({ activeStep, isRebuilding }) {
  // Agent definitions matching the video
  const agents = [
    { id: 1, name: 'Jai (Rebuilder)', color: '#ff4500' },
    { id: 2, name: 'Sarah (Recruiter)', color: '#ec4899' },
    { id: 3, name: 'Alex (Founding Eng)', color: '#06b6d4' },
    { id: 4, name: 'Priya (Design Lead)', color: '#a855f7' },
    { id: 5, name: 'Dev (Systems)', color: '#3b82f6' },
    { id: 6, name: 'David (Tech Lead)', color: '#10b981' }
  ];

  // Coordinated choreography per rebuild step (relative viewport percentages)
  const stepCoordinates = [
    // Step 0: Initial Swarm gathering at top
    [
      { x: 18, y: 15, action: 'Drafting Hero Frame' },
      { x: 48, y: 10, action: 'Layering Portrait' },
      { x: 78, y: 18, action: 'Stamping Metrics' },
      { x: 25, y: 35, action: 'Connecting Bio Arrow' },
      { x: 65, y: 30, action: 'Inspecting Layout' },
      { x: 85, y: 45, action: 'Syncing Mesh' }
    ],
    // Step 1: Typing Hero Title & Badges
    [
      { x: 22, y: 24, action: 'Pasting Title' },
      { x: 45, y: 32, action: 'Centering Cutout' },
      { x: 80, y: 22, action: 'Reviewing 8.74 CGPA' },
      { x: 30, y: 38, action: 'Dropping [Layout]' },
      { x: 60, y: 18, action: 'Adjusting Spacing' },
      { x: 88, y: 35, action: 'Stamping Batch 2027' }
    ],
    // Step 2: Drawing Bio Arrow & Buttons
    [
      { x: 26, y: 42, action: 'Drawing Arrow' },
      { x: 50, y: 28, action: 'Polishing Portrait Glow' },
      { x: 82, y: 36, action: 'Locking Stats' },
      { x: 18, y: 52, action: 'Pasting [VIEW WORK]' },
      { x: 35, y: 52, action: 'Linking [CONTACT]' },
      { x: 70, y: 48, action: 'Ready to Scroll' }
    ],
    // Step 3: Swarming into Section 2 (WORK THAT SHIPS)
    [
      { x: 20, y: 20, action: 'Selecting 01 JARVIS' },
      { x: 68, y: 22, action: 'Selecting 02 PATHSAATHI' },
      { x: 32, y: 40, action: 'Pasting 60FPS HUD Bullets' },
      { x: 75, y: 42, action: 'Pasting SQLite Sync' },
      { x: 28, y: 55, action: 'Drawing Tech Badges' },
      { x: 82, y: 56, action: 'Dropping Preview Buttons' }
    ],
    // Step 4: Stamping Projects 03 & 04
    [
      { x: 22, y: 30, action: 'Selecting 03 DATA ANALYST' },
      { x: 70, y: 32, action: 'Selecting 04 CHURN' },
      { x: 35, y: 48, action: 'Pasting Gemini NL-to-SQL' },
      { x: 78, y: 50, action: 'Pasting 84.2% ROC-AUC' },
      { x: 45, y: 25, action: 'Validating Links' },
      { x: 60, y: 65, action: 'Ready for Systems' }
    ],
    // Step 5: Scrolling to TRACK RECORD
    [
      { x: 25, y: 28, action: 'Stamping Giant 8.74' },
      { x: 38, y: 42, action: 'Drawing Arrow' },
      { x: 70, y: 32, action: 'Pasting Labmentix Timeline' },
      { x: 72, y: 48, action: 'Pasting NullClass' },
      { x: 74, y: 62, action: 'Pasting SkillDzire' },
      { x: 50, y: 15, action: 'Streaming Marquee Ticker' }
    ],
    // Step 6: ARSENAL & QUOTE
    [
      { x: 25, y: 35, action: 'Categorizing Skills' },
      { x: 42, y: 48, action: 'Pinning Sticky Notes' },
      { x: 75, y: 38, action: 'Stamping Signature Quote' },
      { x: 82, y: 52, action: 'Writing Test Proof' },
      { x: 18, y: 65, action: 'Verifying Pytest 100%' },
      { x: 60, y: 20, action: 'Moving to Contact' }
    ],
    // Step 7: Final Section (CONTACT & SHIP IT FOR REAL)
    [
      { x: 22, y: 32, action: 'Dropping Email Card' },
      { x: 65, y: 28, action: 'Dropping LinkedIn Card' },
      { x: 70, y: 45, action: 'Connecting GitHub' },
      { x: 30, y: 50, action: 'Pasting [GET IN TOUCH]' },
      { x: 80, y: 65, action: 'Stamping SHIP IT FOR REAL' },
      { x: 50, y: 80, action: 'Rebuild Complete' }
    ]
  ];

  const currentCoords = stepCoordinates[Math.min(activeStep, stepCoordinates.length - 1)];

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {agents.map((agent, idx) => {
        const coord = currentCoords[idx] || { x: 50, y: 50, action: 'Active' };
        return (
          <div 
            key={agent.id}
            className="absolute transition-all duration-700 ease-out flex flex-col items-start gap-1"
            style={{ 
              left: `${coord.x}%`, 
              top: `${coord.y}%`,
              transform: 'translate(-5px, -5px)'
            }}
          >
            {/* Cursor Header with Arrow & Name */}
            <div className="flex items-center gap-1">
              <svg width="22" height="22" viewBox="0 0 24 24" fill={agent.color} className="drop-shadow-lg">
                <path d="M5.65 2.15a1 1 0 0 0-1.65.7v18.3a1 1 0 0 0 1.63.78l5.22-4.35 3.32 7.3a1 1 0 0 0 1.34.5l3.2-1.46a1 1 0 0 0 .5-1.34l-3.3-7.26 6.33-.53a1 1 0 0 0 .75-1.63L6.37 2.37a1 1 0 0 0-.72-.22z"/>
              </svg>
              <span 
                className="px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white shadow-xl whitespace-nowrap"
                style={{ backgroundColor: agent.color }}
              >
                {agent.name}
              </span>
            </div>

            {/* Live Action Tooltip */}
            {isRebuilding && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-black/85 text-slate-200 border border-white/20 shadow-md ml-5 -mt-0.5">
                {coord.action}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Bottom Canvas Toolbar Dock (Exact Replication of Video Dock)
export function BottomCanvasDock({ 
  isRebuilding, 
  setIsRebuilding, 
  currentStep, 
  totalSteps, 
  onReplay, 
  onTogglePlayPause 
}) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0d0f17]/95 border border-white/15 backdrop-blur-2xl shadow-2xl">
      
      {/* 12 Agents Live Status */}
      <div className="flex items-center gap-2 pr-2 border-r border-white/10 text-xs font-mono">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="font-bold text-white tracking-wider">12 AGENTS LIVE</span>
      </div>

      {/* Rebuild Step Counter */}
      {isRebuilding && (
        <div className="px-2 text-[11px] font-mono text-[#ff4500] font-bold border-r border-white/10">
          BUILDING STEP {currentStep + 1}/{totalSteps}
        </div>
      )}

      {/* Play / Pause Toggle */}
      <button
        onClick={onTogglePlayPause}
        className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 hover:bg-white/20 text-slate-200 transition-all flex items-center gap-1.5"
        title={isRebuilding ? "Pause Automated Swarm" : "Resume Swarm Rebuild"}
      >
        <i className={`fa-solid ${isRebuilding ? 'fa-pause' : 'fa-play'} text-[10px]`}></i>
        <span>{isRebuilding ? 'PAUSE' : 'RESUME'}</span>
      </button>

      {/* Replay Button (Restarts full auto-scroll and build) */}
      <button
        onClick={onReplay}
        className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 hover:bg-white/20 text-slate-200 transition-all flex items-center gap-1.5"
        title="Replay Full Swarm Rebuild"
      >
        <i className="fa-solid fa-rotate-right text-[10px]"></i>
        <span>REPLAY REBUILD</span>
      </button>

      {/* Share Button */}
      <div className="border-l border-white/10 pl-2">
        <button 
          onClick={handleShare}
          className="px-3.5 py-1 rounded-full bg-[#ff4500] hover:bg-[#ff5722] text-white text-xs font-bold tracking-wide shadow-md transition-all active:scale-95 flex items-center gap-1.5"
        >
          <i className="fa-solid fa-share-nodes text-[10px]"></i>
          <span>{copied ? 'COPIED!' : 'SHARE'}</span>
        </button>
      </div>

    </div>
  );
}
