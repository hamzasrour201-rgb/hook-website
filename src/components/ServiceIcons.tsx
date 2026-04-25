// Premium 3D SVG service illustrations — 300×300 viewBox
// Each uses gradients, drop-shadow filters, and layered shapes for depth

interface IconProps { className?: string }

export function MetaAdsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="m-bg" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#3D1F7A"/><stop offset="100%" stopColor="#0D0520"/>
        </radialGradient>
        <linearGradient id="m-phone" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/><stop offset="100%" stopColor="#3B1D6B"/>
        </linearGradient>
        <linearGradient id="m-side" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E0A40"/><stop offset="100%" stopColor="#2D1260"/>
        </linearGradient>
        <linearGradient id="m-screen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#13082E"/><stop offset="100%" stopColor="#1E0F45"/>
        </linearGradient>
        <filter id="m-drop" x="-30%" y="-10%" width="160%" height="150%">
          <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#000" floodOpacity="0.7"/>
        </filter>
        <filter id="m-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="300" height="300" rx="28" fill="url(#m-bg)"/>
      {/* Ground shadow */}
      <ellipse cx="154" cy="270" rx="64" ry="10" fill="#000" opacity="0.55"/>
      {/* Phone left 3D side */}
      <rect x="82" y="55" width="14" height="180" rx="7" fill="url(#m-side)"/>
      {/* Phone body */}
      <rect x="92" y="48" width="124" height="192" rx="18" fill="url(#m-phone)" filter="url(#m-drop)"/>
      {/* Screen */}
      <rect x="104" y="68" width="100" height="152" rx="8" fill="url(#m-screen)"/>
      {/* Notch */}
      <rect x="136" y="65" width="32" height="8" rx="4" fill="#0D0520"/>
      {/* Feed card 1 */}
      <rect x="110" y="76" width="88" height="42" rx="5" fill="#2A1558"/>
      <circle cx="122" cy="90" r="8" fill="#7C3AED"/>
      <rect x="136" y="84" width="52" height="5" rx="2.5" fill="#A78BFA"/>
      <rect x="136" y="93" width="38" height="4" rx="2" fill="#6D4DB0" opacity="0.7"/>
      <rect x="136" y="101" width="44" height="4" rx="2" fill="#4C3480" opacity="0.5"/>
      {/* Feed card 2 */}
      <rect x="110" y="124" width="88" height="42" rx="5" fill="#2A1558"/>
      <rect x="114" y="128" width="80" height="34" rx="3" fill="#3D1F7A"/>
      <rect x="118" y="134" width="44" height="6" rx="3" fill="#C4B5FD"/>
      <rect x="118" y="144" width="56" height="4" rx="2" fill="#8B6FD0" opacity="0.7"/>
      {/* Feed card 3 */}
      <rect x="110" y="172" width="88" height="40" rx="5" fill="#2A1558"/>
      <circle cx="122" cy="188" r="8" fill="#5B21B6"/>
      <circle cx="134" cy="188" r="8" fill="#7C3AED" opacity="0.7"/>
      <rect x="148" y="183" width="40" height="5" rx="2.5" fill="#A78BFA"/>
      <rect x="148" y="192" width="28" height="4" rx="2" fill="#6D4DB0" opacity="0.6"/>
      {/* Phone edge highlight */}
      <rect x="92" y="48" width="5" height="192" rx="2.5" fill="rgba(255,255,255,0.18)"/>
      <rect x="92" y="48" width="124" height="5" rx="2.5" fill="rgba(255,255,255,0.22)"/>
      {/* Floating heart 1 */}
      <g filter="url(#m-glow)" transform="translate(226,88)">
        <path d="M18 34C18 34 2 22 2 12C2 6 7 1 12 1C15 1 18 4 18 4C18 4 21 1 24 1C29 1 34 6 34 12C34 22 18 34 18 34Z" fill="#F472B6"/>
        <path d="M9 8C8 10 7.5 13 8 15" stroke="rgba(255,255,255,0.45)" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </g>
      {/* Floating heart 2 small */}
      <g filter="url(#m-glow)" transform="translate(248,60) scale(0.55)">
        <path d="M18 34C18 34 2 22 2 12C2 6 7 1 12 1C15 1 18 4 18 4C18 4 21 1 24 1C29 1 34 6 34 12C34 22 18 34 18 34Z" fill="#FB7185"/>
      </g>
      {/* Like badge */}
      <circle cx="228" cy="170" r="18" fill="#7C3AED" filter="url(#m-drop)"/>
      <path d="M220 172 C220 168 224 164 228 164C232 164 236 168 236 172C236 176 228 182 228 182C228 182 220 176 220 172Z" fill="#F9A8D4"/>
      {/* Notification badge */}
      <circle cx="216" cy="56" r="10" fill="#EC4899" filter="url(#m-glow)"/>
      <text x="216" y="60" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="system-ui">3</text>
    </svg>
  )
}

