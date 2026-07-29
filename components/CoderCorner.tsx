export default function CoderCorner({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 220 180"
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* floor line */}
      <line x1="10" y1="164" x2="210" y2="164" stroke="#333333" strokeWidth="2" />

      {/* desk */}
      <rect x="86" y="118" width="118" height="8" rx="2" fill="#3c3c3c" />
      <rect x="92" y="126" width="6" height="34" fill="#2d2d30" />
      <rect x="192" y="126" width="6" height="34" fill="#2d2d30" />

      {/* monitor */}
      <g className="coder-screen-glow">
        <rect x="118" y="66" width="60" height="44" rx="3" fill="#161616" stroke="#569cd6" strokeWidth="2" />
        <rect x="124" y="72" width="30" height="3" fill="#4ec9b0" />
        <rect x="124" y="79" width="42" height="3" fill="#569cd6" />
        <rect x="124" y="86" width="24" height="3" fill="#ce9178" />
        <rect x="124" y="93" width="36" height="3" fill="#4ec9b0" />
        <rect className="coder-cursor-blink" x="124" y="100" width="6" height="3" fill="#c586c0" />
      </g>
      <rect x="142" y="110" width="12" height="8" fill="#3c3c3c" />
      <rect x="128" y="118" width="40" height="4" rx="1" fill="#3c3c3c" />

      {/* chair */}
      <rect x="60" y="86" width="8" height="60" rx="2" fill="#2d2d30" />
      <ellipse cx="64" cy="150" rx="16" ry="4" fill="#000000" opacity="0.25" />

      {/* body (side view) */}
      <g className="coder-body-bob">
        {/* torso */}
        <path
          d="M50 96 Q48 116 56 132 L84 132 Q88 116 82 98 Q68 90 50 96 Z"
          fill="#569cd6"
        />
        {/* head */}
        <circle cx="58" cy="80" r="13" fill="#e0ac69" />
        {/* hair */}
        <path d="M46 76 Q46 64 60 65 Q73 65 71 78 Q68 70 58 71 Q49 71 46 76 Z" fill="#2d2d30" />
        {/* near arm + hand, typing */}
        <g className="coder-arm-type-a">
          <path d="M80 104 Q96 108 108 116" stroke="#569cd6" strokeWidth="7" strokeLinecap="round" fill="none" />
          <circle cx="109" cy="117" r="4" fill="#e0ac69" />
        </g>
        {/* far arm + hand, typing (offset animation) */}
        <g className="coder-arm-type-b">
          <path d="M78 110 Q94 118 104 122" stroke="#4a7fa8" strokeWidth="7" strokeLinecap="round" fill="none" />
          <circle cx="105" cy="123" r="4" fill="#c99861" />
        </g>
        {/* legs */}
        <path d="M56 130 Q54 144 60 156" stroke="#252526" strokeWidth="10" strokeLinecap="round" fill="none" />
        <path d="M78 130 Q84 144 88 156" stroke="#2d2d30" strokeWidth="10" strokeLinecap="round" fill="none" />
      </g>

      {/* keyboard */}
      <rect x="98" y="122" width="26" height="6" rx="1" fill="#161616" />
    </svg>
  );
}
