import { useState, useEffect } from 'react'
import profileImg from '../../assets/images/htp.png'
import { GitHubIcon, LinkedInIcon } from './Icons'

const ChessReveal = ({ isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isTapped, setIsTapped] = useState(false)
  const dark = isDarkMode

  useEffect(() => {
    const handleMouse = (e) => {
      const rect = document.getElementById('profile-card')?.getBoundingClientRect()
      if (!rect) return
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  // Mobile: tap to reveal color, auto-revert after 2s
  const handleTap = () => {
    setIsTapped(true)
    setTimeout(() => setIsTapped(false), 2000)
  }

  const showColor = isHovered || isTapped

  return (
    <>
      <style>{`
        @keyframes rotate-gradient {
          0%   { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes tag-float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-6px) rotate(-2deg); }
        }
        @keyframes tag-float2 {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50%       { transform: translateY(-8px) rotate(2deg); }
        }

        @media (max-width: 900px) {
          #profile-card {
            width: 320px !important;
            height: 400px !important;
          }
        }

        @media (max-width: 600px) {
          #profile-card {
            width: 260px !important;
            height: 320px !important;
          }

          /* Pull tag above the card, centered — no overlap */
          .chess-tag-right {
            top: -22px !important;
            right: auto !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            animation: none !important;
            white-space: nowrap;
          }

          /* Move YRS EXP badge to bottom-left, clear of image */
          .chess-tag-left {
            top: auto !important;
            bottom: 30px !important;
            left: -8px !important;
            animation: none !important;
          }

          .chess-tag-left span:first-child {
            font-size: 16px !important;
          }
        }
      `}</style>

      <div
        id="profile-card"
        style={{
          position: 'relative',
          width: 420,
          height: 520,
          flexShrink: 0,
          animation: 'float-card 5s ease-in-out infinite',
        }}
      >
        {[
          { top: 0, left: 0, borderTop: true, borderLeft: true },
          { top: 0, right: 0, borderTop: true, borderRight: true },
          { bottom: 0, left: 0, borderBottom: true, borderLeft: true },
          { bottom: 0, right: 0, borderBottom: true, borderRight: true },
        ].map((corner, i) => (
          <div key={i} style={{
            position: 'absolute',
            ...corner,
            width: 24, height: 24,
            borderTop: corner.borderTop ? `2px solid ${dark ? '#2563eb' : '#3b82f6'}` : 'none',
            borderBottom: corner.borderBottom ? `2px solid ${dark ? '#2563eb' : '#3b82f6'}` : 'none',
            borderLeft: corner.borderLeft ? `2px solid ${dark ? '#2563eb' : '#3b82f6'}` : 'none',
            borderRight: corner.borderRight ? `2px solid ${dark ? '#2563eb' : '#3b82f6'}` : 'none',
            zIndex: 10,
          }} />
        ))}

        <div style={{
          position: 'absolute',
          top: '44%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 350, height: 350,
          borderRadius: '50%',
          background: dark ? '#020617' : '#f8fafc',
          zIndex: 1,
          transition: 'background 0.3s',
        }} />

        <div style={{
          position: 'absolute',
          top: '44%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300, height: 300,
          borderRadius: '50%',
          background: dark
            ? 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          zIndex: 2,
          filter: 'blur(16px)',
          transition: 'background 0.3s',
        }} />

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTap}
          style={{
            position: 'absolute',
            top: '44%', left: '50%',
            transform: `translate(-50%, -50%) rotateX(${-mousePos.y * 0.3}deg) rotateY(${mousePos.x * 0.3}deg)`,
            width: 310, height: 310,
            borderRadius: '50%',
            overflow: 'hidden',
            zIndex: 3,
            cursor: 'pointer',
            boxShadow: dark
              ? '0 24px 80px rgba(37,99,235,0.45), inset 0 0 40px rgba(37,99,235,0.1)'
              : '0 24px 80px rgba(59,130,246,0.3), inset 0 0 40px rgba(59,130,246,0.05)',
          }}
        >
          <img
            src={profileImg}
            alt="Profile"
            style={{
              width: '100%',
              height: '105%',
              objectFit: 'cover',
              objectPosition: '50% 8%',
              display: 'block',
              filter: showColor
                ? 'grayscale(0%) brightness(1.05) contrast(1.05)'
                : 'grayscale(100%) brightness(0.9)',
              transition: 'filter 0.7s ease',
            }}
          />
        </div>

        <div
          className="chess-tag-right"
          style={{
            position: 'absolute',
            top: 40, right: -10,
            zIndex: 8,
            background: dark ? 'rgba(15,23,42,0.92)' : 'rgba(255,255,255,0.95)',
            border: `1px solid ${dark ? 'rgba(37,99,235,0.4)' : 'rgba(59,130,246,0.3)'}`,
            borderRadius: 10,
            padding: '8px 14px',
            backdropFilter: 'blur(16px)',
            boxShadow: dark
              ? '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(37,99,235,0.1)'
              : '0 8px 32px rgba(0,0,0,0.1)',
            display: 'flex', alignItems: 'center', gap: 8,
            animation: 'tag-float 3.5s ease-in-out infinite',
          }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: '#22c55e',
            boxShadow: '0 0 8px #22c55e',
            animation: 'blink 1.5s ease-in-out infinite',
          }} />
          <span style={{
            fontSize: 12, fontWeight: 700,
            color: dark ? '#e2e8f0' : '#1e293b',
            letterSpacing: '0.02em',
          }}>Open to Opportunities</span>
        </div>

        <div
          className="chess-tag-left"
          style={{
            position: 'absolute',
            top: 110, left: -20,
            zIndex: 8,
            background: dark
              ? 'linear-gradient(135deg, rgba(37,99,235,0.9), rgba(124,58,237,0.9))'
              : 'linear-gradient(135deg, #2563eb, #7c3aed)',
            borderRadius: 10,
            padding: '10px 16px',
            boxShadow: '0 8px 32px rgba(37,99,235,0.4)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            animation: 'tag-float2 4s ease-in-out infinite',
          }}>
          <span style={{ fontSize: 22, fontWeight: 900, color: '#fff', lineHeight: 1 }}>3+</span>
          <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.85)', marginTop: 2, letterSpacing: '0.05em' }}>YRS EXP</span>
        </div>

        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 8,
          display: 'flex',
          gap: 12,
        }}>
          {[
            { Icon: GitHubIcon, href: 'https://github.com/himeshapathirana', label: 'GitHub' },
            { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/himesha-pathirana-aa3659214/', label: 'LinkedIn' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              title={label}
              style={{
                width: 46, height: 46, borderRadius: '50%',
                background: dark ? 'rgba(15,23,42,0.9)' : 'rgba(255,255,255,0.95)',
                border: `1.5px solid ${dark ? 'rgba(37,99,235,0.3)' : 'rgba(59,130,246,0.2)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: dark ? '#94a3b8' : '#475569',
                textDecoration: 'none',
                backdropFilter: 'blur(12px)',
                boxShadow: dark ? '0 4px 20px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#2563eb'
                e.currentTarget.style.borderColor = '#2563eb'
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)'
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(37,99,235,0.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = dark ? '#94a3b8' : '#475569'
                e.currentTarget.style.borderColor = dark ? 'rgba(37,99,235,0.3)' : 'rgba(59,130,246,0.2)'
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = dark ? '0 4px 20px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.08)'
              }}
            >
              <Icon />
            </a>
          ))}
        </div>

      </div>
    </>
  )
}

export default ChessReveal