export function GoogleAdsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F2044"/><stop offset="100%" stopColor="#061228"/>
        </linearGradient>
        <linearGradient id="g-bar" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F8F9FA"/><stop offset="100%" stopColor="#DEE2F0"/>
        </linearGradient>
        <linearGradient id="g-bar-side" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B0B8CC"/><stop offset="100%" stopColor="#C8D0E0"/>
        </linearGradient>
        <linearGradient id="g-blue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA"/><stop offset="100%" stopColor="#2563EB"/>
        </linearGradient>
        <linearGradient id="g-green" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ADE80"/><stop offset="100%" stopColor="#16A34A"/>
        </linearGradient>
        <linearGradient id="g-yellow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE047"/><stop offset="100%" stopColor="#CA8A04"/>
        </linearGradient>
        <linearGradient id="g-red" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F87171"/><stop offset="100%" stopColor="#DC2626"/>
        </linearGradient>
        <filter id="g-drop" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000" floodOpacity="0.65"/>
        </filter>
        <filter id="g-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="300" height="300" rx="28" fill="url(#g-bg)"/>
      {/* Shadow under bar */}
      <ellipse cx="152" cy="272" rx="80" ry="9" fill="#000" opacity="0.5"/>
      {/* Search bar 3D — bottom side */}
      <rect x="34" y="114" width="232" height="68" rx="10" fill="url(#g-bar-side)"/>
      {/* Search bar face */}
      <rect x="34" y="104" width="232" height="68" rx="10" fill="url(#g-bar)" filter="url(#g-drop)"/>
      {/* Bar highlight */}
      <rect x="34" y="104" width="232" height="6" rx="5" fill="rgba(255,255,255,0.7)"/>
      {/* Search icon circle */}
      <circle cx="72" cy="138" r="16" fill="none" stroke="#4B5563" strokeWidth="3.5"/>
      <line x1="83" y1="150" x2="94" y2="161" stroke="#4B5563" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Search text lines */}
      <rect x="100" y="130" width="100" height="8" rx="4" fill="#CBD5E1"/>
      <rect x="100" y="143" width="70" height="7" rx="3.5" fill="#E2E8F0"/>
      {/* Ad blocks below — Google-colored */}
      {/* Blue ad block */}
      <rect x="34" y="186" width="64" height="72" rx="8" fill="url(#g-blue)" filter="url(#g-drop)"/>
      <rect x="34" y="186" width="64" height="6" rx="4" fill="rgba(255,255,255,0.3)"/>
      <text x="66" y="215" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="system-ui">ADS</text>
      <rect x="42" y="222" width="48" height="5" rx="2.5" fill="rgba(255,255,255,0.6)"/>
      <rect x="46" y="231" width="36" height="4" rx="2" fill="rgba(255,255,255,0.4)"/>
      {/* Green ad block */}
      <rect x="110" y="186" width="64" height="72" rx="8" fill="url(#g-green)" filter="url(#g-drop)"/>
      <rect x="110" y="186" width="64" height="6" rx="4" fill="rgba(255,255,255,0.3)"/>
      <text x="142" y="215" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="system-ui">SEA</text>
      <rect x="118" y="222" width="48" height="5" rx="2.5" fill="rgba(255,255,255,0.6)"/>
      <rect x="122" y="231" width="36" height="4" rx="2" fill="rgba(255,255,255,0.4)"/>
      {/* Red ad block */}
      <rect x="186" y="186" width="80" height="72" rx="8" fill="url(#g-red)" filter="url(#g-drop)"/>
      <rect x="186" y="186" width="80" height="6" rx="4" fill="rgba(255,255,255,0.3)"/>
      <text x="226" y="215" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="system-ui">ROI</text>
      <rect x="194" y="222" width="64" height="5" rx="2.5" fill="rgba(255,255,255,0.6)"/>
      <rect x="200" y="231" width="52" height="4" rx="2" fill="rgba(255,255,255,0.4)"/>
      {/* Cursor arrow */}
      <g filter="url(#g-glow)" transform="translate(232,82)">
        <polygon points="0,0 0,36 10,26 18,44 24,41 16,23 30,23" fill="white"/>
        <polygon points="0,0 0,36 10,26 18,44 22,42 14,24 28,24" fill="rgba(0,0,0,0.2)"/>
      </g>
      {/* Yellow star/ad badge */}
      <circle cx="46" cy="50" r="22" fill="url(#g-yellow)" filter="url(#g-glow)"/>
      <text x="46" y="55" textAnchor="middle" fill="#78350F" fontSize="11" fontWeight="bold" fontFamily="system-ui">AD</text>
    </svg>
  )
}

