import ChessReveal from '../common/ChessReveal'

const Hero = ({ isDarkMode }) => {
  const dark = isDarkMode

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: dark ? '#020617' : '#fff',
        overflow: 'hidden',
        transition: 'background 0.3s',
      }}
    >
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 480px;
          gap: 80px;
          align-items: center;
        }
        .hero-chess { display: block; }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 80px;
            text-align: center;
          }
          /* Stack: text on top, chess card below */
          .hero-chess {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .hero-btns {
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          .hero-grid { gap: 60px; }
          .hero-btns a { padding: 11px 22px !important; font-size: 14px !important; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>

      {/* Background glows */}
      <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: 500, height: 500, background: dark ? 'rgba(37,99,235,0.07)' : 'rgba(219,234,254,0.55)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-30%', right: '-10%', width: 500, height: 500, background: dark ? 'rgba(147,51,234,0.07)' : 'rgba(243,232,255,0.55)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px 100px', width: '100%' }}>
        <div className="hero-grid">

          {/* Left – text */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: dark ? '#60a5fa' : '#2563eb', marginBottom: 16, textTransform: 'uppercase' }}>
              HELLO, I AM
            </p>
            <h1 style={{ fontSize: 'clamp(40px, 7vw, 96px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.02, color: dark ? '#fff' : '#0f172a', margin: '0 0 24px' }}>
              Himesha<br />Pathirana
            </h1>
            <p style={{ fontSize: 18, maxWidth: 480, lineHeight: 1.75, color: dark ? '#94a3b8' : '#64748b', margin: 0 }}>
              <span style={{ color: dark ? '#475569' : '#94a3b8' }}>Mobile Applicarion Dev | DevOps | UI/UX | Freelancer</span><br/>
              "I believe every great achievement is built on a strong foundation. I trust myself, give my best in everything I do, and treat failure as a lesson not a fear".
            </p>
            <div className="hero-btns" style={{ marginTop: 40, display: 'flex', gap: 16 }}>
              <a href="#projects" style={{ padding: '13px 30px', borderRadius: 8, background: dark ? '#fff' : '#0f172a', color: dark ? '#0f172a' : '#fff', fontWeight: 600, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>View Work</a>
              <a href="#contact" style={{ padding: '13px 30px', borderRadius: 8, background: 'transparent', color: dark ? '#cbd5e1' : '#334155', fontWeight: 500, fontSize: 15, border: `1px solid ${dark ? '#1e293b' : '#e2e8f0'}`, textDecoration: 'none', display: 'inline-block' }}>Get in Touch</a>
            </div>
          </div>

          {/* Right – chess reveal image (visible on all screen sizes) */}
          <div className="hero-chess">
            <ChessReveal isDarkMode={dark} />
          </div>

        </div>
      </div>

      {/* Down arrow */}
      <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', color: dark ? '#334155' : '#cbd5e1', animation: 'bounce 2s infinite' }}>
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

export default Hero