// Shared Helix floor plan SVG used by both RoutePreviewScreen and NavigationScreen
//
// Props:
//   route         — route object with waypoints
//   locationName  — destination name shown in callout
//   userPosition  — { x, y } animated dot position (navigation mode)
//                   if null, shows static YOU ARE HERE at start (preview mode)
//   floor         — 'Ground Floor' | 'Level 1' | 'Level 2'

export default function IndoorMap({ route, locationName, userPosition, floor = 'Ground Floor' }) {
  const waypoints = route?.waypoints ?? []
  const routePath = waypoints.map(w => `${w.x},${w.y}`).join(' ')
  const start = waypoints[0]
  const end = waypoints[waypoints.length - 1]

  const isNavigating = userPosition !== null && userPosition !== undefined
  const dot = isNavigating ? userPosition : start

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 390 440"
      preserveAspectRatio="xMidYMid meet"
      style={{ display: 'block' }}
    >
      {/* ── Building shell ── */}
      <rect x="0" y="0" width="390" height="440" fill="#D6D9DE" />

      {/* ── Main vertical corridor (entrance spine) ── */}
      <rect x="165" y="20" width="60" height="360" fill="#ECEEF1" />

      {/* ── Horizontal east–west corridor ── */}
      <rect x="20" y="185" width="350" height="60" fill="#ECEEF1" />

      {/* ── TOP-LEFT: Mahony Hall ── */}
      <rect x="20" y="20" width="138" height="160" rx="4" fill="#FFFFFF" stroke="#BFC4CB" strokeWidth="1.5" />
      <rect x="78" y="178" width="22" height="9" fill="#ECEEF1" />
      <text x="89" y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937" fontFamily="Inter,sans-serif">Mahony</text>
      <text x="89" y="106" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937" fontFamily="Inter,sans-serif">Hall</text>
      <text x="89" y="126" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontFamily="Inter,sans-serif">1,300 capacity</text>

      {/* ── TOP-RIGHT: Helix Theatre ── */}
      <rect x="232" y="20" width="138" height="160" rx="4" fill="#FFFFFF" stroke="#BFC4CB" strokeWidth="1.5" />
      <rect x="290" y="178" width="22" height="9" fill="#ECEEF1" />
      <text x="301" y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937" fontFamily="Inter,sans-serif">Helix</text>
      <text x="301" y="106" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937" fontFamily="Inter,sans-serif">Theatre</text>
      <text x="301" y="126" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontFamily="Inter,sans-serif">433 seats</text>

      {/* ── BOTTOM-LEFT: Box Office ── */}
      <rect x="20" y="252" width="138" height="100" rx="4" fill="#FFFFFF" stroke="#BFC4CB" strokeWidth="1.5" />
      <rect x="78" y="245" width="22" height="9" fill="#ECEEF1" />
      <text x="89" y="302" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151" fontFamily="Inter,sans-serif">Box Office</text>

      {/* ── BOTTOM-RIGHT: Café Bar ── */}
      <rect x="232" y="252" width="138" height="100" rx="4" fill="#FFFFFF" stroke="#BFC4CB" strokeWidth="1.5" />
      <rect x="290" y="245" width="22" height="9" fill="#ECEEF1" />
      <text x="301" y="302" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151" fontFamily="Inter,sans-serif">Café Bar</text>

      {/* ── Helix Staircase landmark ── */}
      <circle cx="195" cy="215" r="24" fill="#EAF0FF" stroke="#93C5FD" strokeWidth="2" />
      <line x1="188" y1="222" x2="202" y2="222" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="185" y1="216" x2="199" y2="216" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="188" y1="210" x2="202" y2="210" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <text x="195" y="234" textAnchor="middle" fontSize="7" fontWeight="700" fill="#2563EB" fontFamily="Inter,sans-serif">STAIR</text>

      {/* ── Entrance vestibule ── */}
      <rect x="148" y="383" width="94" height="44" rx="4" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5" />
      <text x="195" y="410" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2563EB" fontFamily="Inter,sans-serif">ENTRANCE</text>

      {/* ── Floor badge ── */}
      <rect x="12" y="392" width="124" height="26" rx="6" fill="#1F2937" />
      <text x="74" y="410" textAnchor="middle" fontSize="11" fontWeight="600" fill="#FFFFFF" fontFamily="Inter,sans-serif">{floor}</text>

      {/* ── Compass ── */}
      <circle cx="368" cy="28" r="16" fill="white" opacity="0.9" />
      <text x="368" y="23" textAnchor="middle" fontSize="8" fontWeight="700" fill="#2563EB" fontFamily="Inter,sans-serif">N</text>
      <line x1="368" y1="25" x2="368" y2="36" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />

      {/* ── Route line ── */}
      {routePath && (
        <polyline
          points={routePath}
          fill="none"
          stroke="#2563EB"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
      )}

      {/* ── Destination pin + callout ── */}
      {end && (
        <>
          <rect x={end.x - 54} y={end.y - 46} width="108" height="26" rx="6" fill="#2563EB" />
          <polygon points={`${end.x - 6},${end.y - 20} ${end.x + 6},${end.y - 20} ${end.x},${end.y - 12}`} fill="#2563EB" />
          <text x={end.x} y={end.y - 28} textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="Inter,sans-serif">{locationName}</text>
          <circle cx={end.x} cy={end.y} r="10" fill="#2563EB" stroke="white" strokeWidth="2" />
          <circle cx={end.x} cy={end.y} r="4" fill="white" />
        </>
      )}

      {/* ── User position dot ── */}
      {dot && (
        <>
          {/* Pulse ring */}
          <circle cx={dot.x} cy={dot.y} r="18" fill="#2563EB" opacity="0.18">
            {isNavigating && (
              <>
                <animate attributeName="r" from="12" to="24" dur="1.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.35" to="0" dur="1.6s" repeatCount="indefinite" />
              </>
            )}
          </circle>
          {/* Dot */}
          <circle cx={dot.x} cy={dot.y} r="11" fill="#2563EB" stroke="white" strokeWidth="3" />
          {/* Inner white dot */}
          <circle cx={dot.x} cy={dot.y} r="4" fill="white" />
          {/* YOU ARE HERE label — preview only */}
          {!isNavigating && (
            <text x={dot.x} y={dot.y + 22} textAnchor="middle" fontSize="8" fontWeight="700" fill="#10B981" fontFamily="Inter,sans-serif">YOU ARE HERE</text>
          )}
        </>
      )}
    </svg>
  )
}