export function SnapchatAdsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sn-bg" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#1E1B4B"/><stop offset="100%" stopColor="#0A0820"/>
        </radialGradient>
        <radialGradient id="sn-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE047" stopOpacity="0.4"/>
          <stop offset="70%" stopColor="#FBBF24" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="sn-ghost" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB"/><stop offset="100%" stopColor="#FEF3C7"/>
        </linearGradient>
        <linearGradient id="sn-ghost-side" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D97706"/><stop offset="100%" stopColor="#F59E0B"/>
        </linearGradient>
        <filter id="sn-drop" x="-30%" y="-10%" width="160%" height="160%">
          <feDropShadow dx="4" dy="12" stdDeviation="10" floodColor="#000" floodOpacity="0.7"/>
        </filter>
        <filter id="sn-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="12" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="sn-glow-sm" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="300" height="300" rx="28" fill="url(#sn-bg)"/>
      {/* Aura glow behind ghost */}
      <ellipse cx="152" cy="155" rx="100" ry="90" fill="url(#sn-aura)" filter="url(#sn-glow)"/>
      {/* Ghost shadow */}
      <ellipse cx="156" cy="272" rx="52" ry="9" fill="#000" opacity="0.5"/>
      {/* Ghost 3D side */}
      <g transform="translate(8,6)" opacity="0.5">
        <circle cx="152" cy="120" r="62" fill="url(#sn-ghost-side)"/>
        <rect x="90" y="120" width="124" height="80" fill="url(#sn-ghost-side)"/>
        <path d="M90 200 Q90 230 105 240 Q120 245 122 232 Q124 218 136 218 Q148 218 150 232 Q152 245 164 245 Q178 248 180 232 Q182 218 190 218 Q200 215 208 210 Q214 200 214 200Z" fill="url(#sn-ghost-side)"/>
      </g>
      {/* Ghost main body */}
      <g filter="url(#sn-drop)">
        <circle cx="150" cy="118" r="62" fill="url(#sn-ghost)"/>
        <rect x="88" y="118" width="124" height="80" fill="url(#sn-ghost)"/>
        <path d="M88 198 Q88 228 103 238 Q118 244 120 230 Q122 216 134 216 Q146 216 148 230 Q150 244 162 244 Q176 247 178 230 Q180 216 188 216 Q198 213 206 208 Q212 198 212 198Z" fill="url(#sn-ghost)"/>
      </g>
      {/* Ghost highlight top-left */}
      <path d="M118 80 Q130 72 144 70 Q138 64 126 68 Q116 72 112 82Z" fill="rgba(255,255,255,0.55)"/>
      {/* Eyes */}
      <ellipse cx="128" cy="124" rx="12" ry="13" fill="#1E1B4B"/>
      <ellipse cx="172" cy="124" rx="12" ry="13" fill="#1E1B4B"/>
      <circle cx="124" cy="120" r="4" fill="white"/>
      <circle cx="168" cy="120" r="4" fill="white"/>
      {/* Smile */}
      <path d="M128 148 Q150 162 172 148" stroke="#2D2660" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      {/* Sparkle stars */}
      <g filter="url(#sn-glow-sm)" fill="#FDE047">
        <polygon points="56,60 59,70 69,70 61,76 64,86 56,80 48,86 51,76 43,70 53,70" transform="scale(0.7) translate(28,24)"/>
        <polygon points="56,60 59,70 69,70 61,76 64,86 56,80 48,86 51,76 43,70 53,70" transform="scale(0.5) translate(408,240)"/>
        <polygon points="56,60 59,70 69,70 61,76 64,86 56,80 48,86 51,76 43,70 53,70" transform="scale(0.45) translate(110,440)"/>
      </g>
      {/* Yellow ring accent */}
      <circle cx="150" cy="150" r="110" fill="none" stroke="#FDE047" strokeWidth="2" opacity="0.2" strokeDasharray="8 6"/>
    </svg>
  )
}

export function TikTokAdsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tt-bg" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#0F0F2A"/><stop offset="100%" stopColor="#050510"/>
        </radialGradient>
        <linearGradient id="tt-note" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0ABFC"/><stop offset="100%" stopColor="#C026D3"/>
        </linearGradient>
        <linearGradient id="tt-note-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#67E8F9"/><stop offset="100%" stopColor="#0891B2"/>
        </linearGradient>
        <linearGradient id="tt-note-white" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF"/><stop offset="100%" stopColor="#E2E8F0"/>
        </linearGradient>
        <filter id="tt-drop" x="-30%" y="-20%" width="160%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000" floodOpacity="0.8"/>
        </filter>
        <filter id="tt-glow-pink" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="8" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="tt-glow-cyan" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="300" height="300" rx="28" fill="url(#tt-bg)"/>
      {/* Glow halos */}
      <circle cx="148" cy="150" r="80" fill="#C026D3" opacity="0.12" filter="url(#tt-glow-pink)"/>
      <circle cx="148" cy="150" r="70" fill="#0891B2" opacity="0.1" filter="url(#tt-glow-cyan)"/>
      {/* Shadow */}
      <ellipse cx="151" cy="272" rx="60" ry="9" fill="#000" opacity="0.6"/>
      {/* Note stem — cyan shadow layer (offset) */}
      <g transform="translate(6,6)" opacity="0.7" filter="url(#tt-glow-cyan)">
        <rect x="112" y="64" width="34" height="120" rx="17" fill="url(#tt-note-cyan)"/>
        <rect x="146" y="64" width="56" height="16" rx="8" fill="url(#tt-note-cyan)"/>
        <rect x="190" y="64" width="16" height="52" rx="8" fill="url(#tt-note-cyan)"/>
        <ellipse cx="118" cy="200" rx="36" ry="26" fill="url(#tt-note-cyan)"/>
      </g>
      {/* Note stem — pink shadow layer (offset left) */}
      <g transform="translate(-5,5)" opacity="0.7" filter="url(#tt-glow-pink)">
        <rect x="112" y="64" width="34" height="120" rx="17" fill="url(#tt-note)"/>
        <rect x="146" y="64" width="56" height="16" rx="8" fill="url(#tt-note)"/>
        <rect x="190" y="64" width="16" height="52" rx="8" fill="url(#tt-note)"/>
        <ellipse cx="118" cy="200" rx="36" ry="26" fill="url(#tt-note)"/>
      </g>
      {/* Note main — white on top */}
      <g filter="url(#tt-drop)">
        <rect x="112" y="64" width="34" height="120" rx="17" fill="url(#tt-note-white)"/>
        <rect x="146" y="64" width="56" height="16" rx="8" fill="url(#tt-note-white)"/>
        <rect x="190" y="64" width="16" height="52" rx="8" fill="url(#tt-note-white)"/>
        <ellipse cx="118" cy="200" rx="36" ry="26" fill="url(#tt-note-white)"/>
        <ellipse cx="196" cy="132" rx="30" ry="22" fill="url(#tt-note-white)"/>
      </g>
      {/* Note highlights */}
      <rect x="114" y="66" width="8" height="80" rx="4" fill="rgba(255,255,255,0.5)"/>
      <ellipse cx="111" cy="196" rx="10" ry="7" fill="rgba(255,255,255,0.4)"/>
      {/* Floating music notes small */}
      <g filter="url(#tt-glow-pink)" fill="#F0ABFC" opacity="0.85">
        <text x="54" y="110" fontSize="24" fontFamily="system-ui">♪</text>
        <text x="228" y="90" fontSize="18" fontFamily="system-ui">♫</text>
      </g>
      <g filter="url(#tt-glow-cyan)" fill="#67E8F9" opacity="0.85">
        <text x="248" y="180" fontSize="20" fontFamily="system-ui">♪</text>
        <text x="36" y="190" fontSize="16" fontFamily="system-ui">♫</text>
      </g>
      {/* Scan lines (TikTok aesthetic) */}
      <rect x="0" y="0" width="300" height="300" rx="28" fill="none" stroke="#F0ABFC" strokeWidth="2" opacity="0.25"/>
    </svg>
  )
}

