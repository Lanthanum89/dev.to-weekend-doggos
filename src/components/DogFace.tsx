type EarStyle = 'floppy' | 'pointy' | 'folded' | 'droop';

interface DogFaceProps {
  color: string;
  earStyle: EarStyle;
  className?: string;
}

const INK = '#17171f';

function Ears({ style, color }: { style: EarStyle; color: string }) {
  switch (style) {
    case 'floppy':
      return (
        <>
          <path d="M28 60 Q4 78 14 118 Q22 138 46 128 L48 78 Z" fill={color} stroke={INK} strokeWidth="4" strokeLinejoin="round" />
          <path d="M172 60 Q196 78 186 118 Q178 138 154 128 L152 78 Z" fill={color} stroke={INK} strokeWidth="4" strokeLinejoin="round" />
        </>
      );
    case 'pointy':
      return (
        <>
          <path d="M40 62 L18 8 L66 52 Z" fill={color} stroke={INK} strokeWidth="4" strokeLinejoin="round" />
          <path d="M160 62 L182 8 L134 52 Z" fill={color} stroke={INK} strokeWidth="4" strokeLinejoin="round" />
        </>
      );
    case 'folded':
      return (
        <>
          <path d="M38 58 Q20 48 24 78 Q28 100 52 90 Z" fill={color} stroke={INK} strokeWidth="4" strokeLinejoin="round" />
          <path d="M162 58 Q180 48 176 78 Q172 100 148 90 Z" fill={color} stroke={INK} strokeWidth="4" strokeLinejoin="round" />
        </>
      );
    case 'droop':
    default:
      return (
        <>
          <path d="M34 64 Q10 70 16 104 Q20 122 44 112 L50 76 Z" fill={color} stroke={INK} strokeWidth="4" strokeLinejoin="round" />
          <path d="M166 64 Q190 70 184 104 Q180 122 156 112 L150 76 Z" fill={color} stroke={INK} strokeWidth="4" strokeLinejoin="round" />
        </>
      );
  }
}

export default function DogFace({ color, earStyle, className }: DogFaceProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <Ears style={earStyle} color={color} />
      {/* head */}
      <circle cx="100" cy="108" r="66" fill={color} stroke={INK} strokeWidth="5" />
      {/* cheeks blush */}
      <ellipse cx="62" cy="128" rx="14" ry="9" fill="#ff9fb0" opacity="0.7" />
      <ellipse cx="138" cy="128" rx="14" ry="9" fill="#ff9fb0" opacity="0.7" />
      {/* eyes */}
      <circle cx="76" cy="98" r="8" fill={INK} />
      <circle cx="124" cy="98" r="8" fill={INK} />
      <circle cx="73" cy="95" r="2.5" fill="#fff" />
      <circle cx="121" cy="95" r="2.5" fill="#fff" />
      {/* snout */}
      <ellipse cx="100" cy="128" rx="30" ry="22" fill="#fff" stroke={INK} strokeWidth="4" />
      {/* nose */}
      <ellipse cx="100" cy="118" rx="10" ry="7" fill={INK} />
      {/* mouth */}
      <path d="M100 128 Q100 140 88 142" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <path d="M100 128 Q100 140 112 142" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {/* tongue */}
      <path d="M96 140 Q100 156 108 140 Q104 148 96 140 Z" fill="#ff6b81" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}