export function AIAutomationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ai-bg" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#0D2B3E"/><stop offset="100%" stopColor="#020D14"/>
        </radialGradient>
        <linearGradient id="ai-brain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399"/><stop offset="100%" stopColor="#059669"/>
        </linearGradient>
        <linearGradient id="ai-brain-hi" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6EE7B7"/><stop offset="100%" stopColor="#34D399"/>
        </linearGradient>
        <linearGradient id="ai-cpu" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22D3EE"/><stop offset="100%" stopColor="#0E7490"/>
        </linearGradient>
        <filter id="ai-drop" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#000" floodOpacity="0.7"/>
        </filter>
        <filter id="ai-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="7" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="ai-glow-sm" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="300" height="300" rx="28" fill="url(#ai-bg)"/>
      {/* Ambient glow */}
      <circle cx="150" cy="148" r="90" fill="#059669" opacity="0.08" filter="url(#ai-glow)"/>
      {/* Shadow */}
      <ellipse cx="152" cy="272" rx="68" ry="10" fill="#000" opacity="0.6"/>
      {/* Brain silhouette — 3D depth right side */}
      <g transform="translate(5,7)" opacity="0.45" filter="url(#ai-drop)">
        <path d="M150 58 C122 52 98 62 88 82 C74 104 76 124 86 138 C80 148 80 160 86 172 C92 186 104 196 118 200 C122 212 130 222 142 226 L158 226 C170 222 178 212 182 200 C196 196 208 186 214 172 C220 160 220 148 214 138 C224 124 226 104 212 82 C202 62 178 52 150 58Z" fill="url(#ai-brain)"/>
      </g>
      {/* Brain main shape */}
      <path d="M150 54 C122 48 96 58 86 78 C72 100 74 122 84 136 C78 146 78 158 84 170 C90 184 102 194 116 198 C120 210 128 220 140 224 L160 224 C172 220 180 210 184 198 C198 194 210 184 216 170 C222 158 222 146 216 136 C226 122 228 100 214 78 C204 58 178 48 150 54Z" fill="url(#ai-brain)" filter="url(#ai-drop)"/>
      {/* Brain highlight top-left */}
      <path d="M120 64 C110 70 100 80 96 92" stroke="rgba(110,231,183,0.7)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M102 108 C98 116 98 126 102 134" stroke="rgba(110,231,183,0.5)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Brain fold lines */}
      <path d="M150 70 C140 80 136 94 140 108 C144 122 136 132 130 140" stroke="rgba(0,0,0,0.3)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M160 72 C170 82 172 96 168 110 C164 124 170 136 178 144" stroke="rgba(0,0,0,0.25)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M122 158 C130 166 140 170 150 170 C160 170 170 166 178 158" stroke="rgba(0,0,0,0.25)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Neural nodes — glowing dots */}
      <g filter="url(#ai-glow-sm)">
        <circle cx="150" cy="88" r="6" fill="#67E8F9"/>
        <circle cx="120" cy="110" r="5" fill="#22D3EE"/>
        <circle cx="182" cy="106" r="5" fill="#22D3EE"/>
        <circle cx="110" cy="148" r="5" fill="#67E8F9"/>
        <circle cx="192" cy="152" r="5" fill="#67E8F9"/>
        <circle cx="130" cy="188" r="5" fill="#34D399"/>
        <circle cx="172" cy="188" r="5" fill="#34D399"/>
        <circle cx="150" cy="160" r="7" fill="#A7F3D0"/>
      </g>
      {/* Neural connection lines */}
      <g stroke="#22D3EE" strokeWidth="1.5" opacity="0.55" strokeLinecap="round">
        <line x1="150" y1="88" x2="120" y2="110"/>
        <line x1="150" y1="88" x2="182" y2="106"/>
        <line x1="120" y1="110" x2="110" y2="148"/>
        <line x1="182" y1="106" x2="192" y2="152"/>
        <line x1="110" y1="148" x2="130" y2="188"/>
        <line x1="192" y1="152" x2="172" y2="188"/>
        <line x1="150" y1="160" x2="110" y2="148"/>
        <line x1="150" y1="160" x2="192" y2="152"/>
        <line x1="150" y1="160" x2="130" y2="188"/>
        <line x1="150" y1="160" x2="172" y2="188"/>
      </g>
      {/* CPU pin lines */}
      <g fill="url(#ai-cpu)" filter="url(#ai-glow-sm)">
        <rect x="52" y="120" width="34" height="7" rx="3.5"/>
        <rect x="52" y="136" width="34" height="7" rx="3.5"/>
        <rect x="52" y="152" width="34" height="7" rx="3.5"/>
        <rect x="214" y="120" width="34" height="7" rx="3.5"/>
        <rect x="214" y="136" width="34" height="7" rx="3.5"/>
        <rect x="214" y="152" width="34" height="7" rx="3.5"/>
        <rect x="120" y="238" width="7" height="30" rx="3.5"/>
        <rect x="136" y="238" width="7" height="30" rx="3.5"/>
        <rect x="157" y="238" width="7" height="30" rx="3.5"/>
        <rect x="173" y="238" width="7" height="30" rx="3.5"/>
      </g>
    </svg>
  )
}

export function WebDesignIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wb-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1B4B"/><stop offset="100%" stopColor="#0C0A2E"/>
        </linearGradient>
        <linearGradient id="wb-browser" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4338CA"/><stop offset="100%" stopColor="#1E1B4B"/>
        </linearGradient>
        <linearGradient id="wb-browser-face" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EEF2FF"/><stop offset="100%" stopColor="#C7D2FE"/>
        </linearGradient>
        <linearGradient id="wb-chrome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1"/><stop offset="100%" stopColor="#3730A3"/>
        </linearGradient>
        <linearGradient id="wb-hero-block" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818CF8"/><stop offset="100%" stopColor="#4F46E5"/>
        </linearGradient>
        <linearGradient id="wb-card1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F472B6"/><stop offset="100%" stopColor="#BE185D"/>
        </linearGradient>
        <linearGradient id="wb-card2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399"/><stop offset="100%" stopColor="#065F46"/>
        </linearGradient>
        <filter id="wb-drop" x="-20%" y="-10%" width="150%" height="160%">
          <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#000" floodOpacity="0.75"/>
        </filter>
        <filter id="wb-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="300" height="300" rx="28" fill="url(#wb-bg)"/>
      {/* Floating glow */}
      <ellipse cx="150" cy="160" rx="100" ry="70" fill="#4338CA" opacity="0.2" filter="url(#wb-glow)"/>
      {/* Shadow on desk */}
      <ellipse cx="154" cy="272" rx="88" ry="10" fill="#000" opacity="0.65"/>
      {/* Browser 3D bottom face */}
      <rect x="26" y="86" width="248" height="174" rx="10" fill="url(#wb-browser)"/>
      {/* Browser main face */}
      <rect x="26" y="72" width="248" height="174" rx="10" fill="url(#wb-browser-face)" filter="url(#wb-drop)"/>
      {/* Chrome bar */}
      <rect x="26" y="72" width="248" height="36" rx="10" fill="url(#wb-chrome)"/>
      <rect x="26" y="96" width="248" height="12" fill="url(#wb-chrome)"/>
      {/* Traffic lights */}
      <circle cx="50" cy="90" r="6" fill="#F87171"/>
      <circle cx="68" cy="90" r="6" fill="#FDE047"/>
      <circle cx="86" cy="90" r="6" fill="#4ADE80"/>
      {/* URL bar */}
      <rect x="102" y="83" width="140" height="14" rx="7" fill="rgba(255,255,255,0.15)"/>
      <rect x="108" y="87" width="80" height="6" rx="3" fill="rgba(255,255,255,0.4)"/>
      {/* Content area */}
      <rect x="34" y="116" width="232" height="122" rx="4" fill="white"/>
      {/* Hero block */}
      <rect x="34" y="116" width="232" height="52" fill="url(#wb-hero-block)"/>
      <rect x="42" y="124" width="80" height="8" rx="4" fill="rgba(255,255,255,0.8)"/>
      <rect x="42" y="136" width="56" height="6" rx="3" fill="rgba(255,255,255,0.5)"/>
      <rect x="42" y="147" width="40" height="12" rx="4" fill="#F472B6"/>
      {/* Nav dots in hero */}
      <circle cx="208" cy="136" r="5" fill="rgba(255,255,255,0.5)"/>
      <circle cx="222" cy="136" r="5" fill="rgba(255,255,255,0.9)"/>
      <circle cx="236" cy="136" r="5" fill="rgba(255,255,255,0.5)"/>
      {/* Content cards row */}
      <rect x="40" y="176" width="68" height="54" rx="6" fill="url(#wb-card1)"/>
      <rect x="44" y="182" width="48" height="6" rx="3" fill="rgba(255,255,255,0.7)"/>
      <rect x="44" y="192" width="36" height="4" rx="2" fill="rgba(255,255,255,0.5)"/>
      <rect x="44" y="200" width="44" height="4" rx="2" fill="rgba(255,255,255,0.4)"/>
      <rect x="44" y="212" width="28" height="10" rx="3" fill="rgba(255,255,255,0.6)"/>
      <rect x="116" y="176" width="68" height="54" rx="6" fill="url(#wb-card2)"/>
      <rect x="120" y="182" width="48" height="6" rx="3" fill="rgba(255,255,255,0.7)"/>
      <rect x="120" y="192" width="36" height="4" rx="2" fill="rgba(255,255,255,0.5)"/>
      <rect x="120" y="200" width="44" height="4" rx="2" fill="rgba(255,255,255,0.4)"/>
      <rect x="120" y="212" width="28" height="10" rx="3" fill="rgba(255,255,255,0.6)"/>
      <rect x="192" y="176" width="68" height="54" rx="6" fill="#F59E0B"/>
      <rect x="196" y="182" width="48" height="6" rx="3" fill="rgba(255,255,255,0.7)"/>
      <rect x="196" y="192" width="36" height="4" rx="2" fill="rgba(255,255,255,0.5)"/>
      <rect x="196" y="200" width="44" height="4" rx="2" fill="rgba(255,255,255,0.4)"/>
      <rect x="196" y="212" width="28" height="10" rx="3" fill="rgba(255,255,255,0.6)"/>
      {/* Browser edge highlight */}
      <rect x="26" y="72" width="7" height="174" rx="3.5" fill="rgba(255,255,255,0.2)"/>
      <rect x="26" y="72" width="248" height="7" rx="3.5" fill="rgba(255,255,255,0.25)"/>
    </svg>
  )
}

export function SEOIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="seo-bg" cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#1C1917"/><stop offset="100%" stopColor="#0A0806"/>
        </radialGradient>
        <linearGradient id="seo-lens" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#FDE68A"/><stop offset="40%" stopColor="#F59E0B"/><stop offset="100%" stopColor="#92400E"/>
        </linearGradient>
        <linearGradient id="seo-lens-face" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="rgba(253,230,138,0.2)"/><stop offset="100%" stopColor="rgba(245,158,11,0.1)"/>
        </linearGradient>
        <linearGradient id="seo-handle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#78350F"/><stop offset="100%" stopColor="#451A03"/>
        </linearGradient>
        <linearGradient id="seo-bar1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#34D399"/><stop offset="100%" stopColor="#065F46"/>
        </linearGradient>
        <linearGradient id="seo-bar2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA"/><stop offset="100%" stopColor="#1D4ED8"/>
        </linearGradient>
        <linearGradient id="seo-bar3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F472B6"/><stop offset="100%" stopColor="#9D174D"/>
        </linearGradient>
        <linearGradient id="seo-bar4" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE047"/><stop offset="100%" stopColor="#92400E"/>
        </linearGradient>
        <filter id="seo-drop" x="-20%" y="-20%" width="150%" height="160%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#000" floodOpacity="0.7"/>
        </filter>
        <filter id="seo-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="8" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="300" height="300" rx="28" fill="url(#seo-bg)"/>
      {/* Floor grid lines */}
      <line x1="0" y1="242" x2="300" y2="242" stroke="#FFFFFF" strokeWidth="1" opacity="0.08"/>
      <line x1="0" y1="260" x2="300" y2="260" stroke="#FFFFFF" strokeWidth="1" opacity="0.05"/>
      {/* Shadow */}
      <ellipse cx="154" cy="272" rx="70" ry="9" fill="#000" opacity="0.6"/>
      {/* Bar chart — back bars first */}
      <rect x="36" y="168" width="40" height="74" rx="5" fill="url(#seo-bar1)" filter="url(#seo-drop)"/>
      <rect x="36" y="168" width="40" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>
      <rect x="86" y="138" width="40" height="104" rx="5" fill="url(#seo-bar2)" filter="url(#seo-drop)"/>
      <rect x="86" y="138" width="40" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>
      <rect x="136" y="108" width="40" height="134" rx="5" fill="url(#seo-bar3)" filter="url(#seo-drop)"/>
      <rect x="136" y="108" width="40" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>
      <rect x="186" y="78" width="40" height="164" rx="5" fill="url(#seo-bar4)" filter="url(#seo-drop)"/>
      <rect x="186" y="78" width="40" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>
      {/* Magnifying glass handle — 3D depth */}
      <rect x="196" y="208" width="24" height="68" rx="12" fill="#451A03" transform="rotate(38 196 208)"/>
      {/* Magnifying glass handle main */}
      <rect x="192" y="204" width="24" height="68" rx="12" fill="url(#seo-handle)" filter="url(#seo-drop)" transform="rotate(38 192 204)"/>
      {/* Lens ring — 3D side */}
      <circle cx="128" cy="128" r="72" fill="#78350F"/>
      <circle cx="126" cy="126" r="72" fill="#92400E"/>
      {/* Lens ring — face */}
      <circle cx="124" cy="124" r="72" fill="url(#seo-lens)" filter="url(#seo-drop)"/>
      {/* Lens glass */}
      <circle cx="124" cy="124" r="58" fill="url(#seo-lens-face)"/>
      <circle cx="124" cy="124" r="58" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
      {/* Lens reflection arc */}
      <path d="M96 96 Q110 80 132 82" stroke="rgba(255,255,255,0.55)" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M86 112 Q84 126 88 138" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Inside lens — ranking result preview */}
      <rect x="82" y="104" width="84" height="10" rx="5" fill="rgba(255,255,255,0.6)"/>
      <rect x="82" y="118" width="68" height="8" rx="4" fill="rgba(255,255,255,0.35)"/>
      <rect x="82" y="130" width="76" height="8" rx="4" fill="rgba(255,255,255,0.35)"/>
      <rect x="82" y="142" width="52" height="8" rx="4" fill="rgba(255,255,255,0.25)"/>
      {/* Arrow trend up inside lens */}
      <path d="M134 148 L158 116 L162 128 L172 110 L160 110 L166 98 L148 106" fill="#34D399" opacity="0.7"/>
    </svg>
  )
}

export function WhatsAppBotIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="wa-bg" cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#064E3B"/><stop offset="100%" stopColor="#022C22"/>
        </radialGradient>
        <linearGradient id="wa-bubble1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399"/><stop offset="100%" stopColor="#059669"/>
        </linearGradient>
        <linearGradient id="wa-bubble2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6EE7B7"/><stop offset="100%" stopColor="#10B981"/>
        </linearGradient>
        <linearGradient id="wa-bubble3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A7F3D0"/><stop offset="100%" stopColor="#34D399"/>
        </linearGradient>
        <linearGradient id="wa-bolt" x1="0%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FDE047"/><stop offset="100%" stopColor="#CA8A04"/>
        </linearGradient>
        <filter id="wa-drop" x="-20%" y="-20%" width="150%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000" floodOpacity="0.65"/>
        </filter>
        <filter id="wa-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="8" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="wa-glow-bolt" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="6" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="300" height="300" rx="28" fill="url(#wa-bg)"/>
      {/* Ambient glow */}
      <circle cx="150" cy="155" r="90" fill="#059669" opacity="0.12" filter="url(#wa-glow)"/>
      {/* Shadow */}
      <ellipse cx="153" cy="272" rx="72" ry="9" fill="#000" opacity="0.55"/>
      {/* Bubble 3 — back */}
      <g filter="url(#wa-drop)">
        <rect x="84" y="162" width="156" height="68" rx="18" fill="url(#wa-bubble3)"/>
        <polygon points="102,230 88,258 124,230" fill="url(#wa-bubble3)"/>
        <rect x="90" y="178" width="100" height="8" rx="4" fill="rgba(255,255,255,0.6)"/>
        <rect x="90" y="190" width="72" height="7" rx="3.5" fill="rgba(255,255,255,0.4)"/>
        <rect x="90" y="201" width="120" height="7" rx="3.5" fill="rgba(255,255,255,0.35)"/>
      </g>
      {/* Bubble 2 — middle */}
      <g filter="url(#wa-drop)">
        <rect x="60" y="104" width="168" height="68" rx="18" fill="url(#wa-bubble2)"/>
        <polygon points="218,172 236,198 200,172" fill="url(#wa-bubble2)"/>
        <rect x="70" y="118" width="108" height="8" rx="4" fill="rgba(255,255,255,0.65)"/>
        <rect x="70" y="130" width="80" height="7" rx="3.5" fill="rgba(255,255,255,0.45)"/>
        <rect x="70" y="141" width="130" height="7" rx="3.5" fill="rgba(255,255,255,0.4)"/>
      </g>
      {/* Bubble 1 — front / top */}
      <g filter="url(#wa-drop)">
        <rect x="40" y="46" width="188" height="72" rx="18" fill="url(#wa-bubble1)"/>
        <polygon points="64,118 46,146 86,118" fill="url(#wa-bubble1)"/>
        {/* Bot antenna */}
        <rect x="130" y="26" width="8" height="20" rx="4" fill="#34D399"/>
        <circle cx="134" cy="26" r="7" fill="#FDE047" filter="url(#wa-glow-bolt)"/>
        <rect x="48" y="60" width="48" height="9" rx="4.5" fill="rgba(255,255,255,0.75)"/>
        <rect x="48" y="73" width="36" height="8" rx="4" fill="rgba(255,255,255,0.5)"/>
        <rect x="48" y="84" width="60" height="8" rx="4" fill="rgba(255,255,255,0.45)"/>
      </g>
      {/* Lightning bolt — center foreground */}
      <g filter="url(#wa-glow-bolt)">
        <path d="M184 60 L162 130 L180 130 L156 220 L210 110 L188 110 L214 60Z" fill="url(#wa-bolt)"/>
        <path d="M184 60 L162 130 L180 130 L156 220" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none"/>
      </g>
      {/* Bubble top highlight */}
      <rect x="40" y="46" width="188" height="8" rx="8" fill="rgba(255,255,255,0.3)"/>
      <rect x="40" y="46" width="8" height="72" rx="4" fill="rgba(255,255,255,0.2)"/>
    </svg>
  )
}

export function MapsReviewsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="mr-bg" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#4C0519"/><stop offset="100%" stopColor="#1A0009"/>
        </radialGradient>
        <linearGradient id="mr-pin-body" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FB7185"/><stop offset="50%" stopColor="#E11D48"/><stop offset="100%" stopColor="#881337"/>
        </linearGradient>
        <linearGradient id="mr-pin-side" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#881337"/><stop offset="100%" stopColor="#9F1239"/>
        </linearGradient>
        <linearGradient id="mr-pin-top" x1="15%" y1="10%" x2="80%" y2="80%">
          <stop offset="0%" stopColor="#FF9EB5"/><stop offset="100%" stopColor="#FB7185"/>
        </linearGradient>
        <linearGradient id="mr-inner" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#FEF9C3"/><stop offset="100%" stopColor="#FDE047"/>
        </linearGradient>
        <linearGradient id="mr-star" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A"/><stop offset="100%" stopColor="#F59E0B"/>
        </linearGradient>
        <filter id="mr-drop" x="-20%" y="-20%" width="150%" height="170%">
          <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#000" floodOpacity="0.7"/>
        </filter>
        <filter id="mr-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="8" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="mr-star-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="300" height="300" rx="28" fill="url(#mr-bg)"/>
      {/* Ambient glow */}
      <circle cx="150" cy="148" r="80" fill="#E11D48" opacity="0.12" filter="url(#mr-glow)"/>
      {/* Shadow */}
      <ellipse cx="153" cy="272" rx="50" ry="9" fill="#000" opacity="0.65"/>
      {/* Pin 3D side */}
      <circle cx="156" cy="128" r="80" fill="url(#mr-pin-side)"/>
      <path d="M156 208 L122 258 L190 258Z" fill="#881337"/>
      {/* Pin main body */}
      <circle cx="152" cy="124" r="80" fill="url(#mr-pin-body)" filter="url(#mr-drop)"/>
      <path d="M152 204 L118 256 L186 256Z" fill="url(#mr-pin-body)" filter="url(#mr-drop)"/>
      {/* Pin highlight top-left */}
      <path d="M108 94 Q118 74 140 68" stroke="rgba(255,180,190,0.7)" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M96 116 Q92 130 96 148" stroke="rgba(255,180,190,0.4)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Inner circle */}
      <circle cx="152" cy="124" r="44" fill="url(#mr-inner)"/>
      <circle cx="152" cy="124" r="44" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2"/>
      <circle cx="140" cy="112" r="10" fill="rgba(255,255,255,0.45)"/>
      {/* Stars orbiting */}
      <g filter="url(#mr-star-glow)">
        {/* Star 1 — left */}
        <g transform="translate(38, 82)">
          <polygon points="14,0 17,10 28,10 19,16 22,27 14,20 6,27 9,16 0,10 11,10" fill="url(#mr-star)"/>
        </g>
        {/* Star 2 — top center */}
        <g transform="translate(136, 20) scale(0.85)">
          <polygon points="14,0 17,10 28,10 19,16 22,27 14,20 6,27 9,16 0,10 11,10" fill="url(#mr-star)"/>
        </g>
        {/* Star 3 — right */}
        <g transform="translate(236, 82) scale(0.9)">
          <polygon points="14,0 17,10 28,10 19,16 22,27 14,20 6,27 9,16 0,10 11,10" fill="url(#mr-star)"/>
        </g>
        {/* Star 4 — bottom left */}
        <g transform="translate(44, 200) scale(0.7)">
          <polygon points="14,0 17,10 28,10 19,16 22,27 14,20 6,27 9,16 0,10 11,10" fill="url(#mr-star)"/>
        </g>
        {/* Star 5 — bottom right */}
        <g transform="translate(236, 196) scale(0.75)">
          <polygon points="14,0 17,10 28,10 19,16 22,27 14,20 6,27 9,16 0,10 11,10" fill="url(#mr-star)"/>
        </g>
      </g>
      {/* Orbit ring */}
      <ellipse cx="152" cy="148" rx="118" ry="60" fill="none" stroke="#FDE047" strokeWidth="1.5" opacity="0.2" strokeDasharray="6 5" transform="rotate(-20 152 148)"/>
    </svg>
  )
}

export const SERVICE_ICONS: Record<string, React.ComponentType<IconProps>> = {
  'meta-ads': MetaAdsIcon,
  'google-ads': GoogleAdsIcon,
  'snapchat-ads': SnapchatAdsIcon,
  'tiktok-ads': TikTokAdsIcon,
  'ai-automation': AIAutomationIcon,
  'web-design': WebDesignIcon,
  'seo': SEOIcon,
  'whatsapp-bot': WhatsAppBotIcon,
  'google-maps-reviews': MapsReviewsIcon,
}
